import React, { useEffect, useState } from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button,
  Card,
  Icon,
  Badge,
  Popup,
  View
} from 'framework7-react';
import moment from 'moment';
import { number } from 'prop-types';


const HomePage = () => {
  const week = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const [calendarDays, setCalendarDays] = useState([]);

  const [selectedMonth, setSelectedMonth] = useState(moment().month()); // 0 - 11
  const [selectedYear, setSelectedYear] = useState(moment().year());

  const [searchMonth, setSearchMonth] = useState(moment().month()); // 0 - 11
  const [searchYear, setSearchYear] = useState(moment().year());

  useEffect(() => {
    generateCalendar(moment().year(), moment().month());
  }, []);

  const datamonth = [
    { time: "05/07/2025", booking: [2, 1, 0] },
    { time: "08/07/2025", booking: [2, 0, 4] }
  ];

  function generateCalendar(year, month) {
    const baseDate = moment().year(year).month(month);
    const startOfMonth = baseDate.clone().startOf("month");
    const endOfMonth = baseDate.clone().endOf("month");

    const startOfCalendar = startOfMonth.clone().startOf("isoWeek");
    const endOfCalendar = endOfMonth.clone().endOf("isoWeek");

    const days = [];
    const current = startOfCalendar.clone();

    while (current.isSameOrBefore(endOfCalendar, "day")) {
      days.push(current.clone());
      current.add(1, "day");
    }

    setCalendarDays(days);
  }

  function handleSearchMonth() {
    setSearchMonth(selectedMonth);
    setSearchYear(selectedYear);
    generateCalendar(selectedYear, selectedMonth);
  }

  const handleClick = (e) => {
    setIsModalOpenSee(false);
    history.push(e);
    console.log(e);
  };

  function handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }



  return (


    <Page name="home">
      {/* Top Navbar */}
      <Navbar large sliding={false}>
        <NavLeft>
          <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
        </NavLeft>
        <NavTitle className='text-dark' sliding>Happy Corp</NavTitle>
        <NavRight>
          <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
        </NavRight>
        <NavTitleLarge className='text'>Xin chào Thúy Nguyễn</NavTitleLarge>
      </Navbar>

      {/* Page content */}
      <div className="grid grid-cols-4 px-2 mt-3">
        <div className='text-center  bg-light rounded-4 mx-2 p-3'>
          <img src='../image/food.png' className='w-75'></img>
          <div className='text-dark fw-bold fs-13 '>Menu</div>
        </div>
        <div className='text-center  bg-light rounded-4 mx-2 p-3'>
          <img src='../image/booking1.png' className='w-75'></img>
          <div className='text-dark fw-bold fs-13'>Booking</div>
        </div>
        <div className='text-center  bg-light rounded-4 mx-2 p-3'>
          <img src='../image/event.png' className='w-75'></img>
          <div className='text-dark fw-bold fs-13'>Event</div>
        </div>
        <div className='text-center  bg-light rounded-4 mx-2 p-3'>
          <img src='../image/bar.png' className='w-75'></img>
          <div className='text-dark fw-bold fs-13'>Room</div>
        </div>
      </div>
      <swiper-container pagination
        loop
        autoplay='{"delay":5000, "disableOnInteraction": false}'
        class=" mt-3 demo-swiper-multiple demo-swiper-multiple-auto ps-3"
        space-between="10"
        slides-per-view="1.15">
        <swiper-slide><img src='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg' className='w-100 border-image' ></img></swiper-slide>
        <swiper-slide><img src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' className='w-100 border-image'></img></swiper-slide>
        <swiper-slide><img src='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg' className='w-100 border-image' ></img></swiper-slide>
        <swiper-slide><img src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' className='w-100 border-image'></img></swiper-slide>
        <swiper-slide><img src='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg' className='w-100 border-image' ></img></swiper-slide>
        <swiper-slide><img src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' className='w-100 border-image'></img></swiper-slide>
      </swiper-container>

      {/* Calender */}
      <div className='p-3  mt-3'>
        <div className="calendar  p-1  rounded-4 shadow-sm bg-secondary bg-opacity-10" style={{ backdropFilter: "blur(50px)" }}>
          <div className="d-flex justify-content-between text-center mb-2 py-1">
            {week.map((day, idx) => (
              <div key={idx} className="flex-fill fw-bold bg-pink mx-1 py-2 rounded-3 p-1" style={{ fontSize: "13px" }}>{day}</div>
            ))}
          </div>
          <div className="d-flex flex-wrap text-center">
            {calendarDays.map((date, idx) => {
              const isCurrentMonth = date.month() === searchMonth && date.year() === searchYear;
              return (
                <div
                  key={idx}
                  className={`row rounded-3 m-1 p-1 ${isCurrentMonth ? 'border bg-white' : ''} `}
                  style={{
                    width: "12%",
                    color: isCurrentMonth ? undefined : 'transparent',
                    fontSize: "10px",
                    minHeight: "45px"
                  }}
                >
                  <div className='col-6 p-0 pe-1'>
                    {date.format("DD")}
                  </div>
                  {datamonth && datamonth.map((book, key) => {
                    if (book.time === date.format("DD/MM/YYYY")) {
                      return (
                        <>
                          <div className='col-6 p-0 ps-1' key={key}>
                            <div className='bg-danger text-white rounded-2'>
                              {book.booking[0]}
                            </div>
                          </div>
                          <div className='col-6 p-0 mt-1 pe-1'>
                            <div className='bg-success text-white rounded-2'>
                              {book.booking[1]}
                            </div>
                          </div>
                          <div className='col-6 p-0 mt-1 ps-1'>
                            <div className='bg-warning text-white rounded-2'>
                              {book.booking[2]}
                            </div>
                          </div>
                        </>
                      )
                    }
                  })}
                </div>
              );
            })}
          </div>

          <div className="d-flex justify-content-between align-items-center gap-3  p-2 ">
            <div className="d-flex align-items-center gap-1">
              <Badge className='bg-pink'> </Badge>
              <span className='fs-13'> Tổng booking</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <Badge className='bg-success'> </Badge>
              <span className='fs-13'> Đã thanh toán</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <Badge className='bg-warning'> </Badge>
              <span className='fs-13'> Còn chờ</span>
            </div>
          </div>

        </div>
      </div>

      <div className=' d-flex justify-content-between align-items-center px-4 mt-2'>
        <div className='fs-13 fw-bold'>
          Lịch sử đặt lịch
        </div>
        <div>
          <span class="material-icons fs-5">
            arrow_forward
          </span>
        </div>
      </div>
      <List className='px-3 mb-3 mt-0'>
        <ListItem link="#" className='row mt-2 list-no-chevron'>
          <div className='col-2'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyd6LH2s0z9gH9I33pj9ZTUzbO_GEv5fCPQ&s' className='w-100 border border-2 rounded-3 border-danger'></img>
          </div>
          <div className='col-10 fs-13 ms-2 border-bottom border-light'>
            <div className='fw-bold d-flex justify-content-between'> Phòng: V.I.P 4 <span>25.500.000</span></div>
            <div className='text-muted mt-1 mb-2'>18/07/2025 14:22:52</div>
          </div>
        </ListItem>
        <ListItem link="#" className='row mt-2 list-no-chevron'>
          <div className='col-2'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyd6LH2s0z9gH9I33pj9ZTUzbO_GEv5fCPQ&s' className='w-100 border border-2 rounded-3 border-danger'></img>
          </div>
          <div className='col-10 fs-13 ms-2 border-bottom border-light'>
            <div className='fw-bold d-flex justify-content-between'> Phòng: V.I.P 4 <span>25.500.000</span></div>
            <div className='text-muted mt-1 mb-2'>18/07/2025 14:22:52</div>
          </div>
        </ListItem>
      </List>

      <List strong inset dividersIos>
        <ListItem link="/about/" title="About" />
        <ListItem link="/form/" title="Form" />
      </List>

      <BlockTitle>Modals</BlockTitle>
      <Block className="grid grid-cols-2 grid-gap">
        <Button fill popupOpen="#my-popup">Popup</Button>
        <Button fill loginScreenOpen="#my-login-screen">Login Screen</Button>
      </Block>

      <BlockTitle>Panels</BlockTitle>
      <Block className="grid grid-cols-2 grid-gap">
        <Button fill panelOpen="left">Left Panel</Button>
        <Button fill panelOpen="right">Right Panel</Button>
      </Block>

      <List strong inset dividersIos>
        <ListItem
          title="Dynamic (Component) Route"
          link="/dynamic-route/blog/45/post/125/?foo=bar#about"
        />
        <ListItem
          title="Default Route (404)"
          link="/load-something-that-doesnt-exist/"
        />
        <ListItem
          title="Request Data & Load"
          link="/request-and-load/user/123456/"
        />
      </List>

      <Popup id="my-popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Popup content goes here. jdbhfsjn</p>
            </Block>
          </Page>
        </View>
      </Popup>
    </Page>

  );
}
export default HomePage;