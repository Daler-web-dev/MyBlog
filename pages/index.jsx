import Format from "../Layout/Format";

import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";



const Home = () => {
	return (
		<Format>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			{/* <SectionFour /> */}
		</Format>
	);
};

export default Home;
