
import Image from "next/image";
import UnderlineLink from "@/components/links/UnderlineLink";

export default function Register() {
  return (
    <div className="flex flex-col items-center md:flex-row md:h-screen">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Register to Vector</h1>
            <p className="mt-2 text-gray-600">
              Sign up to your vector account.
            </p>
          </div>
          <form className="mt-8 space-y-6">
          <div>
              <label htmlFor="name" className="block font-bold text-gray-700">
                Full name
              </label>
              <input
                id="name"
                type="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label htmlFor="username" className="block font-bold text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="username"
                placeholder="Enter your username"
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <button
                disabled
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
              >
                Register
              </button>
            </div>
            <p>already have an account? <UnderlineLink
            href='/login'
            className='font-bold'
            >login</UnderlineLink></p>
          </form>
        </div>
      </div>
    </div>
  );
}