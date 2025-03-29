import { Facebook, Instagram, Mail, MapPin, MessageCircle, Palette, Phone } from "lucide-react";
import Title from "./Title";

const Footer = () => {
    return (
        <>
            <Title title="CONTACT" />
            <div className="px-4 py-16 md:px-24 bg-neutral text-neutral-content">


                <footer className="flex flex-col md:flex-row justify-between items-center text-center md:text-left p-6 max-w-6xl mx-auto">
                    {/* Logo et infos */}
                    <div className="mb-6 md:mb-0 w-full">
                        <a href="/" className="flex items-center justify-center md:justify-start font-bold text-3xl">
                            <Palette className="mr-2" /><span className="text-accent">TACHART</span>
                        </a>
                        <p className="mt-4 space-y-2">
                            <span className="flex justify-center md:justify-start items-center"><MapPin className="mr-2" /> Cotonou, Bénin</span>
                            <span className="flex justify-center md:justify-start items-center"><Phone className="mr-2" /> +229 0161400743</span>
                        </p>
                    </div>

                    {/* Réseaux sociaux */}
                    <div className="">
                        <h6 className="footer-title mb-4">Réseaux sociaux</h6>
                        <div className="flex space-x-6 justify-center">
                            <a href="https://www.instagram.com/nel_tachart" className="hover:text-accent"><Instagram /></a>
                            <a href="https://www.facebook.com/share/16CDNc8VSm" className="hover:text-accent"><Facebook /></a>
                            <a href="https://Wa.me/22961400743" className="hover:text-accent"><MessageCircle /></a>
                            <a href="mailto:Leonelzadji.01@gmail.com" className="hover:text-accent"><Mail /></a>
                        </div>
                    </div>
                </footer>
            </div>
            {/* Copyright */}
            <footer className="text-center p-4 bg-base-300 text-base-content">
                <p>© 2024 - NEL TACHART Tous droits réservés</p>
            </footer>
        </>
    );
};

export default Footer;
