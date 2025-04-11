import { useEffect, useState } from 'react'
import api from '../../services/api'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom';
import TopBackground from '../../components/TopBackground'
import Trash from '../../assets/trash.svg'
import {
     CardiUsers,
     Title,
     TrashIcon,
     ContainerUsers,
     Container,
     AvatarUser
}
     from './styles';

function ListUsers() {
     const [users, setUsers] = useState([]);
     const navigate = useNavigate();

     useEffect(() => {
          async function getUsers() {
               const { data } = await api.get('/usuarios');
               setUsers(data)

          }
          getUsers()
     }, []);

     async function deleteUsers(id) {
          await api.delete(`/usuarios/${id}`)

          const upadatedUsers = users.filter(user => user.id !== id)

          setUsers(upadatedUsers)

     }

     return (
          <Container>
               <TopBackground />
               <Title>Listagem de Usuários</Title>

               <ContainerUsers>
                    {users.map(user => (
                         <CardiUsers key={user.id}>
                              <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                              <div >
                                   <h3 key={user.id}>{user.name}</h3>
                                   <p key={user.id}>{user.age}</p>
                                   <p key={user.id}>{user.email}</p>

                              </div>
                              <TrashIcon src={Trash} alt='icone-lixo' onClick={() => deleteUsers(user.id)} />
                         </CardiUsers>
                    ))}

               </ContainerUsers>

               <Button type="button" onClick={() => navigate(-1)}>
                    Voltar
               </Button>
          </Container >

     )
}
export default ListUsers;
