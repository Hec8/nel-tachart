import { useState } from "react";
import Title from "./Title";
import abstrait4 from "../assets/homepage.jpg";
import abstrait8 from "../assets/matuvu.jpg";
import abstrait9 from "../assets/apparences.jpg";
import abstrait10 from "../assets/etudiant.jpg";
import abstrait11 from "../assets/routier.jpg";
import abstrait12 from "../assets/mere.jpg";
import abstrait13 from "../assets/agri.jpg";
import abstrait14 from "../assets/cerveau.jpg";
import abstrait15 from "../assets/introvert.jpg";
import abstrait16 from "../assets/resistance.jpg";
import abstrait17 from "../assets/tableaux figuratifs/ensemble.jpg";
import abstrait18 from "../assets/labeur.jpg";
import abstrait19 from "../assets/allegorie.jpg";
import abstrait20 from "../assets/autoch.jpg";
import abstrait24 from "../assets/influence.jpg";
import abstrait25 from "../assets/coeur.jpg";
import abstrait26 from "../assets/voyage.png";
import abstrait27 from "../assets/inconfort.jpg";
import abstrait28 from "../assets/liens.jpg";
import abstrait29 from "../assets/faces.jpg";
import abstrait30 from "../assets/renouveau.jpg";
import abstrait31 from "../assets/trio.jpg";
import abstrait32 from "../assets/solitude.jpg";
import abstrait33 from "../assets/corde.jpg";
import abstrait34 from "../assets/perseverance.jpg";
import abstrait35 from "../assets/addiction.jpg";
import abstrait36 from "../assets/beaute.jpg";
import abstrait37 from "../assets/douleur.jpg";
import abstrait38 from "../assets/ascension.jpg";
import abstrait39 from "../assets/succes.jpg";
import abstrait40 from "../assets/africaine.jpg";

import figure1 from "../assets/tableaux figuratifs/chanel.jpg";
import figure2 from "../assets/tableaux figuratifs/domi.jpg";
import figure3 from "../assets/tableaux figuratifs/hermes.jpg";
import figure4 from "../assets/tableaux figuratifs/jm.jpg";
import figure5 from "../assets/tableaux figuratifs/jpg.jpg";
import figure6 from "../assets/tableaux figuratifs/nathana.jpg";
import figure7 from "../assets/tableaux figuratifs/rm.jpg";
import figure8 from "../assets/tableaux figuratifs/willi.jpg";
import figure9 from "../assets/tableaux figuratifs/yass.jpg";
import figure10 from "../assets/tableaux figuratifs/zinsou.jpg";
import figure11 from "../assets/tableaux figuratifs/figura2.jpg";
import figure12 from "../assets/tableaux figuratifs/figura3.jpg";

