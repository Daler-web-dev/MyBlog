import { ImGithub, ImLinkedin, ImInstagram } from 'react-icons/im';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="bg-[#0A0A0A] w-2/2 flex justify-between p-5 items-center pl-20 pr-20 border-b">
            <Image src="" alt="My Logo" />
            {/* <input type="text" /> */}
            <nav className="sm:disabled:none  flex items-center gap-3">
                <a className="link-a" href="#">Blog</a>
                <a className="link-a" href="#">Events</a>
                <a className="link-a" href="#">About Me</a>
                <a className="link-a" href="#">Projects</a>
            </nav>
            <nav className="flex items-center gap-4">
                <Link href={"#"} ><a href="#" ><ImGithub color='#fff' size="25" /></a></Link>
                <Link href={"#"} ><a href="#" ><ImLinkedin color='#fff' size="25" /></a></Link>
                <Link href={"#"} ><a href="#" ><ImInstagram color='#fff' size="25" /></a></Link>
            </nav>
        </header>
    );
};


export default Header;