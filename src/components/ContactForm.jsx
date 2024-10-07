const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
  };

  return (
    <section id="contact" className="p-8">
      <h2 className="text-3xl text-center mb-4">Contato</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block">Nome:</label>
          <input type="text" name="name" className="border rounded p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block">Email:</label>
          <input type="email" name="email" className="border rounded p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block">Mensagem:</label>
          <textarea name="message" className="border rounded p-2 w-full" rows="4" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
