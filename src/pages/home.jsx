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
  Card
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
        <NavTitle className='text-dark' sliding>HAPPYCORP_7</NavTitle>
        <NavRight>
          <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
        </NavRight>
        <NavTitleLarge className='text'>HAPPYCORP_7</NavTitleLarge>
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
        class=" mt-5 demo-swiper-multiple demo-swiper-multiple-auto ps-2"
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
      <div className="calendar p-2 py-0 rounded-4 shadow-sm " style={{ backdropFilter: "blur(50px)" }}>
        <div className="d-flex justify-content-between text-center mb-2">
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
                className={`row  rounded-3 m-1 p-1 ${isCurrentMonth ? 'border' : ''} `}
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
        <div className="d-flex justify-content-between align-items-center gap-3 mt-3 flex-wrap">
          <div className="d-flex align-items-center gap-1">
            <span className="badge bg-pink mb-1" style={{ fontSize: "10px" }}> </span>
            <span className='fs-13'> Tổng booking</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <span className={`badge bg-success mb-1`} style={{ fontSize: "10px" }}> </span>
            <span className='fs-13'> Đã thanh toán</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <span className={`badge bg-warning mb-1`} style={{ fontSize: "10px" }}> </span>
            <span className='fs-13'> Còn chờ</span>
          </div>
        </div>
      </div>


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
    </Page>
  );
}
export default HomePage;