import Link from "next/link";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <Hero/>
    {children}
      <Footer/>
      <div id="preloader" />
      
    </>
  );
};

export default Layout;
