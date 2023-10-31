'use client';
import cls from './index.module.scss';
import Image from 'next/image';
import searchIcon from '../../assets/searchIcon.svg';
import btnArrow from '../../assets/btnArrow.svg';
import userIcon from '../../assets/userIcon.svg';
import favoriteIcon from '../../assets/favoriteIcon.svg';
import cartIcon from '../../assets/cartIcon.svg';
import compIcon from '../../assets/compIcon.svg';
import procIcon from '../../assets/procIcon.svg';
import monicIcon from '../../assets/monicIcon.svg';
import mouseIcon from '../../assets/mouseIcon.svg';
import wifiIcon from '../../assets/wifiIcon.svg';
import rightArrow from '../../assets/rightArrow.svg';
import { useState } from 'react';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <div className={cls.wrapper}>
          <div className={cls.logo}>MasterComponent</div>
          <nav className={cls.navBar}>
            <div className={cls.searchBar}>
              <Image src={searchIcon} width={18} height={18} alt='search' />
              <input type='text' placeholder='Пошук...' />
            </div>
            <div className={cls.navBlock}>
              <ul className={cls.navCategories}>
                <li
                  className={`${activeMenu && cls.active}`}
                  onClick={() => setActiveMenu(!activeMenu)}>
                  Каталог
                  <Image className={cls.navBtn} src={btnArrow} width={24} height={24} alt='arrow' />
                </li>
                <li>
                  Допомога
                  <Image className={cls.navBtn} src={btnArrow} width={24} height={24} alt='arrow' />
                </li>
                <li>Про компанію</li>
              </ul>
            </div>
          </nav>
          <div className={cls.navItems}>
            <button className={cls.registrationUser}>
              <Image src={userIcon} width={15} height={20} alt='registrationUser' />
            </button>
            <button className={cls.registrationUser}>
              <Image src={favoriteIcon} width={20} height={17} alt='registrationUser' />
            </button>
            <button className={cls.registrationUser}>
              <Image src={cartIcon} width={19} height={20} alt='registrationUser' />
            </button>
          </div>
          {activeMenu && (
            <section id={cls.mainMenu}>
              <ul className={cls.mainMenuItems}>
                <li
                  id={`${activeCategory === 1 ? cls.activeCategory : ''}`}
                  onMouseEnter={() => setActiveCategory(1)}>
                  <Image src={compIcon} width={25} height={25} alt='compIcon' />
                  Конфігуратор
                </li>
                <li
                  id={`${activeCategory === 2 ? cls.activeCategory : ''}`}
                  onMouseEnter={() => setActiveCategory(2)}>
                  <Image src={procIcon} width={28} height={28} alt='procIcon' />
                  Комплектуючі
                </li>
                <li
                  id={`${activeCategory === 3 ? cls.activeCategory : ''}`}
                  onMouseEnter={() => setActiveCategory(3)}>
                  <Image src={monicIcon} width={25} height={23} alt='monicIcon' />
                  Монітори
                </li>
                <li
                  id={`${activeCategory === 4 ? cls.activeCategory : ''}`}
                  onMouseEnter={() => setActiveCategory(4)}>
                  <Image src={mouseIcon} width={17} height={26} alt='mouseIcon' />
                  Периферія
                </li>
                <li>
                  <Image src={wifiIcon} width={25} height={20} alt='mouseIcon' />
                  Мережеве обладнання
                </li>
              </ul>
              <div className={cls.subCategory}>
                <div
                  className={`${cls.accessories} ${
                    activeCategory === 2 ? cls.activeAccessories : cls.accessories
                  }`}>
                  <div className={cls.accessoriesItem}>
                    <h2>Процесори</h2>
                    <ul>
                      <li>Intel</li>
                      <li>AMD</li>
                    </ul>
                    <button>
                      Більше варіантів
                      <Image src={rightArrow} width={12} height={12} alt='link' />
                    </button>
                  </div>
                  <div className={cls.accessoriesItem}>
                    <h2>Процесори</h2>
                    <ul>
                      <li>Intel</li>
                      <li>AMD</li>
                    </ul>
                    <button>
                      Більше варіантів
                      <Image src={rightArrow} width={11} height={7} alt='link' />
                    </button>
                  </div>
                  <div className={cls.accessoriesItem}>
                    <h2>Процесори</h2>
                    <ul>
                      <li>Intel</li>
                      <li>AMD</li>
                    </ul>
                    <button>
                      Більше варіантів
                      <Image src={rightArrow} width={11} height={7} alt='link' />
                    </button>
                  </div>
                  <div className={cls.accessoriesItem}>
                    <h2>Процесори</h2>
                    <ul>
                      <li>Intel</li>
                      <li>AMD</li>
                    </ul>
                    <button>
                      Більше варіантів
                      <Image src={rightArrow} width={11} height={7} alt='link' />
                    </button>
                  </div>
                  <div className={cls.accessoriesItem}>
                    <h2>Процесори</h2>
                    <ul>
                      <li>Intel</li>
                      <li>AMD</li>
                    </ul>
                    <button>
                      Більше варіантів
                      <Image src={rightArrow} width={11} height={7} alt='link' />
                    </button>
                  </div>
                  <div className={cls.accessoriesItem}>
                    <h2>Процесори</h2>
                    <ul>
                      <li>Intel</li>
                      <li>AMD</li>
                    </ul>
                    <button>
                      Більше варіантів
                      <Image src={rightArrow} width={11} height={7} alt='link' />
                    </button>
                  </div>
                  <div className={cls.accessoriesItem}>
                    <h2>Процесори</h2>
                    <ul>
                      <li>Intel</li>
                      <li>AMD</li>
                    </ul>
                    <button>
                      Більше варіантів
                      <Image src={rightArrow} width={11} height={7} alt='link' />
                    </button>
                  </div>
                  <div className={cls.accessoriesItem}>
                    <h2>Процесори</h2>
                    <ul>
                      <li>Intel</li>
                      <li>AMD</li>
                    </ul>
                    <button>
                      Більше варіантів
                      <Image src={rightArrow} width={11} height={7} alt='link' />
                    </button>
                  </div>
                  <div className={cls.accessoriesItem}>
                    <h2>Процесори</h2>
                    <ul>
                      <li>Intel</li>
                      <li>AMD</li>
                    </ul>
                    <button>
                      Більше варіантів
                      <Image src={rightArrow} width={11} height={7} alt='link' />
                    </button>
                  </div>
                </div>
                <div
                  className={`${cls.monitors} ${
                    activeCategory === 3 ? cls.activeMonitors : cls.noMonitors
                  }`}>
                  <button className={cls.showAllMonitors}>Показати усі монітори</button>

                  <div className={cls.monitorsItems}>
                    <div className={cls.monitorsItem}>
                      <h2>За роздільною здатністю</h2>
                      <ul>
                        <li>Full HD (1080)</li>
                        <li>Quad HD 2K (2560x1440)</li>
                        <li>Ultra HD 4K (3840x2160)</li>
                      </ul>
                      <button>
                        Більше варіантів
                        <Image src={rightArrow} width={11} height={7} alt='link' />
                      </button>
                    </div>

                    <div className={cls.monitorsItem}>
                      <h2>За призначенням</h2>
                      <ul>
                        <li>Для офісних задач</li>
                        <li>Для геймінгу</li>
                        <li>Для повсякденних задач</li>
                      </ul>
                      <button>
                        Більше варіантів
                        <Image src={rightArrow} width={11} height={7} alt='link' />
                      </button>
                    </div>
                    <div className={cls.monitorsItem}>
                      <h2>Аксесуари</h2>
                      <ul>
                        <li>Кабелі та перехідники</li>
                        <li>Кронштейни та підставки</li>
                        <li>Чистячі засоби</li>
                      </ul>
                      <button>
                        Більше варіантів
                        <Image src={rightArrow} width={11} height={7} alt='link' />
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className={`${cls.periphery} ${
                    activeCategory === 4 ? cls.activeMonitors : cls.noMonitors
                  }`}>
                  <div className={cls.peripheryItems}>
                    <div className={cls.peripheryItem}>
                      <h2>Аксесуари</h2>
                      <ul>
                        <li>Кабелі та перехідники</li>
                        <li>Кронштейни та підставки</li>
                        <li>Чистячі засоби</li>
                      </ul>
                      <button>
                        Більше варіантів
                        <Image src={rightArrow} width={11} height={7} alt='link' />
                      </button>
                    </div>
                    <div className={cls.peripheryItem}>
                      <h2>Аксесуари</h2>
                      <ul>
                        <li>Кабелі та перехідники</li>
                        <li>Кронштейни та підставки</li>
                        <li>Чистячі засоби</li>
                      </ul>
                      <button>
                        Більше варіантів
                        <Image src={rightArrow} width={11} height={7} alt='link' />
                      </button>
                    </div>
                    <div className={cls.peripheryItem}>
                      <h2>Аксесуари</h2>
                      <ul>
                        <li>Кабелі та перехідники</li>
                        <li>Кронштейни та підставки</li>
                        <li>Чистячі засоби</li>
                      </ul>
                      <button>
                        Більше варіантів
                        <Image src={rightArrow} width={11} height={7} alt='link' />
                      </button>
                    </div>
                    <div className={cls.peripheryItem}>
                      <h2>Аксесуари</h2>
                      <ul>
                        <li>Кабелі та перехідники</li>
                        <li>Кронштейни та підставки</li>
                        <li>Чистячі засоби</li>
                      </ul>
                      <button>
                        Більше варіантів
                        <Image src={rightArrow} width={11} height={7} alt='link' />
                      </button>
                    </div>
                    <div className={cls.peripheryItem}>
                      <h2>Аксесуари</h2>
                      <ul>
                        <li>Кабелі та перехідники</li>
                        <li>Кронштейни та підставки</li>
                        <li>Чистячі засоби</li>
                      </ul>
                      <button>
                        Більше варіантів
                        <Image src={rightArrow} width={11} height={7} alt='link' />
                      </button>
                    </div>
                    <div className={cls.peripheryItem}>
                      <h2>Аксесуари</h2>
                      <ul>
                        <li>Кабелі та перехідники</li>
                        <li>Кронштейни та підставки</li>
                        <li>Чистячі засоби</li>
                      </ul>
                      <button>
                        Більше варіантів
                        <Image src={rightArrow} width={11} height={7} alt='link' />
                      </button>
                    </div>
                    <div className={cls.peripheryItem}>
                      <h2>Аксесуари</h2>
                      <ul>
                        <li>Кабелі та перехідники</li>
                        <li>Кронштейни та підставки</li>
                        <li>Чистячі засоби</li>
                      </ul>
                      <button>
                        Більше варіантів
                        <Image src={rightArrow} width={11} height={7} alt='link' />
                      </button>
                    </div>
                    <div className={cls.peripheryItem}>
                      <h2>Аксесуари</h2>
                      <ul>
                        <li>Кабелі та перехідники</li>
                        <li>Кронштейни та підставки</li>
                        <li>Чистячі засоби</li>
                      </ul>
                      <button>
                        Більше варіантів
                        <Image src={rightArrow} width={11} height={7} alt='link' />
                      </button>
                    </div>
                    <div className={cls.peripheryItem}>
                      <h2>Аксесуари</h2>
                      <ul>
                        <li>Кабелі та перехідники</li>
                      </ul>
                    
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
