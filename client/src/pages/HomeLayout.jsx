import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
      {/* add things like Navbar */}
      <nav>navbar</nav>
      <Outlet />
    </div>
  )
}
export default HomeLayout
