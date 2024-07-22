import { useState } from 'react';
import ApiUsers from '../Api/ApiUsers';

const useLogin = () => {
    const [mensajeLogin, setMensajeLogin] = useState({
        mensaje: "",
        className: ""
      });
const [openModalLogin, setOpenModalLogin] = useState(false);
const [dataFormLogin, setDataFormLogin] = useState({
    correo: "",
    contrasena: ""
});

const onChangeLogin = (e) => {
    setDataFormLogin({ ...dataFormLogin, [e.target.name]: e.target.value });
};

const verificarCamposLogin =()=>{
    const {correo, contrasena} = dataFormLogin;

    if (!correo || !contrasena) {
        setMensajeLogin({
          mensaje: "NECESITA LLENAR TODOS LOS CAMPOS",
          className: "text-red-700"
        });
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(correo)) {
        setMensajeLogin({
          mensaje: "FORMATO DE CORREO INCORRECTO",
          className: "text-red-700"
        });
        return false;
    }

    return true

}

const onSubmitLogin = async(e) => {
    e.preventDefault();
    if(!verificarCamposLogin) return;
    const data = await ApiUsers.login(dataFormLogin);
    if(data.error){
        setMensajeLogin({
            mensaje:data.error,
            className:"text-red-700"
        })
        setDataFormLogin({
            correo: "",
            contrasena: ""
        })

        return;
    }

    setMensajeLogin({
        mensaje:data.mensaje,
        className:"text-green-700"
    })
    setDataFormLogin({
        correo:"",
        contrasena:""
    })
    setTimeout(() => {
        window.location.href = "/home";
    }, 1000);
    return;
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

const [viewPasswordLogin,setViewPasswordLogin] =useState("password")

const verContraseñaLogin=(campo)=>{
    if(viewPasswordLogin=="password"){
        setViewPasswordLogin("text")
    }
    else{
        setViewPasswordLogin("password")
    }
}

return {
    openModalLogin,
    dataFormLogin,
    onChangeLogin,
    onSubmitLogin,
    cerrarModalLogin,
    abrirModalLogin,
    mensajeLogin,
    viewPasswordLogin,
    verContraseñaLogin
};
};

export default useLogin;
