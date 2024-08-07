import AsideLinks from "../components/aside/aside";
import News from "../components/news/news";

export const metadata = {
  title: "Inicio / X",
  description: "Generated by create next app",
};

export default function HomeLayout({ children }) {
  return (
    <div className="w-full flex">
      <AsideLinks/>
      <main className="w-[60%]">{children}</main>
      <News/>
    </div>
  );
}
