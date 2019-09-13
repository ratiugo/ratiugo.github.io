import React from "react";
import "./ContactMeForm.css";

const ContactMeForm = () => {
    return(

    <form className="black-80 contactForm ">
      <div className="bg-black-10 br3 shadow-5">

        <p className="pt3 pb3 f4-ns black-80 ml4">Get in touch.</p>

        <div className = "pt3 pb1 flex justify-center">
            <input
                   className="f9 f5-l input-reset bn br-pill background-color pa3 lh-solid w-75"
                   type="text"
                   placeholder = "Name"
                   required = "required"
            />
        </div>

        <div className = "pt1 pb1 flex justify-center">
            <input
                   className="f9 f5-l input-reset bn br-pill background-color pa3 lh-solid w-75"
                   type="text"
                   placeholder = "Email"
                   required = "required"
            />
        </div>

        <div className = "pt1 pb3 flex justify-center">
            <input
                   className="f9 f5-l input-reset bn br-pill background-color pa3 lh-solid w-75"
                   type="text"
                   placeholder = "Subject"
                   required = "required"
            />
        </div>

        <div className = "pl3 pr3 flex justify-center">
            <textarea cols = "50"
                      rows = "10"
                      id="comment"
                      name="comment"
                      className="db border-box hover-black background-color br4 measure mb2"
                      aria-describedby="comment-desc"
                      required = "required">
            </textarea>
        </div>

        <div className = "pt3 pb3 flex justify-center">
            <input className="dim br-pill f6 f5-l button-reset bn pv3 tc bg-animate bg-black-60 hover-bg-black white-80 pointer w-50"
                   type="submit"
                   value="Email Me" />
        </div>

      </div>
    </form>


 );
}

export default ContactMeForm;