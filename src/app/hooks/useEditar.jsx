import { useState,useEffect } from 'react';
import ApiUsers from "../Api/ApiUsers";

const useEditar=(profile)=>{
    const [data, setData] = useState(null);
    const [openModalEditar, setOpenModalEditar] = useState(false);
    const [dataForm,setDataForm] = useState({
        nombre:"",
        biografia:"",
        ubicacion:"",
        sitioWeb:"",
        fotoBanner:"",
        fotoPerfil:""
    })
    
    const validarFormulario = (dataForm) => {
        const { nombre, biografia, ubicacion, sitioWeb, fotoBanner, fotoPerfil } = dataForm;
    
        if (!nombre && !biografia && !ubicacion && !sitioWeb && !fotoBanner && !fotoPerfil) {
            console.error("Error: Al menos un campo debe estar lleno.");
            return false;
        }
    
        if (nombre.length > 50) {
            console.error("Error: El nombre no puede tener más de 50 caracteres.");
            return false;
        }
        if (biografia.length > 200) {
            console.error("Error: La biografía no puede tener más de 200 caracteres.");
            return false;
        }
        if (ubicacion.length > 30) {
            console.error("Error: La ubicación no puede tener más de 30 caracteres.");
            return false;
        }
        if (sitioWeb.length > 100) {
            console.error("Error: El sitio web no puede tener más de 100 caracteres.");
            return false;
        }
        if (fotoBanner.length > 300) {
            console.error("Error: La URL de la foto del banner no puede tener más de 300 caracteres.");
            return false;
        }
        if (fotoPerfil.length > 300) {
            console.error("Error: La URL de la foto del perfil no puede tener más de 300 caracteres.");
            return false;
        }
    
        return true;
    };

    const onChangeEditar = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    };

    const onSubmitEditar=(e)=>{ 
        e.preventDefault();
        if (validarFormulario(dataForm)) {
            console.log(dataForm);
        }
    }

    const verModal=(estado)=>{
        setOpenModalEditar(estado)
        if(!estado){
            setDataForm({
                nombre:"",
                biografia:"",
                ubicacion:"",
                sitioWeb:"",
                fotoBanner:"",
                fotoPerfil:""
            })
        }
    }

    useEffect(() => {
        const fetchData = async () => {
        const userData = await ApiUsers.getUserByUsername(profile);
        if(!userData.fotoBanner){
            userData.fotoBanner="/sinBanner.webp";
        }
        if(!userData.fotoPerfil){
            userData.fotoPerfil="/sinFotoPerfil.webp";
        }
        setData(userData);
        };

        fetchData();
    }, [profile]);

    return {
        data,
        openModalEditar,
        dataForm,
        onChangeEditar,
        onSubmitEditar,
        verModal,
    };
}

export default useEditar;