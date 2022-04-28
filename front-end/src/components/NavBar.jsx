import React from 'react';


const NavBar = () => {
  return (
  <nav className='navbar'>
    <div className="navbar_logo">Logo</div>
<ul className="navbar_links">
  <li className="navbar_item">
<a href="
" className="navbar_link">Accueil</a>
</li>
  <li className="navbar_item">
<a href="
" className="navbar_link">Miel</a>
</li>
  <li className="navbar_item">
<a href="
" className="navbar_link">Epicerie Fine</a>
</li>
  <li className="navbar_item">
<a href="
" className="navbar_link">A propos</a>
</li>
  <li className="navbar_item">
<a href="
" className="navbar_link">Chomeur</a>
</li>
</ul>

<button className='navbar_burger'>
  <span className="burger-bar"></span>
</button>




  </nav>
  );
};

export default NavBar;