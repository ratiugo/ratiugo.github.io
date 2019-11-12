import React, {Component} from "react";
import "./ContactMeForm.css";


  class ContactMeForm extends Component {

    constructor() {
      super();

      this.state = {
        Name: "",
        Email: "",
        Subject: "",
        Message: "",
        response: ""
      };

      this.handleSubmit = this.handleSubmit.bind(this);
    };

    //Set state to form fields
    handleNameChange = (event) => {
      this.setState({Name: event.target.value});
    };

    //Set state to form fields
    handleEmailChange = (event) => {
      this.setState({Email: event.target.value});
    };

    //Set state to form fields
    handleSubjectChange = (event) => {
      this.setState({Subject: event.target.value});
    };

    //Set state to form fields
    handleMessageChange = (event) => {
      this.setState({Message: event.target.value});
    };

    //Updates response property in this.state on successful response from fetch below in order to display success message
    updateStateOnSuccessfulSubmit = (success) => {
      let result = success.result;
      this.setState({response: result});
      console.log(this.state);
    };

    //POST form data stored in this.state to AWS API Gateway - invokes Lambda function which sends the form data via AWS SES email
    handleSubmit(event) {

      event.preventDefault();
      let formData = JSON.stringify(this.state);

      fetch("https://ofo4ow5i98.execute-api.us-west-2.amazonaws.com/production/{proxy+}", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => data.json())
        .then(success => this.updateStateOnSuccessfulSubmit(success));

    };

    //Switch back to contact form if user presses "back" after submitting form
    emptyResponseState = () => {
      this.setState({response: ""});
    };


    render(){

      const {response} = this.state;

      if (response === "Success."){
        return(
          <div className="bg-black-10 br3 shadow-5 vh-50 w-75 center ma3 flex flex-wrap">
            <div className = "fl flex items-start">
              <div className = "pointer dim mid-gray b background-color br-pill pa2 ma2"
                          onClick = {this.emptyResponseState} >
                          Back
              </div>
            </div>
              <div className = "flex items-start w-100 height">
                <p className = "center mt5 pa3">Thanks for the message! I'll get back to you as soon as I can.</p>
              </div>
          </div>
        );
      } else {
          return(
            <form className="black-80 contactForm " onSubmit = {this.handleSubmit}>
              <div className="bg-black-10 br3 shadow-5">

                <p className="pt3 pb3 f4-ns black-80 ml4">Get in touch.</p>

                <div className = "pt3 pb1 flex justify-center">
                    <input
                           className="f9 f5-l input-reset bn br-pill background-color pa3 lh-solid w-75"
                           type="text"
                           placeholder = "Name"
                           value = {this.state.Name}
                           onChange = {this.handleNameChange}
                           id = "name"
                           name = "name"
                           required = "required"
                    />
                </div>

                <div className = "pt1 pb1 flex justify-center">
                    <input
                           className="f9 f5-l input-reset bn br-pill background-color pa3 lh-solid w-75"
                           type="text"
                           placeholder = "Email"
                           value = {this.state.Email}
                           onChange = {this.handleEmailChange}
                           id = "email"
                           name = "email"
                           required = "required"
                    />
                </div>

                <div className = "pt1 pb3 flex justify-center">
                    <input
                           className="f9 f5-l input-reset bn br-pill background-color pa3 lh-solid w-75"
                           type="text"
                           placeholder = "Subject"
                           value = {this.state.Subject}
                           onChange = {this.handleSubjectChange}
                           id = "subject"
                           name = "subject"
                           required = "required"
                    />
                </div>

                <div className = "pl3 pr3 flex justify-center">
                    <textarea cols = "50"
                              rows = "10"
                              value = {this.state.Message}
                              onChange = {this.handleMessageChange}
                              id="message"
                              name="message"
                              className="db border-box hover-black background-color br4 measure mb2"
                              aria-describedby="comment-desc"
                              required = "required">
                    </textarea>
                </div>

                <div className = "pt3 pb3 flex justify-center">
                    <input className="dim br-pill f6 f5-l button-reset bn pv3 tc bg-animate bg-black-60 hover-bg-black white-80 pointer w-50"
                           type="submit"
                           value="Email Me"
                           />
                </div>

              </div>
            </form>

        );
      };
  };
};

export default ContactMeForm;