import { useState } from 'react';
import styles from './Menu.module.css';

const menuItems = [
  { icon: 'search', label: 'Search' },
  { icon: 'home', label: 'Home' },
  { icon: 'tv-shows', label: 'TV Shows' },
  { icon: 'movies', label: 'Movies' },
  { icon: 'genres', label: 'Genres' },
  { icon: 'watch-later', label: 'Watch Later' },
];

const bottomItems = [
  { label: 'LANGUAGE' },
  { label: 'GET HELP' },
  { label: 'EXIT' },
];

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.menu} ${isOpen ? styles.open : ''}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {isOpen && (
        <div className={styles.profile}>
          <img src="/assets/images/profile-avatar.jpg" alt="Profile" className={styles.avatar} />
          <span>Daniel</span>
        </div>
      )}
      <ul className={styles.items}>
        {menuItems.map((item) => (
          <li key={item.label} className={styles.item}>
            <img src={`/assets/icons/${item.icon}.png`} alt={item.label} className={styles.icon} />
            {isOpen && <span>{item.label}</span>}
          </li>
        ))}
      </ul>
      {isOpen && (
        <ul className={styles.bottomItems}>
          {bottomItems.map((item) => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Menu;