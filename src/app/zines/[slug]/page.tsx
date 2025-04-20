import Container from "@/components/Container";
import Preview from "@/components/Preview/Preview";

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
