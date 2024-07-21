"use client"

import Link from "next/link";
import ItemAside from "./itemAside";
import ItemUser from "./itemUser";
import ApiUsers from "@/app/Api/ApiUsers";
import { useEffect,useState } from "react";

const AsideLinks=()=> {
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
    
    const links=[
        {
            id:1,
            name:"Inicio",
            icon:"bi bi-house-door",
            iconActive:"bi bi-house-door-fill",
            url:"/home",
        },
        {
            id:2,
            name:"Perfil",
            icon:"bi bi-person",
            iconActive:"bi bi-person-fill",
            url:`./../../${userData.nombreUsuario}`,
        }
    ]

    return ( 
        <>
            <aside className="w-[25%] border-r-[1px] sticky left-0 top-0 border-white border-opacity-20 h-screen flex flex-col justify-between">
                <div className="flex flex-col gap-5  justify-start items-start w-full">
                    <Link href="/home" className="px-4 py-3 rounded-full mt-3 transition-all duration-300 hover:bg-[#181818]">
                        <i className="bi bi-twitter-x text-3xl bg-transparent"></i>
                    </Link>
                    {links.map(link => <ItemAside key={link.id} name={link.name} icon={link.icon} iconActive={link.iconActive} url={link.url}/>)}
                </div>
                <ItemUser image={userData.fotoPerfil} name={userData.nombre} userName={userData.nombreUsuario}/>
            </aside>
        </>
     );
}
 
export default AsideLinks;