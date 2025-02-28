import { useState, useEffect } from "react";

export default function Contacts() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName("Name: " + e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      userName: name,
      message: message,
    };
    console.log("====================================");
    console.log(body);
    console.log("====================================");
    setIsFormSubmitted(true);
  };

  return (
    <div>
      <h2 className="page-heading">Contacts</h2>
      {!isFormSubmitted ? (
        <form
          className="flex flex-col gap-4 justify-start max-w-[500px] mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            className="border border-3 rounded-xl p-3 border-emerald-800"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <textarea
            className="border border-3 p-3 rounded-xl border-emerald-800"
            name="message"
            placeholder="Message"
            onChange={handleChange}
          ></textarea>
          <button className="bg-emerald-800 text-white rounded-md p-3">
            Submit
          </button>
        </form>
      ) : (
        <div className="text-3xl text-center m-5 font-bold text-fuchsia-500">
          Thank you, we'll contact you soon
        </div>
      )}
    </div>
  );
}
