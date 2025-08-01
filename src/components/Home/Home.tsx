import Banner from "./Banner/Banner";
import IntroBanner from "./IntroBanner/IntroBanner";
import OurStory from "./OurStory/OurStory";
import TasteTheTradition from "./TasteTheTradition/TasteTheTradition";

 

const Home = () => {
    return (
        <div>
            <Banner />
            <OurStory />
            <TasteTheTradition />
            <IntroBanner />
        </div>
    );
};

export default Home;