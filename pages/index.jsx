import Format from "../Layout/Format";

import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import MyFirstScreen from "../components/MyFirstScreen";
import { useEffect } from "react";
import DarkMode from "../components/_child/DarkMode";

const Home = () => {
	return (
		<Format>
			<MyFirstScreen />
			{/* <SectionOne /> */}
			<DarkMode/>
			<SectionTwo />
			<SectionThree />
			{/* <SectionFour /> */}
		</Format>
	);
};

export default Home;
