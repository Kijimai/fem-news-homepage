import { Link } from "react-router-dom"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { navLinks } from "../data/data"
import logo from "../assets/images/logo.svg"
import IconMenu from "../components/icons/IconMenu"

const Navigator = () => {
  const [isActive, setIsActive] = useState(null)
  const [windowSize, setWindowSize] = useState(0)

  const showSidebar = () => {
    return setIsActive((prev) => !prev)
  }

  useEffect(() => {

  }, [])

  return (
    <Wrapper>
      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="logo of W. the premiere news website for tech."
          />
        </Link>
      </div>
      <div className="navigator-links">
        <ul className="desktop-menu">
          {navLinks.map((item, idx) => {
            const { url, text } = item
            return (
              <li key={idx}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
        <button onClick={showSidebar} className="menu-btn">
          <IconMenu />
        </button>
        <ul className={`mobile-menu ${isActive && "active"}`}>
          {navLinks.map((item, idx) => {
            const { url, text } = item
            return (
              <li key={idx}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  .logo {
  }

  .menu-btn {
    background-color: transparent;
    border: none;
  }

  .navigator-links ul {
    list-style: none;
    display: flex;
    gap: 40px;

    a {
      text-decoration: none;
    }
  }

  .desktop-menu {
    display: none !important;
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100%;
    width: 70%;
    background-color: white;
    flex-direction: column;
    transition: var(--transition-time) right;

    &.active {
      right: 0;
    }

    @media only screen and (min-width: 600px) {
      .mobile-menu {
        display: none;
      }
    }
  }
`

export default Navigator
