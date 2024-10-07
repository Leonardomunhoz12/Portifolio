import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 fixed w-full z-10">
      <nav className="flex justify-between">
        <h1 className="text-white text-xl">Meu Portfólio</h1>
        <ul className="flex space-x-4">
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="text-white hover:underline cursor-pointer"
            >
              Sobre Mim
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="text-white hover:underline cursor-pointer"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="text-white hover:underline cursor-pointer"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