const abstraits = [
    {
        id: 19, title: 'Les autochtones', image: abstrait20, description:
            "Cette œuvre captivante présente quatre portraits stylisés alignés et vêtus avec des éléments de recyclage, où des visages aborigène simplifiés et enfantins se distinguent par des traits noirs épais et des couleurs vives. Chaque figure, ornée de symboles évoquant la mémoire collective et d'une coiffure unique, invite à réfléchir sur le thème de l'identité et de l'appartenance à un groupe tribal ou ethnique."
    },
    {
        id: 23, title: 'Influence', image: abstrait24, description:
            "L'œuvre met en scène deux figures abstraites évoquant des formes rocheuses ou minérales. Elles adoptent une posture intime, l'une se penchant vers l'autre comme pour murmurer un secret. Une substance picturale, probablement une peinture liquide, semble s'écouler de la figure \"chuchotante\" vers l\'autre, symbolisant la transmission d'une influence, d'une idée ou d'une corruption."
    },
    {
        id: 24, title: 'Coeurs en pierre', image: abstrait25, description:
            "Ce tableau présente une interprétation abstraite et poignante de la séparation et de l'entêtement. Deux profils, stylisés en formes montagneuses aux contours jaunes vifs sur un fond bleu aquatique, se font face sans se toucher. Cette composition évoque l'adage \"les montagnes ne se rencontrent jamais\", symbolisant l'éloignement émotionnel qui survient quand l'orgueil et le manque d'ouverture empêchent la réconciliation et le rapprochement. "
    },
    {
        id: 25, title: 'Le voyage de l\'homme : de la naissance à l\'éternité', image: abstrait26, description:
            "Tout commence dans le ventre maternel, berceau de la vie. Puis vient l’enfance, douce et lumineuse, remplie d’innocence et de découvertes.L’adolescence surgit comme une tempête : doutes, rêves, quête de soi. L’adulte prend ensuite place, affrontant la vie, aimant, luttant, construisant son chemin.Avec l’âge, le rythme ralentit. La sagesse s’installe, les souvenirs deviennent un trésor.Enfin, le dernier souffle. La fin d’un voyage… ou peut-être un nouveau départ. "
    },
    {
        id: 26, title: 'L\'inconfort', image: abstrait27, description:
            ""
    },
    {
        id: 27, title: 'Les liens', image: abstrait28, description:
            "Cette œuvre abstraite, soigneusement encadrée de noir, fusionne des formes géométriques audacieuses et des éléments sculptés en trois dimensions, créant une dynamique visuelle percutante. Les couleurs vives et les lignes vibrantes génèrent un mouvement palpable, une tension presque électrique. Les objets tridimensionnels, évoquant des engrenages ou des liens entrelacés, symbolisent avec force les connexions et les interdépendances au sein de la société. "
    },
    {
        id: 28, title: 'Les trois faces', image: abstrait29, description:
            "Cette œuvre dépasse le simple tableau : elle plonge dans l’âme et l’identité. Trois visages se dessinent avec force. À gauche, un visage vert-bleu, calme et mystérieux, illuminé de cercles dorés. Au centre, une texture brute en brun doré, comme une frontière symbolique, sépare les mondes. À droite, un visage bleu foncé, précis et imposant, semble questionner silencieusement. "
    },
    {
        id: 29, title: 'Le renouveau', image: abstrait30, description:
            "Ce tableau abstrait raconte une transformation, le passage d’une vie à une autre. La moitié gauche, avec ses teintes sombres et ses textures épaisses, symbolise la rigidité et le poids du passé, marqué par la discipline et la structure. En contraste, la moitié droite, lumineuse et colorée, incarne l’élégance, la liberté et la promesse d’un nouveau départ. "
    },
    {
        id: 30, title: 'Le trio égaré', image: abstrait31, description:
            "Ce tableau est une esquisse abstraite d'un trio à moto, où la moto et ses occupants apparaissent comme des silhouettes indistinctes. L'arrière-plan, composé de formes géométriques et de couleurs vives (rouge, jaune, bleu, blanc), évoque un environnement urbain chaotique, créant une impression de mouvement et de désorientation. L'aspect d'esquisse souligne un moment transitoire, comme une décision en cours.  "
    },
    {
        id: 31, title: 'Connecté dans la solitude', image: abstrait32, description:
            "Cette peinture abstraite, encadrée de noir, attire l’œil avec ses tons rouges et blancs qui diffusent une ambiance paisible et mystérieuse. Les rouges chauds, adoucis par des touches de blanc, contrastent avec une bande verte foncée au centre, parsemée de petits éclats lumineux qui captivent. Au milieu des formes floues et superposées, une silhouette discrète devant un ordinateur se détache, symbole de notre époque où la solitude peut se transformer en connexion au monde entier. "
    },
    {
        id: 32, title: 'La corde', image: abstrait33, description:
            "Le tableau présente une composition abstraite dominée par des tons de bleu, de beige et de gris. Une ligne verticale beige suggère une corde retenue par une roche, et une forme sombre esquisse une silhouette humaine en train de grimper. La présence d'une zone plus texturée et colorée à la base de la \"corde\" pourrait représenter les difficultés initiales. Le fond, avec ses variations de couleurs et de textures, évoque un environnement complexe et incertain."
    },
    {
        id: 33, title: 'La persévérance', image: abstrait34, description:
            "Ce tableau est une représentation abstraite de la persévérance. Une figure stylisée grimpe une échelle, symbolisant le chemin vers un objectif. L’arrière-plan, avec ses couleurs chaudes et textures organiques, évoque les difficultés et les obstacles rencontrés en cours de route. L’ensemble souligne l’importance de la patience, de la constance et de la persévérance pour atteindre ses objectifs."
    },
    {
        id: 34, title: 'Les cycles destructeurs des addictions', image: abstrait35, description:
            "Cette œuvre présente une esquisse stylisée d'un visage, composée de formes géométriques et d'objets recyclés comme un tuyau, un cadenas et un mégot de cigarette. Ces éléments intégrés au visage évoquent la captivité et les addictions, symbolisant un cycle destructeur qui impacte le corps et les relations de l'individu. L'utilisation de matériaux recyclés souligne également l'aspect polluant et cumulatif de ces dépendances."
    },
    {
        id: 35, title: 'La relativité de la beauté', image: abstrait36, description:
            "L'image présente un tableau cubiste d'une femme nue, décomposée en formes géométriques. Elle est assise devant un miroir, entourée d'un arrière-plan coloré. D'un côté, des teintes chaudes de jaune et d'orange évoquent une ambiance urbaine, tandis que de l'autre, des bleus et gris suggèrent un horizon marin ou céleste."
    },
    {
        id: 36, title: 'La douleur des souvenirs', image: abstrait37, description:
            "Ce tableau, c’est un cri silencieux, une poésie qu’on sent dans son âme. Le visage, étrange, porte une histoire que seuls les cœurs ouverts peuvent comprendre. Les yeux, si grands, ne se contentent pas de regarder, ils te pleurent, te questionnent, comme s’ils cherchaient des réponses. Les larmes, fragiles mais pleines de force, te rappellent qu’on souffre tous, mais qu’on garde toujours une petite lueur d’espoir.Le bleu, profond, te parle de solitude, de ce vide qu’on essaie de combler. Et l\’orange, cette couleur brûlante, c’est la vie, l\’amour, ou peut-être cette douleur qui refuse de partir. Les touches dorées, elles, te montrent qu’il y a toujours quelque chose de beau à trouver, même dans les moments les plus brisés."
    },
    {
        id: 37, title: 'L\'ascension vers la lumière', image: abstrait38, description:
            "Ce tableau représente la vie comme un cheminement fait d’étapes. Le ciel bleu symbolise la sérénité, tandis que la terre sombre et orageuse évoque les épreuves. Les hommes gravissant la montagne illustrent que chaque étape, qu’elle soit difficile ou paisible, est essentielle pour avancer. L’œuvre rappelle que ces étapes mènent, peu à peu, vers la lumière et l’accomplissement."
    },
    {
        id: 38, title: 'La quête du succès', image: abstrait39, description:
            "Ce tableau illustre la quête du succès. Les silhouettes gravissent des obstacles, symbolisant les défis de la vie. Le cerceau de basket représente un objectif à atteindre, tandis que les numéros évoquent les étapes du parcours ou le poids des expériences. Les teintes sombres traduisent les épreuves, mais les touches dorées rappellent l’espoir. Une ode à ceux qui avancent, malgré les chutes, portés par leurs rêves."
    },
    {
        id: 39, title: 'Femme africaine', image: abstrait40, description:
            "Ce tableau abstrait représente une figure humaine féminine sur un fond rouge foncé. Avec un style expressif utilisant des lignes noires épaisses et des formes géométriques simples, il intègre des touches de jaune et de doré, suggérant des parures et des vêtements. Le visage, stylisé et presque caricatural, évoque une naïveté et une sophistication de la gente. Cette œuvre fusionne des éléments figuratifs et abstraits, mettant en lumière la beauté de toutes les femmes, en particulier celles d'Afrique avec de généreuses formes."
    },
    {
        id: 4, title: 'Réalités sociales', image: abstrait4, description:
            "Ce tableau saisissant dresse un contraste saisissant entre deux réalités sociales distinctes. D'abord, on distingue une ligne de coquillages jaunes sur un fond bleuté/grisâtre, suggérant une forme de séparation ou de barrière. Cette ligne symbolise la richesse et le pouvoir, isolant une partie de la population du reste. D'un côté, on aperçoit une personne aisée profitant d'un repas copieux avec de la boisson, tandis que de l'autre côté, une foule supplie pour obtenir ne serait-ce que les miettes. "
    },
    {
        id: 7, title: 'Le "m\'as tu vu ?"', image: abstrait8, description:
            "Ce tableau présente une scène moderne captivante où l'acte de charité se transforme en véritable performance. On y voit une personne qui donne l'aumône tout en se filmant, illustrant ainsi une volonté manifeste de se mettre en avant et de rechercher l'approbation sociale. Cette représentation soulève une critique profonde de l’égo surdimensionné et de notre dépendance aux smartphones."
    },
    {
        id: 8, title: 'Apparences trompeuses', image: abstrait9, description:
            "Cette œuvre est une peinture abstraite représentant deux figures humaines stylisées. Au lieu de formes réalistes, les corps sont symbolisés par des chiffres : un « 5 » pour le corps et un « 7 » pour la tête, tandis qu'un « 1 » plus grand porte une tête en « 4 ». Cette approche originale souligne que la valeur d'un individu ne dépend pas de son apparence physique. Le choix des chiffres et leur disposition mettent en avant que personnalité et caractère transcendent la morphologie. Avec son style abstrait et des couleurs audacieuses, la peinture rend ce message puissant et mémorable. "
    },
    {
        id: 9, title: 'L\'étudiant', image: abstrait10, description:
            "Ce tableau minimaliste dépeint une silhouette portant un sac, évoquant un élève, un étudiant ou un cadre. La figure, esquissée par de simples lignes blanches, contraste avec un arrière-plan texturé aux teintes pourpres et vertes, suggérant mouvement et agitation. L'ensemble évoque une dualité entre la représentation schématique du personnage et la complexité de son expérience, comme se rendre à une formation ou un service."
    },
    {
        id: 10, title: 'Le routier', image: abstrait11, description:
            "Ce tableau présente une esquisse stylisée d'une personne au volant d'une voiture, plongée dans un fond abstrait. L'esquisse évoque le métier de routier, de chauffeur tandis que le turquoise symbolise la liberté du voyage et la découverte de paysages. La partie inférieure, avec des teintes beiges et brunes agrémentées de taches sombres, suggère la fatigue et les difficultés, reflétant les aspects moins glamours du métier : la solitude et l'usure."
    },
    {
        id: 11, title: 'Une future mère', image: abstrait12, description:
            "Ce tableau offre une interprétation abstraite d'une femme enceinte, esquissée en blanc sur un fond vibrant de rouges et de turquoises, créant un contraste saisissant. Le style expressif, avec des traits énergiques, suggère à la fois mouvement et émotion. Les courbes du corps symbolisent la grossesse et reflètent l'état physique/émotionnel fragile de la femme pendant cette période. "
    },
    {
        id: 12, title: 'L\'agriculteur', image: abstrait13, description:
            "Ce tableau captivant est dominé par des tons de bleu et de vert foncé, avec des marques et des textures qui suggèrent le mouvement. Au centre, une figure stylisée évoque une personne penchée vers la terre, tenant des outils agricoles peints en blanc cassé sur un fond texturé et sombre. Cette œuvre utilise des symboles et des couleurs pour évoquer un thème agricole et la sensation de labeur dans les champs."
    },
    {
        id: 13, title: 'La complexité du cerveau humain', image: abstrait14, description:
            "Cette œuvre d'art abstraite évoque la profondeur et la complexité du cerveau humain, dominée par des couleurs jaunes et blanches. La partie supérieure présente des taches et des motifs rappelant la matière organique ou des connexions neuronales, tandis que la partie inférieure, plus claire, suggère un mouvement vers le bas avec ses lignes et formes."
    },
    {
        id: 14, title: 'L\'introverti', image: abstrait15, description:
            "Ce tableau représente une figure humaine assise, repliée sur elle-même. Son style est expressif et abstrait, avec de larges coups de pinceau pleins d'énergie. La couleur principale de la silhouette est un bleu profond, qui évoque à la fois des émotions intenses et un sentiment d'isolement. La posture de la figure, qui se recroqueville, montre une tendance à l'introversion. Les traits noirs, particulièrement sur les mains, peuvent symboliser des émotions refoulées, enfermées dans cette enveloppe bleue."
    },
    {
        id: 15, title: 'La résistance aux influences négatives', image: abstrait16, description:
            "Ce tableau présente une représentation stylisée d'une personne centrale en jaune, entourée de figures sombres qui semblent exercer une pression sur lui ou d'essayer de le distraire. Les chiffres et calculs simples sur ces figures symbolisent des tentatives de manipulation ou de distraction par des préoccupations superficielles. "
    },
    {
        id: 16, title: 'Ensemble pour le meilleur et contre le pire', image: abstrait17, description:
            "Ce tableau présente une représentation stylisée d'un couple sous un parapluie. Les personnages sont réduits à des formes linéaires jaune vif sur un fond abstrait bleu et vert. Le parapluie, également représenté de manière schématique, les surplombe. Le parapluie est un symbole évident de protection et de soin mutuel. Il suggère que le couple se soutient l'un l'autre face aux aléas de la vie. Le fond abstrait, avec ses nuances potentiellement sombres, peut symboliser les défis et les difficultés auxquels le couple doit faire face. Le parapluie les protège de cette \"tempête"
    },
    {
        id: 17, title: 'Le labeur accablant', image: abstrait18, description:
            "Cette œuvre présente une silhouette humaine stylisée et texturée, se détachant sur un fond vibrant de couleurs chaudes, allant du rose au jaune orangé. La figure semble porter un fardeau imposant, représenté par une forme volumineuse et drapée aux teintes pastel de bleu, rose et blanc, qui écrase visuellement la silhouette, accentuant l'impression de poids et d'effort. "
    },
    {
        id: 18, title: 'L\'allégorie de la vie', image: abstrait19, description:
            "Ce tableau offre une esquisse minimaliste d'une personne courant sur une plateforme étroite et flottante. Représentée par un simple bonhomme allumette, elle transporte un sac, symbolisant une course incessante et une charge à porter. L'arrière-plan, avec ses couleurs terreuses et formes floues, évoque le mouvement et l'instabilité. Le style surréaliste mélange figuratif et abstrait, créant une image à la fois poétique et mélancolique."
    },


];

