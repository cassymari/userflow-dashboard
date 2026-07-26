import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../../services/api'

import {
  Container,
  Navbar,
  Logo,
  NavActions,
  NavButton,
  Content,
  Header,
  Badge,
  Title,
  Description,
  Stats,
  StatCard,
  StatIcon,
  StatInformation,
  StatValue,
  StatLabel,
  Form,
  FormHeader,
  FormTitle,
  FormDescription,
  ContainerInputs,
  InputGroup,
  InputLabel,
  Input,
  RequiredText,
  Message,
  Actions,
  Footer
} from './styles'

import Button from '../Button'

function App() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  })

  const [loading, setLoading] = useState(false)

  const [message, setMessage] = useState({
    type: '',
    text: ''
  })

  function handleInputChange(event) {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }))

    if (message.text) {
      setMessage({
        type: '',
        text: ''
      })
    }
  }

  async function registerNewUser(event) {
    event.preventDefault()

    const name = formData.name.trim()
    const email = formData.email.trim()
    const age = Number(formData.age)

    if (!name || !email || !formData.age) {
      setMessage({
        type: 'error',
        text: 'Preencha todos os campos obrigatórios.'
      })

      return
    }

    if (age <= 0 || age > 120) {
      setMessage({
        type: 'error',
        text: 'Digite uma idade válida.'
      })

      return
    }

    try {
      setLoading(true)

      await api.post('/usuarios', {
        name,
        age,
        email
      })

      setFormData({
        name: '',
        age: '',
        email: ''
      })

      setMessage({
        type: 'success',
        text: 'Usuário cadastrado com sucesso!'
      })
    } catch (error) {
      setMessage({
        type: 'error',
        text:
          error.response?.data?.error ||
          'Não foi possível cadastrar o usuário.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Navbar>
        <Logo>
          User<span>Flow</span>
        </Logo>

        <NavActions>
          <NavButton
            type="button"
            onClick={() => navigate('/lista-de-usuarios')}
          >
            Ver usuários
          </NavButton>
        </NavActions>
      </Navbar>

      <Content>
        <Header>
          <Badge>Gestão de usuários</Badge>

          <Title>
            Gerencie usuários de forma simples e eficiente.
          </Title>

          <Description>
            Cadastre, consulte e organize usuários em um painel moderno
            conectado à sua API.
          </Description>
        </Header>

        <Stats>
          <StatCard>
            <StatIcon>👥</StatIcon>

            <StatInformation>
              <StatValue>CRUD</StatValue>
              <StatLabel>Gestão completa</StatLabel>
            </StatInformation>
          </StatCard>

          <StatCard>
            <StatIcon>⚡</StatIcon>

            <StatInformation>
              <StatValue>API REST</StatValue>
              <StatLabel>Integração com Axios</StatLabel>
            </StatInformation>
          </StatCard>

          <StatCard>
            <StatIcon>☁️</StatIcon>

            <StatInformation>
              <StatValue>Online</StatValue>
              <StatLabel>API hospedada no Render</StatLabel>
            </StatInformation>
          </StatCard>
        </Stats>

        <Form onSubmit={registerNewUser}>
          <FormHeader>
            <FormTitle>Cadastrar novo usuário</FormTitle>

            <FormDescription>
              Preencha os dados abaixo para adicionar um novo registro.
            </FormDescription>
          </FormHeader>

          <ContainerInputs>
            <InputGroup>
              <InputLabel htmlFor="name">
                Nome <span>*</span>
              </InputLabel>

              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Digite o nome completo"
                value={formData.name}
                onChange={handleInputChange}
              />
            </InputGroup>

            <InputGroup>
              <InputLabel htmlFor="age">
                Idade <span>*</span>
              </InputLabel>

              <Input
                id="age"
                name="age"
                type="number"
                placeholder="Ex.: 28"
                min="1"
                max="120"
                value={formData.age}
                onChange={handleInputChange}
              />
            </InputGroup>
          </ContainerInputs>

          <InputGroup>
            <InputLabel htmlFor="email">
              E-mail <span>*</span>
            </InputLabel>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="usuario@email.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </InputGroup>

          <RequiredText>
            Os campos marcados com <span>*</span> são obrigatórios.
          </RequiredText>

          {message.text && (
            <Message type={message.type}>{message.text}</Message>
          )}

          <Actions>
            <Button type="submit" theme="primary" disabled={loading}>
              {loading ? 'Cadastrando...' : 'Cadastrar usuário'}
            </Button>

            <Button
              type="button"
              onClick={() => navigate('/lista-de-usuarios')}
            >
              Ver usuários cadastrados
            </Button>
          </Actions>
        </Form>
      </Content>

      <Footer>
        Desenvolvido por <strong>Cassiane M. Nascimento</strong>
      </Footer>
    </Container>
  )
}

export default App