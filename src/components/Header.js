import styled from "styled-components";

const Header = (props) => {

  return (<Nav>
    <Logo>
      <img src="/images/logo.svg" />
    </Logo>
    <NavMenu>
      <a href='/home'>
        <img src="/images/home-icon.svg" alt="HOME"></img>
        <span>HOME</span>
      </a>
      <a>
        <img src="/images/search-icon.svg" alt="SEARCH"></img>
        <span>SEARCH</span>
      </a>
      <a>
        <img src="/images/search-icon.svg" alt="SEARCH"></img>

        <span>WATCHLIST</span>

      </a>
      <a>
        <img src="/images/search-icon.svg" alt="SEARCH"></img>

        <span>ORIGINALS</span>

      </a>

      <a>
        <img src="/images/search-icon.svg" alt="SEARCH"></img>

        <span>MOVIES</span>
      </a>
      <a>
        <img src="/images/search-icon.svg" alt="SEARCH"></img>

        <span>SERIES</span>
      </a>
    </NavMenu>
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
padding: 0 36px;
`;

const Logo = styled.a`
width:80px;
padding:0;
margin-top:4px;
max-height:70px;
font-size:0;
display:inline-block;

img{
  diplay:block;
  width:100%;
}
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
  color:#000;
  border-color:transparant;
  cursor:pointer;
}
`

const NavMenu = styled.div`
align-items:center;
display:flex;
flex-flow: row nowrap
height:100%;
justify-content:flex-end;
margin:0px;
padding:0px;
position:relative;
margin-right:auto;
margin-left:25px;

a{
  display:flex;
  align-items:center;
  padding: 0 12px;
}

span{
  color: rgb(249, 249, 249);
  font-size: 13px;
  letter-spacing: 1.42px;
  line-height:1.08;
  padding: 2px 0px;
  white-space:nowrap;
  position:relative;

  &:before{
    background-color: rgb(249, 249, 249);
    border-radius: 0px, 0px, 0px, 0px;
    bottom: -6px;
    content:"";
    height:2px;
    opacity:1;
    position:absolute;
    right:0px;
    left:0px;
    
  }

}
`
export default Header;