import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NewDisney = (props) => {
  return (
    <Container>
      <h4> New to Disney+</h4>
      <Content>
        <Wrap>
          <Link to="/detail">
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg " alt="titlemovie" />

          </Link>
        </Wrap>
        <Wrap>
          <Link to="/detail">
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg " alt="titlemovie" />

          </Link>
        </Wrap>
        <Wrap>
          <Link to="/detail">
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg " alt="titlemovie" />

          </Link>
        </Wrap>
        <Wrap>
          <Link to="/detail">
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg " alt="titlemovie" />

          </Link>
        </Wrap>
      </Content>
    </Container>
  )
}

const Container = styled.div`
padding: 0 0 26px;
`

const Content = styled.div`
display:grid;
grid-gap: 25px;
gap 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));

@media (max-width: 768px){
  grid-template-columns: repeat(2, minmax(0,1fr));
}
`

const Wrap = styled.div`
padding-top: 56.25%;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor:pointer;
`
export default NewDisney