import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
rgba(255,255,255,0.5),
rgba(255,255,255,0.5)
),
url(" ");
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({width:"75%"})}
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
${mobile({flexDirection:"column"})}
`;
const Agreement = styled.span`
  font-size: 12px;
  margin:20px 0px;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREAT AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                  By creating an account, i consent to the processing of my personal
                  data in accordance with the <b>PRIVACY POLICY</b> 
                </Agreement>
                <Button>CREAT</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register