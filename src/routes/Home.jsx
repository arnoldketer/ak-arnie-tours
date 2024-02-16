import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

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

        
        
        </>
    )
}

export default Home;