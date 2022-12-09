import { ImGithub, ImLinkedin, ImInstagram } from "react-icons/im";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiWindowClose } from "react-icons/bi";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	return (
		<header className="bg-[#0A0A0A] w-2/2 flex justify-between py-5 px-4 md:px-20 items-center relative border-b max-w-[1920px] mx-auto">
			<button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
				<AiOutlineMenuUnfold color="white" size="28" />
			</button>
			{/* <h1 className="main-title text-[34px] leading-[24px]" ><span>N</span>sl </h1> */}
			<div className="w-[200px]" ></div>
			{/* <Image src="" alt="My Logo" /> */}
			{/* <input type="text" /> */}
			<nav className="hidden md:flex items-center gap-3 ">
				<Link href={"/Blog"} >
					<a className="link-a">Blog</a>
				</Link>
				<Link href={""} >
					<a className="link-a">Events</a>
				</Link>
				<Link href={""} >
					<a className="link-a">About Me</a>
				</Link>
				<Link href={""} >
					<a className="link-a">Projects</a>
				</Link>
			</nav>
			<Socials size="25" />
			<MenuWindow
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
		</header>
	);
};

const Socials = ({ size }) => {
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

const MenuWindow = ({ isOpen, setIsOpen}) => {
	return (
		<div
			className={`modal ${
				isOpen ? "modal-active" : ""
			}`}
		>
			<button
				className="absolute right-10"
				onClick={() => setIsOpen(!isOpen)}
			>
				<BiWindowClose color="white" size="35" />
			</button>
			<nav className="text-[#fff] text-[34px] flex flex-col gap-4 mt-10">
				<Link href={"/blog"}>
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
			<div className="absolute bottom-[200px] left-[50%]  translate-x-[-50%]">
				<Socials size="35" />
			</div>
		</div>
	);
};

export default Header;
