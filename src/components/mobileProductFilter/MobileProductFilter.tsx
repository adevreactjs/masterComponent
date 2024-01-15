import Image from 'next/image';
import RangeSlider from '../rangeSlider/RangeSlider';
import ParamsFilter from '../paramsFilter/ParamsFilter';
import cls from './index.module.scss';
import closeIcon from '@/assets/closeIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { openMobileFilterHandler } from '@/app/store/reducers/MobileFilterSlice';

const MobileProductFilter = () => {
  const isOpenMobileFilter = useSelector(
    (state: RootState) => state.mobileFilter.isOpenMobileFilter,
  );

  const dispatch = useDispatch();

  const params = [
    {
      id: '1',
      title: 'Наявність у магазинах',
      params: ['1', '2', '3', '4', '5', '6'],
    },
    {
      id: '2',
      title: 'Оплата частинами',
      params: ['7', '8', '9', '10', '11', '12'],
    },
    {
      id: '3',
      title: 'Статус материнської плати',
      params: ['Білий', 'Зелений', 'Коричневий', 'Сірий', 'Синій', 'Червоний'],
    },
  ];
  const closeFilterMenu = () => {
    dispatch(openMobileFilterHandler(!isOpenMobileFilter));
  };
  return (
    <div className={cls.filterMobileMenu}>
      <div className={cls.filterMobilePosition}>
        <div className={cls.filterMobileMenuWrapper}>
          <div className={cls.filterMobileMenuBtns}>
            <button className={cls.resetBtn}>Скинути всі фільтри</button>
            <button className={cls.closeBtn} onClick={closeFilterMenu}>
              <Image src={closeIcon} width={14} height={14} alt='closeIcon' />
            </button>
          </div>
          <RangeSlider />
          <div className={cls.paramsFilter}>
            {params.map(param => (
              <ParamsFilter key={param.id} param={param} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProductFilter;
