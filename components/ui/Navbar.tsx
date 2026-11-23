"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/lib/portfolio-data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onResize = () => { if (window.innerWidth >= 900) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  return (
    <header className="site-header" ref={headerRef}>
      <div className="container nav-inner">
        <Link href="/#home" aria-label="Pranay Dumbhare — home" className="brand" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 64 48" fill="none" focusable="false">
              <path d="M6 37V11h10a8 8 0 0 1 0 16H6M31 11h7a13 13 0 0 1 0 26h-7V11Z" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="58" cy="35" r="3" fill="#234ed8" />
            </svg>
          </span>
          <span className="brand-name">Pranay Dumbhare</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigationLinks.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === "/" && active === link.href.split("#")[1] ? "location" : undefined}>{link.label}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link className="nav-resume" href="/resume" aria-current={pathname === "/resume" ? "page" : undefined}>Resume <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <button ref={toggleRef} className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}</button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== toggleRef.current) closeMenu(); }}>
        {navigationLinks.map((link) => <Link href={link.href} key={link.href} onClick={closeMenu}>{link.label}<ArrowUpRight size={17} aria-hidden="true" /></Link>)}
        <Link href="/#contact" onClick={closeMenu}>Get in touch<ArrowUpRight size={17} aria-hidden="true" /></Link>
      </nav>
    </header>
  );
}
