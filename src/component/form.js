 function Form() {
    return(
        <div className="form-container">
            <div className="formText">
                <h1>Enter your information in following form..!</h1>
            </div>
        <div className="form">
        <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="1b2fb8e3-cc14-4131-8f05-ef4c0aa80689"/>
        <input type="text" name="name" placeholder="First name" required/>
        <input type="text" name="name" placeholder="Last name" required/>
        <input type="email" name="email" placeholder="Enter your email" required/>
        <input type="number" name="Mobile number" placeholder="Enter your number" required/>
        <textarea name="message" placeholder="Text me..." required></textarea>
        <button className="btn-sent" type="submit">SENT</button>
       </form>
         </div>
    </div>

    )
}
export default Form;