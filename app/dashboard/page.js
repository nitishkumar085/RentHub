"use client";

import { useMemo, useState } from "react";
import {
  Home,
  Building2,
  Users,
  FileText,
  DollarSign,
  Receipt,
  Wrench,
  BarChart3,
  MessageSquare,
  Folder,
  Settings,
  Search,
  Bell,
  HelpCircle,
  ChevronDown,
  Upload,
  Plus,
  MapPin,
  MoreVertical,
  LayoutGrid,
  List,
  SlidersHorizontal,
  Headphones,
} from "lucide-react";
import styles from "./dashboard.module.css";

const NAV_ITEMS = [
  { label: "Dashboard", icon: Home },
  { label: "Properties", icon: Building2, active: true },
  { label: "Tenants", icon: Users },
  { label: "Leases", icon: FileText },
  { label: "Rent Collection", icon: DollarSign },
  { label: "Expenses", icon: Receipt },
  { label: "Maintenance", icon: Wrench },
  { label: "Reports", icon: BarChart3 },
  { label: "Messages", icon: MessageSquare },
  { label: "Documents", icon: Folder },
  { label: "Settings", icon: Settings },
];

const PROPERTIES = [
  {
    id: "GV-001",
    name: "Green View Apartments",
    type: "Apartment",
    status: "Active",
    address: "123 Green St.",
    city: "San Francisco, CA 94107",
    unitsOccupied: 24,
    unitsTotal: 30,
    occupiedPct: 80,
    rent: 24580,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  },
  {
    id: "MH-002",
    name: "Maple House",
    type: "House",
    status: "Active",
    address: "456 Maple Ave.",
    city: "San Jose, CA 95126",
    unitsOccupied: 1,
    unitsTotal: 1,
    occupiedPct: 100,
    rent: 2850,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
  },
  {
    id: "OV-003",
    name: "Ocean View Condos",
    type: "Condo",
    status: "Active",
    address: "789 Ocean Dr.",
    city: "Santa Monica, CA 90401",
    unitsOccupied: 15,
    unitsTotal: 20,
    occupiedPct: 75,
    rent: 18750,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
  },
  {
    id: "PT-004",
    name: "Pine Townhomes",
    type: "Townhouse",
    status: "Maintenance",
    address: "321 Pine Rd.",
    city: "Daly City, CA 94014",
    unitsOccupied: 8,
    unitsTotal: 10,
    occupiedPct: 60,
    rent: 9600,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
  {
    id: "DO-005",
    name: "Downtown Office Space",
    type: "Commercial",
    status: "Inactive",
    address: "100 Market St.",
    city: "San Francisco, CA 94105",
    unitsOccupied: 3,
    unitsTotal: 5,
    occupiedPct: 40,
    rent: 7200,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    id: "SA-006",
    name: "Sunset Apartments",
    type: "Apartment",
    status: "Active",
    address: "550 Sunset Blvd.",
    city: "Los Angeles, CA 90028",
    unitsOccupied: 18,
    unitsTotal: 25,
    occupiedPct: 72,
    rent: 19800,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  },
  {
    id: "OVH-007",
    name: "Oak Valley House",
    type: "House",
    status: "Active",
    address: "88 Oak Valley Dr.",
    city: "Pleasanton, CA 94566",
    unitsOccupied: 1,
    unitsTotal: 1,
    occupiedPct: 100,
    rent: 3200,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
  },
  {
    id: "RW-008",
    name: "Riverwalk Condos",
    type: "Condo",
    status: "Active",
    address: "200 Riverwalk Way",
    city: "Sacramento, CA 95814",
    unitsOccupied: 22,
    unitsTotal: 30,
    occupiedPct: 73,
    rent: 23400,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
  },
  {
    id: "CP-009",
    name: "Central Plaza Retail",
    type: "Commercial",
    status: "Active",
    address: "600 Central Ave.",
    city: "Fresno, CA 93721",
    unitsOccupied: 6,
    unitsTotal: 8,
    occupiedPct: 75,
    rent: 11600,
    image:
      "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=600&q=80",
  },
  {
    id: "ST-010",
    name: "Skyline Towers",
    type: "Apartment",
    status: "Inactive",
    address: "900 Skyline Dr.",
    city: "San Diego, CA 92101",
    unitsOccupied: 0,
    unitsTotal: 40,
    occupiedPct: 0,
    rent: 0,
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80",
  },
];

const STATUS_CLASS = {
  Active: styles.badgeActive,
  Maintenance: styles.badgeMaintenance,
  Inactive: styles.badgeInactive,
};

function formatCurrency(value) {
  return `$${value.toLocaleString("en-US")}`;
}

function PropertyCard({ property }) {
  const occupancyClass =
    property.occupiedPct === 0
      ? styles.occupancyZero
      : property.occupiedPct < 60
      ? styles.occupancyLow
      : styles.occupancyGood;

  return (
    <article className={styles.card}>
      <div className={styles.cardImageWrap}>
        <img
          src={property.image}
          alt={property.name}
          className={styles.cardImage}
          loading="lazy"
        />
        <span className={`${styles.badge} ${STATUS_CLASS[property.status]}`}>
          {property.status}
        </span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardTitleRow}>
          <h3 className={styles.cardTitle}>{property.name}</h3>
        </div>

        <div className={styles.cardMetaRow}>
          <span className={styles.cardId}>{property.id}</span>
          <span className={styles.typeTag}>{property.type}</span>
        </div>

        <div className={styles.cardAddress}>
          <MapPin size={14} className={styles.addressIcon} />
          <span>
            {property.address}
            <br />
            {property.city}
          </span>
        </div>

        <div className={styles.cardStatsRow}>
          <div className={styles.statBlock}>
            <span className={styles.statValue}>
              {property.unitsOccupied} / {property.unitsTotal} units
            </span>
            <span className={`${styles.statSub} ${occupancyClass}`}>
              {property.occupiedPct}% occupied
            </span>
          </div>
          <div className={`${styles.statBlock} ${styles.statBlockRight}`}>
            <span className={styles.statValue}>
              {formatCurrency(property.rent)}
            </span>
            <span className={styles.statSub}>Monthly Rent</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={styles.moreButton}
        aria-label={`More actions for ${property.name}`}
      >
        <MoreVertical size={18} />
      </button>
    </article>
  );
}

