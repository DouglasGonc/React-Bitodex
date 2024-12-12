import Banner from "../layouts/Banner-home";
import Companhias from "../layouts/Companies";
import Comofunciona from "../layouts/Section-Works";

const Home: React.FC = () => {
    return (
        <>
            <Banner/>
            <Companhias/>
            <Comofunciona/>
        </>
    );
};

export default Home;