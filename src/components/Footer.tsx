import LogoIcon from "@/assets/Tomso.svg";
import Github from "@/assets/bxl-github.svg";
import Instagram from "@/assets/bxl-instagram-alt.svg";
import Tiktok from "@/assets/bxl-tiktok.svg";
import Mail from "@/assets/bxl-gmail.svg";


export const Footer = () => {
  return (
    <footer>
      <div className="footer-upper py-5">
        <div className="container text-white/70">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex gap-2 items-center">
              <LogoIcon className="h-6 w-6" />
              <h3 className="text-sm font-medium uppercase tracking-widest">Tomso</h3>
            </div>
            <nav>
              <ul className="flex flex-col lg:flex-row gap-5 lg:gap-7 justify-center text-center text-sm">
                <li className="text-sm">
                  <a href="#hero" className="font-normal text-neutral-400 hover:text-white transition-all duration-300 cursor-pointer">Inicio</a>
                </li>
                <li className="text-sm">
                  <a href="#services" className="font-normal text-neutral-400 hover:text-white transition-all duration-300 cursor-pointer">Servicios</a>
                </li>
                <li className="text-sm">
                  <a href="#process" className="font-normal text-neutral-400 hover:text-white transition-all duration-300 cursor-pointer">¿Cómo trabajo?</a>
                </li>
              </ul>
            </nav>
            <div className="flex gap-5 items-center">
              <a href="https://github.com/BenjaminVeli"
                target="_blank"
                rel="noopener noreferrer">
                <Github className="cursor-pointer" />
              </a>
              <a href="https://www.tiktok.com/@tomso.js"
                target="_blank"
                rel="noopener noreferrer">
                <Tiktok className="cursor-pointer" />
              </a>
              <a href="mailto:tomso.app@gmail.com">
                <Mail className="cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/tomso.app/"
                target="_blank"
                rel="noopener noreferrer">
                <Instagram className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;