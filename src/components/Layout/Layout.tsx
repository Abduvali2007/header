import scss from "../Layout/Layout.module.scss"
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Get from "./Get/Get";
import Make from "./Make/Make";
import Avengers from "./Avengers/Avengers";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <Get/>
        <Make/>
        <Avengers/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
