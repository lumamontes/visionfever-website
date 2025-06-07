
import Section from "@/components/Section";
import TeamSection from "@/components/TeamSection";
import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <>
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center pb-0 pt-32 md:pt-40 px-5"
      >
          <Image src="/images/mockups.jpg" alt="Vision Fever" width={500} height={500} className="mx-auto" />
          <Section
            title="What We Do"
            description="Vision Fever is all about bringing people together through art, fun and community. We're here to lift up small and overlooked artists and build a supportive creative environment. We give artists a place to shine and collaborate through our various projects, such as collective zines, social media features, interviews and more. What we do is meant to spark joy, connection, and a little bit of that childhood wonder where everyone gets to play and feel like they belong."
            id="services"
          />
        <TeamSection
          data={{
            title: `Our Team`,
            description: 'Vision Fever is powered by a passionate team of artists and art lovers. Together, we create events and activities that inspire creativity and foster collaboration.',
          }}
        />
      </section>
    </>
  );
};

export default AboutPage;