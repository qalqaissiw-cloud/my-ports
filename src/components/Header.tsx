"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { navItems, profile } from "../lib/content";
import { CloseIcon, MenuIcon } from "./icons";

const HEADER_OFFSET = 64;

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

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const deferredItems = navItems.filter(isDeferred);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 sm:px-8">
        <div className="flex min-w-0 items-center">
          <span
            className={`nav-reveal nav-reveal-name ${showName ? "is-open" : ""} ${ready ? "is-ready" : ""}`}
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

      {open ? (
        <nav id="mobile-nav" className="menu-in border-t border-border px-6 py-4 lg:hidden">
          <div className="flex flex-col text-[14px]">
            {navItems.map((item) => {
              const deferred = isDeferred(item);
              const stagger = deferred
                ? deferredItems.findIndex((entry) => entry.href === item.href)
                : -1;
              const link = (
                <a
                  href={item.href}
                  className="block py-2 text-muted transition-colors duration-200 hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              );

              if (!deferred) {
                return <div key={item.href}>{link}</div>;
              }

              return (
                <div
                  key={item.href}
                  className={`nav-reveal-row ${showHeroLinks ? "is-open" : ""} ${ready ? "is-ready" : ""}`}
                  style={{ "--nav-delay": `${stagger * 70}ms` } as CSSProperties}
                >
                  <div className="nav-reveal-row-inner">{link}</div>
                </div>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
