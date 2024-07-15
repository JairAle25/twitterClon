import { useState } from 'react';

const useLogin = () => {

const [openModalLogin, setOpenModalLogin] = useState(false);
const [dataFormLogin, setDataFormLogin] = useState({
    correo: "",
    contrasena: ""
});

const onChangeLogin = (e) => {
    setDataFormLogin({ ...dataFormLogin, [e.target.name]: e.target.value });
};

const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log(dataFormLogin);
};

const cerrarModalLogin =()=>{
    setOpenModalLogin(false);
    setDataFormLogin({
        correo:"",
        contrasena:""
    });
}

const abrirModalLogin=()=>{
    setOpenModalLogin(true)
}

return {
    openModalLogin,
    dataFormLogin,
    onChangeLogin,
    onSubmitLogin,
    cerrarModalLogin,
    abrirModalLogin
};
};

export default useLogin;
