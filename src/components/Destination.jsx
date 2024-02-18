import Mountain1 from '../assets/1.jpg';
import Mountain2 from '../assets/2.jpg';
import Mountain3 from '../assets/5.jpg';
import Mountain4 from '../assets/8.jpg';
import DestinationData from './DestinationData';
import "./DestinationStyles.css";

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the oppurtunity to see a lot within a time frame </p>
            <DestinationData
                className="first-des"
                heading="Taal Volcano, Batangas"
                text="It is located in the middle of Taal Lake and is the smallest active volcano in the world. It is a popular tourist destination and is known for its picturesque view."
                img1={Mountain1}
                img2={Mountain2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Mt. Danguldul, Batangas"
                text="It is a popular destination for hikers and mountain climbers. It is known for its beautiful view of the sunset and sunrise."
                img1={Mountain3}
                img2={Mountain4}
            />
        </div>
    );
};

export default Destination;