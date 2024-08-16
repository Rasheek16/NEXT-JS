"use client";
import { log } from "console";
import React from "react";
import { createUser } from "@/utils/actions";
import { useFormState, useFormStatus } from "react-dom";
const SubmitButton = () => {
  const { pending } = useFormStatus();
  const btnStyle = `bg-black border text-white  ${
    pending
      ? "bg-white text-black border border-black"
      : "hover:bg-white hover:text-black hover:border hover:border-black"
  } font-bold py-2 px-4 rounded capitalize`;
  return (
    <button type="submit" className={btnStyle} disabled={pending}>
      {pending ? "submitting..." : "submit"}
    </button>
  );
};
function Form() {
  const [message, formAction] = useFormState(createUser, null);
  return (
    <form action={formAction} className={formStyle}>
      {message && <p>{message}</p>}
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
      <SubmitButton />
    </form>
  );
}

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
// const btnStyle =
//   "bg-black border text-white hover:bg-white hover:text-black hover:border hover:border-black font-bold py-2 px-4 rounded capitalize";

export default Form;
