import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../../services/api'

import {
  Container,
  Navbar,
  Logo,
  NavButton,
  Content,
  Header,
  HeaderText,
  Badge,
  Title,
  Description,
  Summary,
  SummaryCard,
  SummaryValue,
  SummaryLabel,
  SearchArea,
  SearchInput,
  ContainerUsers,
  CardUsers,
  AvatarUser,
  UserInfo,
  UserName,
  UserEmail,
  UserAge,
  Actions,
  DeleteButton,
  EmptyState,
  LoadingText,
  Footer
} from './styles'

function ListUsers() {
  const navigate = useNavigate()

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [deletingId, setDeletingId] = useState(null)

  useEffect(() => {
    getUsers()
  }, [])

  async function getUsers() {
    try {
      setLoading(true)

      const { data } = await api.get('/usuarios')

      setUsers(data)
    } catch (error) {
      console.error('Erro ao buscar usuários:', error)
    } finally {
      setLoading(false)
    }
  }

  async function deleteUser(id) {
    const confirmed = window.confirm(
      'Tem certeza que deseja excluir este usuário?'
    )

    if (!confirmed) return

    try {
      setDeletingId(id)

      await api.delete(`/usuarios/${id}`)

      setUsers((currentUsers) =>
        currentUsers.filter((user) => user.id !== id)
      )
    } catch (error) {
      console.error('Erro ao excluir usuário:', error)
      alert('Não foi possível excluir o usuário.')
    } finally {
      setDeletingId(null)
    }
  }

  const filteredUsers = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    if (!normalizedSearch) return users

    return users.filter((user) => {
      return (
        user.name?.toLowerCase().includes(normalizedSearch) ||
        user.email?.toLowerCase().includes(normalizedSearch)
      )
    })
  }, [users, search])

  return (
    <Container>
      <Navbar>
        <Logo>
          User<span>Flow</span>
        </Logo>

        <NavButton type="button" onClick={() => navigate('/')}>
          Novo usuário
        </NavButton>
      </Navbar>

      <Content>
        <Header>
          <HeaderText>
            <Badge>Dashboard de usuários</Badge>

            <Title>Usuários cadastrados</Title>

            <Description>
              Consulte, pesquise e gerencie os registros disponíveis na sua API.
            </Description>
          </HeaderText>

          <Summary>
            <SummaryCard>
              <SummaryValue>{users.length}</SummaryValue>
              <SummaryLabel>Total de usuários</SummaryLabel>
            </SummaryCard>

            <SummaryCard>
              <SummaryValue>{filteredUsers.length}</SummaryValue>
              <SummaryLabel>Resultados exibidos</SummaryLabel>
            </SummaryCard>
          </Summary>
        </Header>

        <SearchArea>
          <SearchInput
            type="search"
            placeholder="Pesquisar por nome ou e-mail"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </SearchArea>

        {loading ? (
          <LoadingText>Carregando usuários...</LoadingText>
        ) : filteredUsers.length > 0 ? (
          <ContainerUsers>
            {filteredUsers.map((user) => (
              <CardUsers key={user.id}>
                <AvatarUser
                  src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${user.id}`}
                  alt={`Avatar de ${user.name}`}
                />

                <UserInfo>
                  <UserName>{user.name}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                  <UserAge>{user.age} anos</UserAge>
                </UserInfo>

                <Actions>
                  <DeleteButton
                    type="button"
                    disabled={deletingId === user.id}
                    onClick={() => deleteUser(user.id)}
                  >
                    {deletingId === user.id ? 'Excluindo...' : 'Excluir'}
                  </DeleteButton>
                </Actions>
              </CardUsers>
            ))}
          </ContainerUsers>
        ) : (
          <EmptyState>
            <h2>Nenhum usuário encontrado</h2>

            <p>
              Tente alterar a pesquisa ou cadastre um novo usuário.
            </p>

            <button type="button" onClick={() => navigate('/')}>
              Cadastrar usuário
            </button>
          </EmptyState>
        )}
      </Content>

      <Footer>
        Desenvolvido por <strong>Cassiane M. Nascimento</strong>
      </Footer>
    </Container>
  )
}

export default ListUsers