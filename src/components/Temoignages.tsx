import { Quote } from "lucide-react";
import Title from "./Title";
import Corneille from "../assets/Témoignages/Corneille.jpg";
import Daouda from "../assets/Témoignages/daouda.jpg";
import Fabrice from "../assets/Témoignages/fabrice.jpg";
import JP from "../assets/Témoignages/jp.jpg";
import Mounie from "../assets/Témoignages/mounie.jpg";
import Ochola from "../assets/Témoignages/ochola.jpg";
import Romaric from "../assets/Témoignages/Romaric.jpg";
import Yannel from "../assets/Témoignages/yaanel.jpg";
import Zinkpe from "../assets/Témoignages/zinkpe.jpg";

const testimonials = [
    { name: "Corneille GBAGUIDI", image: Corneille, text: "Ses œuvres parlent d'elles mêmes et c'est assez rare de nos jours" },
    { name: "Fayou DAOUDA", image: Daouda, text: " Eh bien moi je le vois bien exposer en Europe avec son style." },
    { name: "Fabrice MEGNIZOUN", image: Fabrice, text: "Il mélange si bien les couleurs, j'admire vraiment son travail." },
    { name: "Jean Patrick GUICHARD", image: JP, text: " J'adore comment il utilise les chiffres et symboles de mathématiques pour capter l'attention." },
    { name: "Steve MOUNIÉ", image: Mounie, text: "Ses tableaux arrivent vraiment à vous transporter et ils ont toujours un sens profond. " },
    { name: "Olouchola C. AKPO", image: Ochola, text: " Nel Tachart c'est un talentueux artiste béninois que je suis très fière de pousser vers le sommet." },
    { name: "Romaric ATOKE", image: Romaric, text: "Léonel ZADJI a un talent pur, avec un bon accompagnement, il accomplira des merveilles. Il faut avouer que son travail est remarquable et assez unique, il a des grandes ambitions, je l'encourage vivement." },
    { name: "Yannel ADJOVI", image: Yannel, text: "J'aime beaucoup la manière dont il utilise des éléments recyclés comme les feuilles de tôles, des cadenas, etc sur du verre, c'est innovant." },
    { name: "Dominique ZINKPÈ", image: Zinkpe, text: "Moi j'aime beaucoup ce qu'il propose, son art est différent." }
];

const Temoignages = () => {
    return (
        <div className="p-4">
            <Title title={"TEMOIGNAGES"} />
            <div className="carousel w-full relative">
                {testimonials.map((testimonial, index) => (
                    <div id={`slide${index + 1}`} className="carousel-item relative w-full flex flex-col items-center text-center" key={index}>
                        <footer className="footer footer-center bg-dark text-neutral-content p-10 rounded-lg shadow-lg">
                            <aside>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                                />
                                <p className="font-bold mt-2">{testimonial.name}</p>
                                <p>{testimonial.text}</p>
                            </aside>
                            <Quote size={32} className="text-gray-400" />
                        </footer>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                            <a href={`#slide${index === 0 ? testimonials.length : index}`} className="btn btn-circle">❮</a>
                            <a href={`#slide${index === testimonials.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Temoignages;
