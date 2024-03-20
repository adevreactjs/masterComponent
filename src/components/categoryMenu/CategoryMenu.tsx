'use client';
import React, { useState } from 'react';
import cls from './index.module.scss';
import Image from 'next/image';
import compIcon from '../../assets/compIcon.svg';
import procIcon from '../../assets/procIcon.svg';
import monicIcon from '../../assets/monicIcon.svg';
import mouseIcon from '../../assets/mouseIcon.svg';
import wifiIcon from '../../assets/wifiIcon.svg';
import rightArrow from '../../assets/rightArrow.svg';
import Link from 'next/link';

const CategoryMenu = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
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
        <li
          id={`${activeCategory === 5 ? cls.activeCategory : ''}`}
          onMouseEnter={() => setActiveCategory(5)}>
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
              <li><Link href='http://localhost:3000/category/intel'>Intel</Link></li>
              <li><Link href='http://localhost:3000/category/amd'>Amd</Link></li>
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
              <h2>Витратні матеріали</h2>
              <ul>
                <li>Картриджі</li>
                <li>Тонери</li>
                <li>Кабелі та перехідники</li>
                <li>Чистячі засоби</li>
              </ul>
              <button>
                Більше варіантів
                <Image src={rightArrow} width={11} height={7} alt='link' />
              </button>
            </div>
            <div className={cls.peripheryItem}>
              <h2>Аудіотехніка</h2>
              <ul>
                <li>Навушники</li>
                <li>Акустичні системи</li>
                <li>Портативна акустика</li>
                <li>Мікрофони</li>
              </ul>
              <button>
                Більше варіантів
                <Image src={rightArrow} width={11} height={7} alt='link' />
              </button>
            </div>
            <div className={cls.peripheryItem}>
              <h2>Техніка для стрімінгу</h2>
              <ul>
                <li>Веб-камери</li>
                <li>Мікрофони</li>
                <li>Навушники з мікрофоном</li>
                <li>Пристрої захоплення відео</li>
              </ul>
              <button>
                Більше варіантів
                <Image src={rightArrow} width={11} height={7} alt='link' />
              </button>
            </div>
            <div className={cls.peripheryItem}>
              <h2>Аксесуари</h2>
              <ul>
                <li>ДБЖ</li>
                <li>USB хаби</li>
                <li>Кардрідери</li>
                <li>Батарейки</li>
                <li>Мережеві фільтри</li>
              </ul>
              <button>
                Більше варіантів
                <Image src={rightArrow} width={11} height={7} alt='link' />
              </button>
            </div>
            <div className={cls.peripheryItem}>
              <h2>Кабелі та перехідники</h2>
              <ul>
                <li>HDMI, DVI, VGA</li>
                <li>Мережеві кабелі</li>
                <li>Кабелі та перехідники USB</li>
                <li>Аудіо-відео кабелі</li>
                <li>Кабелі живлення</li>
              </ul>
              <button>
                Більше варіантів
                <Image src={rightArrow} width={11} height={7} alt='link' />
              </button>
            </div>
            <div className={cls.peripheryItem}>
              <h2>Маніпулятори</h2>
              <ul>
                <li>Миші</li>
                <li>Клавіатури</li>
                <li>Комплекти миша і клавіатура</li>
                <li>Килимки</li>
                <li>Ігрові маніпулятори</li>
              </ul>
              <button>
                Більше варіантів
                <Image src={rightArrow} width={11} height={7} alt='link' />
              </button>
            </div>
            <div className={cls.peripheryItem}>
              <h2>БФП</h2>
              <ul>
                <li>Лазерні</li>
              </ul>
            </div>
            <div className={cls.peripheryItem}>
              <h2>Принтери</h2>
              <ul>
                <li>Лазерні</li>
              </ul>
            </div>
            <div className={cls.peripheryItem}>
              <h2>Накопичувачі SSD та HDD</h2>
              <ul>
                <li>USB-Flash</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`${cls.networkEquipment} ${
            activeCategory === 5 ? cls.activeMonitors : cls.noMonitors
          }`}>
          <div className={cls.networkEquipmentItems}>
            <div className={cls.networkEquipmentItem}>
              <h2>Активне</h2>
              <ul>
                <li>Точки доступу</li>
                <li>Wi-Fi адаптери</li>
                <li>Bluetooth адаптери</li>
                <li>Мережеві карти</li>
                <li>Комутатори</li>
                <li>PowerLine</li>
                <li>Медіаконвертери</li>
              </ul>
              <button>
                Більше варіантів
                <Image src={rightArrow} width={11} height={7} alt='link' />
              </button>
            </div>
            <div className={cls.networkEquipmentItem}>
              <h2>Роутери</h2>
              <ul>
                <li>802.11ax (Wi-Fi 7)</li>
                <li>802.11ax (Wi-Fi 6E)</li>
                <li>802.11ax (Wi-Fi 6)</li>
                <li>802.11ac (Wi-Fi 5)</li>
                <li>802.11n (Wi-Fi 4)</li>
                <li>802.11g (Wi-Fi 3)</li>
              </ul>
              <button>
                Більше варіантів
                <Image src={rightArrow} width={11} height={7} alt='link' />
              </button>
            </div>
            <div className={cls.networkEquipmentItem}>
              <h2>Пасивне</h2>
              <ul>
                <li>Антени</li>
                <li>Патч-корди</li>
                <li>Бухти кабелю</li>
                <li>Коннектори</li>
                <li>Аксесуари</li>
                <li>Інструменти</li>
              </ul>
              <button>
                Більше варіантів
                <Image src={rightArrow} width={11} height={7} alt='link' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryMenu;
