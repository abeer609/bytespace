import Link from "next/link";
import SignupForm from "./SignupForm";

export default function SignupCard() {
  return (
    <div className="flex flex-col rounded-4xl bg-white p-8 sm:p-18">
      <p className="text-xl text-persian-blue-800">Create an Account</p>
      <h1 className="mt-1 text-heading-m font-poppins font-semibold leading-[1.2] text-slate-900 md:text-4xl">
        Welcome to
        <br />
        ByteSpace
      </h1>
      <SignupForm />
      <p className="mt-auto pt-16 text-center text-base text-slate-700">
        Already have an account?{" "}
        <Link href="/signin" className="text-persian-blue-800 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
