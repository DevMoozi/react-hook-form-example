import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import inputTestSchema, {
  InputTestForm
} from '../../app/hookform/schema/InputTestSchema';
import { TextField, Grid, Button } from '@mui/material';

const ControllerTest: React.FC = () => {
  const { control, handleSubmit } = useForm<InputTestForm>({
    mode: 'onChange',
    resolver: yupResolver(inputTestSchema)
  });

  const handleUpdate = () => {
    alert('모든 폼이 통과되었습니다.');
  };

  return (
    <Grid container className={'p-40'}>
      <Grid item className={'pb-4'} xs={12}>
        <Controller
          name={'email'}
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              label='이메일'
              variant='outlined'
              onChange={field.onChange}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Grid>
      <Grid item className={'pb-4'} xs={12}>
        <Controller
          name={'name'}
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              label='이름'
              variant='outlined'
              onChange={field.onChange}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Grid>
      <Grid item className={'pb-4'} xs={12}>
        <Controller
          name={'password'}
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              label='비밀번호'
              variant='outlined'
              type={'password'}
              onChange={field.onChange}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Grid>
      <Grid item className={'pb-4'} xs={12}>
        <Controller
          name={'checkPassword'}
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              label='비밀번호 확인'
              variant='outlined'
              type={'password'}
              onChange={field.onChange}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Grid>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Button
          fullWidth
          variant='contained'
          onClick={handleSubmit(handleUpdate)}
        >
          회원가입
        </Button>
      </Grid>
    </Grid>
  );
};

export default ControllerTest;
