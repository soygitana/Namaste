import React from "react";

const withSuccessHandling = () => ({ showSuccess, children }) => {
    return (
      <>
        {showSuccess && (
          <div className="success">
            Your message has been successfully sent.
            <br />
            We will contact you very soon! :)
          </div>
        )}
        {children}
      </>
    );
  };

  const SuccessMessage = withSuccessHandling(({ children }) => (
    <div>{children}</div>
  ));
  

export default SuccessMessage;
