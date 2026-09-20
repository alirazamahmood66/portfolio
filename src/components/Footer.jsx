import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {new Date().getFullYear()} Ali Raza Mahmood</p>
        <p className="footer__role">Web Developer</p>
        <a href="#home" className="footer__top">
          Back to top
        </a>
      </div>
    </footer>
  )
}