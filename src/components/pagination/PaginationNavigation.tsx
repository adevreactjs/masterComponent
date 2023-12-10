import React from 'react';
import cls from './index.module.scss';

const PaginationNavigation = () => {
  return (
    <div className={cls.pagination}>
      <div className={cls.paginationNumbers}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        <div className={cls.points}>........</div>
          <button>14</button>
        <div className={cls.nextArrow}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='16'
            viewBox='0 0 10 16'
            fill='none'>
            <path
              d='M0.418792 13.5481L5.97405 7.99284L0.418791 2.43758C-0.139598 1.8792 -0.139598 0.97718 0.418791 0.418791C0.97718 -0.139599 1.87919 -0.139599 2.43758 0.418791L9.0094 6.9906C9.56778 7.54899 9.56778 8.45101 9.0094 9.0094L2.43758 15.5812C1.87919 16.1396 0.977181 16.1396 0.418792 15.5812C-0.12528 15.0228 -0.139597 14.1065 0.418792 13.5481Z'
              fill='#262626'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PaginationNavigation;
