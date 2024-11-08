import { useState,useEffect } from 'react';
import ApiUsers from '../Api/ApiUsers';

const useTweet =()=>{
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await ApiUsers.getMyUserData();
            if(data){
                setDataFormTweet((prevForm) => ({
                    ...prevForm,
                    nombreUsuario: data.nombreUsuario
                }));
            }
        };
        fetchData();
    }, []);

    const [dataFormTweet,setDataFormTweet] = useState({
        nombreUsuario:"",
        descripcion:"",
        urlImagen:""
    })

    const onChangeTweet = (e) => {
        setDataFormTweet({ ...dataFormTweet, [e.target.name]: e.target.value });
    };

    const onSubmitTweet=(e)=>{
        e.preventDefault();
        console.log(dataFormTweet)
    }

    return{
        dataFormTweet,
        onChangeTweet,
        onSubmitTweet
    }
}

export default useTweet;