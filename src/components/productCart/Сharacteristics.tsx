import cls from './index.module.scss';
import Image from 'next/image';
import favIcon from '@/assets/favIcon.svg';
import productImg from '@/assets/productCard/mathCart.jpg';

const Characteristics = () => {
  return (
    <div className={cls.characteristics}>
      <div className={cls.characteristicsItems}>
        <div className={cls.characteristicsItem}>
          <h2>Процесор</h2>
          <div className={cls.characteristicsBox}>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Виробник:</div>
              <div className={cls.characteristicsInfo}>ASUS</div>
            </div>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Тип:</div>
              <div className={cls.characteristicsInfo}>Материнські плати Intel</div>
            </div>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Розєм процесора (Socket):</div>
              <div className={cls.characteristicsInfo}>LGA1700</div>
            </div>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Чіпсет:</div>
              <div className={cls.characteristicsInfo}>Intel Z790</div>
            </div>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Процесори:</div>
              <div className={cls.characteristicsInfo}>Процесори LGA1700</div>
            </div>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Підтримувальні процесори:</div>
              <div className={cls.characteristicsInfo}>
                <span>Список підтримуваних процесорів</span>
              </div>
            </div>
          </div>
          <h2>Оперативна память</h2>
          <div className={cls.characteristicsBox}>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Сумісні ОПЗ:</div>
              <div className={cls.characteristicsInfo}>DDR4 для ПК</div>
            </div>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Тип памяті:</div>
              <div className={cls.characteristicsInfo}>DDR4 DIMM</div>
            </div>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Кількість слотів пам’яті:</div>
              <div className={cls.characteristicsInfo}>4 шт</div>
            </div>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Кількість каналів:</div>
              <div className={cls.characteristicsInfo}>2</div>
            </div>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Мінімальна частота пам’яті:</div>
              <div className={cls.characteristicsInfo}>2133</div>
            </div>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Максимальна частота пам’яті:</div>
              <div className={cls.characteristicsInfo}>
                <span>5333</span>
              </div>
            </div>
          </div>
          <h2>Комунікації</h2>
          <div className={cls.characteristicsBox}>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Мережевий адаптер (LAN):</div>
              <div className={cls.characteristicsInfo}>1 x 2500 Мбіт/с</div>
            </div>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Бездротовий модуль Wi-Fi:</div>
              <div className={cls.characteristicsInfo}>2х2 Wi-Fi 6 (802.11 a/b/g/n/ac/ax)</div>
            </div>
            <div className={cls.characteristicsInfoBlock}>
              <div className={cls.characteristicsTitle}>Модуль Bluetooth:</div>
              <div className={cls.characteristicsInfo}>5.2</div>
            </div>
          </div>
        </div>
        <div>
          <div className={cls.productItem}>
            <div className={cls.productImage}>
              <Image
                className={cls.productImg}
                src={productImg}
                width={542}
                height={312}
                alt='productImg'
              />
              <div className={cls.bonus}>+15 бонусів</div>
              <button className={cls.favBtn}>
                <Image src={favIcon} width={30} height={26} alt='favIcon' />
              </button>
            </div>
            <div className={cls.description}>
              <h2>Материнська плата Asus PRIME Z790-P</h2>
              <div className={cls.price}>9 485 ₴</div>
              <div className={cls.sale}>10 579 ₴</div>
            </div>
            <ul>
              <li>(WIFI) D4</li>
              <li>DDR4 для ПК</li>
              <li>LGA1700</li>
              <li>ATX</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
