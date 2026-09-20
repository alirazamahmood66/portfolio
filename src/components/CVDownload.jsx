import { DownloadIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './CVDownload.css'

/**
 * To attach your CV file:
 *   1. Drop the file into  public/cv/  (e.g. public/cv/Ali-Raza-Mahmood-CV.pdf)
 *   2. Set CV_URL to its public path, e.g. '/cv/Ali-Raza-Mahmood-CV.pdf'
 * The button below becomes a real download link automatically.
 */
const CV_URL = null

export default function CVDownload() {
  const ready = Boolean(CV_URL)

  return (
    <section id="cv" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Curriculum Vitae"
            title="Get my CV"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="cv-card">
            <span className="cv-card__icon" aria-hidden="true">
              <DownloadIcon />
            </span>
            <h3 className="cv-card__title">Ali Raza Mahmood — CV</h3>
            <p className="cv-card__text">
              {ready
                ? 'Download a copy of my curriculum vitae as a PDF.'
                : 'A PDF version of my CV will be available for download here soon.'}
            </p>

            {ready ? (
              <a className="btn btn--primary" href={CV_URL} download>
                Download CV
                <DownloadIcon />
              </a>
            ) : (
              <button
                type="button"
                className="btn btn--primary btn--disabled"
                disabled
                aria-disabled="true"
                title="CV file not added yet"
              >
                Download CV
                <DownloadIcon />
              </button>
            )}

            {!ready && (
              <p className="cv-card__hint">
                Add your CV file to <code>public/cv/</code> and uncomment{' '}
                <code>CV_URL</code> at the top of{' '}
                <code>src/components/CVDownload.jsx</code>.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}