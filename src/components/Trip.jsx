import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip () {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You Can discover unique destinations using Google Maps.</p>
            <div className="trip-card">
                <TripData
                    image={Trip1}
                    heading="Trip to Indonesia"
                    text="Indonesia is a Southeast Asian country and is the world's largest island country, with more than seventeen thousand islands."
                />
                 <TripData
                    image={Trip2}
                    heading="Trip to Malaysia"
                    text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo."
                />
                 <TripData
                    image={Trip3}
                    heading="Trip to France"
                    text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
                />
            </div>
        </div>
    )
}

export default Trip;