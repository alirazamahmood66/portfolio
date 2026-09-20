import { ArrowRightIcon } from './Icons'
import Reveal from './Reveal'
import './Hero.css'

const CODE_LINES = [
  { indent: 0, parts: [{ cls: 'tok-key', text: 'const' }, { cls: 'tok-prop', text: ' developer' }, { cls: 'tok-punct', text: ' = {' }] },
  { indent: 1, parts: [{ cls: 'tok-com', text: '// building for the web' }] },
  { indent: 1, parts: [{ cls: 'tok-prop', text: 'name' }, { cls: 'tok-punct', text: ':' }, { cls: 'tok-str', text: " 'Ali Raza Mahmood'" }, { cls: 'tok-punct', text: ',' }] },
  { indent: 1, parts: [{ cls: 'tok-prop', text: 'role' }, { cls: 'tok-punct', text: ':' }, { cls: 'tok-str', text: " 'Web Developer'" }, { cls: 'tok-punct', text: ',' }] },
  { indent: 1, parts: [{ cls: 'tok-prop', text: 'stack' }, { cls: 'tok-punct', text: ':' }, { cls: 'tok-str', text: ' [React, Laravel, PHP, MySQL]' }, { cls: 'tok-punct', text: ',' }] },
  { indent: 1, parts: [{ cls: 'tok-prop', text: 'focus' }, { cls: 'tok-punct', text: ':' }, { cls: 'tok-str', text: "'Crafting responsive web experiences'" }, { cls: 'tok-punct', text: ',' }] },
  { indent: 0, parts: [{ cls: 'tok-punct', text: '}' }] },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <Reveal className="hero__copy">
          <span className="eyebrow">Hi, I&apos;m</span>
          <h1 className="hero__name">Ali Raza Mahmood</h1>
          <p className="hero__role">Web Developer</p>
          <p className="hero__intro">
            I build modern, responsive websites end to end — from clean,
            accessible front ends with HTML, CSS, JavaScript and React to solid
            back ends with PHP, Laravel and MySQL.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Projects
              <ArrowRightIcon />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact Me
            </a>
          </div>
        </Reveal>

        <Reveal className="hero__visual" delay={120}>
          <div className="code-window" aria-hidden="true">
            <div className="code-window__bar">
              <span className="code-window__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="code-window__path">~/portfolio/src/developer.js</span>
            </div>
            <div className="code-window__tabs">
              <span className="code-window__tab is-active">developer.js</span>
              <span className="code-window__tab">about.js</span>
              <span className="code-window__tab">skills.js</span>
            </div>
            <pre className="code-window__body">
              <code>
                {CODE_LINES.map((line, i) => (
                  <div key={i} className="code-line" style={{ paddingLeft: `${line.indent * 1.6}rem` }}>
                    {line.parts.map((part, j) => (
                      <span key={j} className={part.cls}>
                        {part.text}
                      </span>
                    ))}
                  </div>
                ))}
              </code>
            </pre>
          </div>
          <span className="hero__float hero__float--one">React</span>
          <span className="hero__float hero__float--two">Laravel</span>
          <span className="hero__float hero__float--three">PHP</span>
        </Reveal>
      </div>
    </section>
  )
}