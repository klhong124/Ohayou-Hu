import Head from "next/head";
import Layout from "@layouts/default";

import { FC, useRef, useState } from "react";
import supabase from "@supabase"
import { useRouter } from "next/router";


type Props = {};

const Home: FC<Props> = () => {
  const router = useRouter()
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('')

  const signUpHandler = async () => {
    if (!formValidation()) return
    const { user, error } = await supabase.auth.signIn({
      email: email.current.value,
      password: password.current.value,
    },

    )
    if (error) {
      setError(error.message)
      return 
    }
    router.push('/')

  }

  const formValidation = () => {
    setError('')
    if (!email.current.value) {
      setError('Email cannot be empty')
      return false
    }
    return true
  }
  return (
    <div id="index">
      <Head>
        <title>OHAYOU.HU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">

                <h1 className="mb-8 text-3xl text-center">用戶註冊</h1>
                <input
                  type="text"
                  ref={email}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="電郵" />

                <input
                  type="password"
                  ref={password}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="密碼" />

                {error && <p className="text-red-500">*{error}</p>}
                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-400 hover:bg-green-300 focus:outline-none my-1"
                  onClick={signUpHandler}
                >登入帳戶</button>

            </div>


            <div className="text-grey-dark mt-6">
              Already have an account?
              <a className="no-underline border-b border-blue text-blue" href="../login/">
                Log in
              </a>.
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
