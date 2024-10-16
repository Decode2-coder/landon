import React, {useState, useEffect} from "react";
// import menuLinksData from ".//data/menu_links.json";
function Header() {
  const [menuLinksData, setMenuLinksData] = useState([]);
  const loadMenuLinksData = async() => {
      //query the api gateway
      const resp = await fetch('https://14u770ll0i.execute-api.us-east-1.amazonaws.com/Production/menu_links');
      let jsonData = await resp.json();

      //assign response data to our state variable
      setMenuLinksData(jsonData);
  }
  useEffect(()=>{
    //load the menu links data from the api gateway
    loadMenuLinksData();
  }, []);

  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>Landon </h1>
          <h2>West London</h2>
          <p>
            <a href="#welcome">
              <img
                src="https://landonhotel.com/images/misc/arrow.png"
                alt="down arrow"
              />
            </a>
          </p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand">
            <a href="#welcome">
              Landon <span>Hotel</span>
            </a>
          </div>
          <ul>
            {menuLinksData.map((link) => (
              <li>
                <a className={`icon ${link.class}`} href={link.href}>
                  <span>{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
