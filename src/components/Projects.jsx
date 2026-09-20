import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Projects.css'

const PROJECTS = [
  {
    name: 'WinterStore',
    tagline: 'Winter-season e-commerce website',
    description:
      'React-based online store for winter products. Includes products, categories, cart, wishlist, checkout and admin functionality.',
    stack: ['React', 'JavaScript', 'CSS', 'API'],
    live: 'https://winterstorefrontend.vercel.app/',
    github: 'https://github.com/alirazamahmood66/WinterStore',
    screenshot: '/projects/winterstore.png',
    monogram: 'WS',
  },
  {
    name: 'Elegance Salon',
    tagline: 'Salon management system',
    description:
      'Management system for a salon built with PHP and MySQL — handling bookings, services and records in one place.',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    live: 'https://saloon-management.site.je/E-pro/',
    github: null,
    screenshot: '/projects/elegance-salon.png',
    monogram: 'ES',
  },
  {
    name: 'BagBag',
    tagline: 'PHP web application',
    description:
      'A web-based application built with PHP and MySQL, featuring database integration and a clean, user-friendly interface.',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
    live: null,
    github: null,
    monogram: 'BB',
  },
  {
    name: 'StudentMS',
    tagline: 'Student management system',
    description:
      'Student management system built with Laravel for organising student records and school workflows.',
    stack: ['Laravel', 'PHP', 'MySQL'],
    live: null,
    github: null,
    monogram: 'SM',
  },
]

function ProjectVisual({ monogram, name, screenshot }) {
  if (screenshot) {
    return (
      <div className="project-visual project-visual--image">
        <img src={screenshot} alt={`Preview of ${name}`} loading="lazy" />
      </div>
    )
  }

  return (
    <div className="project-visual project-visual--placeholder" aria-hidden="true">
      <span className="project-visual__glyph">{monogram}</span>
      <span className="project-visual__note">Screenshot coming soon</span>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={(index % 2) * 120}>
      <article className="project-card">
        <ProjectVisual
          monogram={project.monogram}
          name={project.name}
          screenshot={project.screenshot}
        />
        <div className="project-card__body">
          <h3>{project.name}</h3>
          <p className="project-card__tagline">{project.tagline}</p>
          <p className="project-card__desc">{project.description}</p>

          <ul className="project-card__stack" aria-label="Technologies used">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          <div className="project-card__links">
            {project.live ? (
              <a
                className="btn btn--subtle"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Website
                <ExternalLinkIcon />
              </a>
            ) : null}
            {project.github ? (
              <a
                className="btn btn--subtle"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                GitHub
              </a>
            ) : null}
            {!project.live && !project.github ? (
              <a className="btn btn--subtle" href="#contact">
                Contact for details
                <ArrowRightIcon />
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section section--band">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Things I&apos;ve built"
            text="A selection of my work — web apps, management systems and mobile applications."
          />
        </Reveal>

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}