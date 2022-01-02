import * as yup from 'yup';
import { SchemaOf } from 'yup';

export type InputTestForm = {
  email: string;
  name: string;
  password: string;
  checkPassword: string;
};

const inputTestSchema: SchemaOf<InputTestForm> = yup.object().shape({
  email: yup
    .string()
    .email('이메일 형식이 아닙니다')
    .required('이메일을 입력해 주세요'),
  name: yup
    .string()
    .matches(/^[a-z0-9-]*$/, '글자(a-z), 숫자(0-9)만 입력할 수 있습니다.')
    .min(4, '이름은 4글자 이상을 입력해야 합니다.')
    .max(12, '이름은 12글자 이상을 입력할 수 없습니다.')
    .required('이름을 입력해 주세요'),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]*/,
      '비밀번호는 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자(@$!%*#?&)로 이루어져야 합니다.'
    )
    .min(8, '비밀번호는 4글자 이상을 입력해야 합니다.')
    .max(256, '비밀번호는 256글자 이하로 입력해야 합니다.')
    .required('비밀번호를 입력해 주세요'),
  checkPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], '패스워드가 일치하지 않습니다.')
    .required()
});

export default inputTestSchema;
