import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const PortfolioLandingPage = () => {
  return (
    <div className="bg-gray-800 text-white">
      <Header />
      <div className="p-8">
        <section className="text-center">
        
          <h1 className="text-5xl font-bold mt-5">Bem-vindo ao Meu Portfólio!</h1>
          <p className="text-lg">Aqui você pode encontrar alguns projetos e saber mais sobre mim.</p>
        </section>
        <About />
        <Projects />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioLandingPage;
