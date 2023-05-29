import styled from "styled-components"

const Hero = () => {
  return (
    <Wrapper>
      <article className="main-story">

      </article>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;

  .main-story {
    display: grid;
  }
`

export default Hero