import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import homepage from "../assets/homepage.jpg";

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
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

    const imageVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            id="Home"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="hero max-h-screen mt-12 relative overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <img
                        src={homepage}
                        alt="Page d'accueil"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </motion.div>

                <motion.div
                    className="hero-content text-neutral-content text-center relative z-10"
                    variants={containerVariants}
                >
                    <motion.div className="max-w-2xl" variants={itemVariants}>
                        <motion.h1
                            className="mb-6 text-5xl md:text-7xl font-bold tracking-tight"
                            variants={itemVariants}
                        >
                            LEONEL ZADJI
                        </motion.h1>
                        <motion.p
                            className="mb-8 text-xl md:text-2xl font-light tracking-wide"
                            variants={itemVariants}
                        >
                            Artiste peintre - Déco designer
                        </motion.p>
                        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/portfolio"
                                className="btn btn-accent btn-lg px-8 text-lg font-medium transform transition-all duration-300 hover:shadow-lg"
                            >
                                Explorer mon art
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Home