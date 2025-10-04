import { Outlet } from "react-router-dom";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import Profile from  "./pages/components/Profile";

function Layout() {
  return (
    <>
      <Header />
      <hr/>
      <Outlet />   {/* chỗ này render route con */}
      <Profile />

      <hr/>
      <Footer />
    </>
  );
}

export default Layout;
