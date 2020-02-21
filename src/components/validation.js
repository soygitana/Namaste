    //  validation for contact form 

    let validate = (name, email, msg, phone) => {

        const errors = [];

        function emailIsValid(email) {
            const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
            return validEmailRegex.test(email)
        }


        if (name.length === 0) {
            errors.push("name can't be empty");
            console.log('invalid name')
        }
        if (email.length === 0 || !emailIsValid(email)) {
            errors.push("invalid email");
            console.log('incorrect email')
        }
        if (phone.length < 9) {
            errors.push("invalid phone number");
            console.log('incorrect phone number')
        }
        if (msg.length < 10) {
            errors.push("message should be at least 10 characters long");
            console.log('invalid message')
        }


        return errors;
    }

    export {
        validate
    };



    