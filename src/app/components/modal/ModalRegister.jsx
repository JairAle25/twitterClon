const ModalRegister = ({openModal,dataRegister,onChange,onSubmit,mensaje,cerrarModal}) => {

    let verModal;
    if(openModal==false){
        verModal="opacity-0 pointer-events-none";
    }
    else{
        verModal="";
    }

    const classInputs = "border-2 border-solid border-white rounded-lg py-2 px-3 text-lg transition-all duration-300 focus:border-[#20abff] focus:outline-none";

    return ( 
        <>
            <div className={`absolute inset-0 flex items-center justify-center z-10 bg-[#242d34] bg-opacity-30 transition-all duration-500 ${verModal}`}>
                <div className="flex flex-col pb-16 pt-9 px-24 rounded-xl">
                    <i className="bi bi-x text-4xl text-end mb-4 cursor-pointer" onClick={()=>cerrarModal()}></i>
                    <h1 className="text-center font-semibold text-4xl pb-8">Registrarse en X</h1>
                    <form action="" className="flex flex-col" onSubmit={onSubmit}>
                        <div className="flex justify-center items-center gap-4">
                            <div className="flex flex-col">
                                <label className="text-lg pb-4">Nombre</label>
                                <input type="text" className={classInputs} name="nombre" onChange={onChange} value={dataRegister.nombre} autoComplete="off" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-lg pb-4">Nombre de Usuario</label>
                                <input type="text" className={classInputs} name="nombreUsuario" onChange={onChange} value={dataRegister.nombreUsuario} autoComplete="off" />
                            </div>
                        </div>
                        <label className="text-lg pb-4 mt-4">Correo electronico</label>
                        <input type="email" className={classInputs} name="correo" onChange={onChange} value={dataRegister.correo} autoComplete="off" />
                        <div className="flex justify-center items-center gap-4">
                            <div className="flex flex-col">
                                <label className="text-lg mt-4 pb-4">Contraseña</label>
                                <input type="password" className={classInputs} name="contrasena" onChange={onChange}  value={dataRegister.contrasena} autoComplete="off" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-lg mt-4 pb-4">Repetir Contraseña</label>
                                <input type="password" className={classInputs} name="repContrasena" onChange={onChange} value={dataRegister.repContrasena} autoComplete="off" />
                            </div>
                        </div>
                        <input type="submit" value="Registrarse" className="text-black bg-white mt-6 py-1 rounded-xl text-lg from-transparent transition-all duration-300 cursor-pointer hover:bg-[#cbcbcb]"/>
                    </form>
                    <p className={`text-center pt-4 text-lg font-bold ${mensaje.className}`}>{mensaje.mensaje}</p>
                </div>
            </div>    
        </>
    );
}
 
export default ModalRegister;