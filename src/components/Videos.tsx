
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video5 from "../assets/videos/video5.mp4";
import video6 from "../assets/videos/video6.mp4";
import video7 from "../assets/videos/video7.mp4";
import video8 from "../assets/videos/video8.mp4";
import video9 from "../assets/videos/video9.mp4";
import video10 from "../assets/videos/video10.mp4";
import Title from "./Title";
const Video = () => {


    return (
        <>
            <div className="mt-10">
                <Title title="VIDEOS" />
                <h1 className="text-3xl font-normal text-center text-accent mb-4">
                    Découvrez quelques vidéos de mes oeuvres
                </h1>
                <div className="grid md:grid-cols-3 gap-4 mt-5">
                    {[video1, video2, video3, video4, video5, video6, video7, video8, video9, video10,].map((video, index) => (
                        <div key={index} className="bg-base-300 p-5 h-fit rounded-lg shadow-lg">
                            <video className="w-full rounded-xl" controls>
                                <source src={video} type="video/mp4" />
                                Votre navigateur ne supporte pas la lecture des vidéos.
                            </video>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}
export default Video