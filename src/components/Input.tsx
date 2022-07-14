import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User } from "react-feather";
import confirmPassword from '../assets/icons/confirmPassword.svg';

interface InputProps {
  type: "text" | "password" | "user" | "confirmPassword",
  value: string,
  setValue: (value: string) => void,
}

export default function Input({ type, setValue, value }: InputProps) {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <div className="flex w-full border-[3px] border-[#2A313B] rounded-[4px] shadow-input mx-auto">
      {type === "text"
        ? <Mail className="mx-[15px] my-[10px]" color='#2A313B' />
        : type === "user"
          ? <User className="mx-[15px] my-[10px]" color='#2A313B' />
          : type === "password"
            ? <Lock className="mx-[15px] my-[10px]" color='#2A313B' />
            : <div className="flex mx-[15px] my-[10px]"><Image src={confirmPassword} alt="" /></div>
      }

      <input
        value={value}
        onChange={(value: any) => setValue(value.target.value)}
        type={(type === "text" || type === "user")
          ? "text"
          : isPasswordHidden === true ? "password" : "text"
        }
        placeholder={type === "text" ? "Email" : type === "password" ? "Senha" : type === "user" ? "Usuário" : "Confirmar Senha"}
        className="w-full my-2 bg-transparent outline-0 text-[16px] text-[#606061] placeholder:text-[#606061] placeholder:font-bold" />


      {(type === "password" || type === "confirmPassword")
        ? (
          <button onClick={() => setIsPasswordHidden(!isPasswordHidden)}>
            {isPasswordHidden === true
              ? <Eye className="mx-[15px] my-[10px]" color='#757575' />
              : <EyeOff className="mx-[15px] my-[10px]" color='#757575' />
            }

          </button>
        )
        : null
      }

    </div>
  )
}