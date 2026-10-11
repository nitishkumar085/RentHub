"use client";

import { useState } from "react";
import { useParams } from 'next/navigation'
import {
  Home, ChevronRight, Pencil, MoreVertical, Users, User, DollarSign,
  MapPin, Hash, Layers, CalendarDays, Mail, Phone, LayoutGrid,
  BedDouble, Bath, Maximize, Download, FileText, Wrench, Building2,
} from "lucide-react";
import styles from "./dashboard.module.css";

const defaultProperty = {
  name: "Maple House",
  status: "Active",
  id: "MH-002",
  type: "House",
  rent: 2850,
  totalUnits: 1, // total no. of rooms.
  occupied: 1, // no. of rooms ocupied
  address: ["456 Maple Ave.,", "San Jose, CA 95126"],
  addedDate: "Jun 15, 2025",
  image: "/images/icons/demohouse1.png", // replace with your image
  mapImage: "/images/icons/demohouse1.png",      // replace with your map image/embed
  unit: { name: "MH-002 / Unit 1", rent: 2850, beds: 1, baths: 1, sqft: 650 },
  tenant: {
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    phone: "+1 (408) 555-0123",
    leaseStart: "Jun 15, 2025",
    leaseEnd: "Jun 14, 2026",
  },
  payments: [
    { date: "Jun 1, 2025", amount: 2850, status: "Paid", receipt: "#RCP-001" },
    { date: "May 1, 2025", amount: 2850, status: "Paid", receipt: "#RCP-002" },
    { date: "Apr 1, 2025", amount: 2850, status: "Paid", receipt: "#RCP-003" },
  ],
  maintenance: [],
};

const tabs = ["Overview", "Units & Rooms", "Tenants", "Payments", "Maintenance"];
const money = (n) => `$${n.toLocaleString("en-US")}`;

