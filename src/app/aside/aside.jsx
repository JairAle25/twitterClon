import Link from "next/link";
import ItemAside from "./itemAside";
const links=[
{
    id:1,
    name:"Inicio",
    icon:"bi bi-house-door",
    iconActive:"bi bi-house-door-fill",
    url:"/",
},
{
    id:2,
    name:"Perfil",
    icon:"bi bi-person",
    iconActive:"bi bi-person-fill",
    url:"/perfil",
}
]

const AsideLinks = () => {
    return ( 
        <>
            <aside className="flex flex-col gap-5 w-[25%] justify-start sticky left-0 top-0 items-start h-screen border-r-[1px] border-white border-opacity-20">
                <Link href="/" className="px-4 py-2 rounded-full mt-3 hover:bg-[#181818]">
                    <i className="bi bi-twitter-x text-2xl bg-transparent"></i>
                </Link>
                {links.map(link => <ItemAside key={link.id} name={link.name} icon={link.icon} iconActive={link.iconActive} url={link.url}/>)}
            </aside>
        </>
     );
}
 
export default AsideLinks;