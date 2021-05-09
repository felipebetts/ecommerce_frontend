import { MainContainer, Flex } from '../../components/Containers'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'
import { InputContainer, LoginContainer, LoginForm } from '../../components/pageSpecific/Login/styles'
import { Divider, Link, TextField } from '@material-ui/core'
import Button from '../../components/Common/Button'

import NextLink from 'next/link'
import { useState } from 'react'
import { apiClient } from '../../services/apiClient'
import { AUTH_TOKEN, localStorageUserId } from '../../utils/constants'
import { useRouter } from 'next/router'


const Login = () => {

    const router = useRouter()

    const [registerMode, setRegisterMode] = useState(false)
    const [userRegister, setUserRegister] = useState({
        name: null,
        email: null,
        password: null
    })
    const [userLogin, setUserLogin] = useState({
        usernameOrEmail: null,
        password: null
    })

    const handleRegister = () => {
        console.log(userRegister)

        const reqData = {
            body: {
                ...userRegister
            }
        }


        apiClient('post', '/users/create', reqData)
            .then(res => {
                console.log(res)
                if (res.status === 200 || res.status === 201) {
                    setRegisterMode(false)
                }
            })
    }

    const handleLogin = () => {
        console.log(userLogin)

        const reqData = {
            body: {
                ...userLogin
            }
        }

        apiClient('post', '/users/login', reqData)
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
        <>
            <Header />
            <MainContainer>
                <Flex column>
                    <LoginContainer>
                        {registerMode ? (
                            <>
                                <h2>Crie uma conta</h2>
                                <LoginForm>
                                    <InputContainer>
                                        <TextField
                                            name='name' 
                                            id='username'
                                            label='Usuário'
                                            variant='outlined'
                                            value={userRegister.name}
                                            onChange={(e) => setUserRegister({
                                                ...userRegister,
                                                [e.target.name]: e.target.value
                                            })}
                                        />
                                    </InputContainer>
                                    <InputContainer>
                                        <TextField
                                            name='email' 
                                            id='email'
                                            label='Email'
                                            variant='outlined'
                                            value={userRegister.email}
                                            onChange={(e) => setUserRegister({
                                                ...userRegister,
                                                [e.target.name]: e.target.value
                                            })}
                                        />
                                    </InputContainer>
                                    <InputContainer>
                                        <TextField
                                            name='password' 
                                            id='password'
                                            label='Senha'
                                            variant='outlined'
                                            type='password'
                                            value={userRegister.password}
                                            onChange={(e) => setUserRegister({
                                                ...userRegister,
                                                [e.target.name]: e.target.value
                                            })}
                                        />
                                    </InputContainer>
                                </LoginForm>
                                <Flex margin='15px 0 30px'>
                                    <Button
                                        onClick={() => {
                                            handleRegister()
                                        }}
                                    >
                                        Criar
                                </Button>
                                </Flex>
                                <Divider />
                                <Flex margin='20px 0 0'>
                                    <Link style={{ cursor: 'pointer' }} onClick={() => setRegisterMode(!registerMode)}>
                                        Já tem uma conta? Entre na sua conta aqui
                                </Link>
                                </Flex>
                            </>
                        ) : (
                            <>
                                <h2>Entre na sua conta</h2>
                                <LoginForm>
                                    <InputContainer>
                                        <TextField
                                            name='usernameOrEmail'
                                            id='usernameOrEmail'
                                            label='Usuário ou email'
                                            variant='outlined'
                                            value={userLogin.usernameOrEmail}
                                            onChange={(e) => {
                                                setUserLogin({
                                                    ...userLogin,
                                                    [e.target.name]: e.target.value
                                                })
                                            }}
                                        />
                                    </InputContainer>
                                    <InputContainer>
                                        <TextField
                                            name='password'
                                            id='password'
                                            label='Senha'
                                            variant='outlined'
                                            value={userLogin.password}
                                            onChange={(e) => {
                                                setUserLogin({
                                                    ...userLogin,
                                                    [e.target.name]: e.target.value
                                                })
                                            }}
                                            type='password' 
                                        />
                                    </InputContainer>
                                </LoginForm>
                                <Flex margin='15px 0 30px'>
                                    <Button
                                        onClick={() => {
                                            handleLogin()
                                        }}
                                    >
                                        Entrar
                                </Button>
                                </Flex>
                                <Divider />
                                <Flex margin='20px 0 0'>
                                    <Link style={{ cursor: 'pointer' }} onClick={() => {
                                        setRegisterMode(!registerMode)
                                    }}>
                                        Não tem uma conta? Crie uma conta aqui
                                    </Link>
                                </Flex>
                            </>
                        )}

                    </LoginContainer>
                </Flex>
            </MainContainer>
            <Footer />
        </>
    )
}

export default Login