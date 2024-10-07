import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p className="text-center">© 2024 Leonardo Munhoz</p>
    </footer>
  );
};

export default Footer;
