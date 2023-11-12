import Image from "next/image";
import UnstyledLink from "@/components/links/UnstyledLink";
import UnderlineLink from "@/components/links/UnderlineLink";
import React, {useState} from "react";
import axios from "axios";
import { setToken } from "@/lib/token";
import { useRouter } from "next/router";

export default function Login() {
  const [formData, setFormData] = useState({"email": "", "password":""});

  const handleOnEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, "email":e.target.value})
  }

  const handleOnPasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, "password":e.target.value})
  }

  const router = useRouter();

  const handleSubmit = (e:any) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/auth/sign-in', formData).then((res) => {
      setToken(res.data.token);
      router.push('/');
    }).catch((error) => {console.log(error)})

  }

  return (
    <div className="flex flex-col items-center md:flex-row md:h-screen">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-md space-y-8">
          <div>
          <UnstyledLink
            href='/'
            className='text-3xl text-center center font-bold text-red-800 transition'
          >
            V E C T O R
          </UnstyledLink>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="mt-2 text-gray-600">
              Please sign in to your account.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                onChange={handleOnEmailChange}
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
                onChange={handleOnPasswordChange}
              />
            </div>
            <div>
              <LoginButton/>
            </div>

            <p>don't have any account? <UnderlineLink
            href='/register'
            className='font-bold'
            >register here</UnderlineLink></p>
          </form>
        </div>
      </div>
    </div>
  );
}

function LoginButton() {
  // const { pending } = useFormStatus();
 
  return (
    <button
    type="submit"
    // aria-disabled={pending}
    className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
  >
    Sign In
  </button>
  );
}