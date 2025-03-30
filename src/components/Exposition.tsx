import Title from "./Title";
import oeuvre1 from "../assets/accueil1.jpg";
import oeuvre2 from "../assets/accueil2.jpg";
import oeuvre3 from "../assets/accueil5.jpg";
import oeuvre4 from "../assets/accueil3.jpg";
import oeuvre5 from "../assets/accueil4.jpg";
import oeuvre6 from "../assets/accueil6.jpg";

const oeuvres = [
    { id: 1, title: "", image: oeuvre1 },
    { id: 2, title: "", image: oeuvre2 },
    { id: 3, title: "", image: oeuvre3 },
    { id: 4, title: "", image: oeuvre4 },
    { id: 5, title: "", image: oeuvre5 },
    { id: 6, title: "", image: oeuvre6 },
];

const Exposition = () => {
    return (
        <div id="Exposition">
            <Title title="QUELQUES OEUVRES" />

            {/* Grille des œuvres */}
            <div className="grid md:grid-cols-3 gap-4" id="Portfolio">
                {oeuvres.map((oeuvre) => (
                    <div key={oeuvre.id} className="bg-base-300 p-5 h-fit rounded-lg shadow-lg">
                        <img src={oeuvre.image} alt={oeuvre.title} className="w-full rounded-xl h-56 object-cover" />
                        <h1 className="my-2 font-bold">{oeuvre.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exposition;
