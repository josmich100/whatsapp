import Head from 'next/head'
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { auth,provider} from "../firebase"

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxOti3dAd-O_Da0rVmoCvOmpdhqN6smw-GqCx4E1Ih8LRD6pXWvWfpDcRYzcWfbyESwVs&usqp=CAU"/>
                <Button onClick={signIn} variant="outline">Sign in</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`
const Logo = styled.img`
    height:200px;
    width:200px;
    margin-bottom: 50px;
`