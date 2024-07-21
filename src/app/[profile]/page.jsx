import ApiUsers from "../Api/ApiUsers";

async function Profile ({params}) {
    const {profile} = params;
    const data = await ApiUsers.getUserByUsername(profile);
    return ( 
        <>
            <h1>{`PERFIL DE ${data.nombreUsuario}`}</h1>
        </>
    );
}
 
export default Profile;