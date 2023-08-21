import styled from "styled-components"


const Login = (props) => {

  return <Container>
    <Content></Content>
  </Container>
}

const Container = styled.section`top:700px;
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height: 100vh;
`;

const Content = styled.div`

margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;

`

export default Login