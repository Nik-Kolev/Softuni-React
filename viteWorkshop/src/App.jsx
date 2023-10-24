import About from './Components/About';
import ClientSection from './Components/ClientSection';
import Footer from './Components/Footer';
import Header from './components/Header';
import Info from './Components/Info';
import OurServices from './Components/OurServices';
import OurTeam from './Components/OurTeam';
import WhyUs from './Components/WhyUs';

function App() {
    return (
        <>
            <Header />

            <OurServices />

            <About />

            <WhyUs />

            <OurTeam />

            <ClientSection />

            <Info />

            <Footer />
        </>
    );
}

export default App;
