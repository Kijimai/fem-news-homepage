import { Outlet } from "react-router-dom"
import Navigator from "../layout/Navigator"
import Footer from "../layout/Footer"

const Root = () => {
  return (
    <>
      <Navigator />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root
