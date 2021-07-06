const Navbar = ({ counter }) => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand ml-4" href="#">
        Type Test
      </a>
      <span className="narbar-brand text-white mr-4 ml-auto">{counter}</span>
    </nav>
  );
};

export default Navbar;
