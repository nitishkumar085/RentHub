"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import style from "./navbar.module.css";
import { UserContext } from "@/middlewares/authContext";

const LINKS = [
  { href: "/dashboard", text: "Dashboard" },
  { href: "/rooms", text: "Rooms" },
  { href: "/vacancy", text: "Vacancy" },
  { href: "/property", text: "Property" },
];

export default function NavBar() {
  const { islogin, setIsLogin } = useContext(UserContext);
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close the mobile menu after navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href) => pathname === href || pathname?.startsWith(href + "/");

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", { method: "POST" });
      const data = await response.json();

      alert(data.message);
      setIsLogin(false);
      setOpen(false);
      router.push("/login");
      router.refresh(); // Refresh server components
    } catch {
      alert("Could not log out. Try again.");
    }
  };

  return (
    <header className={style.navbar}>
      <Link href="/" className={style.brand}>
        <Image
          src="/images/appLogo.png"
          alt=""
          width={36}
          height={36}
          className={style.brandLogo}
          priority
        />
        <span className={style.brandText}>Rent Buddy</span>
      </Link>

      {islogin ? (
        <>
          <button
            type="button"
            className={style.toggle}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="navbar-panel"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>

          <div id="navbar-panel" className={`${style.panel} ${open ? style.panelOpen : ""}`}>
            <nav className={style.links} aria-label="Main">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${style.link} ${isActive(link.href) ? style.linkActive : ""}`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.text}
                </Link>
              ))}
            </nav>

            <div className={style.actions}>
              <button type="button" className={style.btn} onClick={handleLogout}>
                Logout
              </button>
              <Link href="/signup" className={`${style.btn} ${style.btnPrimary}`}>
                <span aria-hidden="true">+</span> Add renter
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className={style.guestActions}>
          <Link href="/login" className={style.btn}>
            Login
          </Link>
        </div>
      )}
    </header>
  );
}