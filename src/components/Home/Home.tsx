import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import IntroBanner from "./IntroBanner/IntroBanner";
import OurStory from "./OurStory/OurStory";
import Reservation from "./Reservation/Reservation";
import TasteTheTradition from "./TasteTheTradition/TasteTheTradition";
import Testimonial from "./Testimonial/Testimonial";

 

const Home = () => {
    return (
        <div>
            <Banner />
            <OurStory />
            <TasteTheTradition />
            <IntroBanner />
            <Testimonial />
            <Reservation />
            <Contact />
        </div>
    );
};

export default Home;