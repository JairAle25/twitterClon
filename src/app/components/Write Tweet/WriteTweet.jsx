"use client"
import ApiUsers from "@/app/Api/ApiUsers";
import { useEffect,useState } from "react";
import ContadorLetras from "../modal/contadorLetras";
import useTweet from "@/app/hooks/useTweet";

const WriteTweet = () => {
    const {onChangeTweet,dataFormTweet,onSubmitTweet} = useTweet();

    const [userData,setUserData]=useState({})
    useEffect(() => {
        const fetchData = async () => {
            const data = await ApiUsers.getMyUserData();
            if(data){
                setUserData(data)
            }
        };
        fetchData();
    }, []);
    
    return ( 
        <>
            <div className="border-b border-white border-opacity-20">
                <form className="px-6 py-5 flex gap-3" onSubmit={onSubmitTweet}>
                    <img src={userData.fotoPerfil} alt={userData.nombreUsuario} className="rounded-full w-[12%] h-12"/>
                    <div className="w-full text-lg">
                        <div className="border-b border-white border-opacity-20 pb-1">
                            <textarea 
                                placeholder="¡¿Qué está pasando?!" 
                                className="w-full resize-none overflow-y-auto focus:outline-none h-16" 
                                rows="1"
                                name="descripcion"
                                onInput={(e) => {
                                    e.target.style.height = "auto"; // Resetea la altura para recalcular
                                    e.target.style.height = `${e.target.scrollHeight}px`; // Ajusta la altura al contenido
                                }}
                                onChange={onChangeTweet}
                                value={dataFormTweet.descripcion}
                            />
                        </div>
                        <div className="flex mt-3 justify-between items-center">
                            <i className="bi bi-image text-[#43b4ff] text-xl cursor-pointer transition-all duration-300 hover:text-[#0f4e78]"></i>
                            <div className="flex gap-2 items-center">
                                {dataFormTweet.descripcion.length>0 &&<ContadorLetras palabra={dataFormTweet.descripcion} max={280}/>}
                                <input type="submit" value="Postear" className="bg-[#1a8cd8] rounded-full px-6 py-1 cursor-pointer transition-all duration-300 hover:bg-[#0f4e78]"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
 
export default WriteTweet;