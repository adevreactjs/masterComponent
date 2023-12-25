import { FC } from 'react';
import cls from './index.module.scss';

interface FormInputProps {
  placeholder: string;
  type?: string | 'text';
}
const FormInput: FC<FormInputProps> = ({ placeholder, type }) => {
  return (
    <div className={cls.formInput}>
      <input placeholder={placeholder} type={type} />
    </div>
  );
};

export default FormInput;
