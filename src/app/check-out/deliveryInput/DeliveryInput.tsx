import React from 'react';
import cls from './index.module.scss';

const DeliveryInput = () => {
  return (
    <div className={cls.deliveryInputs}>
      <div className={cls.deliveryInput}>
        <input
          className={cls.customCheckbox}
          type='radio'
          id='deliveryInput'
          name='dev'
          value='delivery'
        />
        <label className={cls.mainLabel} htmlFor='deliveryInput'>
          <div className={cls.mainLabelList}>
            <label className={cls.title} htmlFor='deliveryInput'>
              Самовивіз із магазину
            </label>
            <label className={cls.subTitle} htmlFor='deliveryInput'>
              Безкоштовно
            </label>
          </div>
        </label>
      </div>
      <div className={cls.deliveryInput}>
        <input
          className={cls.customCheckbox}
          type='radio'
          id='deliveryInput2'
          name='dev'
          value='delivery'
        />
        <label className={cls.mainLabel} htmlFor='deliveryInput2'>
          <div className={cls.mainLabelList}>
            <label className={cls.title} htmlFor='deliveryInput2'>
              Доставка у відділення /поштомат
            </label>
            <label className={cls.subTitle} htmlFor='deliveryInput2'>
              За тарифами сервісу
            </label>
          </div>
        </label>
      </div>
      <div className={cls.deliveryInput}>
        <input
          className={cls.customCheckbox}
          type='radio'
          id='deliveryInput3'
          name='dev'
          value='delivery'
        />
        <label className={cls.mainLabel} htmlFor='deliveryInput3'>
          <div className={cls.mainLabelList}>
            <label className={cls.title} htmlFor='deliveryInput3'>
              Доставка кур’єром
            </label>
            <label className={cls.subTitle} htmlFor='deliveryInput3'>
              За тарифами сервісу
            </label>
          </div>
        </label>
      </div>
    </div>
  );
};

export default DeliveryInput;
