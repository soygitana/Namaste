import React from "react";

const withSuccessHandling = WrappedComponent => ({ showSuccess, children }) => {
    return (
        <WrappedComponent>
            {showSuccess && <div className="success">Your message has been successfully sent.<br />
            We will contact you very soon! :)</div>}
            {children}
        </WrappedComponent>
    );
};

const SuccessMessage = withSuccessHandling(({ children }) => <div>{children}</div>)


export default SuccessMessage;