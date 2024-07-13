"use client"

import Image from "next/image";
import ModalLogin from "./modal/ModalLogin";
import ModalRegister from "./modal/ModalRegister";
import { useState } from "react";

const Login = () => {
    const [openModalLogin,setOpenModalLogin] = useState(false);
    const [openModalRegister,setOpenModalRegister] = useState(false);
    const [dataFormRegister,setDataFormRegister]=useState({
        nombre:"",
        nombreUsuario:"",
        correo:"",
        contrasena:"",
        repContrasena:"",
    })
    const [dataFormLogin,setDataFormLogin] = useState({
        correo:"",
        contrasena:""
    })
    const onChangeLogin = (e) => {
        setDataFormLogin({ ...dataFormLogin, [e.target.name]: e.target.value });
    };

    const onSubmitLogin =(e)=>{
        e.preventDefault();
        console.log(dataFormLogin)
    }

    const onChangeRegister = (e) => {
        setDataFormRegister({ ...dataFormRegister, [e.target.name]: e.target.value });
    };

    const onSubmitRegister =(e)=>{
        e.preventDefault();
        console.log(dataFormRegister)
    }

    return ( 
        <>
            <main className="h-screen w-screen flex justify-between items-center">
                <div className="w-[50%]">
                    <Image src="/logo.png" width={500} height={300} className="w-[50%]" alt="logo de X"/>
                </div>
                <div className="flex flex-col gap-3 items-start w-[50%]">
                    <h1 className="font-bold text-7xl">Lo que está <br /> pasando ahora</h1>
                    <h2 className="font-bold text-4xl pt-14 pb-5">Únete Hoy</h2>
                    <button className="bg-[#1a8cd8] py-1 px-20 text-lg rounded-full transition-all hover:bg-[#1b6ea5]" onClick={()=>setOpenModalRegister(true)}>Crear cuenta</button>
                    <p className="py-3 text-lg">¿Ya tienes una cuenta?</p>
                    <button className="border py-1 px-20 text-lg rounded-full transition-all hover:bg-[#031018] text-[#1a8cd8]"  onClick={()=>setOpenModalLogin(true)}>Iniciar sesion</button>
                </div>
                <ModalLogin openModal={openModalLogin} setOpenModal={setOpenModalLogin} dataLogin={dataFormLogin} setDataLogin={setDataFormLogin} onChange={onChangeLogin} onSubmit={onSubmitLogin}/>
                <ModalRegister openModal={openModalRegister} setOpenModal={setOpenModalRegister} dataRegister={dataFormRegister} setDataRegister={setDataFormRegister} onChange={onChangeRegister} onSubmit={onSubmitRegister}/>
            </main>
        </> 
    );
}
 
export default Login;