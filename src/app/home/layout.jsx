import AsideLinks from "../components/aside/aside";
import News from "../components/news/news";

export const metadata = {
  title: "Twitter",
  description: "Generated by create next app",
};

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AsideLinks/>
        {children}
        <News/>
        </body>
    </html>
  );
}
