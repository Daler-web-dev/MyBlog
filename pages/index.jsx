import Format from "../Layout/Format";

import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";  
import SectionFour from "../components/SectionFour";
import MyFirstScreen from "../components/MyFirstScreen";
import { useEffect } from "react";
import DarkMode from "../components/_child/DarkMode";
import MarqueeSection from "../components/MarqueeSection";

const Home = () => {
	return (
		<Format>
			<MyFirstScreen />
			<section className="w-full my-10" >
				<MarqueeSection/>
			</section>
			<section className="w-full my-10" >
				<MarqueeSection direction="right" />
			</section>
			{/* <SectionOne /> */}
			<DarkMode/>
			<SectionTwo />
			<SectionThree />
			{/* <SectionFour /> */}
		</Format>
	);
};

export default Home;
