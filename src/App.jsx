import "./App.css";
import AdSection1 from "./component/AdSection1";
import FAQ from "./component/FAQ";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Hero1 from "./component/Hero1";
import Navbar from "./component/Navbar";
import RemoteAd from "./component/RemoteAd";
import Steps from "./component/Steps";

// function App() {
// 	return <div style={{ padding: 40, fontSize: 24 }}>App is rendering ✅</div>;
// }
function App() {
	return (
		<div className="">
			<Navbar />
			<Hero />
			<Hero1 />
			<AdSection1 />
			<RemoteAd />
			<Steps />
			<FAQ />
			<Footer />
		</div>
	);
}

export default App;
