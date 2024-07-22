import { useState } from 'react';
import ApiUsers from '../Api/ApiUsers';

const useRegister = () => {

  const [mensajeRegister, setMensajeRegister] = useState({
    mensaje: "",
    className: ""
  });
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [dataFormRegister, setDataFormRegister] = useState({
    nombre: "",
    nombreUsuario: "",
    correo: "",
    contrasena: "",
    repContrasena: ""
  });

  const onChangeRegister = (e) => {
    setDataFormRegister({ ...dataFormRegister, [e.target.name]: e.target.value });
  };

  const verificarCamposRegister = () => {
    const { nombre, nombreUsuario, correo, contrasena, repContrasena } = dataFormRegister;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!nombre || !nombreUsuario || !correo || !contrasena || !repContrasena) {
      setMensajeRegister({
        mensaje: "NECESITA LLENAR TODOS LOS CAMPOS",
        className: "text-red-700"
      });
      return false;
    }
  
    if (nombre.length > 50) {
      setMensajeRegister({
        mensaje: "EL NOMBRE NO DEBE EXCEDER LOS 50 CARACTERES",
        className: "text-red-700"
      });
      return false;
    }
  
    if (nombreUsuario.length > 20) {
      setMensajeRegister({
        mensaje: "EL NOMBRE DE USUARIO NO DEBE EXCEDER LOS 20 CARACTERES",
        className: "text-red-700"
      });
      return false;
    }
  
    if (correo.length > 100) {
      setMensajeRegister({
        mensaje: "EL CORREO NO DEBE EXCEDER LOS 100 CARACTERES",
        className: "text-red-700"
      });
      return false;
    }
  
    if (!emailRegex.test(correo)) {
      setMensajeRegister({
        mensaje: "FORMATO DE CORREO INCORRECTO",
        className: "text-red-700"
      });
      return false;
    }
  
    if (contrasena !== repContrasena) {
      setMensajeRegister({
        mensaje: "LAS CONTRASEÑAS NO COINCIDEN",
        className: "text-red-700"
      });
      return false;
    }
  
    return true;
  };
  
  


  const onSubmitRegister = async (e) => {
    e.preventDefault();
    if (!verificarCamposRegister()) {
      return;
    }

    const data = await ApiUsers.registerUser(dataFormRegister);
    if (data.error) {
      setMensajeRegister({
        mensaje: data.error,
        className: "text-red-700"
      });
      setDataFormRegister({
        nombre: "",
        nombreUsuario: "",
        correo: "",
        contrasena: "",
        repContrasena: ""
      });

      return;
    }

    setMensajeRegister({
      mensaje: "USUARIO REGISTRADO EXITOSAMENTE!",
      className: "text-green-700"
    });
    setDataFormRegister({
      nombre: "",
      nombreUsuario: "",
      correo: "",
      contrasena: "",
      repContrasena: ""
    });
    setTimeout(() => {
      window.location.href = "/home";
    }, 1000);
    return;
  };

  const cerrarModalRegister = () => {
    setOpenModalRegister(false);
    setDataFormRegister({
      nombre: "",
      nombreUsuario: "",
      correo: "",
      contrasena: "",
      repContrasena: ""
    });
    setMensajeRegister({
      mensaje: "",
      className: ""
    });
  };

  const abrirModalRegister=()=>{
    setOpenModalRegister(true);
  }

  const [viewPassword,setViewPassword] =useState({
    contrasena:"password",
    repContrasena:"password",
    classIconContrasena:"bi bi-eye",
    classIconRepContrasena:"bi bi-eye"
  })

  const verContraseña=(campo,campoIcon)=>{
    if(viewPassword[campo]=="password"){
      setViewPassword({ ...viewPassword, [campo]: "text" ,[campoIcon]:"bi bi-eye-slash"})
    }else{
      setViewPassword({ ...viewPassword, [campo]: "password",[campoIcon]:"bi bi-eye" })
    }
  }

  return {
    mensajeRegister,
    openModalRegister,
    dataFormRegister,
    setOpenModalRegister,
    onChangeRegister,
    onSubmitRegister,
    cerrarModalRegister,
    abrirModalRegister,
    viewPassword,
    verContraseña
  };
};

export default useRegister;
