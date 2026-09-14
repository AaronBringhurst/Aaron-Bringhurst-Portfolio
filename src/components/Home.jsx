import React from "react";
import { ArrowUpRight, ArrowRight, Mail, Github, FileText } from "lucide-react";
import resume from "../assets/docs/resume.pdf";
import pets from "../assets/images/projects/trek-pets.png";
import activity from "../assets/images/projects/trek-activity.png";
import hollow from "../assets/images/projects/hollow-run.png";

const projects = [
  {
    id: "trek-pets",
    name: "Trek Pets",
    status: "In development",
    description: "A walking companion with a virtual pet.",
    note: "An ongoing mobile app project, preparing for beta testing.",
    detail:
      "Trek Pets brings a virtual walking buddy, a pet collection, and activity tracking into one mobile experience. My current focus is preparing the app for beta testing.",
    images: [
      {
        src: pets,
        alt: "Trek Pets My Pets screen featuring Buddy the hedgehog",
      },
      {
        src: activity,
        alt: "Trek Pets activity summary and weekly activity screen",
      },
    ],
  },
  {
    id: "hollow-run",
    name: "Hollow Run",
    demoUrl: "https://aaronbringhurst.github.io/fox-maze/",
    sourceUrl: "https://github.com/AaronBringhurst/fox-maze",
    status: "MVP",
    description:
      "An isometric maze adventure featuring a fox, ghost cats, and an escape gate.",
    detail:
      "Hollow Run is at the minimum viable product stage. The current game includes maze exploration, gems, and a dash mechanic. Further development is on hold while I focus on Trek Pets and strengthening my coding skills.",
    images: [
      {
        src: hollow,
        alt: "Hollow Run gameplay: a fox exploring an isometric maze with ghost cats and gems",
      },
    ],
  },
];

export function ContactSection() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <p className="eyebrow">Let’s talk.</p>
      <h2 id="contact-heading">
        Have a developer role in mind?
        <br />
        I’d like to hear about it.
      </h2>
      <div className="contact-links">
        <a href="mailto:bringhurst.aaron@gmail.com">
          <Mail aria-hidden="true" /> Email me{" "}
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a
          href="https://github.com/AaronBringhurst"
          target="_blank"
          rel="noreferrer"
        >
          <Github aria-hidden="true" /> GitHub{" "}
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a href={resume} download="Aaron-Bringhurst-Resume.pdf">
          <FileText aria-hidden="true" /> Résumé{" "}
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="page-width">
      <section className="hero" aria-labelledby="hero-heading">
        <p className="eyebrow">React · Node · Full-stack</p>
        <h1 id="hero-heading">
          Thoughtful code.
          <br />
          Practical applications.
        </h1>
        <p className="hero-intro">
          I’m Aaron, a developer building web applications
          <br className="desktop-break" /> and currently developing Trek Pets.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <ArrowRight aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </section>
      <section
        className="work-section"
        id="work"
        aria-labelledby="work-heading"
      >
        <h2 className="eyebrow" id="work-heading">
          Selected work
        </h2>
        {projects.map((project, index) => (
          <article
            className={`project project-${project.id}`}
            key={project.id}
            aria-labelledby={`${project.id}-heading`}
          >
            <div className="project-copy">
              <span className="project-number">0{index + 1}</span>
              <h3 id={`${project.id}-heading`}>{project.name}</h3>
              <span className="status-badge">{project.status}</span>
              <p>{project.description}</p>
              {project.note && <p>{project.note}</p>}
              {project.demoUrl && (
                <div className="hero-actions">
                  <a className="button button-primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Play {project.name} <ArrowUpRight aria-hidden="true" />
                  </a>
                  <a className="button button-secondary" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    View source <Github aria-hidden="true" />
                  </a>
                </div>
              )}
              <details className="project-details">
                <summary>
                  About the project <span aria-hidden="true">+</span>
                </summary>
                <p>{project.detail}</p>
              </details>
            </div>
            <div className="project-visual">
              {project.images.map((picture, imageIndex) => (
                <img
                  key={picture.src}
                  className={imageIndex === 1 ? "secondary-screen" : undefined}
                  src={picture.src}
                  alt={picture.alt}
                  loading="lazy"
                  width={project.id === "trek-pets" ? 415 : 2521}
                  height={project.id === "trek-pets" ? 840 : 1279}
                />
              ))}
            </div>
          </article>
        ))}
      </section>
      <section
        className="about-section"
        id="about"
        aria-labelledby="about-heading"
      >
        <h2 className="eyebrow" id="about-heading">
          A little about me
        </h2>
        <p>
          Bringing 18 years of operations and logistics problem-solving to
          software engineering. Focused on building responsive, scalable
          full-stack applications with clean JavaScript architecture.
        </p>
      </section>
      <ContactSection />
    </div>
  );
}
