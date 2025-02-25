import "../src/app/globals.css";
import Header from "@/components/header";
import Boutiques from "@/components/boutiques";
import Footer from "@/components/footer";

function BoutiquesPages() {
  return (
    <main>
      <Header />
        <Boutiques /> 
      <Footer />
    </main>
  );
}

export default BoutiquesPages;
