import React from "react";
import inbox from "../images/inbox.png";

const VerifyContent = () => {
  return (
    <div className="content">
      <div className="verify-email flex flex-col items-center justify-center sm:h-screen text-gray-600 m-auto px-2">
        <h1 className="text-3xl font-bold mb-4 text-center text-black">Please verify your email...</h1>
        <div className="email-icon mb-4">
          <img src={inbox} alt="Email Icon" />
        </div>
        <p className="mb-2 text-center">
          Please verify your email address. We've sent a confirmation email to:
        </p>
        <p className="mb-4 text-center font-bold text-black">account@refero.design</p>
        <p className="mb-4 text-center">
          Click the confirmation link in that email to begin using Dribbble.
        </p>
        <p className="mb-2 text-center">
          Didn't receive the email? Check your Spam folder, it may have been
          caught by a filter. If you still don't see it, you can{" "}
          <a href="#" className="text-pink-500 hover:underline">
            resend the confirmation email.
          </a>
        </p>
        <p className="mb-4 text-center">
          Wrong email address?{" "}
          <a href="#" className="text-pink-500 hover:underline">
            Change it.
          </a>
        </p>
      </div>
    </div>
  );
};

export default VerifyContent;
