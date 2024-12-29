import LogoIcon from "@/assets/Tomso.svg";
import { Menu } from "lucide-react";
import { Button } from "@/components/Button";

export const Header = () => {
    return (
        <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur">
            <div className="container">
                <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl">
                    <div>
                        <div className="h-10 w-10 inline-flex justify-center items-center">
                            <a href="#" aria-label="Volver a la página de inicio">
                                <LogoIcon className="h-8 w-8" />
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <nav>
                            <ul className="flex gap-8 text-base">
                                <li>
                                    <a href="#hero" className="text-white/70 hover:text-white transition">Inicio</a>
                                </li>
                                <li>
                                    <a href="#services" className="text-white/70 hover:text-white transition">Servicios</a>
                                </li>
                                <li>
                                    <a href="#process" className="text-white/70 hover:text-white transition">¿Cómo trabajo?</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex gap-4 items-center">
                        <a href="https://wa.me/qr/T7J36NFZAAXXK1" target="_blank" rel="noopener noreferrer">
                            <Button>Contáctame</Button>
                        </a>
                        <Menu className="md:hidden text-white" size={30} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header