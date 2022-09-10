import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Featured from "../Components/Featured";
import PropertyLists from "../Components/PropertyLists";
import PopularLists from "../Components/PopularLists";
import MailList from "../Components/MailList";

const Home = () => {

    return (
        <>
            <Header />
            <Hero/>
            <Featured/>
            <PropertyLists/>
            <PopularLists/>
            <MailList/>
            <Footer />
        </>
    )
}

export default Home
