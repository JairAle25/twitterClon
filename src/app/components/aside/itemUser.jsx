import Image from "next/image";
import { useState } from "react";

const ItemUser = ({image,name,userName}) => {
    const [showTooltip, setShowTooltip] = useState(false);

    let imageSrc="/sinFotoPerfil.webp";
    if(image){
        imageSrc=`${image}`
    }
    const handleClick = () => {
        setShowTooltip(!showTooltip);
    };

    const handleLogout = () => {
        console.log("Cerrar sesión");
    };

    return ( 
        <>
        <div className="relative">
            <div className="flex mb-8 gap-4 px-3 py-2 rounded-full justify-between items-center transition-all duration-300 hover:bg-[#181818] w-[97%] cursor-pointer" onClick={handleClick}>
                <Image src={imageSrc} alt="foto de perfil" width={100} height={100} className="rounded-full w-12 h-12"/>
                <div className="flex flex-col justify-start items-start bg-transparent ">
                    <h3 className="text-base font-semibold bg-transparent">{name}</h3>
                    <p className="text-sm opacity-65 bg-transparent">{`@${userName}`}</p>
                </div>
                <i className="bi bi-three-dots bg-transparent text-base"></i>
            </div>
            {showTooltip && (
                    <div className="absolute bottom-full mb-4 right-0 w-40 p-2 bg-[#000000] text-white rounded shadow-lg border ">
                        <button
                            className="w-full py-1 px-3 bg-transparent text-white rounded"
                            onClick={handleLogout}
                        >
                            Cerrar sesión
                        </button>
                    </div>
                )}
        </div>
        </>
    );
}
 
export default ItemUser;