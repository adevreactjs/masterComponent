'use client';
import React, { useState } from 'react';
import cls from './index.module.scss';

const ParamsFilter = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className={cls.paramsFilter}>
        <div className={cls.paramsLabel}>
          <button className={cls.accordion} onClick={() => setToggle(!toggle)}>
            Наявність у магазинах
            <svg
              className={`${toggle ? '' : cls.arrow}`}
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='10'
              viewBox='0 0 16 10'
              fill='none'>
              <path
                d='M2.4519 0.418792L8.00716 5.97405L13.5624 0.418792C14.1208 -0.139597 15.0228 -0.139597 15.5812 0.418792C16.1396 0.977181 16.1396 1.87919 15.5812 2.43758L9.0094 9.0094C8.45101 9.56779 7.54899 9.56779 6.9906 9.0094L0.418792 2.43758C-0.139597 1.87919 -0.139597 0.977181 0.418792 0.418792C0.977181 -0.12528 1.89351 -0.139597 2.4519 0.418792Z'
                fill='#262626'
              />
            </svg>
          </button>
        </div>
        <div className={toggle ? `${cls.panel}` : `${cls.active}`}>
          <input className={cls.customCheckbox} type='checkbox' id='inputCheckbox' />
          <label htmlFor='inputCheckbox'>Білий</label>
          <input className={cls.customCheckbox} type='checkbox' id='inputCheckbox1' />
          <label htmlFor='inputCheckbox1'>Зелений</label>
          <input className={cls.customCheckbox} type='checkbox' id='inputCheckbox2' />
          <label htmlFor='inputCheckbox2'>Коричневий</label>
          <input className={cls.customCheckbox} type='checkbox' id='inputCheckbox3' />
          <label htmlFor='inputCheckbox3'>Сірий</label>
          <input className={cls.customCheckbox} type='checkbox' id='inputCheckbox4' />
          <label htmlFor='inputCheckbox4'>Синій</label>
          <input className={cls.customCheckbox} type='checkbox' id='inputCheckbox5' />
          <label htmlFor='inputCheckbox5'>Червоний</label>
        </div>
      </div>
    </>
  );
};

export default ParamsFilter;
