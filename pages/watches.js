import "../src/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WatchGallery from "@/components/watchGallery";

export default function Watches () {
    return (
        <main>
            <Header />
            <WatchGallery />
            <Footer /> 
        </main>
    );
} 