import Container from "@/components/Container";
import Preview from "@/components/Preview/Preview";
import { zines } from '@/data/zines';
import { Metadata } from "next";


export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const zine = zines.find((zine) => zine.slug === params.slug);
  
  if (!zine) {
    return {
      title: "Zines",
      description: "Explore our collection of self-published zines.",
    };
  }

  const ogImage = `/images/zines/${params.slug}.png`;

  return {
    title: `${zine.title} | Zines`,
    description: zine.description || "Explore our collection of self-published zines.",
    openGraph: {
      title: zine.title,
      description: zine.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Cover of ${zine.title} zine`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: zine.title,
      description: zine.description,
      images: [ogImage],
    },
  };
}


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      <Container>
        <div id="features">
          <h2 className="sr-only">Zines</h2>
          <Preview slug={slug} />
        </div>
      </Container>
    </section>
  );
}
