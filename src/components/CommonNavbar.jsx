import { Navbar, NavLeft, NavTitle, NavRight, Link } from 'framework7-react';

export default function CommonNavbar() {
  return (
    <Navbar sliding={false}>
      <NavLeft>
        <Link panelOpen="left">

          <lord-icon
            slot="media"
            src="https://cdn.lordicon.com/vmiwgvnx.json"
            trigger="loop"
            colors="primary:#f30771,secondary:#f30771"
            className="size-icon"
          ></lord-icon>
          {/* <img src='../image/13.gif' className='size-icon' /> */}
        </Link>
      </NavLeft>
      <NavTitle className='text-dark' sliding>
        <img src='../image/happy-corp-logo.png' style={{ height: "35px" }} />
      </NavTitle>
      <NavRight>
        <Link >
          <lord-icon
            src="https://cdn.lordicon.com/wjyqkiew.json"
            trigger="loop"
            colors="primary:#f30771,secondary:#f30771"
            className='size-icon me-2'>
          </lord-icon></Link>
      </NavRight>
    </Navbar>
  );
}