const portraits = [
    { id: 1, title: 'Chanel COFFI ', image: figure1, description: "Artiste peintre béninois" },
    { id: 2, title: 'Dominique ZINKPÈ ', image: figure2, description: "Artiste peintre béninois" },
    { id: 3, title: 'M. Hermès  ', image: figure3, description: "Architecte du cabinet GH Design" },
    { id: 4, title: 'Jean Michel ABIMBOLA  ', image: figure4, description: "Ministre du Tourisme, de la Culture et des Arts au Bénin" },
    { id: 5, title: 'Jean Patrick GUICHARD ', image: figure5, description: "Galeriste" },
    { id: 6, title: 'Nathanaël HOUSSOU ', image: figure6, description: "Homme d'affaires béninois" },
    { id: 7, title: 'Romuald HAZOUMÈ  ', image: figure7, description: "Artiste peintre sculpteur béninois" },
    { id: 8, title: 'William CODJO ', image: figure8, description: "Directeur de l'ADAC Bénin" },
    { id: 9, title: 'Yassine LASSISSI  ', image: figure9, description: "Directrice des Arts et Visuels à l'ADAC" },
    { id: 10, title: 'Marie Cécile ZINSOU ', image: figure10, description: "Fondation ZINSOU" },
    { id: 12, title: '', image: figure11, description: "" },
    { id: 13, title: ' ', image: figure12, description: "" },
];

