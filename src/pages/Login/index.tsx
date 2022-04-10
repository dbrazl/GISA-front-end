import React, { useContext, useRef } from 'react';
import Input from '../../components/Input';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { UserContext } from '../../state/user/userState';

import {
  Container,
  Content,
  Title,
  Form,
  ButtonContainer,
  Button
} from './styles';

const Login: React.FC = () => {
  const formRef = useRef()
  const { dispatch } = useContext(UserContext);

  async function handleFormSubmit (data: any) {
    dispatch({
      type: '@USER/SIGN_IN_REQUEST',
    });

    try {
      // await api.get('/session', data);

      dispatch({
        type: '@USER/SIGN_IN_SUCCESS',
        payload: {
          email: data.email,
        },
      });
    } catch(error) {
      dispatch({
        type: '@USER/SIGN_IN_FAILED',
      });

      toast.error('E-mail ou senha inválidos', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <Container>
      <Content>
        <Title>Login</Title>
        <Form ref={formRef as any} onSubmit={handleFormSubmit}>
          <Input
            type="text"
            placeholder="e-mail"
            name="email"
          />
          <Input
            type="password"
            placeholder="senha"
            name="password"
          />
          <ButtonContainer>
            <Button>Entrar</Button>
          </ButtonContainer>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;