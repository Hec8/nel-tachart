import { Link } from "react-router-dom";
import homepage from "../assets/homepage.jpg";

const Home = () => {
    return (
        <>
            <div id="Home">
                <div
                    className="hero max-h-screen mt-12"
                >
                    <img src={homepage} alt="Page d'accueil" className="max-h-[400px] w-full object-cover" />
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">NEL TACHART</h1>
                            <p className="mb-5 font-semibold">
                                Artiste peintre - Déco designer
                            </p>
                            <Link to="/portfolio" className="btn btn-accent">Explorer mon art</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home