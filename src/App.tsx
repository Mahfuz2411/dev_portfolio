import { Award, Contact, House, Images, SearchX } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
              {/* Sidebar toggle icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
            </label>
            <div className="px-4">Welcome to Mahfuz's Portfolio</div>
          </nav>

          <Outlet />


        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            <ul className="menu w-full grow">
              <li>
                <NavLink to={"/"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                  <House className="size-4" />
                  <span className="is-drawer-close:hidden">Mahfuz's Home</span>
                </NavLink>
              </li>

              <li>
                <NavLink to={"/about"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="About Me">
                  <SearchX className="size-4" />
                  <span className="is-drawer-close:hidden">About Me</span>
                </NavLink>
              </li>

              <li>
                <NavLink to={"/achievements"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Achievements">
                  <Award className="size-4" />
                  <span className="is-drawer-close:hidden">Achievements</span>
                </NavLink>
              </li>

              <li>
                <NavLink to={"/gallery"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Gallery">
                  <Images className="size-4" />
                  <span className="is-drawer-close:hidden">Gallery</span>
                </NavLink>
              </li>

              <li>
                <NavLink to={"/contact"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Contact">
                  <Contact className="size-4" />
                  <span className="is-drawer-close:hidden">Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
