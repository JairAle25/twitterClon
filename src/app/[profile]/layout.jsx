import AsideLinks from "../components/aside/aside";
import News from "../components/news/news";

export const metadata = {
  title: "Twitter",
  description: "Generated by create next app",
};

export default function ProfileLayout({ children }) {
  return (
    <div className="w-full flex">
      <AsideLinks/>
      <main className="w-[60%]">{children}</main>
      <News/>
    </div>
  );
}