const ModalLogin = ({openModal,setOpenModal}) => {
    ///opacity-0 pointer-events-none
    console.log(openModal);
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
                    <i class="bi bi-x text-3xl text-end mb-4 cursor-pointer" onClick={()=>setOpenModal(false)}></i>
                    <h1 className="text-center font-semibold text-4xl pb-8">Inicia sesión en X</h1>
                    <form action="" className="flex flex-col">
                        <label className="text-lg pb-4">Correo electronico</label>
                        <input type="email" className={classInputs}/>
                        <label className="text-lg mt-4 pb-4">Contraseña</label>
                        <input type="password" className={classInputs}/>
                        <input type="submit" value="Ingresar" className="text-black bg-white mt-6 py-1 rounded-xl text-lg from-transparent transition-all duration-300 cursor-pointer hover:bg-[#cbcbcb]"/>
                    </form>
                </div>
            </div>    
        </>
    );
}
 
export default ModalLogin;