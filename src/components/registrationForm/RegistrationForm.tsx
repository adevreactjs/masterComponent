'use client';
import cls from './index.module.scss';
import closeIcon from '../../assets/closeIcon.svg';
import closeEyeIcon from '../../assets/closeEyeIcon.svg';
import googleIcon from '../../assets/googleIcon.svg';
import fillEyeIcon from '../../assets/fillEyeIcon.svg';
import openEyeIcon from '../../assets/openEyeIcon.svg';
import Image from 'next/image';
import { ChangeEvent, FC, useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { openRegistrationFormHandler } from '@/app/store/reducers/RegistrationSlice';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps, ErrorMessage } from 'formik';

interface MyFormValues {
  email: string;
  password: string;
}
interface Values {
  email: string;
  password: string;
}
const RegistrationForm: FC = () => {
  const [activeRegBtn, setActiveRegBtn] = useState(false);
  const [activeEye, setActiveEye] = useState(false);
  const [activeEyeApply, setActiveEyeApply] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordApplyInput, setPasswordApplyInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showApplyPassword, setApplyPassword] = useState(false);

  const dispatch = useDispatch();

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };
  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
    if (e.target.value) {
      setActiveEye(true);
    } else {
      setActiveEye(false);
    }
  };
  const passwordApplyHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordApplyInput(e.target.value);
    if (e.target.value) {
      setActiveEyeApply(true);
    } else {
      setActiveEyeApply(false);
    }
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleApplyPassword = () => {
    setApplyPassword(!showApplyPassword);
  };
  const closeRegistrationForm = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(openRegistrationFormHandler(false));
  };
  const closeForm = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      dispatch(openRegistrationFormHandler(false));
    }
  };
  const signUpHandler = () => {
    setActiveRegBtn(true);
  };

  return (
    <div className={cls.registrationForm} onClick={closeForm}>
      <div className={cls.wrapper}>
        <div className={cls.closeBtn}>
          <button onClick={closeRegistrationForm}>
            <Image
              className={cls.closeBtnIcon}
              src={closeIcon}
              width={18}
              height={18}
              alt='closeIcon'
            />
          </button>
        </div>
        <div className={cls.container}>
          <div className={cls.registrationBtns}>
            <button
              onClick={signUpHandler}
              className={
                activeRegBtn
                  ? `${cls.registrationBtn} ${cls.activeRegBtn}`
                  : `${cls.registrationBtn}`
              }>
              Вхід
            </button>
            <button
              onClick={() => setActiveRegBtn(false)}
              className={
                activeRegBtn
                  ? `${cls.registrationBtn}`
                  : `${cls.registrationBtn} ${cls.activeRegBtn}`
              }>
              Реєстрація
            </button>
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}>
            {({ errors, touched }) => (
              <Form className={cls.textFields}>
                <div className={cls.textField}>
                  <Field
                    type='email'
                    placeholder='E-mail або телефон'
                    value={emailInput}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => emailHandler(e)}
                  />
                </div>

                <div className={cls.textField}>
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Пароль'
                    value={passwordInput}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => passwordHandler(e)}
                  />
                  {activeEye ? (
                    <div className={cls.fillEyeIcon} onClick={handleTogglePassword}>
                      {showPassword ? (
                        <Image src={openEyeIcon} width={24} height={24} alt='openEyeIcon' />
                      ) : (
                        <Image src={fillEyeIcon} width={18} height={16} alt='fillEyeIcon' />
                      )}
                    </div>
                  ) : (
                    <div className={cls.closeEyeIcon}>
                      <Image src={closeEyeIcon} width={24} height={24} alt='closeEyeIcon' />
                    </div>
                  )}
                </div>
                {activeRegBtn && <span className={cls.forgetTitle}>Забув пароль</span>}
                {!activeRegBtn && (
                  <div className={cls.textField}>
                    <Field
                      type={showApplyPassword ? 'text' : 'password'}
                      placeholder='Підтвердження пароля'
                      value={passwordApplyInput}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => passwordApplyHandler(e)}
                    />
                    {activeEyeApply ? (
                      <div className={cls.fillEyeIcon} onClick={handleToggleApplyPassword}>
                        {showApplyPassword ? (
                          <Image src={openEyeIcon} width={24} height={24} alt='openEyeIcon' />
                        ) : (
                          <Image src={fillEyeIcon} width={18} height={16} alt='fillEyeIcon' />
                        )}
                      </div>
                    ) : (
                      <div className={cls.closeEyeIcon}>
                        <Image src={closeEyeIcon} width={24} height={24} alt='closeEyeIcon' />
                      </div>
                    )}
                  </div>
                )}

                <p>або</p>
                <button className={cls.googleBtn}>
                  <Image src={googleIcon} width={26} height={26} alt='googleIcon' /> Зареєструватися
                  з Google
                </button>
                <button type='submit' className={cls.enterBtn}>
                  Увійти
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
