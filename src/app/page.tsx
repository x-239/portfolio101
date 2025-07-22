
import Hero from "@/components/hero";
import Navbar from "@/components/nav-bar";


export default function Home() {
  return (
  <div style={{ backgroundImage: "url('/Background.svg')" }}>
    <Navbar />
    <Hero />
  </div>
  );
}
