import ContadorLetras from "./contadorLetras";
import Image from "next/image";

const ModalEditarPerfil=({openModal,verModal,fotoPerfil,fotoBanner,onChange,dataForm})=> {

    
    let verModalStyle;
    if(openModal==false){
        verModalStyle="opacity-0 pointer-events-none";
    }
    else{
        verModalStyle="";
    }
    
    const classInputs = "border-2 border-solid border-white rounded-lg py-2 px-3 text-lg transition-all duration-300 focus:border-[#20abff] focus:outline-none";

    return ( 
        <>
            <div className={`absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#242d34] bg-opacity-30 transition-all duration-500 ${verModalStyle}`}>
                <div className="w-[35%] p-6 rounded-xl">
                    <div className="flex justify-between items-center">
                        <p>EDITAR PERFIL</p>
                        <i className="bi bi-x text-4xl text-end cursor-pointer" onClick={()=>verModal(false)}></i>
                    </div>
                    <form className="flex flex-col gap-1">
                        <div>
                            <Image src={fotoBanner} alt="foto banner" width={1000} height={800} className="w-full"/>
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
                    </form>
                </div>
            </div>    
        </>
    );
}
 
export default ModalEditarPerfil;