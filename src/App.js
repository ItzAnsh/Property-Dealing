import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Property from "./components/property/Property";
import Works from "./components/works/Works";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div className="App bg-[#f0f0f0]">
			<Header />
			<Hero />
			<Services />
			<About />
			<Property />
			<Works />
			<Footer />
		</div>
	);
}

export default App;
