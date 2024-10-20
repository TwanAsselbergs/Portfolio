import React from "react";

const ContactSection = () => {
  return (
    <div id="contact" className="w-[90%] py-20 mx-auto">
      <h1 className="text-[#c4cfde] text-[34px] md:text-[40px] lg:text-[60px] my-2 text-center font-bold">
        Contact
      </h1>
      <form
        method="POST"
        action="mailto: twanasselbergs@outlook.com"
        className="flex justify-center items-center mx-auto flex-col my-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="px-3 py-2 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="E-mail"
            className="px-3 py-2 rounded-lg"
            required
          />
        </div>
        <div className="">
          <button type="submit" className="">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
