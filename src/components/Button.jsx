import PropTypes from "prop-types"
import styled from "styled-components"

const Button = ({ text }) => {
  return <Wrapper>{text}</Wrapper>
}

const Wrapper = styled.button`
  cursor: pointer;
  background-color: var(--clr-lightred);
  padding: 1.2rem 3.3rem;
  border: none;
  font-family: inherit;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  font-weight: 700;
  color: var(--clr-white);
  transition: var(--transition-time) background-color;

  &:hover,
  &:focus {
    background-color: var(--clr-darkblue);
  }
`

Button.propTypes = {
  text: PropTypes.string,
}

export default Button
