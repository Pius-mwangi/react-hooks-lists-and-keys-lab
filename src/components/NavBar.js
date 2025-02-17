import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <div>
      <a href={`#${links[0]}`}>{links[0]}</a>
      <a href={`#${links[1]}`}>{links[1]}</a>
      <a href={`#${links[2]}`}>{links[2]}</a>
    </div>
  );
}

export default NavBar;
