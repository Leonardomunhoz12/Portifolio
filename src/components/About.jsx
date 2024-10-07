
const About = () => {
  return (
    <section id="about" className="pt-36 p-8 text-center">
      <h2 className="text-3xl mb-4">Sobre Mim</h2>
      <p className="text-lg">
        Sou Leonardo, um estudante de Engenharia de Software, e você encontrará alguns projetos que desenvolvi ao longo da minha jornada.
      </p>
      <a 
        href="/Leonardo Munhoz att.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-4 inline-block bg-gray-800 border border-white text-white py-2 px-4 rounded hover:bg-gray-700"
      >
        Ver Meu Currículo
      </a>
    </section>
  );
};

export default About;
