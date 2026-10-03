"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cv, navItems, profile, socials } from "../lib/content";
import { ArrowRightIcon, CloseIcon, GitHubIcon, LinkedInIcon, MailIcon, MenuIcon } from "./icons";

const HEADER_OFFSET = 64;
const sectionIds = navItems.map((item) => item.href.slice(1));

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return active;
}

function useScrolledPast(id: string) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;

    const update = () => {
      setPast(el.getBoundingClientRect().bottom <= HEADER_OFFSET);
    };

    update();
    const observer = new IntersectionObserver(update, {
      threshold: [0, 0.01, 1],
      rootMargin: `-${HEADER_OFFSET}px 0px 0px 0px`,
    });
    observer.observe(el);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [id]);

  return past;
}

function isDeferred(
  item: (typeof navItems)[number],
): item is (typeof navItems)[number] & { after: "hero-links" } {
  return "after" in item && item.after === "hero-links";
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const showName = useScrolledPast("hero-name");
  const showHeroLinks = useScrolledPast("hero-links");
  const activeSection = useActiveSection(sectionIds);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = () => desktop.matches && setOpen(false);

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);

    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  const deferredItems = navItems.filter(isDeferred);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 sm:px-8">
        <div className="flex min-w-0 items-center">
          <span
            className={`nav-reveal nav-reveal-name ${showName || open ? "is-open" : ""} ${ready ? "is-ready" : ""}`}
          >
            <span className="nav-reveal-inner">
              <a
                href="#top"
                className="text-[13px] font-medium tracking-[0.04em] text-foreground"
              >
                {profile.name}
              </a>
            </span>
          </span>
          <span className="sr-only">{profile.name}</span>
        </div>

        <nav className="hidden items-center text-[13px] text-muted lg:flex">
          {navItems.map((item, index) => {
            const deferred = isDeferred(item);
            const stagger = deferred
              ? deferredItems.findIndex((entry) => entry.href === item.href)
              : -1;
            const link = (
              <a
                href={item.href}
                className="link-line whitespace-nowrap"
                tabIndex={deferred && !showHeroLinks ? -1 : undefined}
                aria-hidden={deferred && !showHeroLinks ? true : undefined}
              >
                {item.label}
              </a>
            );

            if (!deferred) {
              return (
                <span key={item.href} className={index === 0 ? "" : "ml-5"}>
                  {link}
                </span>
              );
            }

            return (
              <span
                key={item.href}
                className={`nav-reveal ${showHeroLinks ? "is-open" : ""} ${ready ? "is-ready" : ""}`}
                style={{ "--nav-delay": `${stagger * 80}ms` } as CSSProperties}
              >
                <span className="nav-reveal-inner">{link}</span>
              </span>
            );
          })}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex p-1 text-foreground transition-transform duration-200 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <div id="mobile-nav" className="mobile-menu lg:hidden" data-open={open} inert={!open}>
        <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col px-6 pb-8 pt-4 sm:px-8">
          <nav aria-label="Sections">
            <ol className="mobile-menu-list">
              {navItems.map((item, index) => (
                <li
                  key={item.href}
                  className="mobile-menu-item"
                  style={{ "--i": index } as CSSProperties}
                >
                  <a
                    href={item.href}
                    className="mobile-menu-link"
                    aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span className="mobile-menu-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="mobile-menu-label">{item.label}</span>
                    <ArrowRightIcon className="mobile-menu-arrow" />
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div
            className="mobile-menu-item mt-auto pt-8"
            style={{ "--i": navItems.length } as CSSProperties}
          >
            <p className="section-label">Get in touch</p>
            <a
              href={cv.href}
              download={cv.filename}
              className="mt-4 flex h-12 items-center justify-center rounded-full bg-accent text-[14px] font-medium text-background transition-opacity hover:opacity-90"
            >
              {cv.label}
            </a>
            <div className="mt-3 grid grid-cols-3 gap-3 text-[13px] text-foreground">
              <a href={`mailto:${profile.email}`} className="mobile-menu-social">
                <MailIcon className="h-4 w-4" />
                Email
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-menu-social"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-menu-social"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
