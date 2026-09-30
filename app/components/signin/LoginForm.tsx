"use client";

import { useState } from "react";
import FormField from "../FormField";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: call your login endpoint with { email, password }.
  }

  return (
    <form onSubmit={handleSubmit} className="mt-14 space-y-6">
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
        placeholder="********"
        autoComplete="current-password"
        value={password}
        onChange={setPassword}
      />
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="h-[54px] rounded-full bg-electric-lime-400 px-8 text-xl font-medium text-slate-900 transition-colors hover:bg-electric-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
