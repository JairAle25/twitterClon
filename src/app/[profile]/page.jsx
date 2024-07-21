import ApiUsers from "../Api/ApiUsers";

async function Profile ({params}) {
    const {profile} = params;
    const data = await ApiUsers.getUserByUsername(profile);
    return ( 
        <>
            <main>
                <div>
                    <h2>{data.nombreUsuario}</h2>
                    <p>0 posts</p>
                </div>
            </main>
        </>
    );
}
 
export default Profile;