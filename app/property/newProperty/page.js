'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './newProperty.module.css';
import Link from 'next/link';

const PROPERTY_TYPES = ['Apartment', 'Independent house', 'Villa', 'Commercial space', 'PG / Hostel'];
const DUE_DAYS = ['1', '5', '10', '15'];
const FURNISHING = ['Unfurnished', 'Semi-furnished', 'Fully furnished'];
const STATUSES = ['Vacant', 'Occupied', 'Under maintenance'];
const AMENITIES = [
  'Parking', 'Lift', 'Power backup', 'Security',
  'Gym', 'Swimming pool', 'Pet friendly', 'Water supply 24/7',
];
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;

const INITIAL = {
  name: '', type: PROPERTY_TYPES[0], address: '', city: '', state: '', postalCode: '',
  units: '1', rent: '', deposit: '', maintenance: '', dueDay: '1', lateFeeDays: '5',
  availableFrom: '', bedrooms: '2', bathrooms: '1', area: '', furnishing: FURNISHING[0],
  amenities: [], notes: '', ownerName: '', ownerPhone: '', manager: '', status: STATUSES[0],
};

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter a property name.';
  if (!v.address.trim()) e.address = 'Enter the street address.';
  if (!v.city.trim()) e.city = 'Enter the city.';
  if (!v.state.trim()) e.state = 'Enter the state.';
  if (!v.postalCode.trim()) e.postalCode = 'Enter the postal code.';
  if (!(Number(v.units) >= 1)) e.units = 'Units must be at least 1.';
  if (!(Number(v.rent) > 0)) e.rent = 'Enter a monthly rent greater than 0.';
  if (v.deposit !== '' && Number(v.deposit) < 0) e.deposit = 'Deposit cannot be negative.';
  if (v.ownerPhone && !/^[+\d][\d\s-]{6,}$/.test(v.ownerPhone)) e.ownerPhone = 'Enter a valid phone number.';
  return e;
}

function Field({ id, label, hint, error, wide, children }) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined;
  return (
    <div className={`${styles.field} ${wide ? styles.wide : ''}`}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      {children({ id, 'aria-describedby': describedBy, 'aria-invalid': error ? true : undefined })}
      {hint && <span id={`${id}-hint`} className={styles.hint}>{hint}</span>}
      {error && <span id={`${id}-error`} className={styles.error} role="alert">{error}</span>}
    </div>
  );
}

