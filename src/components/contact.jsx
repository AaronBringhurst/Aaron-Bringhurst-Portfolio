import React from "react";

const Contact = () => {
    return (
      <div className="max-w-md mx-auto">
        <h2 className="text-gray-300 text-3xl font-bold mb-4">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="text-gray-300 block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-300 block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-gray-300 block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    );
    };

export default Contact;
