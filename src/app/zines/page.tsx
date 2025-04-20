import Container from "@/components/Container";
import Zines from "@/components/Zines/Zines";

const HomePage: React.FC = () => {
  return (
    <section
    id="hero"
    className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
>
        <Container>
        <Zines />
      </Container>
    </section>
  );
};

export default HomePage;
