import { MainContainer, Flex } from '../../components/Containers'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'
import { InputContainer, LoginContainer, LoginForm } from '../../components/pageSpecific/Login/styles'
// import Button from '../../components/Common/Button'
import Input from '../../components/form/Input'

import NextLink from 'next/link'
import { useState } from 'react'
import { apiClient } from '../../services/apiClient'
import { AUTH_TOKEN, localStorageUserId } from '../../utils/constants'
import { useRouter } from 'next/router'
import PageWrapper from '../../templates/PageWrapper'
import { User, Eye, EyeClosed } from 'phosphor-react'
import Button from '../../components/Common/Button'
import { login } from '../../services/authClient'


const Login = () => {

    const router = useRouter()

    const [registerMode, setRegisterMode] = useState(false)

    const [viewPassword, setViewPassword] = useState(false);

    const [loginError, setLoginError] = useState(false)
    const [loginErrorMessage, setLoginErrorMessage] = useState(null)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [usernameOrEmail, setUsernameOrEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')

    const handleLogin = () => {
        const userLogin = {
            usernameOrEmail,
            password: loginPassword
        }

        login(userLogin)
            .then(res => {
                console.log(res)
                if (res.status === 200 || res.status === 201) {
                    localStorage.setItem(AUTH_TOKEN, res.data.token)
                }
            })
            .then(() => {
                router.push('/')
            })
    }

    return (
        <PageWrapper>
            <MainContainer>
                <Flex column>
                    <LoginContainer>
                        {registerMode ? (
                            <>
                                <h2>Crie uma conta</h2>
                                <LoginForm>
                                    <Input />
                                </LoginForm>
                                <Flex margin='15px 0 30px'>
                                    {/* <Button
                                        onClick={() => {
                                            handleRegister()
                                        }}
                                    >
                                        Criar
                                </Button> */}
                                </Flex>
                                <Flex margin='20px 0 0'>
                                    Já tem uma conta? Entre na sua conta aqui
                                    {/* <Link style={{ cursor: 'pointer' }} onClick={() => setRegisterMode(!registerMode)}>
                                </Link> */}
                                </Flex>
                            </>
                        ) : (
                            <>
                                <h2>Entre na sua conta</h2>
                                <LoginForm>
                                    <Input
                                        label='Email ou Usuário'
                                        placeholder='Insira o seu email ou usuário'
                                        value={usernameOrEmail}
                                        onChange={e => setUsernameOrEmail(e.target.value)}
                                        Icon={User}
                                    />
                                    {viewPassword ? (
                                        <Input
                                            id="loginPassword"
                                            type="text"
                                            value={loginPassword}
                                            onChange={e => setLoginPassword(e.target.value)}
                                            placeholder="Insira sua senha"
                                            label="Senha"
                                            Icon={Eye}
                                            iconIsButton
                                            onIconButtonClick={() => setViewPassword(false)}
                                            error={loginError}
                                            assistentText={loginErrorMessage}
                                        />
                                    ) : (
                                        <Input
                                            id="loginPassword"
                                            type="password"
                                            value={loginPassword}
                                            onChange={e => setLoginPassword(e.target.value)}
                                            placeholder="Insira sua senha"
                                            label="Senha"
                                            Icon={EyeClosed}
                                            iconIsButton
                                            onIconButtonClick={() => setViewPassword(true)}
                                            error={loginError}
                                            assistentText={loginErrorMessage}
                                        />
                                    )}
                                </LoginForm>
                                <Flex margin='15px 0 30px'>
                                    <Button
                                    small
                                        onClick={() => {
                                            handleLogin()
                                        }}
                                    >
                                        Entrar
                                </Button>
                                </Flex>
                                {/* <Divider /> */}
                                <Flex margin='20px 0 0'>
                                    {/* <Link style={{ cursor: 'pointer' }} onClick={() => {
                                        setRegisterMode(!registerMode)
                                    }}> */}
                                        Não tem uma conta? Crie uma conta aqui
                                    {/* </Link> */}
                                </Flex>
                            </>
                        )}

                    </LoginContainer>
                </Flex>
            </MainContainer>
        </PageWrapper>
    )
}

export default Login