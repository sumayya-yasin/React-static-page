import reactLogo from "../images/react-logo.png";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img className="header__logo" src={reactLogo} alt="React logo" />
        <span className="header__text">ReactFacts</span>
      </nav>
    </header>
  );
}
