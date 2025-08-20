import { motion } from "framer-motion";
import Title from "./Title";
import about from "../assets/about.jpg";

const About = () => {
    // Chemins vers les fichiers PDF (à adapter selon votre structure de fichiers)
    const frenchPDF = "/pdf/biofr.pdf";
    const englishPDF = "/pdf/bioen.pdf";

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const image = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <motion.div
            className="px-6 py-16 md:px-24 overflow-hidden"
            id="About"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
        >
            <motion.div variants={item}>
                <Title title="L'ARTISTE" />
            </motion.div>

            <div className="bg-base-200 flex justify-center items-center py-10 rounded-2xl overflow-hidden">
                <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start max-w-6xl mx-auto">
                    {/* Texte */}
                    <motion.div
                        className="text-center lg:text-left space-y-6 lg:w-1/2 px-4 md:px-8"
                        variants={container}
                    >
                        <motion.h1
                            className="text-3xl md:text-5xl font-bold"
                            variants={item}
                        >
                            A PROPOS DE LEONEL ZADJI
                        </motion.h1>

                        <motion.p
                            className="py-4 leading-relaxed text-lg"
                            variants={item}
                        >
                            Leonel ZADJI est un artiste béninois qui peint sur et sous du verre
                            transparent, autodidacte, né le 1er Mars en 1997 à Cotonou au Bénin. Il a grandi dans les environs
                            de la Place de l'Etoile Rouge en plein centre-ville et réside actuellement à Dèkoungbé un quartier
                            populaire de Cotonou, où son univers est confiné dans un atelier.
                        </motion.p>

                        {/* Boutons de téléchargement */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            variants={item}
                        >
                            <motion.a
                                href={frenchPDF}
                                download="Biographie-Leonel-ZADJI-FR.pdf"
                                className="btn btn-accent flex-1 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Télécharger Bio (FR)
                            </motion.a>
                            <motion.a
                                href={englishPDF}
                                download="Biography-Leonel-ZADJI-EN.pdf"
                                className="btn btn-outline btn-accent flex-1 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Download Bio (EN)
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 px-4"
                        variants={image}
                        whileHover="hover"
                    >
                        <motion.div
                            className="relative w-4/5 sm:w-3/5 md:w-1/2 lg:w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
                            initial={{ borderRadius: '1rem' }}
                        >
                            <img
                                src={about}
                                className="w-full h-auto object-cover"
                                alt="À propos de Leonel ZADJI"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;