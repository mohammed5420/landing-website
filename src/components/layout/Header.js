import React , {useState} from "react";

const Header = () => {
  const [toggle , setToggle] = useState(false);
  const Humberger = () => (
    <div id={`${toggle ? 'open-humberger' : ''}`} className={`navigation__humberger `} onClick={() => setToggle(!toggle)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  ) 
  const NavList = () => (
    <>

      <ul className = {`navigation__list ${toggle && 'open'}`}>
            <li className="navigation-item">
              <a className="navigation__list--link active" href="/">
                home
              </a>
            </li>
            <li className="navigation-item">
              <a className="navigation__list--link" href="#features">
                key features
              </a>
            </li>
            <li className="navigation-item">
              <a className="navigation__list--link" href="#pricing">
                pricing
              </a>
            </li>
            <li className="navigation-item">
              <a className="navigation__list--link" href="#testiminial">
                testiminial
              </a>
            </li>
            <li className="navigation-item u-upper-case">
              <a className="navigation__list--link" href="#FAQ">
                FAQ
              </a>
            </li>
          </ul>
          <div className="navigation__cta">
            <a href="/" className="btn btn--blue">try for free</a>
          </div>
    </>
  );
  return (
    <header className="header">
        <div className="header__logo">
          <p className="header__logo--text">
            <span>app</span>
            <span>lab</span>
          </p>
        </div>
        <nav className="navigation">
          <NavList />
        </nav>
        <Humberger  />
    </header>
  );
};

export default Header;
