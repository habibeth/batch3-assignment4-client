import AdvertisementCard from "../AdvertisementCard/AdvertisementCard";
import Carousel from "../Carousel/Carousel";
import CustomerReviews from "../CustomerReviews/CustomerReview";
import TopBrand from "../Brands/TopBrand";
import FeatureProduct from "../FeatureProduct/FeatureProduct";
import WhyChooseMechanical from "../WhyChooseMechanical/WhyChooseMechanical";


const Home = () => {
    return (
        <div>
            <Carousel />
            <AdvertisementCard />
            <FeatureProduct />
            <TopBrand />
            <CustomerReviews />
            <WhyChooseMechanical />
        </div>
    );
};

export default Home;