export default function Dashboard() {
  const [view, setView] = useState("grid");
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!query.trim()) return PROPERTIES;
    const q = query.toLowerCase();
    return PROPERTIES.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className={styles.app}>
      {/* Topbar */}
      <header className={styles.topbar}>
        <div className={styles.topbarLeft}>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Toggle navigation"
            onClick={() => setSidebarOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={styles.brand}>
            <Home size={22} className={styles.brandIcon} />
            <span className={styles.brandName}>
              Rent<span className={styles.brandAccent}>Manage</span>
            </span>
          </div>
        </div>

        <div className={styles.topbarSearch}>
          <Search size={16} className={styles.topbarSearchIcon} />
          <input
            type="text"
            placeholder="Search properties, locations..."
            className={styles.topbarSearchInput}
          />
          <kbd className={styles.kbd}>⌘K</kbd>
        </div>

        <div className={styles.topbarRight}>
          <button type="button" className={styles.iconButton} aria-label="Notifications">
            <Bell size={20} />
            <span className={styles.notificationDot}>3</span>
          </button>
          <button type="button" className={styles.iconButton} aria-label="Help">
            <HelpCircle size={20} />
          </button>
          <div className={styles.userChip}>
            <img
              src="https://i.pravatar.cc/64?img=12"
              alt="John Doe"
              className={styles.avatar}
            />
            <div className={styles.userText}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.userRole}>Property Manager</span>
            </div>
            <ChevronDown size={16} className={styles.userChevron} />
          </div>
        </div>
      </header>

      <div className={styles.body}>
        {/* Sidebar */}
        <aside
          className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}
        >
          <nav className={styles.nav}>
            {NAV_ITEMS.map(({ label, icon: Icon, active }) => (
              <a
                key={label}
                href="#"
                className={`${styles.navItem} ${active ? styles.navItemActive : ""}`}
              >
                <Icon size={18} className={styles.navIcon} />
                <span>{label}</span>
              </a>
            ))}
          </nav>

          <div className={styles.helpCard}>
            <div className={styles.helpIconWrap}>
              <Headphones size={20} />
            </div>
            <div>
              <p className={styles.helpTitle}>Need Help?</p>
              <p className={styles.helpSubtitle}>Contact Support</p>
            </div>
          </div>
        </aside>

        {sidebarOpen && (
          <div
            className={styles.sidebarOverlay}
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className={styles.main}>
          <div className={styles.pageHeader}>
            <div>
              <h1 className={styles.pageTitle}>Properties</h1>
              <p className={styles.pageSubtitle}>
                Manage all your properties in one place.
              </p>
            </div>
            <div className={styles.pageHeaderActions}>
              <button type="button" className={styles.secondaryButton}>
                <Upload size={16} />
                Import Properties
              </button>
              <button type="button" className={styles.primaryButton}>
                <Plus size={16} />
                Add Property
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className={styles.filterBar}>
            <div className={styles.filterSearch}>
              <Search size={16} className={styles.filterSearchIcon} />
              <input
                type="text"
                placeholder="Search properties..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.filterSearchInput}
              />
            </div>

            <button type="button" className={styles.filterSelect}>
              All Status <ChevronDown size={14} />
            </button>
            <button type="button" className={styles.filterSelect}>
              All Property Types <ChevronDown size={14} />
            </button>
            <button type="button" className={styles.filterSelect}>
              All Cities <ChevronDown size={14} />
            </button>
            <button type="button" className={styles.filterButton}>
              <SlidersHorizontal size={15} />
              Filters
            </button>

            <div className={styles.filterBarSpacer} />

            <button type="button" className={styles.sortSelect}>
              Sort by: Newest <ChevronDown size={14} />
            </button>

            <div className={styles.viewToggle}>
              <button
                type="button"
                aria-label="Grid view"
                className={`${styles.viewToggleBtn} ${
                  view === "grid" ? styles.viewToggleBtnActive : ""
                }`}
                onClick={() => setView("grid")}
              >
                <LayoutGrid size={16} />
              </button>
              <button
                type="button"
                aria-label="List view"
                className={`${styles.viewToggleBtn} ${
                  view === "list" ? styles.viewToggleBtnActive : ""
                }`}
                onClick={() => setView("list")}
              >
                <List size={16} />
              </button>
            </div>
          </div>

          <p className={styles.resultsCount}>
            Showing 1 to {filtered.length} of {PROPERTIES.length} properties
          </p>

          <div
            className={
              view === "grid" ? styles.cardGrid : styles.cardListWrap
            }
          >
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}