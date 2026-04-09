import { MainNavbar, SubNavbar } from "./navigation";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-40 bg-primary">
      <MainNavbar />
      {/* <SubNavbar /> */}
    </nav>
  );
};

export default Navbar;
