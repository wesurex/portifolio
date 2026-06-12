import { notFound } from "next/navigation";
import CursorGlow from "../components/CursorGlow";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { getDictionary, hasLocale } from "./dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <CursorGlow />
      <Header lang={lang} dict={dict.header} />
      <main>
        <Hero dict={dict.hero} />
        <Marquee />
        <Projects dict={dict.projects} />
        <About dict={dict.about} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
