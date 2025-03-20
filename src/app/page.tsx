import Image from "next/image";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import CustomerApp from "../components/CustomerApp";
import RestaurantApp from "../components/RestaurantApp";
import Environment from "../components/Environment";
import Support from "../components/Support";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Features />
      <CustomerApp />
      <RestaurantApp />
      <Benefits />
      <Environment />
      <Support />
      <Contact />
    </div>
  );
}
