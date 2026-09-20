import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Skills.css'

const SKILLS = [
  { name: 'HTML', tag: 'Markup', mono: true },
  { name: 'CSS', tag: 'Styling', mono: true },
  { name: 'JavaScript', tag: 'Language', mono: true },
  { name: 'Bootstrap', tag: 'CSS Framework', mono: true },
  { name: 'PHP', tag: 'Backend', mono: true },
  { name: 'MySQL', tag: 'Database', mono: true },
  { name: 'Laravel', tag: 'PHP Framework', mono: true },
  { name: 'React', tag: 'UI Library', mono: true },
  { name: 'Git/GitHub', tag: 'Version Control', mono: false },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Skills"
            title="Technologies I work with"
            text="The tools and languages I use to build and ship websites."
          />
        </Reveal>

        <ul className="skills__grid">
          {SKILLS.map((skill, i) => (
            <li key={skill.name}>
              <Reveal delay={i * 40}>
                <div className="skill-card">
                  <span className="skill-card__glyph" aria-hidden="true">
                    {skill.name.slice(0, 2).toUpperCase()}
                  </span>
                  <div className="skill-card__meta">
                    <span className="skill-card__name">
                      {skill.name}
                    </span>
                    <span className="skill-card__tag">{skill.tag}</span>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}