import Image from "next/image";
import ApiUsers from "../Api/ApiUsers";

const getNombreMes=(numMes)=>{
    const meses =  ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
    return meses[numMes-1];
    
}

async function Profile ({params}) {
    const {profile} = params;
    const data = await ApiUsers.getUserByUsername(profile);
    const fecha = data.fechaDeIngreso.split("-")    
    const mes = getNombreMes(fecha[1]);

    let fotoPerfil = "/sinFotoPerfil.webp";
    if(data.fotoPerfil){
        fotoPerfil=data.fotoPerfil;
    }

    let fotoBanner = "/sinBanner.webp";
    if(data.fotoBanner){
        fotoBanner=data.fotoBanner;
    }

    return ( 
        <>
            <main className="border-b border-white border-opacity-20">
                <div className="w-[90%] mx-auto my-0 py-2">
                    <h2 className="font-bold text-xl">{data.nombreUsuario}</h2>
                    <p className="opacity-65 text-sm">0 posts</p>
                </div>
                <div className="relative top-0 left-0">
                    <Image src={fotoBanner} alt="foto banner" width={900} height={300} className="w-full"/>
                    
                    <Image src={fotoPerfil} alt="foto perfil" width={500} height={150} className="absolute top-[55%] left-[5%] w-1/5 rounded-full"/>
                </div>
                <div className="w-[90%] mx-auto my-0 mt-20 flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xl font-bold">{data.nombre}</h1>
                        <h2 className="text-sm opacity-65">@{data.nombreUsuario}</h2>
                        <div className="flex gap-2 pt-3 opacity-65">
                            <i class="bi bi-calendar2-week"></i>
                            <p>se unio en {mes} del {fecha[0]}</p>
                        </div>
                        <div className="flex gap-4 text-sm pt-3 pb-6">
                            <p className="font-bold">0 <span className="opacity-65 font-normal">Siguiendo</span></p>
                            <p className="font-bold">0 <span className="opacity-65 font-normal">Seguidor</span></p>
                        </div>
                    </div>
                    <div>
                        <button className="border py-1 px-4 rounded-full transition-all duration-300 hover:bg-[#181919]">Editar perfil</button>
                    </div>
                </div>
            </main>
        </>
    );
}
 
export default Profile;