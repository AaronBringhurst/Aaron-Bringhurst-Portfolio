import React from "react";
import resume from "../assets/docs/resume.pdf";

export default function Resume() {
  return (
    <section className="page-width resume-page">
      <p className="eyebrow">Experience & background</p>
      <h1>Résumé</h1>
      <p>View my résumé or download a copy.</p>
      <div className="hero-actions">
        <a
          className="button button-primary"
          href={resume}
          download="Aaron-Bringhurst-Resume.pdf"
        >
          Download résumé
        </a>
        <a
          className="button button-secondary"
          href={resume}
          target="_blank"
          rel="noreferrer"
        >
          Open PDF ↗
        </a>
      </div>
      <iframe src={resume} title="Aaron Bringhurst résumé" />
    </section>
  );
}
