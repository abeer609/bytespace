"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: send `email` to your newsletter endpoint.
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-14 flex flex-wrap items-center gap-4"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="h-[52px] w-full max-w-[350px] flex-1 rounded-full border border-slate-300 bg-white px-6 text-lg text-slate-900 placeholder:text-slate-600 focus:border-slate-900 focus:outline-none"
      />
      <button
        type="submit"
        className="h-[52px] rounded-full bg-electric-lime-400 px-7 text-lg font-medium text-slate-900 transition-colors hover:bg-lime-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      >
        Subscribe
      </button>
    </form>
  );
}
