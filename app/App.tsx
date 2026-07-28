"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import type { PageKey } from "@/lib/content";
import { content } from "@/lib/content";
import Nav from "./components/Nav";
import {
  HomeView,
  WorkView,
  StoryView,
  StudioView,
  ContactView,
  Footer,
} from "./components/Views";

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function App() {
  const [page, setPage] = useState<PageKey>("home");
  const [lb, setLb] = useState(-1);
  const [menu, setMenu] = useState(false);
  const [wiping, setWiping] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const n = content.story.gallery.length;

  // ---- Lenis smooth scroll + parallax/reveal loop ----
  useEffect(() => {
    if (reducedMotion()) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, autoRaf: false });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-para]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const f = parseFloat(el.getAttribute("data-para") || "0");
        const off = (r.top + r.height / 2 - vh / 2) * -f;
        el.style.transform = `translate3d(0,${off.toFixed(1)}px,0)`;
      });
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)")
        .forEach((el) => {
          if (el.getBoundingClientRect().top < vh * 0.92)
            el.classList.add("is-in");
        });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // ---- Lightbox keyboard ----
  useEffect(() => {
    if (lb < 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLb(-1);
      if (e.key === "ArrowRight") setLb((v) => (v < 0 ? v : (v + 1) % n));
      if (e.key === "ArrowLeft") setLb((v) => (v < 0 ? v : (v - 1 + n) % n));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lb, n]);

  const scrollTop = () => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  };

  // ---- Navigate (with wipe) ----
  const go = (next: PageKey) => {
    if (next === page) {
      setMenu(false);
      return;
    }
    setMenu(false);
    if (reducedMotion()) {
      setPage(next);
      scrollTop();
      return;
    }
    setWiping(true);
    setTimeout(() => {
      scrollTop();
      setPage(next);
    }, 400);
    setTimeout(() => setWiping(false), 940);
  };

  // ---- Work preview (cursor-following thumbnail) ----
  const onRowEnter = (i: number) => {
    const el = previewRef.current;
    if (!el) return;
    const lbl = el.querySelector("[data-plabel]");
    if (lbl)
      lbl.textContent =
        content.work.projects[i].title + " — frame 01 / 1600×2000";
    el.style.backgroundImage = `url(${content.work.projects[i].image})`;
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
    el.style.opacity = "1";
  };
  const onMove = (e: React.MouseEvent) => {
    const el = previewRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = Math.min(e.clientX + 26, window.innerWidth - r.width - 16);
    const y = Math.max(
      12,
      Math.min(e.clientY - r.height / 2, window.innerHeight - r.height - 12)
    );
    el.style.transform = `translate3d(${x}px,${y}px,0)`;
  };
  const onLeave = () => {
    const el = previewRef.current;
    if (el) el.style.opacity = "0";
  };

  return (
    <>
      <Nav
        page={page}
        onGo={go}
        menuOpen={menu}
        onToggle={() => setMenu((m) => !m)}
      />
      <main className="main">
        {page === "home" && <HomeView onGo={go} />}
        {page === "work" && (
          <WorkView
            onGo={go}
            onRowEnter={onRowEnter}
            onMove={onMove}
            onLeave={onLeave}
            previewRef={previewRef}
          />
        )}
        {page === "story" && <StoryView onGo={go} onOpenLb={setLb} />}
        {page === "studio" && <StudioView />}
        {page === "contact" && <ContactView />}
        <Footer />
      </main>

      {lb >= 0 && (
        <div className="lb" onClick={() => setLb(-1)}>
          <div className="lb-top">
            <span>
              {String(lb + 1).padStart(2, "0")} /{" "}
              {String(n).padStart(2, "0")} — {content.story.title}
            </span>
            <span>← → to move · Esc to close</span>
          </div>
          <div className="lb-stage">
            <div
              className="lb-frame"
              style={{ aspectRatio: content.story.gallery[lb].ratio }}
            >
              <span>{content.story.gallery[lb].label}</span>
            </div>
          </div>
          <div className="lb-nav">
            <button
              className="lb-btn"
              onClick={(e) => {
                e.stopPropagation();
                setLb((v) => (v - 1 + n) % n);
              }}
            >
              Prev
            </button>
            <button
              className="lb-btn"
              onClick={(e) => {
                e.stopPropagation();
                setLb((v) => (v + 1) % n);
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {wiping && (
        <div className="wipe" aria-hidden>
          <span>{content.studioName}</span>
        </div>
      )}
    </>
  );
}
