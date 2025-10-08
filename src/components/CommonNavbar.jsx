import { Navbar, NavLeft, NavTitle, NavRight, Link } from 'framework7-react';

export default function CommonNavbar() {
  return (
    <Navbar sliding={false} className='fixed-top'>
      <NavLeft>
        <Link panelOpen="left">

          <img src='../image/menu-xanh.png' style={{ width: "30px" }}></img>
          {/* <img src='../image/13.gif' className='size-icon' /> */}
        </Link>
      </NavLeft>
      <NavTitle className='text-dark' sliding>
        <img src='../image/happy-corp-logo.png' style={{ height: "35px" }} />
      </NavTitle>
      <NavRight>
        <Link >
          <lord-icon
            src="https://cdn.lordicon.com/tjjwskjx.json"
            trigger="loop"
            colors="primary:#1fc5f7,secondary:#1fc5f7"
            className='size-icon me-2'>
          </lord-icon></Link>
      </NavRight>
    </Navbar>
  );
}
