
import Image from "next/image";
import UnderlineLink from "@/components/links/UnderlineLink";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Register() {
  const [formData, setFormData] = useState({"full_name": "", "email": "", "username": "", "password":""});

  const handleOnFormChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }

  const router = useRouter();

  const handleSubmit = (e:any) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/auth/register/user', formData).then((res) => {
      router.push('/');
    }).catch((error) => {console.log(error)})

  }

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
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
              <label htmlFor="name" className="block font-bold text-gray-700">
                Full name
              </label>
              <input
                onChange={handleOnFormChange}
                id="name"
                name="full_name"
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
                onChange={handleOnFormChange}
                id="username"
                type="username"
                name="username"
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
                onChange={handleOnFormChange}
                id="email"
                name="email"
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
                onChange={handleOnFormChange}
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <button
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