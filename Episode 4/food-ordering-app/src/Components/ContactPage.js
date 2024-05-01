const ContactPage = () => {
    return(
        <>
            <h1 className="font-bold test-3xl p-4 m-4">Contact Us Page</h1>
            <form>
                <input 
                    className="p-2 m-2 border border-black"
                    type="text"
                    placeholder="Name"
                />
                <input 
                    className="p-2 m-2 border border-black"
                    type="text"
                    placeholder="Message"
                />
                <button
                    className="border border-black p-2 m-2 bg-gray-100 rounded-lg"
                >
                    Submit
                </button>
            </form>
        </>
    );
}

export default ContactPage