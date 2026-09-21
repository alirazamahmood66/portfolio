import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './About.css'

const EDUCATION = [
  {
    id: 'intermediate',
    markTop: 'Inter',
    program: 'Intermediate (Pre-Engineering)',
    school: 'Govt Boys Higher Secondary School Gharo, Thatta',
    marks: '784/ 1100',
    grade: 'A',
    status: 'Completed',
  },
  {
    id: 'matric',
    markTop: 'Matric',
    program: 'Matric (Computer Science)',
    school: 'Roshan Tara School Bachal Goth',
    marks: '821 / 1100',
    grade: 'A',
    status: 'Completed',
  },
]

export default function About() {
  return (
    <section id="about" className="section section--band">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A developer who cares about the details"
          />
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__col" delay={60}>
            <div className="about__card">
              <h3 className="about__card-title">Who I am</h3>
              <p>
                I&apos;m a web developer focused on building clean, functional
                websites that work well on every screen. I enjoy working across
                the whole stack — crafting polished front ends with HTML, CSS,
                JavaScript and React, and dependable back ends with PHP,
                Laravel and MySQL.
              </p>
              <p>
                From interfaces to databases, I aim for simple, maintainable
                solutions that are pleasant to use and easy to build on. A few
                of my projects — an e-commerce platform, a salon management
                system and a student management system — are showcased below.
              </p>
            </div>
          </Reveal>

          <Reveal className="about__col" delay={140}>
            <div className="about__card about__card--education">
              <h3 className="about__card-title">Education</h3>
              <ul className="education-list">
                {EDUCATION.map((entry) => (
                  <li key={entry.id} className="education">
                    <div className="education__mark" aria-hidden="true">
                      <span className="education__grade">{entry.markTop}</span>
                      {entry.markSub && (
                        <span className="education__stream">
                          {entry.markSub}
                        </span>
                      )}
                    </div>
                    <div className="education__body">
                      <p className="education__name">{entry.program}</p>
                      <p className="education__school">{entry.school}</p>
                      <ul className="education__meta">
                        <li>
                          <span className="education__meta-label">Marks</span>
                          {entry.marks}
                        </li>
                        <li>
                          <span className="education__meta-label">Grade</span>
                          {entry.grade}
                        </li>
                        <li>
                          <span className="education__meta-label">Status</span>
                          {entry.status}
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}