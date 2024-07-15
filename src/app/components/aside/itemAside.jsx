"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';

const ItemAside = ({name,icon,iconActive,url}) => {
    const pathname = usePathname();
    let iconStyle=icon;
    if(pathname==url){
        iconStyle=iconActive;
    }
    return ( 
        <>
            <Link href={url} className="flex gap-3 items-center  px-4 py-2 rounded-full max-w-max transition-all duration-500 hover:bg-[#181818]">
                <i className={`${iconStyle} text-2xl bg-transparent`}></i>
                <p className="text-xl bg-transparent">{name}</p>
            </Link>
        </>
    );
}
 
export default ItemAside;