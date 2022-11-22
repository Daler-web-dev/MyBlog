import { ImGithub, ImLinkedin, ImInstagram } from "react-icons/im";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiWindowClose } from "react-icons/bi";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)



	return (
		<header className="bg-[#0A0A0A] w-2/2 flex justify-between py-5 px-4 md:px-20 items-center relative border-b">
			<button className="md:hidden" onClick={() => setIsOpen(!isOpen)} >
				<AiOutlineMenuUnfold color="white" size="28" />
			</button>
			<Image src="" alt="My Logo" />
			{/* <input type="text" /> */}
			<nav className="hidden md:flex items-center gap-3 ">
				<a className="link-a" href="#">
					Blog
				</a>
				<a className="link-a" href="#">
					Events
				</a>
				<a className="link-a" href="#">
					About Me
				</a>
				<a className="link-a" href="#">
					Projects
				</a>
			</nav>
			<Socials size="25" />
			<div className={`w-[100%] h-[100vh] bg-[rgba(0,0,0,.7)] backdrop-blur-xl fixed top-0 left-0 bottom-0 z-10 p-10 md:hidden ${isOpen ? "" : "hidden"}`}>
				<button className="absolute right-10" onClick={() => setIsOpen(!isOpen)} >
					<BiWindowClose color="white" size="35" />
				</button>
				<nav className="text-[#fff] text-[34px] flex flex-col gap-4 mt-10">
					<Link href={""}>
						<a href="#">Blog</a>
					</Link>
					<Link href={""}>
						<a href="#">Events</a>
					</Link>
					<Link href={""}>
						<a href="#">About Me</a>
					</Link>
					<Link href={""}>
						<a href="#">Projects</a>
					</Link>
				</nav>
                <div className="absolute bottom-[200px] left-[50%]  translate-x-[-50%]" >
                    <Socials size="35" />
                </div>
			</div>
		</header>
	);
};

const Socials = ({size}) => {
	return (
		<nav className="flex items-center gap-4">
			<Link href={"https://github.com/Daler-web-dev"}>
				<a href="https://github.com/Daler-web-dev">
					<ImGithub color="#fff" size={size} />
				</a>
			</Link>
			<Link
				href={
					"https://www.linkedin.com/in/daler-sharifkulov-34a855214/"
				}
			>
				<a href="https://www.linkedin.com/in/daler-sharifkulov-34a855214/">
					<ImLinkedin color="#fff" size={size} />
				</a>
			</Link>
			<Link href={"https://www.instagram.com/daler.sharifkulov/"}>
				<a href="https://www.instagram.com/daler.sharifkulov/">
					<ImInstagram color="#fff" size={size} />
				</a>
			</Link>
		</nav>
	);
};

export default Header;
