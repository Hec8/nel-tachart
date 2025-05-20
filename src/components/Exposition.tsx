import Title from "./Title";
import oeuvre1 from "../assets/accueil1.jpg";
import oeuvre2 from "../assets/accueil2.jpg";
import oeuvre3 from "../assets/accueil5.jpg";
import oeuvre4 from "../assets/accueil3.jpg";
import oeuvre5 from "../assets/accueil4.jpg";
import oeuvre6 from "../assets/accueil6.jpg";
import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { useState, useCallback } from "react";

const oeuvres = [
    { id: 1, title: "", image: oeuvre1 },
    { id: 2, title: "", image: oeuvre2 },
    { id: 3, title: "", image: oeuvre3 },
    { id: 4, title: "", image: oeuvre4 },
    { id: 5, title: "", image: oeuvre5 },
    { id: 6, title: "", image: oeuvre6 },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.2
        }
    }
};

const imageVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const Exposition = () => {
    const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});

    const handleImageLoad = useCallback((id: number) => {
        setLoadedImages(prev => ({
            ...prev,
            [id]: true
        }));
    }, []);
    return (
        <motion.div 
            id="Exposition"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Title title="QUELQUES OEUVRES" />
            </motion.div>

            <motion.div 
                className="grid md:grid-cols-3 gap-4" 
                id="Portfolio"
                variants={containerVariants}
            >
                {oeuvres.map((oeuvre) => (
                    <motion.div 
                        key={oeuvre.id} 
                        className="bg-base-300 p-5 h-fit rounded-lg shadow-lg overflow-hidden"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <motion.div
                            className="overflow-hidden rounded-xl"
                            variants={imageVariants}
                        >
                            <div className="relative h-56 bg-gray-100 rounded-xl overflow-hidden">
                                {!loadedImages[oeuvre.id] && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-8 h-8 border-4 border-accent/30 border-t-accent rounded-full animate-spin"></div>
                                    </div>
                                )}
                                <LazyLoadImage
                                    src={oeuvre.image}
                                    alt={oeuvre.title}
                                    effect="opacity"
                                    className={`w-full h-full object-cover transition-opacity duration-500 ${loadedImages[oeuvre.id] ? 'opacity-100' : 'opacity-0'}`}
                                    afterLoad={() => handleImageLoad(oeuvre.id)}
                                    threshold={100}
                                />
                            </div>
                        </motion.div>
                        <motion.h1 
                            className="my-2 font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {oeuvre.title}
                        </motion.h1>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Exposition;
