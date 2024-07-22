const ContadorLetras = ({palabra,max}) => {
    let colorContador="";
    if(palabra.length>max){
        colorContador="text-red-700"
    }
    return ( 
        <>
            <p className={`text-base ${colorContador}`}>{palabra.length}/{max}</p>
        </>
    );
}
 
export default ContadorLetras;