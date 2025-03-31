import Title from "./Title";
import about from "../assets/about.jpg";

const About = () => {
    // Chemins vers les fichiers PDF (à adapter selon votre structure de fichiers)
    const frenchPDF = "/pdf/biofr.pdf";
    const englishPDF = "/pdf/bioen.pdf";

    return (
        <div className="px-6 py-16 md:px-24" id="About">
            <Title title="L'ARTISTE" />
            <div className="bg-base-200 flex justify-center items-center py-10">
                <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start max-w-6xl mx-auto">
                    {/* Texte */}
                    <div className="text-center lg:text-left space-y-4 lg:w-1/2 px-4">
                        <h1 className="text-3xl md:text-5xl font-bold">
                            A PROPOS DE NEL TACHART
                        </h1>
                        <p className="py-4">
                            Nel Tachart de son vrai nom, Léonel ZADJI est un artiste béninois qui peint sur et sous du verre
                            transparent, autodidacte, né le 1er Mars en 1997 à Cotonou au Bénin. Il a grandi dans les environs
                            de la Place de l'Etoile Rouge en plein centre-ville et réside actuellement à Dèkoungbé un quartier
                            populaire de Cotonou, où son univers est confiné dans un atelier.
                        </p>

                        {/* Boutons de téléchargement */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href={frenchPDF}
                                download="Biographie-Nel-Tachart-FR.pdf"
                                className="btn btn-accent flex-1"
                            >
                                Télécharger Bio (FR)
                            </a>
                            <a
                                href={englishPDF}
                                download="Biography-Nel-Tachart-EN.pdf"
                                className="btn btn-outline btn-accent flex-1"
                            >
                                Download Bio (EN)
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
                        <img
                            src={about}
                            className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-full max-w-sm rounded-lg shadow-2xl"
                            alt="À propos"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;