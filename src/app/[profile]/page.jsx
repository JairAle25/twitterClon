"use client"
import Image from "next/image";
import ModalEditarPerfil from "../components/modal/modalEditarPerfil";
import Loading from "../components/loading/loading";
import useEditar from "../hooks/useEditar";

const getNombreMes = (numMes) => {
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  return meses[numMes - 1];
};

const Profile = ({ params }) => {
  const { profile } = params;

  const {data,openModalEditar,dataForm,onChangeEditar,onSubmitEditar,verModal}=useEditar(profile);
  
  if (!data) {
    return(
        <div className="h-screen flex justify-center items-center">
          <Loading/>
        </div>
    );
  }

  const fecha = data.fechaDeIngreso.split("-");
  const mes = getNombreMes(fecha[1]);

  return (
    <>
      <main className="border-b border-white border-opacity-20">
        <div className="w-[90%] mx-auto my-0 py-2">
          <h2 className="font-bold text-xl">{data.nombre}</h2>
          <p className="opacity-65 text-sm">0 posts</p>
        </div>
        <div className="relative top-0 left-0">
          <img src={data.fotoBanner} alt="foto banner" className="w-full h-48" />
          <img src={data.fotoPerfil} alt="foto perfil" className="absolute top-[55%] left-[5%] w-36 h-36 rounded-full" />
        </div>
        <div className="w-[90%] mx-auto my-0 mt-20 flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">{data.nombre}</h1>
            <h2 className="text-sm opacity-65">@{data.nombreUsuario}</h2>
            <div className="flex gap-2 pt-3 opacity-65">
              <i className="bi bi-calendar2-week"></i>
              <p>se unio en {mes} del {fecha[0]}</p>
            </div>
            <div className="flex gap-4 text-sm pt-3 pb-6">
              <p className="font-bold">0 <span className="opacity-65 font-normal">Siguiendo</span></p>
              <p className="font-bold">0 <span className="opacity-65 font-normal">Seguidor</span></p>
            </div>
          </div>
          <div>
            <button onClick={() => verModal(true)} className="border py-1 px-4 rounded-full transition-all duration-300 hover:bg-[#181919]">Editar perfil</button>
          </div>
        </div>
        <ModalEditarPerfil openModal={openModalEditar} verModal={verModal} fotoPerfil={data.fotoPerfil} fotoBanner={data.fotoBanner} onChange={onChangeEditar} onSubmit={onSubmitEditar} dataForm={dataForm}/>
      </main>
    </>
  );
};

export default Profile;
