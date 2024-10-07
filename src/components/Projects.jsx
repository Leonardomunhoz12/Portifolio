import { FaGithub } from 'react-icons/fa';

const projects = [
  { id: 1, title: 'Projeto 1', description: 'Melodia é uma plataforma responsiva para descoberta e compartilhamento de músicas, com qualidade de som superior e playlists personalizadas.', github: 'https://github.com/Leonardomunhoz12/CP5_front-end' },
  { id: 2, title: 'Projeto 2', description: 'O Simulador de Corrida de Fórmula 1 permite simular corridas e visualizar rankings. Execute sprint3.py com Python 3+ e escolha entre correr ou ver resultados. Divirta-se!', github: 'https://github.com/Leonardomunhoz12/sprintpython/tree/main/Sprint3Python-main' },
];

const Projects = () => {
  return (
    <section id="projects" className="p-8 flex flex-col items-center">
      <h2 className="text-3xl text-center mb-4">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded bg-gray-700 text-white">
            <h3 className="text-xl">{project.title}</h3>
            <p>{project.description}</p>
            <div className="mt-4 flex space-x-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 border border-white text-white flex items-center justify-center p-2 rounded hover:bg-gray-700 transition duration-200"
              >
                <FaGithub className="text-lg" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
