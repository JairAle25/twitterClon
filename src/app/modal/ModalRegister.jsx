const ModalRegister = ({openModal,setOpenModal,dataRegister,setDataRegister,onChange,onSubmit}) => {

    let verModal;
    if(openModal==false){
        verModal="opacity-0 pointer-events-none";
    }
    else{
        verModal="";
    }

    const classInputs = "border-2 border-solid border-white rounded-lg py-2 px-3 text-lg transition-all duration-300 focus:border-[#20abff] focus:outline-none";

    const cerrarModal =()=>{
        setOpenModal(false);
        setDataRegister({
            nombre:"",
            nombreUsuario:"",
            correo:"",
            contrasena:"",
            repContrasena:"",
        });
    }

    return ( 
        <>
            <div className={`absolute inset-0 flex items-center justify-center z-10 bg-[#242d34] bg-opacity-30 transition-all duration-500 ${verModal}`}>
                <div className="flex flex-col pb-16 pt-9 px-24 rounded-xl">
                    <i className="bi bi-x text-4xl text-end mb-4 cursor-pointer" onClick={()=>cerrarModal()}></i>
                    <h1 className="text-center font-semibold text-4xl pb-8">Registrarse en X</h1>
                    <form action="" className="flex flex-col" onSubmit={onSubmit}>
                        <label className="text-lg pb-4">Nombre</label>
                        <input type="text" className={classInputs} name="nombre" onChange={onChange} value={dataRegister.nombre}/>
                        <label className="text-lg pb-4 mt-4">Nombre de Usuario</label>
                        <input type="text" className={classInputs} name="nombreUsuario" onChange={onChange} value={dataRegister.nombreUsuario}/>
                        <label className="text-lg pb-4 mt-4">Correo electronico</label>
                        <input type="email" className={classInputs} name="correo" onChange={onChange} value={dataRegister.correo}/>
                        <label className="text-lg mt-4 pb-4">Contraseña</label>
                        <input type="password" className={classInputs} name="contrasena" onChange={onChange}  value={dataRegister.contrasena}/>
                        <label className="text-lg mt-4 pb-4">Repetir Contraseña</label>
                        <input type="password" className={classInputs} name="repContrasena" onChange={onChange} value={dataRegister.repContrasena}/>
                        <input type="submit" value="Registrarse" className="text-black bg-white mt-6 py-1 rounded-xl text-lg from-transparent transition-all duration-300 cursor-pointer hover:bg-[#cbcbcb]"/>
                    </form>
                </div>
            </div>    
        </>
    );
}
 
export default ModalRegister;