import { log } from "console";
import React from "react";
import { createUser } from "@/utils/actions";

function Form() {
  return (
    <form action={createUser} className={formStyle}>
      <h2 className="text-2xl capitalize mb-4">create user</h2>
      <input
        type="text"
        name="firstName"
        defaultValue="peter"
        required
        className={inputStyle}
      />
      <input
        type="text"
        name="lastName"
        defaultValue="peter"
        required
        className={inputStyle}
      />
      <button type="submit" className={btnStyle}>
        submit
      </button>
    </form>
  );
}

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-black border text-white hover:bg-white hover:text-black hover:border hover:border-black font-bold py-2 px-4 rounded capitalize";

export default Form;
