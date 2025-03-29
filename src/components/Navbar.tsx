import { useState } from "react";
import { Palette, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-between items-center p-4  shadow-md">
            {/* Logo */}
            <Link to="/" className="flex items-center font-bold text-3xl md:text-xl">
                <Palette className="mr-1" /><span className="text-accent">TACHART</span>
            </Link>

            {/* Menu pour desktop */}
            <ul className="hidden md:flex space-x-4">
                <li><Link to="/" className="btn btn-sm btn-ghost">Accueil</Link></li>
                <li><a href="#About" className="btn btn-sm btn-ghost">À propos</a></li>
                <li><a href="#Exposition" className="btn btn-sm btn-ghost">Expositions</a></li>
                <li><Link to="/portfolio" className="btn btn-sm btn-ghost">Portfolio</Link></li>
                <li><a href="#Contact" className="btn btn-sm btn-ghost">Contact</a></li>
            </ul>

            {/* Bouton pour ouvrir/fermer le menu mobile */}
            <button
                className="md:hidden p-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Menu mobile (affiché quand isOpen = true) */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-accent md:hidden z-50 ">
                    <ul className="flex flex-col items-center space-y-4 p-4">
                        <li><Link to="/" className="btn btn-ghost" onClick={() => setIsOpen(false)}>Accueil</Link></li>
                        <li><a href="#About" className="btn btn-ghost" onClick={() => setIsOpen(false)}>À propos</a></li>
                        <li><a href="#Exposition" className="btn btn-ghost" onClick={() => setIsOpen(false)}>Expositions</a></li>
                        <li><Link to="/portfolio" className="btn btn-ghost" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
                        <li><a href="#Contact" className="btn btn-ghost" onClick={() => setIsOpen(false)}>Contact</a></li>
                    </ul>
                </div>
            )}

        </div>
    );
};

export default Navbar;
