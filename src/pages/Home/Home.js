import Arts from "../../components/Arts/Arts";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Collection from "../../components/Collection/Collection";
import Footer from "../../components/Footer/Footer";

const Home  = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Collection/>
            <Arts/>
            <Footer/>
        </div>
    )
}

export default Home;
