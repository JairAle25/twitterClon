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
    const [mensaje,setMensaje]=useState({
        texto:"",
        color:""
    });
    
    const validarFormulario = (dataForm) => {
        const { nombre, biografia, ubicacion, sitioWeb, fotoBanner, fotoPerfil } = dataForm;
    
        if (!nombre && !biografia && !ubicacion && !sitioWeb && !fotoBanner && !fotoPerfil) {
            setMensaje({
                texto:"Al menos un campo debe estar lleno",
                color:"text-red-700"
            })
            return false;
        }
    
        if (nombre.length > 50) {
            setMensaje({
                texto:"El nombre no puede tener más de 50 caracteres",
                color:"text-red-700"
            })
            return false;
        }
        if (biografia.length > 200) {
            setMensaje({
                texto:"La biografia no puede tener más de 200 caracteres",
                color:"text-red-700"
            })
            return false;
        }
        if (ubicacion.length > 30) {
            setMensaje({
                texto:"La ubicacion no puede tener más de 30 caracteres",
                color:"text-red-700"
            })
            return false;
        }
        if (sitioWeb.length > 100) {
            setMensaje({
                texto:"El sitio web no puede tener más de 100 caracteres",
                color:"text-red-700"
            })
            return false;
        }
        if (fotoBanner.length > 300) {
            setMensaje({
                texto:"la URl del banner no puede tener más de 300 caracteres",
                color:"text-red-700"
            })
            return false;
        }
        if (fotoPerfil.length > 300) {
            setMensaje({
                texto:"la URl del perfil no puede tener más de 300 caracteres",
                color:"text-red-700"
            })
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
            setMensaje({
                texto:"Cambios realizados exitosamente !!",
                color:"text-green-700"
            })
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
        mensaje,
        onChangeEditar,
        onSubmitEditar,
        verModal,
    };
}

export default useEditar;