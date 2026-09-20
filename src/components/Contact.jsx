import { useState } from 'react'
import { LinkedInIcon, MailIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Contact.css'

const CONTACTS = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ali-raza-mahmood-640993421',
    href: 'https://linkedin.com/in/ali-raza-mahmood-640993421',
    Icon: LinkedInIcon,
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="section section--band">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s work together"
            text="Have a project in mind or want to collaborate? I&apos;d love to hear from you."
          />
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__info" delay={60}>
            <h3 className="contact__info-title">Get in touch</h3>
            <p className="contact__info-text">
              The fastest way to reach me is through LinkedIn. I&apos;ll get
              back to you as soon as I can.
            </p>

            <ul className="contact__channels">
              {CONTACTS.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__channel"
                  >
                    <span className="contact__channel-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="contact__channel-meta">
                      <span className="contact__channel-label">{label}</span>
                      <span className="contact__channel-value">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={140}>
            <form className="contact__form" onSubmit={handleSubmit} noValidate={false}>
              <div className="contact__field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Jane Doe"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email">Your email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="jane@example.com"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="btn btn--primary contact__submit">
                Send Message
                <MailIcon />
              </button>

              {submitted ? (
                <p className="contact__notice" role="status">
                  Thanks — this is a demo form, so no message was sent. Once a
                  backend is connected, messages will be delivered here.
                </p>
              ) : (
                <p className="contact__notice">
                  Demo form — it doesn&apos;t send messages yet. A backend can
                  be connected later without changing the UI.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}