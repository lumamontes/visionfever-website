import Container from "@/components/Container";

const ContactPage: React.FC = () => {
  return (
    <section
    className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 md:pb-24 px-5"
    >
      <Container>
        <section id="contact" className="mt-10 mb-5 lg:my-20">
          <div className="text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4">
              Get in Touch with Vision Fever
            </h2>
            <p className="text-lg mb-6">
              You can reach out to us via email or connect with us on social media!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="mailto:visionfeverteam@gmail.com"
                className="text-secondary font-semibold hover:underline"
              >
                Email us at visionfeverteam@gmail.com
              </a>
              <span className="hidden sm:block text-gray-400">|</span>
              <a
                href="https://www.instagram.com/visionfever"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-semibold hover:underline"
              >
                Follow us on Instagram
              </a>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default ContactPage;