export default function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <header className={`section-heading${center ? ' section-heading--center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  )
}