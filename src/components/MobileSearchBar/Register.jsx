import { auth } from "../data/firebase"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
export const Register = ()=>{
    const [email , setEmail] = useState(null);
    const [password , setPassword] = useState(null);
    const navegador = useNavigate();
    const handleRegister = async () =>{
        try {
            await createUserWithEmailAndPassword(auth , email , password);
            navegador("/login");
        } catch (error) {
            console.log("No se ha podido loguear:  "+error)
        }
    }
    return (
        <>
        <div className="bg-[#51BC7D] h-96 flex justify-center rounded-b-full">
                


                </div>
                <div className="flex justify-around -mt-40">
                    <p className="text-3xl text-white font-bold">Register</p>
    
                    
                    <img className="-mt-20" src="src/assets/man.png" alt="" />
                </div>
    
                <p className="font-bold text-[#51BC7D]">Email</p>
                <input  onChange={(e) => setEmail(e.target.value)}  className="w-[335px] h-[46px] bg-[#F2F2F2] rounded-lg" type="email" placeholder="yourmail@mail.com"/>
    
                <p className="font-bold text-[#51BC7D]">Password</p>
                <input onChange={(e) => setPassword(e.target.value)} className="w-[335px] h-[46px]  bg-[#F2F2F2] rounded-lg" type="password" placeholder="your password"/>

                
                <div className="pt-4">
                    <button onClick={handleRegister} className="w-[335px] h-[54px]   rounded-lg bg-[#4CAD73] text-white font-semibold">Register</button>
                </div>
        </>

    )
}