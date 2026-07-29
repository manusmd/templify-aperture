"use client";

import type { RefObject } from "react";
import type { PageKey } from "@/lib/content";
import { content } from "@/lib/content";
import Img from "./Img";

const c = content;

/* ═══ HOME ═══ */
export function HomeView({ onGo }: { onGo: (k: PageKey) => void }) {
  const h = c.home;
  return (
    <section>
      <div className="hero">
        <div className="hero-bg" data-para="0.14" aria-hidden>
          <Img src={h.heroImage} alt="" priority sizes="100vw" />
        </div>
        <div className="hero-scrim" aria-hidden />
        <div className="hero-fig">{h.heroCaption}</div>
        <div className="hero-row">
          <div className="hero-copy">
            <div className="hero-kicker">{h.kicker}</div>
            <h1>{c.studioName}</h1>
            <p>{h.intro}</p>
          </div>
          <button className="btn-ghost" onClick={() => onGo("work")}>
            {h.cta}
          </button>
        </div>
        <div className="hero-cue" aria-hidden>
          <span />
        </div>
      </div>

      <div className="home-intro">
        <div className="home-intro-label" data-reveal>
          {h.studioLabel[0]}
          <br />
          <span className="dim">{h.studioLabel[1]}</span>
          <br />
          <span className="dim">
            {h.studioLabel[2].split("\n").map((l, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {l}
              </span>
            ))}
          </span>
        </div>
        <div data-reveal style={{ transitionDelay: "0.1s" }}>
          <p className="home-intro-statement">{h.statement}</p>
          <p className="home-intro-body">{h.body}</p>
        </div>
      </div>

      <div className="sel">
        <div className="sel-head">
          <h2>{h.workHeading}</h2>
          <span>{h.workYears}</span>
        </div>
        <div className="sel-list">
          {h.featured.map((f, i) => (
            <div
              className="feat"
              data-reveal
              key={i}
              style={{ gridTemplateColumns: f.cols, marginLeft: f.offset }}
            >
              <button className="feat-btn" onClick={() => onGo("story")}>
                <div className="feat-frame" style={{ aspectRatio: f.ratio }}>
                  <Img
                    src={f.image}
                    alt={f.title}
                    sizes="(max-width: 859px) 100vw, 60vw"
                  />
                  <div className="feat-para" data-para={String(f.para)} aria-hidden />
                  <span className="slot-label">{f.slot}</span>
                </div>
              </button>
              <div className="feat-meta">
                <div className="kicker">{f.kicker}</div>
                <h3>{f.title}</h3>
                <p>{f.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testi">
        <div className="testi-inner" data-reveal>
          <div className="testi-label">{h.testimonialLabel}</div>
          <blockquote className="testi-quote">{h.quote}</blockquote>
          <div className="testi-by">{h.quoteBy}</div>
        </div>
      </div>

      <div className="disc">
        <div className="cell-grid">
          {h.disciplines.map((d, i) => (
            <div className="cell" data-reveal key={i}>
              <span className="num">{d.num}</span>
              <div>
                <h3>{d.name}</h3>
                <p>{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="home-cta">
        <div className="home-cta-inner" data-reveal>
          <h2>
            {h.ctaHeading.map((l, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {l}
              </span>
            ))}
          </h2>
          <button className="btn-ghost" onClick={() => onGo("contact")}>
            {h.ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══ WORK ═══ */
export function WorkView({
  onGo,
  onRowEnter,
  onMove,
  onLeave,
  previewRef,
}: {
  onGo: (k: PageKey) => void;
  onRowEnter: (i: number) => void;
  onMove: (e: React.MouseEvent) => void;
  onLeave: () => void;
  previewRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <section className="work">
      <div className="work-head">
        <h1>{c.work.heading}</h1>
        <p>{c.work.intro}</p>
      </div>
      <div className="work-list" onMouseMove={onMove} onMouseLeave={onLeave}>
        {c.work.projects.map((p, i) => (
          <button
            key={p.num}
            className="work-row"
            onClick={() => onGo("story")}
            onMouseEnter={() => onRowEnter(i)}
          >
            <span className="wr-num">{p.num}</span>
            <span className="wr-title">{p.title}</span>
            <span className="wr-kind">{p.kind}</span>
            <span className="wr-year">{p.year}</span>
          </button>
        ))}
        <div className="work-preview" ref={previewRef} aria-hidden>
          <span data-plabel />
        </div>
      </div>
    </section>
  );
}

/* ═══ STORY ═══ */
export function StoryView({
  onGo,
  onOpenLb,
}: {
  onGo: (k: PageKey) => void;
  onOpenLb: (i: number) => void;
}) {
  const s = c.story;
  return (
    <section>
      <div className="story-head">
        <div className="story-kicker">{s.kicker}</div>
        <h1>{s.title}</h1>
        <p>{s.intro}</p>
      </div>
      <div className="story-meta">
        {s.meta.map((m, i) => (
          <div className="cell-in" key={i}>
            <div className="k">{m.k}</div>
            <div className="v">{m.v}</div>
          </div>
        ))}
      </div>
      <div className="story-gal">
        {s.gallery.map((g, i) => (
          <button
            key={i}
            className="gal-item"
            data-reveal
            style={{ gridColumn: g.span, aspectRatio: g.ratio }}
            onClick={() => onOpenLb(i)}
          >
            <div className="gal-inner" aria-hidden>
              <Img src={g.image} alt={g.label} sizes="(max-width: 700px) 50vw, 33vw" />
            </div>
            <span className="gal-label">{g.label}</span>
          </button>
        ))}
      </div>
      <div className="story-next">
        <div>
          <div className="label">{s.nextLabel}</div>
          <button className="next-btn" onClick={() => onGo("work")}>
            {s.nextTitle}
          </button>
        </div>
        <span className="next-meta">{s.nextMeta}</span>
      </div>
    </section>
  );
}

/* ═══ STUDIO ═══ */
export function StudioView() {
  const s = c.studio;
  return (
    <section className="studio">
      <div className="studio-grid">
        <div>
          <h1>{s.heading}</h1>
          <p className="studio-lede">{s.intro}</p>
          <p className="studio-body">{s.body}</p>
          <div className="studio-proc cell-grid">
            {s.process.map((p, i) => (
              <div className="cell" key={i} style={{ minHeight: 190 }}>
                <span className="num" style={{ color: "var(--acc)" }}>
                  {p.num}
                </span>
                <div>
                  <h3 style={{ fontSize: 17 }}>{p.name}</h3>
                  <p style={{ fontSize: "13.5px" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div data-reveal>
          <div className="studio-portrait">
            <Img
              src={s.portraitImage}
              alt={s.portraitCaption}
              sizes="(max-width: 999px) 100vw, 40vw"
            />
            <div className="para" data-para="0.07" aria-hidden />
            <span className="slot-label">{s.portraitCaption}</span>
          </div>
          <div className="credits">
            {s.credits.map((cr, i) => (
              <div className="credit-row" key={i}>
                <span className="k">{cr.k}</span>
                <span className="v">{cr.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ CONTACT ═══ */
export function ContactView() {
  const ct = c.contact;
  return (
    <section className="contact">
      <div className="contact-grid">
        <div>
          <h1>
            {ct.heading.map((l, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {l}
              </span>
            ))}
          </h1>
          <p className="lede">{ct.intro}</p>
          <a className="contact-email" href={`mailto:${ct.email}`}>
            {ct.email}
          </a>
          <div className="info-grid">
            {ct.info.map((i, idx) => (
              <div key={idx}>
                <div className="k">{i.k}</div>
                <div className="v">{i.v}</div>
              </div>
            ))}
          </div>
        </div>
        <form
          className="form-card"
          data-reveal
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="label">Enquiry</div>
          <div className="form-fields">
            {ct.fields.map((f, i) => (
              <label className="field" key={i}>
                <span>{f.label}</span>
                <input placeholder={f.ph} />
              </label>
            ))}
            <label className="field">
              <span>The story so far</span>
              <textarea
                rows={5}
                placeholder="Tell us where and when — and what you hope to remember."
              />
            </label>
            <button className="btn-ghost" type="submit">
              Send enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <span>{c.footer.address}</span>
      <span className="footer-legal">
        <a href="https://templify.projects.manu-web.de/impressum" target="_blank" rel="noreferrer">
          Legal Notice
        </a>
        <a href="https://templify.projects.manu-web.de/datenschutz" target="_blank" rel="noreferrer">
          Privacy
        </a>
      </span>
      <span>{c.footer.meta}</span>
    </footer>
  );
}
