"use client";

import { useState } from "react";
import FormField from "../FormField";

export default function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: call your signup endpoint with { fullName, email, password }.
  }

  return (
    <form onSubmit={handleSubmit} className="mt-14 space-y-6">
      <FormField
        id="fullName"
        label="Full Name"
        placeholder="Jamie Davis"
        autoComplete="name"
        value={fullName}
        onChange={setFullName}
      />
      <FormField
        id="email"
        label="Email"
        type="email"
        placeholder="designer@example.com"
        autoComplete="email"
        value={email}
        onChange={setEmail}
      />
      <FormField
        id="password"
        label="Password"
        type="password"
        placeholder="*********"
        autoComplete="new-password"
        value={password}
        onChange={setPassword}
      />
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="rounded-full cursor-pointer bg-electric-lime-400 py-3 px-6 text-base font-medium text-slate-900 transition-colors hover:bg-electric-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian-blue-800"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
