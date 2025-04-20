import AboutSection from "@/components/AboutSection";
import { BentoGrid } from "@/components/carousel";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Section from "@/components/Section";
import TeamSection from "@/components/TeamSection";
import { services } from "@/data/services";

const AboutPage: React.FC = () => {
  return (
    <>
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center pb-0 pt-32 md:pt-40 px-5"
      >
        <Container>
          <div id="features">
            <h2 className="sr-only">About Vision Fever</h2>
            <AboutSection
              data={{
                title: `Safe for Artists`,
                description: 'Vision Fever is a creative platform celebrating art, culture, and unique perspectives. We provide a safe space for artists of all mediums to express themselves and collaborate.',
                imageSrc: '/images/mockups.jpg',
              }}
              imageAtRight={true}
            />
          </div>
          <Section
            title="Our Mission"
            description="Our mission is to create a safe and inclusive space for artists worldwide to express themselves, collaborate, and inspire others."
            id="mission"
          />
        </Container>
        <Section
          title="What We Do"
          description="We work with artists to create a safe space for them to express themselves. We are a community of artists and art lovers."
          id="services"
        >
          <BentoGrid products={services} />
        </Section>
        <TeamSection
          data={{
            title: `Our Team`,
            description: 'Vision Fever is powered by a passionate team of artists and art lovers. Together, we create events and activities that inspire creativity and foster collaboration.',
          }}
        />
    <FAQ />
        <CTA />
        
      </section>
    </>
  );
};

export default AboutPage;