import Title from "./Title";
import about from "../assets/about.jpg";

const Contact = () => {
    return (
        <div className="px-4 py-16 md:px-24" id="Contact">
            <Title title="CONTACTEZ MOI" />
            <div className="bg-base-200 flex justify-center items-center py-10">
                <div className="flex flex-col-reverse lg:flex-row-reverse items-center max-w-6xl mx-auto">

                    {/* Formulaire */}
                    <div className="w-full max-w-md bg-base-100 p-6 rounded-lg shadow-2xl">
                        <form className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Nom</span>
                                </label>
                                <input type="text" placeholder="Votre nom" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Votre mail" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea placeholder="Votre message" className="textarea textarea-bordered w-full h-32" required></textarea>
                            </div>
                            <div className="form-control">
                                <a href="https://Wa.me/22961400743" className="btn btn-accent w-full">Envoyer</a>
                            </div>
                        </form>
                    </div>

                    {/* Image */}
                    <div className="w-full flex justify-center mb-6 lg:mb-0">
                        <img
                            alt="À propos"
                            src={about}
                            className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-full max-w-sm rounded-lg shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
