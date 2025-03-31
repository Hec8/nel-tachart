import Title from "./Title";
import about from "../assets/about.jpg";
// Importez vos autres images ici
import image1 from "../assets/oeuvre6.jpg";
import image2 from "../assets/assis.jpg";
import image3 from "../assets/oppose.jpg";
import image4 from "../assets/masque.jpg";
import image5 from "../assets/ascension.jpg";
import image6 from "../assets/liens.jpg";
import image7 from "../assets/labeur.jpg";

const AboutPlus = () => {
    // Tableau de contenu pour faciliter l'alternance texte/image
    const content = [
        {
            text: [
                "Nel Tachart de son vrai nom, Léonel ZADJI est un Artiste peintre plasticien béninois, autodidacte, né le 1er Mars en 1997 à Cotonou au Bénin. Il a grandi dans les environs de la Place de l'Etoile Rouge en plein centre-vill et réside actuellement à Dèkoungbé un quartier populaire de Cotonou, où son univers est confiné dans un atelier.",
                "Il est spécialisé dans la réalisation des œuvres d'art sur du verre transparent et est aussi réputé pour commencer ses œuvres à l'envers. A la stupéfaction du public, il commence sa peinture sur le verre avec les détails et finit par le fond pour obtenir un résultat final époustouflant qui dégage de l'énergie et dévoile autant d'expressions et de moralités à retenir.",
                "Fortement impliqué dans le body painting, les portraits, les tableaux d'art abstrait, le design de peinture sur vêtements dont il a sorti deux collections ainsi que les fresques murales pendant les cinq premières années de sa carrière, il opte pour la réalisation des œuvres d'art créatives et abstraites afin de léguer un héritage concret qui interpelle tout le monde, transmet des émotions et valorise les enseignements de la culture africaine."
            ],
            image: about
        },
        {
            text: [
                "Son nom d'artiste Nel Tachart est inspiré par les tâches que laissaient les peintures sur ses vêtements lorsqu'il travaillait, combiné alors au diminutif de son prénom Léonel. Très jeune, il est fasciné par la peinture qu'il découvre grâce à son père, lui-même Artiste peintre plasticien avec qui, il commence à développer son talent à partir de sa première année de collège, il venait d'avoir 10 ans. Son père sera une source de motivation et un recueil de savoir auprès duquel il fera ses premiers pas, poussé par la curiosité et la fierté qu'il éprouvait envers les résultats finaux des œuvres de celui-ci.",
                "Il a fait des études en architecture au Lycée Technique Coulibaly de Cotonou, où il a été gradué d'un DTI et du BAC F4 en 2016. Léonel découvre au lycée la peinture sur verre clair et s'y intéresse au point de prendre la décision en 2018 de se focaliser entièrement sur cette passion suite à un parcours universitaire de deux années, de plus en plus attiré vers l'art sous toutes ses formes. Les anciens camarades et son carnet d'adresse seront alors à l'origine des premières commandes.",
                "Ces revenus provenaient donc à l'époque du body painting, de portraits, de peinture sur vêtements et de petits tableaux abstraits puisqu'il n'était plus à la charge de ses parents."
            ],
            image: image2
        },
        {
            text: [
                "Ainsi au cours des années 2018 et 2019, l'artiste a participé au Concours de Fresques Murales les Amazones du XVIIIème au XXIème siècle, au Festival Afrik Mod'Arts et aux expositions telles que la Journée Internationales des Arts Plastiques célébrée dans plusieurs pays de la sous-région ainsi qu'au Festival Racines qui a eu lieu du 28 au 30 Novembre 2019 au Novotel de Cotonou.",
                "En outre, en 2020, Nel Tachart a participé à l'exposition AFRODISIAC. Il réalise la même année le portrait d'un lion en abstrait sur du verre clair pour le compte de l'Agence de communication JAWUNTAA, productrice de la première série de téléréalité au Bénin.",
                "Il devient ensuite l'un de leurs sponsors pour les saisons 3 en 2020 et 4 en 2021 de l'émission DIS MOI QUI EST LA PLUS BELLE, en offrant un tableau de verre à chaque Reine d'or. Ce qui le met en valeur à l'international à travers Canal 3, la chaine de télé qui diffuse l'émission, qu'on peut capter avec Canal+, ce qui signifie qu'une forte audience aurait remarqué la publicité du travail de Nel Tachart."
            ],
            image: image3
        },
        // Ajoutez les autres sections de texte et images ici...
        {
            text: [
                "Hormis les portraits, son art est très riche, très expressif et regorge d'émotions. Il a une très belle histoire à raconter car sa décision de faire carrière et se personnaliser dans son style unique est inspirée du quotidien lié à nos valeurs qui se perdent, c'est-à-dire le système éducatif africain de base qui s'effrite peu à peu avec les nouvelles tendances auxquelles s'attache les jeunes générations.",
                "Son but est alors de matérialiser cet état des faits pour une prise de conscience générale comme un appel à l'action collective tout en se servant des symboles, des formes géométriques ou encore du recyclage, autant de techniques qui nous rappellent nos origines comme l'utilisation des chiffres, la numérologie pour ressortir des personnages percutants et expressifs avec une énergie forte car Nel dit toujours que les chiffres ne mentent jamais.",
                "Influencé par une année où il remarquait souvent sur des chiffres pairs autour de lui que ce soit sur les calendriers ou sur les horloges. Après de nombreuses recherches, il comprend que les chiffres ont une signification profonde et qu'ils transmettent des émotions, des sentiments que seuls les humains peuvent ressentir ou comprendre."
            ],
            image: image1 // Réutilisez une image ou importez-en une nouvelle
        },
        {
            text: [
                " L’artiste décide donc de s’en inspirer pour retransmettre à travers ses tableaux une qualité de message qui évoque essentiellement les problèmes au quotidien des africains ainsi que la solution qu’il y propose, c’est-à-dire la renaissance de l’éducation du passé à travers la mémoire collective. L'art de Nel Tachart sur le verre transparent tire son inspiration de figures éminentes telles",
                "que Marcel Duchamp, Simon Berger, Miquel Barceló, Pierre ANTOINE, et Christiane Lemez, tous reconnus pour leur remarquable travail dans le domaine du verre. Ces artistes renommés ont joué un rôle crucial dans la formation de la vision artistique de Nel Tachart, lui montrant des perspectives uniques et des techniques innovantes. En s'inspirant de leur expertise, Nel Tachart aspire à représenter son pays, le Bénin, sur la scène artistique",
                "internationale, faisant ainsi écho à la renommée de ces maîtres du verre. Son ambition est de projeter les couleurs et la créativité de sa patrie à travers son art, tout en inscrivant son propre nom parmi ceux qui ont su hisser le verre transparent à des sommets artistiques inégalés."
            ],
            image: image4 // Réutilisez une image ou importez-en une nouvelle
        },
        {
            text: [
                " Son langage pictural s’appuie sur des matériaux comme le verre transparent, la peinture acrylique, le vernis, le tissu, la calle de sable, l’eau, les coquillages et la récupération d’objets qu’ils soient de nature mécanique ou organique.Il s’inspire de tout ce qui circule sur les réseaux sociaux, de la musique, des rêves et de ses propres émotions. ",
                "Le sable, un outil insolite et l’eau source de vie font énormément partie de son travail, sa philosophie étant de donner vie à ses œuvres, le sable permet de façonner de manière très expressive sa vision de l’œuvre et de matérialiser le Memento homo de l’œuvre en injectant un souffle à sa création « Souviens toi homme, que tu es poussière et que tu redeviendras poussière » Gn 3,19.",
                " Ces composantes rendent beaucoup plus pratique sa technique qui d’ailleurs est très compliquée car il commence la peinture détail par détail, avant de réaliser le fond jusqu’à l’obtention du résultat final. Son objectif est également de donner le goût de l’art et de la créativité aux enfants en leur faisant remarquer les couleurs, les chiffres, les symboles et les éléments de recyclage sur lesœuvres d’art."
            ],
            image: image6// Réutilisez une image ou importez-en une nouvelle
        },
        {
            text: [
                "  Sa couleur préférée pour peindre reste le jaune car elle est belle et rayonnante, comme le soleil, cette couleur transmet selon lui de paisibles émotions de joie, d’espoir, d’enthousiasme et de persévérance que véhiculent ses œuvres. Elles propagent d’ailleurs des ondes positives et envoie un message fort pour dire qu’on peut vivre et subir des choses dures voire horribles et s’en sortir si on admet que le plus important est de ne pas perdre la gaieté et la joie de vivre qui font de nous des humains en perpétuelle évolution destinés à de plus grands desseins.",
                " Son art vivra également des moments mémorables comme sa rencontre avec le public amateur d’art, les entrevues privées avec de grandes personnalités ainsi que ses pertinentes discussions avec des collègues artistes de son pays et d’ailleurs. Ses œuvres parlent d’elles mêmes et révèlent ce qu’il pense du monde d’aujourd’hui.",
                "  Quand il se sert de ses mains, Dieu l’inspire, c’est un véritable talent qui mérite l’attention du public ainsi que le support de personnes bien placées. Conscient qu’il lui reste du chemin à parcourir, il garde la foi en son travail et est déterminé à s’améliorer. Avec la grâce divine, il rendra fière sa famille, particulièrement son père qui est lui aussi du domaine. Ses œuvres traverseront les frontières, iront au-delà des océans pour représenter son pays en Afrique et dans le monde à travers son art sur verre transparent qui demeure une activité peu connue jusque là."
            ],
            image: image5 // Réutilisez une image ou importez-en une nouvelle
        },
        {
            text: [
                "  Nel souhaite éveiller la créativité des enfants en les attirant grâce aux couleurs, les chiffres et symboles.Il voit son art comme un moyen de transmettre des messages puissants sur l'éducation et la culture africaine. En 2023, il est récompensé en tant que Best Visual Artist lors des Open Conscience Awards. ",
                "Projets d’expositions En 2024, il est sollicité par Mr Dieudonné METONOU, promoteur du site touristique Détour par Gogotinkpon.A l’occasion de la 5ème édition du FESTILUM gbakpèzogbin, Nel Tachart est alors invité pour dispenser aux enfants, un atelier d’initiation à l’art  suivi d’une exposition des œuvres sur le lac dans la période des fêtes de fin d’année.",
                " Nel Tachart est un artiste en pleine ascension, déterminé à représenter le Bénin sur la scène artistique internationale. Avec une foi inébranlable dans son travail et un désir de continuer à évoluer, il aspire à toucher les cœurs et les esprits à travers son art unique sur verre transparent."
            ],
            image: image7// Réutilisez une image ou importez-en une nouvelle
        },
    ];

    return (
        <div className="mt-10 px-4 sm:px-6 lg:px-20">
            <Title title="BIOGRAPHIE DE NEL TACHART" />
            <div className="bg-base-200 p-4 sm:p-6 lg:p-10 rounded-xl shadow-lg">
                <h1 className="text-2xl sm:text-3xl font-bold text-accent mb-6 text-center">
                    Nel Tachart - Artiste peintre plasticien
                </h1>

                {content.map((section, index) => (
                    <div
                        key={index}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center lg:items-start mb-8 sm:mb-10 gap-4 sm:gap-6`}
                    >
                        {/* Image */}
                        <div className="w-full lg:w-1/3 flex justify-center">
                            <img
                                src={section.image}
                                className="w-full max-w-xs sm:max-w-md h-auto rounded-lg shadow-lg sm:shadow-xl object-cover"
                                alt={`Exemple de travail de Nel Tachart ${index + 1}`}
                            />
                        </div>

                        {/* Texte */}
                        <div className="w-full lg:w-2/3 px-0.5 sm:px-0">
                            {section.text.map((paragraph, pIndex) => (
                                <p
                                    key={pIndex}
                                    className="text-base sm:text-lg leading-relaxed sm:leading-loose mb-3 sm:mb-4 text-justify"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutPlus;