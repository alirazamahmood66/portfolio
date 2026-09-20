import {
  CartIcon,
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  PaletteIcon,
} from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Services.css'

const SERVICES = [
  {
    icon: CodeIcon,
    title: 'Web Development',
    text: 'Building fast, reliable websites from the ground up with clean code.',
  },
  {
    icon: LayoutIcon,
    title: 'Responsive Website Development',
    text: 'Websites that adapt and look great on desktop, tablet and mobile.',
  },
  {
    icon: CartIcon,
    title: 'E-commerce Website Development',
    text: 'Online stores with products, carts, checkout and admin panels.',
  },
  {
    icon: DatabaseIcon,
    title: 'Database Integration',
    text: 'Structured data layers with MySQL and reliable backend connectivity.',
  },
  {
    icon: PaletteIcon,
    title: 'Website UI Development',
    text: 'Clean, accessible interfaces built with HTML, CSS and JavaScript.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Services"
            title="What I can help with"
            text="Services grounded in the tools and technologies I use every day."
          />
        </Reveal>

        <ul className="services__grid">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <li key={service.title}>
                <Reveal delay={i * 50}>
                  <article className="service-card">
                    <span className="service-card__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}