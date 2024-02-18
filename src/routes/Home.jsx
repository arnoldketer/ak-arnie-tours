import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home () {
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero"
                heroImg="src\assets\12.jpg"
                title="Your Journey Your Story"
                text="Choose Your Favorite Destination."
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination/>
            <Trip/>

        
        
        </>
    )
}

export default Home;