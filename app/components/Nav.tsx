"use client";

import type { PageKey } from "@/lib/content";
import { content } from "@/lib/content";

export default function Nav({
  page,
  onGo,
  menuOpen,
  onToggle,
}: {
  page: PageKey;
  onGo: (k: PageKey) => void;
  menuOpen: boolean;
  onToggle: () => void;
}) {
  const items = content.nav;
  return (
    <>
      <nav className="nav-side" aria-label="Primary">
        <button className="nav-brand" onClick={() => onGo("home")} aria-label="Home">
          A
        </button>
        <div className="nav-vert">
          {items.map((it) => (
            <button
              key={it.key}
              className="nav-vitem"
              data-active={page === it.key}
              aria-current={page === it.key ? "page" : undefined}
              onClick={() => onGo(it.key)}
            >
              <span className="nav-vmark" aria-hidden />
              {it.label}
            </button>
          ))}
        </div>
        <div className="nav-foot">
          <span className="rule" aria-hidden />
          <span className="est">{content.est}</span>
        </div>
      </nav>

      <nav className="nav-top" aria-label="Primary">
        <button className="nav-top-brand" onClick={() => onGo("home")}>
          {content.studioName}
        </button>
        <button className="nav-top-menu" onClick={onToggle} aria-expanded={menuOpen}>
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div className="nav-overlay">
          {items.map((it) => (
            <button
              key={it.key}
              data-active={page === it.key}
              onClick={() => onGo(it.key)}
            >
              {it.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
