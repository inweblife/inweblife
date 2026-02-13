import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <a className="skipLink" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
