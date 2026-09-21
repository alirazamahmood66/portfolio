import { ArrowRightIcon, DownloadIcon } from './Icons'
import Reveal from './Reveal'
import './Hero.css'

const STACK = ['React', 'Laravel', 'PHP', 'MySQL', 'JavaScript', 'Git/GitHub']

export default function Hero() {
  return (
    <section id="home" className="hero">
      <span className="hero__glow hero__glow--one" aria-hidden="true" />
      <span className="hero__glow hero__glow--two" aria-hidden="true" />
      <span className="hero__grid-overlay" aria-hidden="true" />

      <div className="container hero__grid">
        <Reveal className="hero__copy">
          <span className="eyebrow">Hi, I&apos;m</span>
          <h1 className="hero__name">Ali Raza Mahmood</h1>
          <span className="hero__role">Web Developer</span>
          <p className="hero__tagline">
            Building modern, responsive web experiences from frontend to backend.
          </p>
          <p className="hero__intro">
            I build responsive websites and web applications using React,
            JavaScript, PHP, Laravel, and MySQL — with a focus on clean UI,
            functionality, and real-world projects.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Projects
              <ArrowRightIcon />
            </a>
            <a href="#cv" className="btn btn--ghost">
              Download CV
              <DownloadIcon />
            </a>
          </div>
        </Reveal>

        <Reveal className="hero__visual" delay={120}>
          <div className="hero__card">
            <div className="hero__card-head">
              <span className="hero__card-dot" aria-hidden="true" />
              Tech Stack
            </div>
            <div className="hero__badges">
              {STACK.map((tech) => (
                <span className="hero__badge" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <p className="hero__card-foot">Frontend · Backend · Databases</p>
          </div>

          <span className="hero__float hero__float--one" aria-hidden="true">
            React
          </span>
          <span className="hero__float hero__float--two" aria-hidden="true">
            Laravel
          </span>
          <span className="hero__float hero__float--three" aria-hidden="true">
            PHP
          </span>
        </Reveal>
      </div>
    </section>
  )
}