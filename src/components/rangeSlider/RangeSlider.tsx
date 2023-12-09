'use client';
import React, { ChangeEvent, useState } from 'react';
import cls from './index.module.scss';
import Slider from '@mui/material/Slider';

interface RangeSliderProps {
  // min: number;
  // max: number;
  // onChange: (values: number | number[]) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = () => {
  const [value, setValue] = React.useState<number[]>([0, 1000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div className={cls.slider}>
      <div className={cls.sliderTitle}>
        <p>Ціна</p>
      </div>
      <div className={cls.range}>
        <div className={cls.min}>{value[0]} грн</div>
        <div className={cls.max}>{value[1]} грн</div>
      </div>
      <div className={cls.rangeSlider}>
        <Slider
          max={1000}
          step={1}
          value={value}
          onChange={handleChange}
          valueLabelDisplay='off'
          size='small'
          sx={{
            '& .MuiSlider-thumb': {
              width: 14,
              height: 14,
              '&:before': {
                boxShadow: '0 0px 0px rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible, &.Mui-active': {
                boxShadow: 'none',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
