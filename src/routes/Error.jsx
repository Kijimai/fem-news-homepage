import styled from "styled-components"
import { Link } from "react-router-dom"
import Button from "../components/Button"

const Error = () => {
  return (
    <Wrapper>
      <h1>Error</h1>
      <p>Something went wrong!</p>
      <Link to="/">
        <Button text="Read More">Home</Button>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.header``

export default Error
