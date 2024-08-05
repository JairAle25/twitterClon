"use client"
import { useState } from "react";
import ContadorLetras from "./contadorLetras";

const ModalEditarPerfil=({openModal,verModal,fotoPerfil,fotoBanner,onChange,onSubmit,dataForm})=> {

    const [imagenes,setImagenes]=useState({
        banner:fotoBanner,
        perfil:fotoPerfil
    })
    let verModalStyle;
    if(openModal==false){
        verModalStyle="opacity-0 pointer-events-none";
    }
    else{
        verModalStyle="";
    }
    
    const classInputs = "border-2 border-solid border-white rounded-lg py-2 px-3 text-lg transition-all duration-300 focus:border-[#20abff] focus:outline-none";

    const previsualizarImagen=(e,tipo)=>{
        e.preventDefault();
        if(tipo=="banner"){
            setImagenes({...imagenes,banner:dataForm.fotoBanner})
        }
        else{
            setImagenes({...imagenes,perfil:dataForm.fotoPerfil})
        }
    }

    return ( 
        <>
            <div className={`absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#242d34] bg-opacity-30 transition-all duration-500 ${verModalStyle}`}>
                <div className="w-[40%] p-6 rounded-xl">
                    <div className="flex justify-between items-center">
                        <p>EDITAR PERFIL</p>
                        <i className="bi bi-x text-4xl text-end cursor-pointer" onClick={()=>verModal(false)}></i>
                    </div>
                    <form className="flex flex-col gap-1 overflow-y-scroll h-[70vh] px-5 py-3 scrollItem" onSubmit={onSubmit}>
                        <div>
                            <img src={imagenes.banner} alt="foto banner" className="w-full h-48 rounded-lg object-cover"/>
                        </div>
                        <div>
                            <img src={imagenes.perfil} alt="foto perfil" className="w-36 h-36 rounded-lg object-cover"/>
                        </div>
                        <div className="text-lg pb-3 mt-3 flex justify-between items-center">
                            <label>URL foto banner</label>
                            <ContadorLetras palabra={dataForm.fotoBanner} max={300}/>
                        </div>
                        <div className="flex justify-between items-center">
                            <input type="text" className={`${classInputs} w-[80%]`} name="fotoBanner" onChange={onChange} value={dataForm.fotoBanner}/>
                            <button className="border py-1 px-3 text-sm rounded-lg transition-all hover:bg-[#181919]" onClick={(e)=>previsualizarImagen(e,"banner")}>Previsualizar</button>
                        </div>
                        <div className="text-lg pb-3 mt-3 flex justify-between items-center">
                            <label>URL foto perfil</label>
                            <ContadorLetras palabra={dataForm.fotoPerfil} max={300}/>
                        </div>
                        <div className="flex justify-between items-center">
                            <input type="text" className={`${classInputs} w-[80%]`} name="fotoPerfil" onChange={onChange} value={dataForm.fotoPerfil}/>
                            <button className="border py-1 px-3 text-sm rounded-lg transition-all hover:bg-[#181919]" onClick={(e)=>previsualizarImagen(e,"perfil")}>Previsualizar</button>
                        </div>
                        <div className="text-lg pb-3 mt-3 flex justify-between items-center">
                            <label>Nombre</label>
                            <ContadorLetras palabra={dataForm.nombre} max={50}/>
                        </div>
                        <input type="text" className={classInputs} name="nombre" onChange={onChange} value={dataForm.nombre}/>
                        <div className="text-lg pb-4 mt-4 flex justify-between items-center">
                            <label>Biografia</label>
                            <ContadorLetras palabra={dataForm.biografia} max={200}/>
                        </div>
                        <input type="text" className={classInputs} name="biografia" onChange={onChange} value={dataForm.biografia}/>
                        <div className="text-lg pb-4 mt-4 flex justify-between items-center">
                            <label>Ubicacion</label>
                            <ContadorLetras palabra={dataForm.ubicacion} max={30}/>
                        </div>
                        <input type="text" className={classInputs} name="ubicacion" onChange={onChange} value={dataForm.ubicacion}/>
                        <div className="text-lg pb-4 mt-4 flex justify-between items-center">
                            <label>Sitio web</label>
                            <ContadorLetras palabra={dataForm.sitioWeb} max={100}/>
                        </div>
                        <input type="text" className={classInputs} name="sitioWeb" onChange={onChange} value={dataForm.sitioWeb}/>
                        <input type="submit" value="Confirmar" className="w-full bg-white text-black text-lg py-1 rounded-lg mt-5"/>
                    </form>
                </div>
            </div>    
        </>
    );
}
 
export default ModalEditarPerfil;