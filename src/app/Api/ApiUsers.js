export default class ApiUsers{

    static RUTA_BASE = "http://localhost:2512";
    

    static registerUser=async(dataUserRegister)=>{
        const {nombre,nombreUsuario,correo,contrasena} = dataUserRegister;
        const userData={
            nombre,
            nombreUsuario,
            correo,
            contrasena
        }
        try {
            const res = await fetch(`${this.RUTA_BASE}/usuarios/register`,{
                method:"POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
    
            if(!res.ok){
                throw new Error(`Error al registrar el usuario. HTTP error! ${res.status}`);
            }

            const data = await res.json();
            return data;
        } catch (error) {
            throw new Error(`Error al registrar el usuario.`);
        }
    }

    static login=async(dataUserLogin)=>{
        const {correo, contrasena} = dataUserLogin;

        const dataLogin ={
            correo,
            contrasena
        }

        try {
            const res = await fetch(`${this.RUTA_BASE}/usuarios/login`,{
                method:"POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataLogin),
                credentials: 'include'
            })
             if(!res.ok){
                throw new Error(`Error al loguear el usuario. HTTP error! ${res.status}`);
            }

            const data = await res.json();
            return data;

        } catch (error) {
            console.log(error)
            throw new Error(`Error al loguear el usuario.`);
        }
    }

    static getMyUserData= async ()=>{
        const res = await fetch(`${this.RUTA_BASE}/usuarios/myUser`,{
            credentials:"include"
        });
        const data = await res.json();
        console.log(data)
        return data;
    }

}