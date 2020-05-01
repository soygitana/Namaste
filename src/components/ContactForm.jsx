import React, { Component } from "react";
import ReactDOM from "react-dom";

import { validate } from '../components/validation'
import SuccessMessage from './SuccessMessage.jsx';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            showSuccess: false,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const name = ReactDOM.findDOMNode(this._nameInput).value;
        const email = ReactDOM.findDOMNode(this._emailInput).value;
        const msg = ReactDOM.findDOMNode(this._messageInput).value;
        const phone = ReactDOM.findDOMNode(this._phoneInput).value;

        let bodyFormData = { name, email, msg, phone };

        console.log(bodyFormData)

        const errors = validate(name, email, msg, phone);

        if (errors.length > 0) {
            this.setState({ errors });
            console.log("invalid form!")
            return;
        }

        if (errors.length === 0) {
            console.log("valid form!")

            this.myFormRef.reset();

            this.setState({
                showSuccess: "true",
                errors: []
            });
         }
    }

    render() {
        const { errors } = this.state;
        return (
            <>
                <SuccessMessage showSuccess={this.state.showSuccess} />
                <form ref={(el) => this.myFormRef = el} onSubmit={this.handleSubmit}>
                    <div className="container-flex">
                        <div className="box-flex">
                            <label htmlFor="name"></label>
                            <input name='name' ref={nameInput => (this._nameInput = nameInput)}
                                type="text"
                                placeholder="your name" />
                            {errors.length > 0 &&
                                <span className="error">please enter your name</span>}
                        </div>
                        <div className="box-flex">
                            <label htmlFor="phone"></label>
                            <input name='phone' ref={phoneInput => (this._phoneInput = phoneInput)}
                                type="number" placeholder="your phone number"
                            />
                            {errors.length > 0 &&
                                <span className="error">phone number is invalid</span>}
                        </div>
                        <div className="box-flex">
                            <label htmlFor="email"></label>
                            <input name='email' ref={emailInput => (this._emailInput = emailInput)}
                                type="text"
                                placeholder="email" />
                            {errors.length > 0 &&
                                <span className="error">email address is invalid</span>}
                        </div>
                    </div>
                    <div className="container-flex">
                        <div className="box-flex">
                            <label htmlFor="message"></label>
                            <textarea name='message' ref={messageInput => (this._messageInput = messageInput)}
                                type="text"
                                placeholder="message" />
                            {errors.length > 0 &&
                                <span className="error">your message needs to be 10 characters or longer</span>}
                        </div>
                    </div>
                    <div className='container-flex'>
                        <button type="submit" className="button submitBtn">Submit</button>
                    </div>
                </form>
            </>
        )
    }
}

export default ContactForm;

