import { Link } from "react-router-dom"
import styled from "styled-components"
import { useState, useEffect, useRef } from "react"
import { navLinks } from "../data/data"
import Logo from "../components/icons/Logo"

import IconMenu from "../components/icons/IconMenu"
import IconClose from "../components/icons/IconClose"

const Navigator = () => {
  const [isActive, setIsActive] = useState(null)
  const mobileMenuRef = useRef(null)

  const closeSidebar = (e) => {
    const { target } = e
    e.stopPropagation()
    if (target === mobileMenuRef.current) {
      return
    }
    return setIsActive(false)
  }

  const openSidebar = () => {
    return setIsActive(true)
  }

  return (
    <Wrapper>
      <div className="logo">
        <Link to="/">
          <Logo />
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
        <button onClick={openSidebar} className="menu-btn">
          <IconMenu />
        </button>
        <div
          onClick={closeSidebar}
          className={`overlay ${isActive && "active"}`}
        >
          <div
            ref={mobileMenuRef}
            className={`mobile-menu ${isActive && "active"}`}
          >
            <button onClick={closeSidebar} className="close-btn">
              <IconClose />
            </button>
            <ul className="nav-links">
              {navLinks.map((item, idx) => {
                const { url, text } = item
                return (
                  <li onClick={closeSidebar} key={idx}>
                    <Link to={url}>{text}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2.7rem 1.6rem;

  .logo {
  }

  .menu-btn,
  .close-btn {
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

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    user-select: none;
    pointer-events: none;
    opacity: 0;
    transition: var(--transition-time) opacity;

    &.active {
      opacity: 1;
      user-select: auto;
      pointer-events: auto;
    }
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100%;
    width: 70%;
    z-index: 100;
    padding: 2.7rem 2.4rem;
    background-color: var(--clr-white);
    flex-direction: column;
    transition: var(--transition-time) right;

    &.active {
      right: 0;
    }

    .close-btn {
    }

    .nav-links {
      flex-direction: column;
      justify-self: center;
    }

    @media only screen and (min-width: 600px) {
      .mobile-menu {
        display: none;
      }
    }
  }
`

export default Navigator
