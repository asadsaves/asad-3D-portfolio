import { useState } from 'react';
import { navLinks, socialLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const SocialIcons = () => (
  <div className="flex items-center gap-4">
    {socialLinks.map((link) => (
      <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
        <img src={link.icon} alt={link.name} className="w-6 h-6 hover:opacity-80 transition-opacity" />
      </a>
    ))}
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          {/* Logo */}
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Asad
          </a>

          {/* Social Icons */}
          <div className="hidden sm:flex">
            <SocialIcons />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          {/* Desktop Navigation */}
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
        <div className="p-5">
          <SocialIcons />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
