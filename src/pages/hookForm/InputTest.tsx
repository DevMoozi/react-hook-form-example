import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import React from 'react';
import inputTestSchema, {
  InputTestForm
} from '../../app/hookform/schema/InputTestSchema';

const defaultInputStyle =
  'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
const errorInputStyle =
  'shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline';
const errorTextStyle = 'text-red-500 text-xs italic';
const labelStyle = 'block text-gray-700 text-sm font-bold mb-2';

const InputTest: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<InputTestForm>({
    mode: 'onChange',
    resolver: yupResolver(inputTestSchema)
  });

  const handleUpdate = () => {
    alert('모든 폼이 통과되었습니다.');
  };

  return (
    <div className={'p-40'}>
      <div className={'mb-4'}>
        <div>
          <label className={labelStyle}>이메일</label>
        </div>
        <div>
          <input
            className={errors.email ? errorInputStyle : defaultInputStyle}
            type='email'
            {...register('email')}
          />
        </div>
        <div className={errorTextStyle}>
          {errors.email && errors.email.message}
        </div>
      </div>
      <div className={'mb-4'}>
        <div>
          <label className={labelStyle}>이름</label>
        </div>
        <div>
          <input
            className={errors.name ? errorInputStyle : defaultInputStyle}
            type='text'
            {...register('name')}
          />
        </div>
        <div className={errorTextStyle}>
          {errors.name && errors.name?.message}
        </div>
      </div>
      <div className={'mb-4'}>
        <div>
          <label className={labelStyle}>비밀번호</label>
        </div>
        <div>
          <input
            className={errors.password ? errorInputStyle : defaultInputStyle}
            type='password'
            {...register('password')}
          />
        </div>
        <div className={errorTextStyle}>
          {errors.password && errors.password.message}
        </div>
      </div>
      <div className={'mb-4'}>
        <div>
          <label className={labelStyle}>비밀번호 확인</label>
        </div>
        <div>
          <input
            className={
              errors.checkPassword ? errorInputStyle : defaultInputStyle
            }
            type='password'
            {...register('checkPassword')}
          />
        </div>
        <div className={errorTextStyle}>
          {errors.checkPassword && errors.checkPassword.message}
        </div>
      </div>
      <div className={'flex justify-center mt-10'}>
        <button
          className={
            'w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          }
          onClick={handleSubmit(handleUpdate)}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default InputTest;
