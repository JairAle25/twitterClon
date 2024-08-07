import Image from "next/image";

const ItemUser = ({image,name,userName}) => {
    let imageSrc="/sinFotoPerfil.webp";
    if(image){
        imageSrc=`${image}`
    }

    return ( 
        <>
        <div className="flex mb-8 gap-4 px-3 py-2 rounded-full justify-between items-center transition-all duration-300 hover:bg-[#181818] w-[97%] cursor-pointer">
            <Image src={imageSrc} alt="foto de perfil" width={100} height={100} className="rounded-full w-12 h-12"/>
            <div className="flex flex-col justify-start items-start bg-transparent ">
                <h3 className="text-base font-semibold bg-transparent">{name}</h3>
                <p className="text-sm opacity-65 bg-transparent">{`@${userName}`}</p>
            </div>
            <i className="bi bi-three-dots bg-transparent text-base"></i>
        </div>
        </>
    );
}
 
export default ItemUser;