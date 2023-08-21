import styled from "styled-components";

const Header = (props) => {

  return (<Nav>
    <Logo>
      <div>logo</div>

      {/* <img src="/images/logo.svg" /> */}
    </Logo>
    <Login>
      LOGIN
    </Login>
  </Nav>)

}

const Nav = styled.nav`
position:fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #090b13;
display:flex;
justify-content:space-between;
align-items:center;
`;

const Logo = styled.a`
background-color:red;
`

const Login = styled.a`
background-color:rgba(0, 0, 0, 0.6);
padding: 8px 16px;
text-tranform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius:4px;
&:hover{
  background-color:#f9f9f9;
}
`
export default Header;