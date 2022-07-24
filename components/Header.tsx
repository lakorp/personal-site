import Image from "next/image";
import logo from "../public/assets/logo.png";
import Link from "next/link";
type Props = {};

const Header = (props: Props) => {
    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-nav__logo">
                    <Image src={logo} alt="Logo" width="100" height="80" />
                </div>

                <ul className="header-nav__links">
                    <li>
                        <Link href="./about.html">About</Link>
                    </li>
                    <li>
                        <Link href="">Services</Link>
                    </li>
                    <li>
                        <Link href="">Projects</Link>
                    </li>
                    <li>
                        <Link href="#subject">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
