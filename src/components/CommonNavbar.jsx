import { Navbar, NavLeft, NavTitle, NavRight, Link } from 'framework7-react';

export default function CommonNavbar() {
  return (
    <Navbar sliding={false}>
      <NavLeft>
        <Link panelOpen="left">
          <img src='../image/13.gif' className='size-icon' />
        </Link>
      </NavLeft>
      <NavTitle className='text-dark' sliding>
        <img src='../image/happy-corp-logo.png' style={{ height: "35px" }} />
      </NavTitle>
      <NavRight></NavRight>
    </Navbar>
  );
}
