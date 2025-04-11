
// No react não importamos imagens do jeito do html5 e sim de um modo diferente
// No recat colocamos img assim: ( import UserImage from './assets/users.png' )
//Quando formos usar uma fução sem parametros usamos ela deste modo " onClick={registerNewUser} "
// Caso a função tiver parametros devemos utilizar uma formula igual
//  arrow function "onClick={() => navigate('/lista-de-usuarios') obs: a rota tem que estar igual no router "
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import {
  Title,
  Container,
  Form,
  ContainerInputs,
  Input,
  InputLabel

} from './styles';


import Button from '../../components/Button';
import TopBackground from '../../components/TopBackground';
function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();


  const navigate = useNavigate();

  async function registerNewUser() {
    await api.post('/usuarios', { // uma promess (promessa que usa uma funcão asincrona)
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });

    navigate('/lista-de-usuarios');
  }
  return (
    <Container>
      <TopBackground />


      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>++
              Nome<span> *</span>
            </InputLabel>
            <Input type='text' placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type='number' placeholder="Idade do usuário" ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type='email' placeholder="E-mail do usuário" ref={inputEmail} />
        </div>

        <Button type='button' onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>
      </Form>

      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>
        Ver Lista de Usuário
      </Button>

    </Container>
  );
}
export default Home;