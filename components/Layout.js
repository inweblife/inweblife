import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <a className="skipLink" href="#main-content">
        Прескочи към основното съдържание
      </a>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