export default function PropertyDashboard({ property = defaultProperty }) {
  const {name} = useParams()
  const newName = name.split("%20").join(" ")
  const p = property;
  const [tab, setTab] = useState("Overview");
  const vacant = p.totalUnits - p.occupied;
  const occupancy = p.totalUnits ? Math.round((p.occupied / p.totalUnits) * 100) : 0;

  const stats = [
    { label: "Total Units", value: p.totalUnits, icon: Home, tone: "blue" },
    { label: "Occupied", value: p.occupied, icon: Users, tone: "green" },
    { label: "Vacant", value: vacant, icon: User, tone: "purple" },
    { label: "Monthly Income", value: money(p.rent), icon: DollarSign, tone: "sky" },
  ];

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Home size={16} className={styles.crumbHome} />
        <ChevronRight size={12} />
        <a href="/property">Properties</a>
        <span>/</span>
        <span className={styles.crumbCurrent}>{ newName}</span>
      </nav>

      <header className={styles.header}>
        <div>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>{ newName}</h1>
            <span className={styles.badgeActive}>
              <i className={styles.dot} /> {p.status}
            </span>
          </div>
          <p className={styles.meta}>{p.id} <b>•</b> {p.type}</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.btnPrimary}><Pencil size={15} /> Edit Property</button>
          <button className={styles.btnGhost}><MoreVertical size={15} /> More</button>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.photo}>
          <img src={p.image} alt={ newName} />
        </div>

        <div className={`${styles.card} ${styles.summary}`}>
          <div className={styles.kpis}>
            <div>
              <span className={styles.label}>Monthly Rent</span>
              <strong className={styles.bigRent}>{money(p.rent)}</strong>
            </div>
            <div>
              <span className={styles.label}>Units</span>
              <strong className={styles.kpiValue}>{p.occupied} / {p.totalUnits}</strong>
              <span className={styles.muted}>Total / Occupied</span>
            </div>
            <div>
              <span className={styles.label}>Occupancy</span>
              <strong className={styles.kpiValue}>{occupancy}%</strong>
              <span className={styles.okText}><i className={styles.dot} /> Occupied</span>
            </div>
          </div>

          <div className={styles.summaryBody}>
            <dl className={styles.facts}>
              <div><dt><Home size={18} /> Property Type</dt><dd>{p.type}</dd></div>
              <div><dt><Hash size={18} /> Property ID</dt><dd>{p.id}</dd></div>
              <div>
                <dt><MapPin size={18} /> Address</dt>
                <dd>{p.address.map((l) => <span key={l}>{l}<br /></span>)}</dd>
              </div>
            </dl>
            <div className={styles.map} style={{ backgroundImage: `url(${p.mapImage})` }}>
              <MapPin className={styles.pin} size={28} fill="#ef4444" color="#ef4444" />
              <span className={styles.mapLabel}>{p.address[0].replace(",", "")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        {stats.map(({ label, value, icon: Icon, tone }) => (
          <div key={label} className={`${styles.card} ${styles.stat}`}>
            <span className={`${styles.statIcon} ${styles[tone]}`}><Icon size={24} /></span>
            <div>
              <span className={styles.label}>{label}</span>
              <strong className={styles.statValue}>{value}</strong>
            </div>
          </div>
        ))}
      </section>

      <div className={styles.tabs} role="tablist">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            className={`${styles.tab} ${tab === t ? styles.tabActive : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        <section className={`${styles.card} ${styles.info}`}>
          <h2 className={styles.cardTitle}><Home size={22} /> Property Information</h2>
          <div className={styles.infoGrid}>
            <InfoItem icon={MapPin} label="Address">
              {p.address.map((l) => <span key={l}>{l}<br /></span>)}
            </InfoItem>
            <InfoItem icon={Home} label="Property Type">{p.type}</InfoItem>
            <InfoItem icon={Layers} label="Total Units">{p.totalUnits}</InfoItem>
            <InfoItem icon={CalendarDays} label="Added Date">{p.addedDate}</InfoItem>
          </div>
        </section>

        <section className={`${styles.card} ${styles.units}`}>
          <h2 className={styles.cardTitle}><LayoutGrid size={22} /> Unit Overview</h2>
          <div className={styles.unit}>
            <img className={styles.unitImg} src={p.image} alt="" />
            <div className={styles.unitBody}>
              <h3>{p.unit.name}</h3>
              <p className={styles.unitRent}>{money(p.unit.rent)} / mo</p>
              <ul className={styles.specs}>
                <li><BedDouble size={16} /> {p.unit.beds} Bed</li>
                <li><Bath size={16} /> {p.unit.baths} Bath</li>
                <li><Maximize size={16} /> {p.unit.sqft} sq ft</li>
              </ul>
            </div>
            <div className={styles.unitSide}>
              <span className={styles.badgeOccupied}>Occupied</span>
              <button className={styles.btnOutline}>View Unit <ChevronRight size={14} /></button>
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.tenant}`}>
          <h2 className={styles.cardTitle}><User size={22} /> Current Tenant</h2>
          <div className={styles.tenantBody}>
            <div className={styles.person}>
              <span className={styles.avatar}><User size={40} /></span>
              <div>
                <h3>{p.tenant.name}</h3>
                <p><Mail size={15} /> {p.tenant.email}</p>
                <p><Phone size={15} /> {p.tenant.phone}</p>
              </div>
            </div>
            <div className={styles.lease}>
              <div><CalendarDays size={16} /><span><small>Lease Start</small>{p.tenant.leaseStart}</span></div>
              <div><CalendarDays size={16} /><span><small>Lease End</small>{p.tenant.leaseEnd}</span></div>
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.payments}`}>
          <div className={styles.cardHead}>
            <h2 className={styles.cardTitle}><FileText size={22} /> Recent Rent Payments</h2>
            <button className={styles.btnLink}>View All <ChevronRight size={13} /></button>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr><th>Date</th><th>Amount</th><th>Status</th><th>Receipt</th><th /></tr>
              </thead>
              <tbody>
                {p.payments.map((r) => (
                  <tr key={r.receipt}>
                    <td>{r.date}</td>
                    <td>{money(r.amount)}</td>
                    <td><span className={styles.badgePaid}><i className={styles.dot} /> {r.status}</span></td>
                    <td className={styles.receipt}>{r.receipt}</td>
                    <td><button className={styles.iconBtn} aria-label={`Download ${r.receipt}`}><Download size={16} /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={`${styles.card} ${styles.maint}`}>
          <div className={styles.cardHead}>
            <h2 className={styles.cardTitle}><Wrench size={22} /> Recent Maintenance</h2>
            <button className={styles.btnLink}>View All <ChevronRight size={13} /></button>
          </div>
          {p.maintenance.length === 0 ? (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}><Wrench size={30} /></span>
              <strong>No open maintenance requests</strong>
              <p>All maintenance issues are resolved<br />or none have been reported yet.</p>
            </div>
          ) : (
            <ul className={styles.maintList}>
              {p.maintenance.map((m) => <li key={m.id}>{m.title}</li>)}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

function InfoItem({ icon: Icon, label, children }) {
  return (
    <div className={styles.infoItem}>
      <Icon size={18} />
      <div>
        <small>{label}</small>
        <p>{children}</p>
      </div>
    </div>
  );
}