import React, { useState, useEffect } from 'react';
import { getDevice } from 'framework7/lite-bundle';
import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter,
  Icon,
  Card,
  NavLeft,
  NavTitle
} from 'framework7-react';

import capacitorApp from '../js/capacitor-app';
import routes from '../js/routes';
import store from '../js/store';
import PageTransition from './PageTransition';

import '../css/app.less';
const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: 'HAPPYCORP_7', // App name
    theme: 'auto', // Automatic theme detection
    // App store
    store: store,
    // App routes
    routes: routes,
    pushState: true,


    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  const alertLoginData = () => {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }
  f7ready(() => {

    // Init capacitor APIs (see capacitor-app.js)
    if (f7.device.capacitor) {
      capacitorApp.init(f7);
    }
    // Call F7 APIs here
  });
  const [selected, setSelected] = useState('home');

  const [activeTab, setActiveTab] = useState('home');

  // Custom tab data
  const tabs = [
    { id: 'home', href: '/', icon: 'f7:house_fill', text: 'Home', active: true },
    { id: 'catalog', href: '/catalog/', icon: 'f7:square_list_fill', text: 'Chat' },
    { id: 'settings', href: '/history/', icon: 'f7:gear', text: 'Lịch sử' },
    { id: 'social', href: '/social/', icon: 'f7:circle_grid_hex', text: 'Social' },
    { id: 'account', href: '/account/', icon: 'f7:person_alt_circle', text: 'Account' }
  ];

  const handleTabClick = (tabId) => {
    console.log('Tab clicked:', tabId);
    setActiveTab(tabId);
  };

  useEffect(() => {
    import('https://cdn.lordicon.com/lordicon.js');
  }, []);

  return (
    <App {...f7params}>
      {/* Views/Tabs container */}
      <Views id="main-view" url="/" main tabs className="safe-areas">
        <Toolbar tabbar icons bottom>
          <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconMd="material:home" text="Home" />
          <Link tabLink="#view-catalog" iconIos="f7:square_list_fill" iconMd="material:view_list" text="Chat" />
          <Link tabLink="#view-settings" iconIos="f7:gear" iconMd="material:settings" text="Lịch sử" />
          <Link tabLink="#social" iconIos="f7:circle_grid_hex" iconMd="material:circle_grid_hex" text="Social" />
          <Link tabLink="#account" iconIos="f7:person_alt_circle" iconMd="material:account" text="Account" />
        </Toolbar>

        <View id="view-home" main tab tabActive url="/" pushState={true} />
        <View id="view-catalog" name="catalog" tab url="/catalog/" pushState={true} />
        <View id="social" name="social" tab url="/social/" pushState={true} />
        <View id="account" name="account" tab url="/account/" pushState={true} />
      </Views>
      {/* <Views id="main-view" url="/" main className="safe-areas">
        <View id="view-main" main url="/" pushState={true} />
        <Toolbar className="tabbar custom-tabbar" bottom>
          <div className="toolbar-inner d-flex justify-content-around align-items-center w-100">
            {tabs.map((tab) => (
              <PageTransition
                key={tab.id}
                href={tab.href}
                showLoader={false} // Không hiển thị loading cho tab
                onClick={() => handleTabClick(tab.id)}
                className={`tab-link-custom ${activeTab === tab.id ? 'active' : ''}`}
              >
                <div className="tab-link-content text-center">
                  <Icon
                    f7={tab.icon}
                    size="24px"
                    className={`tab-icon ${activeTab === tab.id ? 'text-pink' : 'text-muted'}`}
                  />
                  <div
                    className={`tab-text fs-10 mt-1 ${activeTab === tab.id ? 'text-pink fw-semibold' : 'text-muted'
                      }`}
                  >
                    {tab.text}
                  </div>
                </div>
              </PageTransition>
            ))}
          </div>
        </Toolbar>
      </Views> */}

      {/* Custom Tabbar với PageTransition */}

      {/* Left panel with cover effect*/}
      <Panel left cover>
        <View>
          <Page>
            <Navbar>
              {/* <div className=' py-2'> */}
              <img src='../image/happy-corp-logo.png' className='w-25'></img>
              {/* </div> */}
            </Navbar>


            <BlockTitle className='mb-1  mt-4 fs-13 '>Quản lý</BlockTitle>
            <List dividersIos={false} simpleList inset className='fs-13 list-custom mb-3'>
              <ListItem href="/account/" data-view=".view-main" panelClose selected={selected === 'account'}
                onClick={() => { setSelected('account'), console.log(123) }}>
                <Link href="/account/" data-view=".view-main" panelClose selected={selected === 'account'}
                  onClick={() => { setSelected('account'), console.log(123) }}>
                  <lord-icon
                    src="https://cdn.lordicon.com/shcfcebj.json"
                    trigger="loop"
                    colors="primary:#f30771,secondary:#f30771"
                    className=' me-2'
                    style={{ width: '25px', height: '25px' }}>
                  </lord-icon> Tài khoản
                </Link>
              </ListItem>
              <ListItem >
                <Link>
                  <lord-icon
                    src="https://cdn.lordicon.com/apmrcxtj.json"
                    trigger="loop"
                    colors="primary:#f30771,secondary:#f30771"
                    className=' me-2'
                    style={{ width: '25px', height: '25px' }}>
                  </lord-icon>Thông báo
                </Link>
              </ListItem>
              <ListItem >
                <Link>
                  <lord-icon
                    src="https://cdn.lordicon.com/jectmwqf.json"
                    trigger="loop"
                    colors="primary:#f30771,secondary:#f30771"
                    className=' me-2'
                    style={{ width: '25px', height: '25px' }}>
                  </lord-icon>Nhật ký
                </Link>
              </ListItem>
            </List>

            <BlockTitle className='mb-1  mt-3 fs-13 '>Giao diện</BlockTitle>
            <List dividersIos={false} simpleList inset className='fs-13 list-custom mb-3'>
              <ListItem>
                <Link>
                  <lord-icon
                    src="https://cdn.lordicon.com/bsdkzyjd.json"
                    trigger="loop"
                    colors="primary:#f30771,secondary:#f30771"
                    className=' me-2'
                    style={{ width: '25px', height: '25px' }}>
                  </lord-icon>Sáng
                </Link>
              </ListItem>
              <ListItem >
                <Link>
                  <lord-icon
                    src="https://cdn.lordicon.com/yodwgokk.json"
                    trigger="loop"
                    colors="primary:#f30771,secondary:#f30771"
                    className=' me-2'
                    style={{ width: '25px', height: '25px' }}>
                  </lord-icon> Tối
                </Link>
              </ListItem>
            </List>

            <BlockTitle className='mb-1  mt-3 fs-13 '>Ngôn ngữ</BlockTitle>
            <List dividersIos={false} simpleList inset className='fs-13 list-custom mb-3'>
              <ListItem>
                <Link>
                  <lord-icon
                    src="https://cdn.lordicon.com/bsdkzyjd.json"
                    trigger="loop"
                    colors="primary:#f30771,secondary:#f30771"
                    className=' me-2'
                    style={{ width: '25px', height: '25px' }}>
                  </lord-icon>Tiếng Việt
                </Link>
              </ListItem>
              <ListItem >
                <Link>
                  <lord-icon
                    src="https://cdn.lordicon.com/bsdkzyjd.json"
                    trigger="loop"
                    colors="primary:#f30771,secondary:#f30771"
                    className=' me-2'
                    style={{ width: '25px', height: '25px' }}>
                  </lord-icon> Tiếng Anh
                </Link>
              </ListItem>
            </List>
            <div className='px-3'>
              <button className='p-2 rounded-pill bg-pink fs-13 border border-0 text-white fw-bold'>Đăng xuất</button>
            </div>
            <div className='fixed-bottom mb-4'>
              <Card className="bg-pink-nhat border border-0 bg-danger m-0 rounded-0 fs-13 p-3 py-4">
                <div>
                  <img src='../image/happy-corp-logo.png' className='w-25' />
                </div>
                <div className='mt-2'>
                  <lord-icon
                    src="https://cdn.lordicon.com/onmwuuox.json"
                    trigger="loop"
                    colors="primary:#f30771,secondary:#f30771"
                    className=' me-1 mt-2'
                    style={{ width: '20px', height: '20px' }}>
                  </lord-icon>
                  Tòa nhà International Plaza, 343 Phạm Ngũ Lão, Phường Bến Thành, Quận 1, Hồ Chí Minh
                </div>
                <div className='mt-1 d-flex align-items-center'>
                  <lord-icon
                    src="https://cdn.lordicon.com/pmivedvy.json"
                    trigger="loop"
                    colors="primary:#f30771,secondary:#f30771"
                    className=' me-1'
                    style={{ width: '20px', height: '20px' }}>
                  </lord-icon>
                  1900638008
                </div>
                <div className='mt-4'>
                  
                  Happy Corp 2025. All Rights Reserved | Privacy Policy | Sitemap | Website Terms of Use
                </div>
              </Card>
            </div>
          </Page>
        </View>
      </Panel>


      {/* Right panel with reveal effect*/}
      <Panel right reveal dark>
        <View>
          <Page>
            <Navbar title="Right Panel" />
            <Block>Right panel content goes here</Block>
          </Page>
        </View>
      </Panel>


      {/* Popup */}
      {/* <Popup id="my-popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Popup content goes here.</p>
            </Block>
          </Page>
        </View>
      </Popup> */}

      <LoginScreen id="my-login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput
                type="text"
                name="username"
                placeholder="Your username"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
              ></ListInput>
              <ListInput
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              ></ListInput>
            </List>
            <List>
              <ListButton title="Sign In" onClick={() => alertLoginData()} />
              <BlockFooter>
                Some text about login information.<br />Click "Sign In" to close Login Screen
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen>
    </App>
  )
}
export default MyApp;