import Image from "next/image";
import Hero from "../../components/locoreach/Hero";
import Features from "../../components/locoreach/Features";
import Benefits from "../../components/locoreach/Benefits";
import UseCases from "../../components/locoreach/UseCases";
import Environment from "../../components/locoreach/Environment";
import Support from "../../components/locoreach/Support";
import Footer from "../../components/Footer";

export default function LocoreachPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Features />
      <UseCases />
      <Benefits />
      <Environment />
      <Support />
      <Footer />
    </div>
  );
}
