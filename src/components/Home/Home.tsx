import Banner from "./Banner/Banner";
import IntroBanner from "./IntroBanner/IntroBanner";
import OurStory from "./OurStory/OurStory";
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
        </div>
    );
};

export default Home;