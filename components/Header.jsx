import { ImGithub, ImLinkedin, ImInstagram } from 'react-icons/im';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="bg-[#0A0A0A] w-2/2 flex justify-between py-5 px-4 md:px-20 items-center  border-b">
            <button className="md:hidden" >
                <AiOutlineMenuUnfold color='white' size="28"/>
            </button>
            <Image src="" alt="My Logo" />
            {/* <input type="text" /> */}
            <nav className="hidden md:flex items-center gap-3 ">
                <a className="link-a" href="#">Blog</a>
                <a className="link-a" href="#">Events</a>
                <a className="link-a" href="#">About Me</a>
                <a className="link-a" href="#">Projects</a>
            </nav>
            <nav className="flex items-center gap-4">
                <Link href={"https://github.com/Daler-web-dev"} ><a href="https://github.com/Daler-web-dev" ><ImGithub color='#fff' size="25" /></a></Link>
                <Link href={"https://www.linkedin.com/in/daler-sharifkulov-34a855214/"} ><a href="https://www.linkedin.com/in/daler-sharifkulov-34a855214/" ><ImLinkedin color='#fff' size="25" /></a></Link>
                <Link href={"https://www.instagram.com/daler.sharifkulov/"} ><a href="https://www.instagram.com/daler.sharifkulov/" ><ImInstagram color='#fff' size="25" /></a></Link>
            </nav>
        </header>
    );
};


export default Header;