import { useState,useEffect } from 'react';
import ApiUsers from "../Api/ApiUsers";

const useEditar=(profile)=>{
    const [data, setData] = useState(null);
    const [openModalEditar, setOpenModalEditar] = useState(false);
    const [dataForm,setDataForm] = useState({
        nombre:"",
        biografia:"",
        ubicacion:"",
        sitioWeb:""
    })

    const onChangeEditar = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value });
        console.log(dataForm)
    };

    const verModal=(estado)=>{
        setOpenModalEditar(estado)
        if(!estado){
            setDataForm({
                nombre:"",
                biografia:"",
                ubicacion:"",
                sitioWeb:""
            })
        }
    }

    useEffect(() => {
        const fetchData = async () => {
        const userData = await ApiUsers.getUserByUsername(profile);
        setData(userData);
        };

        fetchData();
    }, [profile]);

    return {
        data,
        openModalEditar,
        dataForm,
        onChangeEditar,
        verModal
    };
}

export default useEditar;