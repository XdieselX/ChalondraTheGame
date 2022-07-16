import css from '../styles/login.module.css'
import logo from '../assets/logo.svg'
import Image from 'next/image'
import Input from '../components/Input'
import Link from 'next/link'
import googleLogo from '../assets/icons/google.png'
import Ou from '../components/Ou'
import { useState } from 'react'

export default function Register() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister() {
    console.log(user, email, password, confirmPassword);
  }

  return (
    <>
      <div className={`flex ${css.login} h-screen w-screen justify-end subpixel-antialiased`}>
        <div className="flex w-2/3 mt-[30px] h-fit justify-center">
          <div className="flex-col w-[400px] text-center">
            <Image src={logo} alt="Royale" />

            <div className="grid gap-5">
              <button className={`${css.googleLogin} flex justify-center py-[11px] mt-[40px] bg-white font-bold text-[#2A313B] text-[16px] border-googleLogin`}>
                <Image src={googleLogo} alt="" />
                <p className="ml-[33px]">
                  Sign-in with Google
                </p>
              </button>

              <Ou />

              <p className="font-bold text-[16px] text-[#E0E0E0]">Authentication</p>

              <Input type="user" value={user} setValue={setUser} />
              <Input type="text" value={email} setValue={setEmail} />
              <Input type="password" value={password} setValue={setPassword} />
              <Input type="confirmPassword" value={confirmPassword} setValue={setConfirmPassword} />

              <button
                onClick={handleRegister}
                className={`${css.buttonLogin} bg-[#482BD9] py-[13px] text-white font-bold shadow-button`}
              >
                Register
              </button>
              <p className="text-[#E0E0E0] font-bold text-[14px]">Already have an account?
                <Link href="login"><a className="text-[#B6ABED]"> Sign in</a></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
