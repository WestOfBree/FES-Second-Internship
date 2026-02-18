import logo from "../public/logo.png";

export default function NavBar({ login, logout }: { login: () => void; logout: () => void }) {
    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <figure className="nav__img--mask">
                    <img className="nav__img" src={logo.src} alt="logo" />
                </figure>
                <ul className="nav__list--wrapper">
                    <li className="nav__list nav__list--login" onClick={login}>Login</li>
                    <li className="nav__list nav__list--mobile">About</li>
                    <li className="nav__list nav__list--mobile">Contact</li>
                    <li className="nav__list nav__list--mobile">Help</li>
                </ul>
            </div>
        </nav>
    );
}