import './Footer.css'
import { LinkedInIcon, InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons'

const SOCIALS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ali-raza-mahmood-640993421/',
    Icon: LinkedInIcon,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/alirazamahmood3/',
    Icon: InstagramIcon,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61581798501217',
    Icon: FacebookIcon,
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/923253154878',
    Icon: WhatsAppIcon,
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {new Date().getFullYear()} Ali Raza Mahmood</p>
        <p className="footer__role">Web Developer</p>
        <nav className="footer__socials" aria-label="Social links">
          {SOCIALS.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
            >
              <Icon />
            </a>
          ))}
        </nav>
        <a href="#home" className="footer__top">
          Back to top
        </a>
      </div>
    </footer>
  )
}
