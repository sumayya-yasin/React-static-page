export default function Navbar() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img
          className="header__logo"
          src="src\images\react-logo.png"
          alt="react logo"
        />
        <span className="header__text"> ReactFacts </span>
      </nav>
    </header>
  );
}
