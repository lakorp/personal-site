import Image from "next/image";
import logo from "../public/assets/logo.png";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-nav__logo">
                    <Image src={logo} alt="Logo" width="70" height="60" />
                </div>

                <ul className="header-nav__links">
                    <li>
                        <a href="./about.html">About</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="#subject">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
