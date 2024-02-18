import "./ContactFormStyles.css";

function ContactForm() {
    return(
        <div className="form-container">
            <h1>Send Us A Message!</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message" rows={4}></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;