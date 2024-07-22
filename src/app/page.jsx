"use client"

import Image from "next/image";
import ModalLogin from "./components/modal/ModalLogin";
import ModalRegister from "./components/modal/ModalRegister";
import useRegister from "./hooks/useRegister"
import useLogin from "./hooks/useLogin";
import ApiUsers from "./Api/ApiUsers";
import { useEffect } from "react";


const Login = () => {

     useEffect(() => {
        const fetchData = async () => {
            const data = await ApiUsers.getMyUserData();
            if(data){
                window.location.href = "/home";
            }
        };
        fetchData();
    }, []);
    

    const {
        mensajeRegister,
        openModalRegister,
        dataFormRegister,
        setOpenModalRegister,
        onChangeRegister,
        onSubmitRegister,
        cerrarModalRegister,
        abrirModalRegister,
        viewPassword,
        verContraseña
    } = useRegister();

    const {
        openModalLogin,
        dataFormLogin,
        onChangeLogin,
        onSubmitLogin,
        cerrarModalLogin,
        abrirModalLogin,
        mensajeLogin,
        viewPasswordLogin,
        verContraseñaLogin
      } = useLogin();
      
    return ( 
        <>
            <main className="h-screen w-screen flex justify-between items-center">
                <div className="w-[50%]">
                    <Image src="/logo.png" width={500} height={300} className="w-[50%]" alt="logo de X"/>
                </div>
                <div className="flex flex-col gap-3 items-start w-[50%]">
                    <h1 className="font-bold text-7xl">Lo que está <br /> pasando ahora</h1>
                    <h2 className="font-bold text-4xl pt-14 pb-5">Únete Hoy</h2>
                    <button className="bg-[#1a8cd8] py-1 px-20 text-lg rounded-full transition-all hover:bg-[#1b6ea5]" onClick={()=>abrirModalRegister()}>Crear cuenta</button>
                    <p className="py-3 text-lg">¿Ya tienes una cuenta?</p>
                    <button className="border py-1 px-20 text-lg rounded-full transition-all hover:bg-[#031018] text-[#1a8cd8]"  onClick={()=>abrirModalLogin()}>Iniciar sesion</button>
                </div>
                <ModalLogin openModal={openModalLogin} dataLogin={dataFormLogin} onChange={onChangeLogin} onSubmit={onSubmitLogin} cerrarModal={cerrarModalLogin} mensaje={mensajeLogin} viewPassword={viewPasswordLogin} verContrasena={verContraseñaLogin}/>

                <ModalRegister openModal={openModalRegister}  dataRegister={dataFormRegister} onChange={onChangeRegister} onSubmit={onSubmitRegister} mensaje={mensajeRegister} cerrarModal={cerrarModalRegister} viewPassword={viewPassword} verContraseña={verContraseña}/>
            </main>
        </> 
    );
}
 
export default Login;