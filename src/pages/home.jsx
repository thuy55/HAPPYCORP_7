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
  View,
  f7,
  CardHeader,
  CardContent,
  PageContent
} from 'framework7-react';
import moment from 'moment';
import { number } from 'prop-types';
import CommonNavbar from '../components/CommonNavbar';
import PageTransition from '../components/PageTransition';

import { Player } from '@lordicon/react';
import SheetBooking from "../components/SheetBooking";
import SheetMenu from '../components/Menu';
import SheetEvent from '../components/Event';
import SheetEventDetail from '../components/EventDetail';
import SheetEndow from '../components/Endow';
import SheetEndowDetail from '../components/EndowDetail';
import SheetRevenue from '../components/Revenue';
import SheetRoomDetail from '../components/RoomDetail';
import SheetInvoices from '../components/Invoices';

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

  function bookingDetail(e) {
    f7.popup.open('#booking-detail');
    console.log(345565);
  }

  const [sheetOpened, setSheetOpened] = useState(false);
  const [sheetOpenedMenu, setSheetOpenedMenu] = useState(false);
  const [sheetOpenedEvent, setSheetOpenedEvent] = useState(false);
  const [sheetOpenedEndow, setSheetOpenedEndow] = useState(false);
  const [sheetOpenedEventDetail, setSheetOpenedEventDetail] = useState(false);
  const [sheetOpenedEndowDetail, setSheetOpenedEndowDetail] = useState(false);
  const [sheetOpenedRevenue, setSheetOpenedRevenue] = useState(false);
  const [sheetOpenedInvoices, setSheetOpenedInvoices] = useState(false);

  return (


    <Page name="home">
      {/* Top Navbar */}
      <Navbar large sliding={false}>
        <NavLeft>
          {/* <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" /> */}
          <Link panelOpen="left" >
            <lord-icon
              src="https://cdn.lordicon.com/vmiwgvnx.json"
              trigger="loop"
              state="loop-spin"
              colors="primary:#f30771,secondary:#f30771"
              className='size-icon me-2'>
            </lord-icon></Link>
        </NavLeft>
        <NavTitle className='text-dark' sliding>
          <img src='../image/happy-corp-logo.png' style={{ height: "35px" }}></img>
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
        <NavTitleLarge className='text' >
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <span className='fs-13  fw-normal me-1'>
                Xin chào
              </span>
              <span className='fw-bold'>Thanh Thúy</span>

            </div>
            <Button className='bg-pink rounded-pill p-3 fw-bold text-white'>Kích hoạt thẻ</Button>

          </div>
        </NavTitleLarge>
      </Navbar>
      <PageContent className=''>
        <div className='px-4 my-2 mt-4'>
          <div className="d-flex align-items-center bg-light border border-secondary-10 rounded-pill p-1 row" style={{ cursor: 'pointer' }}>
            <input className='border bg-light rounded-pill border-0 p-2 px-3 col-10' placeholder='Tìm kiếm'></input>
            <Button fill={false} className=" col-2 pe-0 d-flex justify-content-end">
              <lord-icon
                src="https://cdn.lordicon.com/wjyqkiew.json"
                trigger="loop"
                colors="primary:#000000,secondary:#f30771"
                className=' me-2'
                style={{ width: '30px', height: '30px' }}>
              </lord-icon>
            </Button>
          </div>

        </div>

        {/* Page content */}
        <List className='m-0 mt-2'>
          <div className="video-container rounded-3 px-2">
            <video
              className="video-bg w-100 "
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://happycorp.com.vn/wp-content/uploads/2025/07/homevideo.mp4" type="video/mp4" />
            </video>
          </div>
        </List>

        <div className="grid grid-cols-4 px-2 mt-2">
          <div onClick={() => setSheetOpenedMenu(true)}>
            <div className='text-center rounded-4 mx-2 p-1'>
              <img src='../img/catering.gif' className='w-50'></img>
              <div className=' fs-13 '>Thực đơn</div>
            </div>
          </div>
          <div onClick={() => setSheetOpened(true)}>
            <div className='text-center rounded-4 mx-2 p-1'>
              <img src='../img/online-order.gif' className='w-50'></img>
              <div className=' fs-13'>Đặt bàn</div>
            </div>
          </div>
          <div onClick={() => setSheetOpenedEvent(true)}>
            <div className='text-center rounded-4 mx-2 p-1'>
              <img src='../img/event.gif' className='w-50'></img>
              <div className=' fs-13'>Sự kiện</div>
            </div>
          </div>
          <div onClick={() => setSheetOpenedRevenue(true)}>
            <div className='text-center rounded-4 mx-2 p-1'>
              <img src='../img/bill.gif' className='w-50'></img>
              <div className=' fs-13'>Doanh thu</div>
            </div>
          </div>


        </div>


        <Link onClick={() => setSheetOpenedEndow(true)} className='fs-6 fw-bold mx-3 mt-3 justify-content-start d-flex align-items-center'>
          {/* <img src='../image/6.gif' className='size-icon'></img> */}
          <lord-icon
            src="https://cdn.lordicon.com/puebsmel.json"
            trigger="loop"
            colors="primary:#f30771,secondary:#f30771"
            className=' me-1'
            style={{ width: '30px', height: '30px' }}>
          </lord-icon>

          Ưu đãi
        </Link>
        <div className='row d-flex flex-nowrap mx-2 mt-2 pb-2' style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <div className='col-5 px-1'>
            <Card className='m-0 border-light p-1 fs-13' onClick={() => setSheetOpenedEndowDetail(true)}>
              <div>
                <img onClick={() => setSheetOpenedEndowDetail(true)} src='https://image.made-in-china.com/202f0j00vzJeGPLHZIoB/Gold-Restaurant-Bar-Counter-Square-U-Stylish-Wholesale-Night-Club-Bar-Design.webp' className='w-100 rounded-3'></img>
                <div className='d-flex'>
                  <div className='mt-2 fst-italic'> <lord-icon
                    src="https://cdn.lordicon.com/puebsmel.json"
                    trigger="loop"
                    colors="primary:#f30771,secondary:#f30771"
                    className=' me-1'
                    style={{ width: '20px', height: '20px' }}>
                  </lord-icon>
                    Giảm giá sốc</div>
                </div>
                <div className='fw-bold text-pink my-1'>Giảm 10%</div>
                <div className='limited-lines1'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
              </div>
            </Card>
          </div>
          <div className='col-5 px-1'>
            <Card className='m-0 border-light p-1 fs-13'>
              <div>
                <img onClick={() => setSheetOpenedEndowDetail(true)} src='https://image.made-in-china.com/202f0j00vzJeGPLHZIoB/Gold-Restaurant-Bar-Counter-Square-U-Stylish-Wholesale-Night-Club-Bar-Design.webp' className='w-100 rounded-3'></img>
                <div className='d-flex'>
                  <div className='mt-2 fst-italic'>
                    <lord-icon
                      src="https://cdn.lordicon.com/puebsmel.json"
                      trigger="loop"
                      colors="primary:#f30771,secondary:#f30771"
                      className=' me-1'
                      style={{ width: '20px', height: '20px' }}>
                    </lord-icon>
                    Giảm giá sốc</div>
                </div>
                <div className='fw-bold text-pink my-1'>Giảm 10%</div>
                <div className='limited-lines1'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
              </div>
            </Card>
          </div>
          <div className='col-5 px-1'>
            <Card onClick={() => setSheetOpenedEndowDetail(true)} className='m-0 border-light p-1 fs-13'>
              <div>
                <img src='https://image.made-in-china.com/202f0j00vzJeGPLHZIoB/Gold-Restaurant-Bar-Counter-Square-U-Stylish-Wholesale-Night-Club-Bar-Design.webp' className='w-100 rounded-3'></img>
                <div className='d-flex'>
                  <div className='mt-2 fst-italic'>
                    <lord-icon
                      src="https://cdn.lordicon.com/puebsmel.json"
                      trigger="loop"
                      colors="primary:#f30771,secondary:#f30771"
                      className=' me-1'
                      style={{ width: '20px', height: '20px' }}>
                    </lord-icon>
                    Giảm giá sốc</div>
                </div>
                <div className='fw-bold text-pink my-1'>Giảm 10%</div>
                <div className='limited-lines1'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
              </div>
            </Card>
          </div>
          <div className='col-5 px-1'>
            <Card className='m-0 border-light p-1 fs-13'>
              <div>
                <img src='https://image.made-in-china.com/202f0j00vzJeGPLHZIoB/Gold-Restaurant-Bar-Counter-Square-U-Stylish-Wholesale-Night-Club-Bar-Design.webp' className='w-100 rounded-3'></img>
                <div className='d-flex'>
                  <div className='mt-2 fst-italic'>
                    <lord-icon
                      src="https://cdn.lordicon.com/puebsmel.json"
                      trigger="loop"
                      colors="primary:#f30771,secondary:#f30771"
                      className=' me-1'
                      style={{ width: '20px', height: '20px' }}>
                    </lord-icon>
                    Giảm giá sốc</div>
                </div>
                <div className='fw-bold text-pink my-1'>Giảm 10%</div>
                <div className='limited-lines1'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
              </div>
            </Card>
          </div>
        </div>
        <Link onClick={() => setSheetOpenedEvent(true)} className='fs-6 fw-bold mx-3 mt-3'>
          <lord-icon
            src="https://cdn.lordicon.com/okgbpdra.json"
            trigger="loop"
            colors="primary:#f30771,secondary:#f30771"
            className=' me-1'
            style={{ width: '30px', height: '30px' }}>
          </lord-icon>
          Sự kiện</Link>
        <swiper-container pagination
          loop
          autoplay='{"delay":5000, "disableOnInteraction": false}'
          class=" mt-3 demo-swiper-multiple demo-swiper-multiple-auto ps-3"
          space-between="10"
          slides-per-view="1.15">
          <swiper-slide><img onClick={() => setSheetOpenedEventDetail(true)} src='https://wallpaperaccess.com/full/2300142.jpg' className='w-100 border-image' ></img></swiper-slide>
          <swiper-slide><img onClick={() => setSheetOpenedEventDetail(true)} src='https://wallpaperaccess.com/full/2300142.jpg' className='w-100 border-image'></img></swiper-slide>
          <swiper-slide><img onClick={() => setSheetOpenedEventDetail(true)} src='https://wallpaperaccess.com/full/2300142.jpg' className='w-100 border-image'></img></swiper-slide>
          <swiper-slide><img onClick={() => setSheetOpenedEventDetail(true)} src='https://wallpaperaccess.com/full/2300142.jpg' className='w-100 border-image' ></img></swiper-slide>
          <swiper-slide><img src='https://wallpaperaccess.com/full/2300142.jpg' className='w-100 border-image'></img></swiper-slide>
          <swiper-slide><img src='https://wallpaperaccess.com/full/2300142.jpg' className='w-100 border-image' ></img></swiper-slide>
          <swiper-slide><img src='https://wallpaperaccess.com/full/2300142.jpg' className='w-100 border-image'></img></swiper-slide>
        </swiper-container>

        {/* Calender */}
        <div className='fs-15 fw-bold mx-3 mt-3 d-flex align-items-center'>
          <lord-icon
            src="https://cdn.lordicon.com/uphbloed.json"
            trigger="loop"
            colors="primary:#f30771,secondary:#f30771"
            className=' me-1'
            style={{ width: '30px', height: '30px' }}>
          </lord-icon>
          Lịch Booking tháng 07/2025</div>
        <div className='p-3  mt1'>
          <div className="calendar  p-1  rounded-4 shadow-sm " style={{ backdropFilter: "blur(50px)" }}>
            <div className="d-flex justify-content-between text-center mb-2 py-1">
              {week.map((day, idx) => (
                <div key={idx} className="flex-fill fw-bold bg-pink mx-1 py-2 rounded-3 p-1" style={{ fontSize: "13px" }}>{day}</div>
              ))}
            </div>
            <div className="d-flex flex-wrap text-center">
              {calendarDays.map((date, idx) => {
                const isCurrentMonth = date.month() === searchMonth && date.year() === searchYear;
                return (
                  <Link className='m-0 p-0' fill popupOpen="#popup-view-booking">
                    <Card
                      key={idx}
                      className={`card-animated-bg rounded-3 m-1 p-1 ${isCurrentMonth ? 'border-light ' : 'border border-0 '} `}
                      style={{
                        width: "12%",
                        color: isCurrentMonth ? undefined : 'transparent',
                        fontSize: "10px",
                        minHeight: "45px"
                      }}
                    >
                      <div className='row m-0'>
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
                    </Card>
                  </Link>
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

        <div className=' d-flex justify-content-between align-items-center px-3 mt-2'>
          <div className='fs-13 fw-bold d-flex align-items-center'>
            <lord-icon
              src="https://cdn.lordicon.com/psyssele.json"
              trigger="loop"
              colors="primary:#f30771,secondary:#f30771"
              className=' me-1'
              style={{ width: '30px', height: '30px' }}>
            </lord-icon>
            Lịch sử đặt lịch
          </div>
          <div>
            <span class="material-icons fs-5">
              arrow_forward
            </span>
          </div>
        </div>
        {/* <Card expandable className='border  shadow-none  border-0 m-2 p-1'>
          <CardContent padding={false}>
            <div className="" >
              <CardHeader className="display-block p-2  px-3 pe-1">
                <div className='row w-100  d-flex align-items-center '>
                  <div className='col-2 p-0 ps-1'>
                    <img style={{ width: "100%", height: "100%" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyd6LH2s0z9gH9I33pj9ZTUzbO_GEv5fCPQ&s' className=' border border-2 rounded-3 border-danger'></img>
                  </div>
                  <div className='col-10 fs-13  border-bottom border-light'>
                    <div className='fw-bold d-flex justify-content-between'> Phòng: V.I.P 4 <span className='text-success'>Đã hoàn tất</span></div>
                    <div className='text-muted mt-1 mb-2'>18/07/2025 14:22:52</div>
                  </div>
                </div>
              </CardHeader>
              <Link
                cardClose
                color="white"
                className="card-opened-fade-in"
                style={{ position: 'absolute', right: '15px', top: '15px' }}
                iconF7="xmark_circle_fill"
              />
            </div>
            <div className="card-content-padding">
              <Block className='mt-0 '>
                <div className='fw-bold fs-6 mt-4'>Thông tin khách hàng</div>
                <List className='my-2 fs-13'>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Khách hàng<div className='fw-bold'>MR TRUNG & HUY NGUYỄN (K.BI)</div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Ghi chú<div className='fw-bold'>Không có</div>
                  </div>
                </List>
                <div className='fw-bold fs-6 mt-4'>Thông tin đặt bàn</div>
                <List className='my-2 fs-13'>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Nhà hàng<div className='fw-bold'>90s House</div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Mã booking<div className='fw-bold'>#8732465</div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Ngày<div className='fw-bold'>31/07/2025 12:00:00</div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Số người<div className='fw-bold'>3</div>
                  </div>

                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Khu vực/ Phòng<div className='fw-bold'>V4</div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Trạng thái<span className='px-2 pb-1 bg-primary rounded-pill text-white'>Đã nhận phòng</span>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Người đặt<div className='fw-bold'>Jatbirat</div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Ghi chú<div className='fw-bold'>Không có</div>
                  </div>
                </List>
                <div className='fw-bold fs-6 mt-4'>Thanh toán</div>
                <List className='my-2 fs-13'>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Tổng tiền<div className='fw-bold'>0</div>
                  </div>
                </List>

                <div className=' grid grid-cols-2 grid-gap px-2 my-4'>
                  <div>
                    <button className='border border-0 rounded-pill p-3 bg-warning fs-13 fw-đơnd'>Tải hóa đơn</button>
                  </div>
                  <div>
                    <button className='border border-0 rounded-pill p-3 bg-warning fs-13 fw-đơnd'>Chia sẻ</button>
                  </div>
                </div>
              </Block>

            </div>
          </CardContent>
        </Card> */}
        <List className='px-3 mb-3 mt-0'>

          <ListItem onClick={() => { setSheetOpenedInvoices(true) }} className='row mt-2 list-no-chevron'>
            <div className='col-2'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyd6LH2s0z9gH9I33pj9ZTUzbO_GEv5fCPQ&s' className='w-100 border border-2 rounded-3 border-danger'></img>
            </div>
            <div className='col-10 fs-13 ms-2 border-bottom'>
              <div className='fw-bold d-flex justify-content-between'> Phòng: V.I.P 4 <span className='text-success'>Đã hoàn tất</span></div>
              <div className=' mt-1 mb-2'>18/07/2025 14:22:52</div>
            </div>
          </ListItem>
          <ListItem onClick={() => { setSheetOpenedInvoices(true) }} className='row mt-2 list-no-chevron'>
            <div className='col-2'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyd6LH2s0z9gH9I33pj9ZTUzbO_GEv5fCPQ&s' className='w-100 border border-2 rounded-3 border-danger'></img>
            </div>
            <div className='col-10 fs-13 ms-2 border-bottom'>
              <div className='fw-bold d-flex justify-content-between'> Phòng: V.I.P 4 <span className='text-success'>Đã hoàn tất</span></div>
              <div className=' mt-1 mb-2'>18/07/2025 14:22:52</div>
            </div>
          </ListItem>
        </List>


        <Popup id="popup-view-booking">
          <View>
            <Page>
              <Navbar title="Ngày 31/07/2025">
                <NavRight>
                  <Link popupClose>Close</Link>
                </NavRight>
              </Navbar>
              <Block className='my-3'>
                <div className='fw-bold'>Chi tiết khách hàng</div>
                <List className='my-2'>
                  <Card className='m-0 p-2 border border-0 rounded-0'>
                    <div className=' text-center'>
                      Chưa biết là gì
                    </div>
                  </Card>
                </List>

                <div className='fw-bold fs-6 text-pink'>Tổng booking 5</div>

                <div class="grid grid-cols-3 fs-13 mt-2">
                  <div className='d-flex align-items-center mt-2'>
                    <div className='hinh-vuong bg-primary rounded-2 me-1'></div>
                    4 Nhận khách
                  </div>
                  <div className='d-flex align-items-center mt-2'>
                    <div className='hinh-vuong bg-success rounded-2 me-1'></div>
                    4 Thanh toán
                  </div>
                  <div className='d-flex align-items-center mt-2'>
                    <div className='hinh-vuong bg-warning rounded-2 me-1'></div>
                    4 Đợi duyệt
                  </div>
                  <div className='d-flex align-items-center mt-2'>
                    <div className='hinh-vuong bg-info rounded-2 me-1'></div>
                    0 Chờ duyệt
                  </div>
                  <div className='d-flex align-items-center mt-2'>
                    <div className='hinh-vuong bg-danger rounded-2 me-1'></div>
                    0 Không duyệt
                  </div>
                  <div className='d-flex align-items-center mt-2'>
                    <div className='hinh-vuong bg-secondary rounded-2 me-1'></div>
                    0 Đã hủy
                  </div>
                </div>
                <List className='my-3'>
                  <div onClick={() => { bookingDetail(1) }} className=' hieuung p-2 rounded-2 d-flex align-items-center fs-13'>
                    <div className='bg-primary rounded-2' style={{ width: "35px", height: "35px" }}></div>
                    <div className='ms-2'>
                      <div className='fw-bold mb-1'>MR TRUNG & HUY NGUYỄN (K.BI)</div>
                      <div>31/07/2025 12:00:00</div>
                    </div>
                  </div>
                  <div className=' border-bottom mb-2  '></div>

                  <Card expandable className='border  shadow-none  border-0 m-2 mx-0 p-1'>
                    <CardContent padding={false}>
                      <div className="" >
                        <CardHeader className="display-block p-2 px-2">
                          <div className=' w-100  d-flex align-items-center '>
                            <div className='bg-primary rounded-2' style={{ width: "35px", height: "35px" }}></div>
                            <div className='ms-2  fs-13'>
                              <div className='fw-bold mb-1'>MR TRUNG & HUY NGUYỄN (K.BI)</div>
                              <div>31/07/2025 12:00:00</div>
                            </div>
                          </div>
                        </CardHeader>
                        <Link
                          cardClose
                          color="white"
                          className="card-opened-fade-in"
                          style={{ position: 'absolute', right: '15px', top: '15px' }}
                          iconF7="xmark_circle_fill"
                        />
                      </div>
                      <div className="card-content-padding">
                        <Block className='mt-0 '>
                          <div className='fw-bold fs-6 mt-4'>Thông tin khách hàng</div>
                          <List className='my-2 fs-13'>
                            <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                              Khách hàng<div className='fw-bold'>MR TRUNG & HUY NGUYỄN (K.BI)</div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                              Ghi chú<div className='fw-bold'>Không có</div>
                            </div>
                          </List>
                          <div className='fw-bold fs-6 mt-4'>Thông tin đặt bàn</div>
                          <List className='my-2 fs-13'>
                            <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                              Nhà hàng<div className='fw-bold'>90s House</div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                              Mã booking<div className='fw-bold'>#8732465</div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                              Ngày<div className='fw-bold'>31/07/2025 12:00:00</div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                              Số người<div className='fw-bold'>3</div>
                            </div>

                            <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                              Khu vực/ Phòng<div className='fw-bold'>V4</div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                              Trạng thái<span className='px-2 pb-1 bg-primary rounded-pill text-white'>Đã nhận phòng</span>
                            </div>
                            <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                              Người đặt<div className='fw-bold'>Jatbirat</div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                              Ghi chú<div className='fw-bold'>Không có</div>
                            </div>
                          </List>
                          <div className='fw-bold fs-6 mt-4'>Thanh toán</div>
                          <List className='my-2 fs-13'>
                            <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                              Tổng tiền<div className='fw-bold'>0</div>
                            </div>
                          </List>

                          <div className=' grid grid-cols-2 grid-gap px-2 my-4'>
                            <div>
                              <button className='border border-0 rounded-pill p-3 bg-warning fs-13 fw-đơnd'>Tải hóa đơn</button>
                            </div>
                            <div>
                              <button className='border border-0 rounded-pill p-3 bg-warning fs-13 fw-đơnd'>Chia sẻ</button>
                            </div>
                          </div>
                        </Block>

                      </div>
                    </CardContent>
                  </Card>

                </List>
                <div className='fw-bold fs-6 text-pink'>Phòng trống</div>
                <List className='mt-0'>
                  <div className='row'>
                    <div className='col-6 p-2'>
                      <Card className='m-0 p-1 rounded-3 border border-0 fs-13'>
                        <img className='w-100 rounded-3' src='https://image.made-in-china.com/202f0j00vzJeGPLHZIoB/Gold-Restaurant-Bar-Counter-Square-U-Stylish-Wholesale-Night-Club-Bar-Design.webp'></img>
                        <div className='fs-6 fw-bold text-center mt-2'>Happy corp 2</div>
                        <div className='mt-1'>Khung giờ trống:</div>
                        <ul className='mt-1' style={{ listStyle: 'disc', paddingLeft: '1.1rem' }}>
                          <li>9h30 - 15h00</li>
                          <li>9h30 - 15h00</li>
                        </ul>
                      </Card>
                    </div>
                    <div className='col-6 p-2'>
                      <Card className='m-0 p-1 rounded-3 border border-0 fs-13'>
                        <img className='w-100 rounded-3' src='https://image.made-in-china.com/202f0j00vzJeGPLHZIoB/Gold-Restaurant-Bar-Counter-Square-U-Stylish-Wholesale-Night-Club-Bar-Design.webp'></img>
                        <div className='fs-6 fw-bold text-center mt-2'>Happy corp 2</div>
                        <div className='mt-1'>Khung giờ trống:</div>
                        <ul className='mt-1' style={{ listStyle: 'disc', paddingLeft: '1.1rem' }}>
                          <li>9h30 - 15h00</li>
                          <li>9h30 - 15h00</li>
                        </ul>
                      </Card>
                    </div>
                    <div className='col-6 p-2'>
                      <Card className='m-0 p-1 rounded-3 border border-0 fs-13'>
                        <img className='w-100 rounded-3' src='https://image.made-in-china.com/202f0j00vzJeGPLHZIoB/Gold-Restaurant-Bar-Counter-Square-U-Stylish-Wholesale-Night-Club-Bar-Design.webp'></img>
                        <div className='fs-6 fw-bold text-center mt-2'>Happy corp 2</div>
                        <div className='mt-1'>Khung giờ trống:</div>
                        <ul className='mt-1' style={{ listStyle: 'disc', paddingLeft: '1.1rem' }}>
                          <li>9h30 - 15h00</li>
                          <li>9h30 - 15h00</li>
                        </ul>
                      </Card>
                    </div>
                    <div className='col-6 p-2'>
                      <Card className='m-0 p-1 rounded-3 border border-0 fs-13'>
                        <img className='w-100 rounded-3' src='https://image.made-in-china.com/202f0j00vzJeGPLHZIoB/Gold-Restaurant-Bar-Counter-Square-U-Stylish-Wholesale-Night-Club-Bar-Design.webp'></img>
                        <div className='fs-6 fw-bold text-center mt-2'>Happy corp 2</div>
                        <div className='mt-1'>Khung giờ trống:</div>
                        <ul className='mt-1' style={{ listStyle: 'disc', paddingLeft: '1.1rem' }}>
                          <li>9h30 - 15h00</li>
                          <li>9h30 - 15h00</li>
                        </ul>
                      </Card>
                    </div>
                  </div>
                </List>
              </Block>
            </Page>
          </View>
        </Popup>


        <Popup id="booking-detail">
          <View>
            <Page>
              <Navbar title="Chi tiết đặt lịch">
                <NavRight>
                  <Link popupClose>Close</Link>
                </NavRight>
              </Navbar>
              <Block className='mt-0 '>
                <div className='fw-bold fs-6 mt-4'>Thông tin khách hàng</div>
                <List className='my-2 fs-13'>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Khách hàng<div className='fw-bold'>MR TRUNG & HUY NGUYỄN (K.BI)</div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Ghi chú<div className='fw-bold'>Không có</div>
                  </div>
                </List>
                <div className='fw-bold fs-6 mt-4'>Thông tin đặt bàn</div>
                <List className='my-2 fs-13'>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Nhà hàng<div className='fw-bold'>90s House</div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Mã booking<div className='fw-bold'>#8732465</div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Ngày<div className='fw-bold'>31/07/2025 12:00:00</div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Số người<div className='fw-bold'>3</div>
                  </div>

                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Khu vực/ Phòng<div className='fw-bold'>V4</div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Trạng thái<span className='px-2 pb-1 bg-primary rounded-pill text-white'>Đã nhận phòng</span>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Người đặt<div className='fw-bold'>Jatbirat</div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Ghi chú<div className='fw-bold'>Không có</div>
                  </div>
                </List>
                <div className='fw-bold fs-6 mt-4'>Thanh toán</div>
                <List className='my-2 fs-13'>
                  <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Tổng tiền<div className='fw-bold'>0</div>
                  </div>
                </List>
              </Block>
              <div className='fixed-bottom grid grid-cols-2 grid-gap px-2 mb-4'>
                <div>
                  <button className='border border-0 rounded-pill p-3 bg-warning fs-13 fw-đơnd'>Tải hóa đơn</button>
                </div>
                <div>
                  <button className='border border-0 rounded-pill p-3 bg-warning fs-13 fw-đơnd'>Chia sẻ</button>
                </div>
              </div>
            </Page>
          </View>
        </Popup>
      </PageContent>
      <SheetBooking
        opened={sheetOpened}
        onClose={() => setSheetOpened(false)}
      />
      <SheetMenu
        opened={sheetOpenedMenu}
        onClose={() => setSheetOpenedMenu(false)}
      />
      <SheetEvent
        opened={sheetOpenedEvent}
        onClose={() => setSheetOpenedEvent(false)}
      />
      <SheetEventDetail
        opened={sheetOpenedEventDetail}
        onClose={() => setSheetOpenedEventDetail(false)}
      />
      <SheetEndow
        opened={sheetOpenedEndow}
        onClose={() => setSheetOpenedEndow(false)}
      />
      <SheetEndowDetail
        opened={sheetOpenedEndowDetail}
        onClose={() => setSheetOpenedEndowDetail(false)}
      />
      <SheetRevenue
        opened={sheetOpenedRevenue}
        onClose={() => setSheetOpenedRevenue(false)}
      />
      <SheetInvoices
        opened={sheetOpenedInvoices}
        onClose={() => setSheetOpenedInvoices(false)}
      />
    </Page>

  );
}
export default HomePage;