export default function NewProperty({ onSubmit, onCancel, onSaveDraft, currency = '₹' }) {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [photos, setPhotos] = useState([]); // { id, file, url }
  const [photoError, setPhotoError] = useState('');
  const [dragging, setDragging] = useState(false);
  const [saving, setSaving] = useState(false);
  const formRef = useRef(null);
  const fileRef = useRef(null);
  const photosRef = useRef(photos);
  photosRef.current = photos;

  // release object URLs on unmount
  useEffect(() => () => photosRef.current.forEach((p) => URL.revokeObjectURL(p.url)), []);

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));
  const input = (key, extra = {}) => (a11y) => (
    <input className={styles.input} value={values[key]} onChange={set(key)} {...a11y} {...extra} />
  );
  const select = (key, options) => (a11y) => (
    <select className={styles.input} value={values[key]} onChange={set(key)} {...a11y}>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );

  const toggleAmenity = (name) =>
    setValues((v) => ({
      ...v,
      amenities: v.amenities.includes(name) ? v.amenities.filter((a) => a !== name) : [...v.amenities, name],
    }));

  const addPhotos = (fileList) => {
    const next = [];
    let problem = '';
    Array.from(fileList).forEach((file) => {
      if (!/^image\/(jpeg|png)$/.test(file.type)) problem = 'Only JPG or PNG images are allowed.';
      else if (file.size > MAX_PHOTO_BYTES) problem = 'Each photo must be 5 MB or smaller.';
      else next.push({ id: `${file.name}-${file.size}-${file.lastModified}`, file, url: URL.createObjectURL(file) });
    });
    setPhotoError(problem);
    setPhotos((prev) => {
      const seen = new Set(prev.map((p) => p.id));
      return [...prev, ...next.filter((p) => !seen.has(p.id))];
    });
  };

  const removePhoto = (id) =>
    setPhotos((prev) => {
      prev.filter((p) => p.id === id).forEach((p) => URL.revokeObjectURL(p.url));
      return prev.filter((p) => p.id !== id);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstKey = Object.keys(found)[0];
    if (firstKey) {
      formRef.current?.querySelector(`[id="${firstKey}"]`)?.focus();
      return;
    }
    setSaving(true);
    try {
      await onSubmit?.({ ...values, photos: photos.map((p) => p.file) });
    } finally {
      setSaving(false);
    }
  };

  return (
    <form ref={formRef} className={styles.root} onSubmit={handleSubmit} noValidate>
      <header className={styles.header}>
        <p className={styles.crumbs}>Properties / Add property</p>
        <h1 className={styles.title}>Add a new property</h1>
      </header>

      <section className={styles.card} aria-labelledby="sec-details">
        <h2 id="sec-details" className={styles.cardTitle}>Property details</h2>
        <p className={styles.sub}>Basic information about the building or unit you are listing.</p>
        <div className={styles.grid}>
          <Field id="name" label="Property name" error={errors.name}>{input('name', { placeholder: 'e.g. Maple Residency', autoComplete: 'off' })}</Field>
          <Field id="type" label="Property type">{select('type', PROPERTY_TYPES)}</Field>
          <Field id="address" label="Street address" error={errors.address} wide>{input('address', { placeholder: 'Building, street, landmark', autoComplete: 'street-address' })}</Field>
          <Field id="city" label="City" error={errors.city}>{input('city')}</Field>
          <Field id="state" label="State" error={errors.state}>{input('state')}</Field>
          <Field id="postalCode" label="Postal code" error={errors.postalCode}>{input('postalCode', { inputMode: 'numeric', autoComplete: 'postal-code' })}</Field>
          <Field id="units" label="Number of units" hint="Use 1 for a single rentable unit." error={errors.units}>{input('units', { type: 'number', min: 1 })}</Field>
        </div>
      </section>

      <section className={styles.card} aria-labelledby="sec-rent">
        <h2 id="sec-rent" className={styles.cardTitle}>Rent &amp; deposit</h2>
        <p className={styles.sub}>Default terms. You can change them for each lease.</p>
        <div className={styles.grid}>
          <Field id="rent" label={`Monthly rent (${currency})`} error={errors.rent}>{input('rent', { inputMode: 'numeric', placeholder: '0' })}</Field>
          <Field id="deposit" label={`Security deposit (${currency})`} error={errors.deposit}>{input('deposit', { inputMode: 'numeric', placeholder: '0' })}</Field>
          <Field id="maintenance" label={`Maintenance charge (${currency} / month)`}>{input('maintenance', { inputMode: 'numeric', placeholder: '0' })}</Field>
          <Field id="dueDay" label="Rent due on day">
            {(a11y) => (
              <select className={styles.input} value={values.dueDay} onChange={set('dueDay')} {...a11y}>
                {DUE_DAYS.map((d) => <option key={d} value={d}>{d}{d === '1' ? 'st' : 'th'} of the month</option>)}
              </select>
            )}
          </Field>
          <Field id="lateFeeDays" label="Late fee after (days)">{input('lateFeeDays', { type: 'number', min: 0 })}</Field>
          <Field id="availableFrom" label="Available from">{input('availableFrom', { type: 'date' })}</Field>
        </div>
      </section>

      <section className={styles.card} aria-labelledby="sec-features">
        <h2 id="sec-features" className={styles.cardTitle}>Features &amp; amenities</h2>
        <p className={styles.sub}>Tell tenants and your team what the property offers.</p>
        <div className={styles.grid}>
          <Field id="bedrooms" label="Bedrooms">{input('bedrooms', { type: 'number', min: 0 })}</Field>
          <Field id="bathrooms" label="Bathrooms">{input('bathrooms', { type: 'number', min: 0 })}</Field>
          <Field id="area" label="Area (sq ft)">{input('area', { inputMode: 'numeric' })}</Field>
          <Field id="furnishing" label="Furnishing">{select('furnishing', FURNISHING)}</Field>
        </div>
        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Amenities</legend>
          <div className={styles.chips}>
            {AMENITIES.map((a) => (
              <label key={a} className={styles.chip}>
                <input type="checkbox" checked={values.amenities.includes(a)} onChange={() => toggleAmenity(a)} />
                {a}
              </label>
            ))}
          </div>
        </fieldset>
        <div className={styles.grid} style={{ marginTop: 22 }}>
          <Field id="notes" label="Description / notes" wide>
            {(a11y) => (
              <textarea className={`${styles.input} ${styles.textarea}`} value={values.notes} onChange={set('notes')}
                placeholder="Anything tenants or staff should know" {...a11y} />
            )}
          </Field>
        </div>
      </section>

      <section className={styles.card} aria-labelledby="sec-photos">
        <h2 id="sec-photos" className={styles.cardTitle}>Photos &amp; owner</h2>
        <p className={styles.sub}>Add photos and the person responsible for this property.</p>
        <div
          className={`${styles.drop} ${dragging ? styles.dropActive : ''}`}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); addPhotos(e.dataTransfer.files); }}
        >
          <strong>Drag photos here</strong>
          <span className={styles.hint}>JPG or PNG, up to 5 MB each</span>
          <button type="button" className={styles.btn} onClick={() => fileRef.current?.click()}>Browse files</button>
          <input ref={fileRef} type="file" accept="image/jpeg,image/png" multiple hidden
            onChange={(e) => { addPhotos(e.target.files); e.target.value = ''; }} />
        </div>
        {photoError && <p className={styles.error} role="alert">{photoError}</p>}
        {photos.length > 0 && (
          <ul className={styles.thumbs}>
            {photos.map((p) => (
              <li key={p.id} className={styles.thumb}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.url} alt={p.file.name} />
                <button type="button" className={styles.remove} onClick={() => removePhoto(p.id)} aria-label={`Remove ${p.file.name}`}>×</button>
              </li>
            ))}
          </ul>
        )}
        <div className={styles.grid} style={{ marginTop: 22 }}>
          <Field id="ownerName" label="Owner name">{input('ownerName', { autoComplete: 'off' })}</Field>
          <Field id="ownerPhone" label="Owner phone" error={errors.ownerPhone}>{input('ownerPhone', { type: 'tel' })}</Field>
          <Field id="manager" label="Property manager">
            {(a11y) => (
              <select className={styles.input} value={values.manager} onChange={set('manager')} {...a11y}>
                <option value="">Assign later</option>
                <option value="me">Me</option>
              </select>
            )}
          </Field>
          <Field id="status" label="Status">{select('status', STATUSES)}</Field>
        </div>
      </section>

      <div className={styles.actions}>
        <button type="button" className={styles.btn} onClick={onCancel}>Cancel</button>
        <button type="button" className={styles.btn} onClick={() => onSaveDraft?.(values)}>Save as draft</button>
        <button type="submit" className={`${styles.btn} ${styles.primary}`} disabled={saving}>
          {saving ? 'Adding…' : 'Add property'}
        </button>
      </div>
    </form>
  );
}