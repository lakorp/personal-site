import Image from "next/image";
import logo from "../public/assets/logo.png";
import menu from "../public/assets/icons/menu.svg";
import arrow from "../public/assets/icons/arrow.svg";
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

                <div id="mobile-menu">
                    <Image src={menu} alt="Logo" width="40" height="40" />
                </div>

                <div id="close-btn">
                    <Image
                        className="arrow"
                        src={arrow}
                        alt="Logo"
                        width="180"
                        height="180"
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;
