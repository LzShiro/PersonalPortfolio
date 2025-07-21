import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="flex flex-col scroll-smooth relative z-10">
      
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