interface Oeuvre {
    id: number;
    title: string;
    image: string;
    description: string;
}

interface Portrait extends Oeuvre {
    description: string;
}

const Portfolio = () => {
    const [selectedOeuvre, setSelectedOeuvre] = useState<Oeuvre | Portrait | null>(null);

    const handleOeuvreClick = (oeuvre: Oeuvre | Portrait) => {
        setSelectedOeuvre(oeuvre);
        document.body.style.overflow = "hidden"; // Empêche le défilement de la page
    };

    const closeModal = () => {
        setSelectedOeuvre(null);
        document.body.style.overflow = "auto"; // Réactive le défilement
    };

    return (
        <div className="mt-10">
            <Title title="PORTFOLIO" />
            <h1 className="text-3xl font-normal text-center text-accent mb-4">
                Découvrez mes œuvres et projets artistiques
            </h1>

            <Title title="TABLEAUX ABSTRAITS" />
            <div className="grid md:grid-cols-3 gap-4 mb-10">
                {abstraits.map((abstrait) => (
                    <div key={abstrait.id} className="bg-base-300 p-5 h-fit rounded-lg shadow-lg">
                        <img
                            src={abstrait.image}
                            alt={abstrait.title}
                            className="w-full rounded-xl h-56 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => handleOeuvreClick(abstrait)}
                        />
                        <h1 className="my-2 font-bold">{abstrait.title}</h1>
                        <p className=" line-clamp-2">{abstrait.description}</p>
                    </div>
                ))}
            </div>

            <Title title="TABLEAUX FIGURATIFS" />
            <div className="grid md:grid-cols-3 gap-4">
                {portraits.map((portrait) => (
                    <div key={portrait.id} className="bg-base-300 p-5 h-fit rounded-lg shadow-lg">
                        <img
                            src={portrait.image}
                            alt={portrait.title}
                            className="w-full rounded-xl h-56 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => handleOeuvreClick(portrait)}
                        />
                        <h1 className="my-2 font-bold">{portrait.title}</h1>
                        <p className="text-gray-600 line-clamp-2">{portrait.description}</p>
                    </div>
                ))}
            </div>

            {/* Modal pour l'affichage en grand */}
            {selectedOeuvre && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div className="relative w-full max-w-6xl max-h-[90vh]">
                        <button
                            onClick={closeModal}
                            className="absolute -top-10 right-0 text-white text-4xl hover:text-accent transition-colors"
                        >
                            &times;
                        </button>

                        <div className="flex flex-col md:flex-row gap-8 h-full">
                            {/* Image - prend toute la largeur sur mobile */}
                            <div className="flex-1 md:max-w-[50%]">
                                <img
                                    src={selectedOeuvre.image}
                                    alt={selectedOeuvre.title}
                                    className="w-full max-h-[60vh] md:max-h-[80vh] object-contain"
                                />
                            </div>

                            {/* Description - en dessous sur mobile, à côté sur desktop */}
                            <div className="flex-1 text-white overflow-y-auto max-h-[30vh] md:max-h-[80vh] bg-black bg-opacity-50 p-4 rounded-lg">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">{selectedOeuvre.title}</h2>
                                <p className="whitespace-pre-line text-sm md:text-base">{selectedOeuvre.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Portfolio;
