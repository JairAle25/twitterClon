const ModalEditarPerfil=({openModal,cerrarModal})=> {

    let verModal;
    if(openModal==false){
        verModal="opacity-0 pointer-events-none";
    }
    else{
        verModal="";
    }
    console.log(openModal)

    return ( 
        <>
            <div className={`absolute inset-0 flex items-center justify-center z-10 bg-[#242d34] bg-opacity-30 transition-all duration-500 ${verModal}`}>
                <p>EDITAR PERFIL</p>
                <i className="bi bi-x text-4xl text-end mb-4 cursor-pointer" onClick={()=>cerrarModal()}></i>
            </div>    
        </>
    );
}
 
export default ModalEditarPerfil;