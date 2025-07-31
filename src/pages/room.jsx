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
    f7
} from 'framework7-react';
import moment from 'moment';
import { number } from 'prop-types';
import CommonNavbar from '../components/CommonNavbar';


const RoomPage = () => {

    const handleClick = (e) => {
        f7.views.main.router.navigate('/event-detail/');
        console.log("jhgdsjhf", e);
    };

    function handleRefresh(event) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }

    //search
    const [selectedMonth, setSelectedMonth] = useState(moment().month()); // 0 - 11
    const [selectedYear, setSelectedYear] = useState(moment().year());
    const [selectedDate, setSelectedDate] = useState(moment().date());

    const listDate = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

    const [searchDate, setSearchDate] = useState(moment().date());
    const [searchMonth, setSearchMonth] = useState(moment().month()); // 0 - 11
    const [searchYear, setSearchYear] = useState(moment().year());
    const [date, setdate] = useState("");
    useEffect(() => {
        const selectedMoment = moment({
            year: searchYear,
            month: searchMonth,
            day: searchDate
        });

        const weekdayNumber = selectedMoment.day();
        const weekday = listDate[weekdayNumber];
        setdate(weekday)
    }, [])

    function handleSearchMonth() {
        setSearchMonth(selectedMonth);
        setSearchYear(selectedYear)
        setSearchDate(selectedDate);
        const selectedMoment = moment({
            year: selectedYear,
            month: selectedMonth,
            day: selectedDate
        });
        console.log(selectedDate + "-" + selectedMonth + "-" + selectedYear);

        const weekdayNumber = selectedMoment.day();
        const weekday = listDate[weekdayNumber];
        setdate(weekday)
    }

    const [step, setStep] = useState(0);

    return (


        <Page name="home">
            {/* Top Navbar */}
            <CommonNavbar />

            {/* Page content */}
            <List className='mx-2 mt-2' simpleList>
                <div className='d-flex align-items-center fs-6 fw-bold'>
                    <Link back>
                        <img src='../image/icon-backward.gif' className='size-icon me-1'></img>
                    </Link>
                    Sơ đồ phòng
                </div>
            </List>

            <div className='d-flex align-items-center row px-2'>
                <div className='col-3'>
                    <img src='../image/icon-backward.gif' className='size-icon '></img>
                </div>

                <div className='col-6'>
                    <div data-bs-toggle="collapse" data-bs-target="#collapseSearch" aria-expanded="true" aria-controls="collapseSearch" className="d-flex align-items-center p-2 bg-light rounded-pill  w-100 fs-13" style={{ height: '45px' }}>
                        <input
                            type="text"
                            className="form-control bg-light border-0 shadow-none fs-13 fw-bold"
                            placeholder="Tìm kiếm"
                            style={{
                                flex: 1,
                                borderRadius: '50px',
                            }}
                            value={`${date} - ${searchDate}/${searchMonth + 1}/${searchYear}`}
                        />
                        <div id="open-modal-search-date-home"
                            className=" d-flex justify-content-center align-items-center me-0"
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                width: '35px',
                                height: '35px',
                            }}
                        >
                            <img src='../image/icon-backward.gif' className='size-icon'></img>
                        </div>
                    </div>
                </div>
                <div className='text-end col-3'>
                    <img src='../image/icon-backward.gif' className='size-icon '></img>

                </div>
            </div>
            <div className="collapse show" id="collapseSearch">
                <div className='mt-3 row px-3'>
                    <div className='col-4'>

                        <select className='p-2 rounded-4 fs-13 border border-1 w-100 bg-light' value={selectedDate} onChange={(e) => setSelectedDate(parseInt(e.target.value))}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>

                    </div>
                    <div className='col-4'>
                        <select className='p-2 rounded-4 fs-13 border border-1 w-100 bg-light' value={selectedMonth}
                            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
                            {moment.months().map((month, idx) => (
                                <option key={idx} value={idx}>{month}</option>
                            ))}
                        </select>

                    </div>
                    <div className='col-4'>
                        <select className='p-2 rounded-4 fs-13 border border-1 w-100' value={selectedYear}
                            onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
                            {Array.from({ length: 10 }, (_, i) => {
                                const year = moment().year() - 5 + i;
                                return <option key={year} value={year}>{year}</option>;
                            })}
                        </select>
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-2 px-4 mb-3'>
                    <button className='border-btn fs-13 fw-bold p-2 rounded-pill w-100' onClick={() => { handleSearchMonth() }}>Xem</button>
                </div>
            </div>

            <div className='px-4'>
                {step === 0 && (
                    <>
                        <div className='fs-13 fw-bold mt-3'>Sơ đồ phòng</div>
                        <div className="d-flex justify-content-between align-items-center gap-3  p-2 ">
                            <div className="d-flex align-items-center gap-1">
                                <Badge className='bg-primary'> </Badge>
                                <span className='fs-13'> Tổng booking</span>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                                <Badge className='bg-warning'> </Badge>
                                <span className='fs-13'> Đã thanh toán</span>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                                <Badge className='bg-white'> </Badge>
                                <span className='fs-13'> Còn chờ</span>
                            </div>  
                        </div>
                        <div className='row' style={{ display: 'flex', alignItems: 'stretch' }}>
                            <div className='col-6 px-2' style={{ display: 'flex' }}>
                                <Card className='fs-13 border border-0 bg-primary text-white m-0 mt-3 rounded-3 p-1 pb-2'>
                                    <img src='https://baochauelec.com/cdn/images/cong%20trinh/1-Cong-trinh-t4-2019/Ha-Noi/4-son-la/karaoke-kinh-doanh-o-son-la-h3.jpg' className='w-100 rounded-3'></img>
                                    <div className='fw-bold mt-1'>Phòng VIP 4 dành cho 10 người</div>

                                    <div className='d-flex align-items-center mt-1'>
                                        <i class="f7-icons fs-13 me-1">house</i>Nguyễn Thị A
                                    </div>
                                    <div className='d-flex align-items-center mt-1'>
                                        <i class="f7-icons fs-13 me-1">house</i> 9:00-12:00
                                    </div>
                                </Card>
                            </div>
                            <div className='col-6 px-2' style={{ display: 'flex' }}>
                                <Card className='fs-13 border border-0 bg-warning bg-opacity-75 text-white m-0 mt-3 rounded-3 p-1 pb-2'>
                                    <img src='https://baochauelec.com/cdn/images/cong%20trinh/1-Cong-trinh-t4-2019/Ha-Noi/4-son-la/karaoke-kinh-doanh-o-son-la-h3.jpg' className='w-100 rounded-3'></img>
                                    <div className='fw-bold mt-1'>Phòng VIP 4 dành cho 10 người</div>

                                    <div className='d-flex align-items-center mt-1'>
                                        <i class="f7-icons fs-13 me-1">house</i>Nguyễn Thị A
                                    </div>
                                    <div className='d-flex align-items-center mt-1'>
                                        <i class="f7-icons fs-13 me-1">house</i> 9:00-12:00
                                    </div>
                                </Card>
                            </div>
                            <div className='col-6 px-2' style={{ display: 'flex' }}>
                                <Card className='fs-13 border border-0 bg-white shadow-sm m-0 mt-3 rounded-3 p-1 pb-2'>
                                    <img src='https://baochauelec.com/cdn/images/cong%20trinh/1-Cong-trinh-t4-2019/Ha-Noi/4-son-la/karaoke-kinh-doanh-o-son-la-h3.jpg' className='w-100 rounded-3'></img>
                                    <div className='fw-bold mt-1'>Phòng VIP 4 dành cho 10 người</div>
                                </Card>
                            </div>
                            <div className='col-6 px-2' style={{ display: 'flex' }}>
                                <Card className='fs-13 border border-0 bg-warning bg-opacity-75 text-white m-0 mt-3 rounded-3 p-1 pb-2'>
                                    <img src='https://baochauelec.com/cdn/images/cong%20trinh/1-Cong-trinh-t4-2019/Ha-Noi/4-son-la/karaoke-kinh-doanh-o-son-la-h3.jpg' className='w-100 rounded-3'></img>
                                    <div className='fw-bold mt-1'>Phòng VIP 4 dành cho 10 người</div>

                                    <div className='d-flex align-items-center mt-1'>
                                        <i class="f7-icons fs-13 me-1">house</i>Nguyễn Thị A
                                    </div>
                                    <div className='d-flex align-items-center mt-1'>
                                        <i class="f7-icons fs-13 me-1">house</i> 9:00-12:00
                                    </div>
                                </Card>
                            </div>
                            <div className='col-6 px-2' style={{ display: 'flex' }}>
                                <Card className='fs-13 border border-0 bg-white shadow-sm m-0 mt-3 rounded-3 p-1 pb-2'>
                                    <img src='https://baochauelec.com/cdn/images/cong%20trinh/1-Cong-trinh-t4-2019/Ha-Noi/4-son-la/karaoke-kinh-doanh-o-son-la-h3.jpg' className='w-100 rounded-3'></img>
                                    <div className='fw-bold mt-1'>Phòng VIP 4 dành cho 10 người</div>
                                </Card>
                            </div>

                        </div>
                        <div className='p-2 mt-3'>
                            <button className='rounded-pill border-btn fs-13 fw-bold p-2 fs-13 w-100' onClick={() => setStep(2)}>Tiếp tục</button>
                        </div>
                    </>
                )}
                {step === 1 && (
                    <>
                        <Card className='m-0  p-3 py-4 rounded-4 mt-3 fs-13 shadow-sm '>
                            <div className='fw-bold'>Thông tin phòng</div>
                            <div className='my-2'>Tên: <span className='fw-bold ms-2'>Happy 1</span></div>
                            <div> Ngày đặt: <span className='fw-bold ms-2'>{moment().format("DD/MM/YYYY")}</span></div>

                        </Card>
                        <Card className='m-0  p-3 py-4 rounded-4 mt-3 fs-13 shadow-sm '>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='fw-bold'>Thông tin khách hàng</div>
                            </div>
                            <div className=' fs-13 fw-bold mt-3'>Tên <span className='text-danger ms-1'>(*)</span></div>
                            <div className='mt-2'>
                                <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Tên"></input>
                            </div>
                            <div className=' fs-13 fw-bold mt-3'>Điện thoại <span className='text-danger ms-1'>(*)</span></div>
                            <div className='mt-2'>
                                <input type='tel' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Điện thoại"></input>
                            </div>
                            <div className=' fs-13 fw-bold mt-3'>Giờ <span className='text-danger ms-1'>(*)</span></div>
                            <div className='mt-2'>
                                <input type='time' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' ></input>
                            </div>
                            <div className=' fs-13 fw-bold mt-3'>Số người <span className='text-danger ms-1'>(*)</span></div>
                            <div className='mt-2'>
                                <input type='number' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="0"></input>
                            </div>
                            <div className=' fs-13 fw-bold mt-3'>Yêu cầu</div>
                            <div className='mt-2'>
                                <textarea rows={5} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Yêu cầu"></textarea>
                            </div>
                        </Card>
                        <div className='p-2 mt-3'>
                            <button className='rounded-pill bg-pink text-white fs-13 p-3 w-100' onClick={() => setStep(2)}>Tiếp tục</button>
                        </div>
                    </>
                )}
                {step === 2 && (
                    <>
                        <Card className='m-0 p-3 py-4  rounded-4 mt-3 fs-13 shadow-sm '>
                            <div className='fw-bold'>Thông tin đặt phòng</div>
                            <div className=' fs-13 fw-bold mt-3'>Ngày <span className='text-danger ms-1'>(*)</span></div>
                            <div className='mt-2'>
                                <input type='date' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='dd/mm/yyyy'></input>
                            </div>
                            <div className=' fs-13 fw-bold mt-3'>Giờ <span className='text-danger ms-1'>(*)</span></div>
                            <div className='mt-2'>
                                <input type='time' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Điện thoại'></input>
                            </div>
                            <div className=' fs-13 fw-bold mt-3'>Số người <span className='text-danger ms-1'>(*)</span></div>
                            <div className='mt-2'>
                                <input type='number' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='0'></input>
                            </div>
                            <div className=' fs-13 fw-bold mt-3'>Yêu cầu <span className='text-danger ms-1'>(*)</span></div>
                            <div className='mt-2'>
                                <textarea rows={5} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Yêu cầu"></textarea>
                            </div>
                        </Card>
                        <div className='p-2 mt-3 d-flex align-items-center '>
                            <div className='col-6'>
                                <button className='rounded-pill bg-secondary text-white fs-13 p-3 w-100' onClick={() => setStep(1)}>Quay lại</button>
                            </div>
                            <div className='col-6'>
                                <button className='rounded-pill bg-pink text-white fs-13 p-3 w-100' onClick={() => setStep(3)}>Tiếp tục</button>
                            </div>
                        </div>
                    </>
                )}

                {step === 4 && (
                    <>
                        <IonCard className='m-0 p-3  py-4 rounded-4 mt-3 fs-13 shadow'>
                            <div className='fw-bold'>Món ăn / Dịch vụ</div>
                            <IonAccordionGroup multiple >
                                <IonAccordion value='1' className='rounded-4 bg-transparent mt-3 shadow-sm'>
                                    <IonItem lines="none" className='fs-13 rounded-4 bg-white ' slot="header">
                                        <IonLabel className='fw-bold py-2'>
                                            Combo
                                        </IonLabel>
                                    </IonItem>
                                    <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                        <IonRow className='d-flex align-items-center'>
                                            <IonCol size='6'>
                                                <IonCard className='shadow-sm rounded-4 m-0 p-2' onClick={() => { setIsModalOpenDetail(true) }}>
                                                    <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                    <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                    <div className='ms-1'>4.500.000đ</div>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size='6'>
                                                <IonCard className='shadow-sm rounded-4 m-0 p-2'>
                                                    <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                    <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                    <div className='ms-1'>4.500.000đ</div>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size='6'>
                                                <IonCard className='shadow-sm rounded-4 m-0 p-2'>
                                                    <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                    <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                    <div className='ms-1'>4.500.000đ</div>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size='6'>
                                                <IonCard className='shadow-sm rounded-4 m-0 p-2'>
                                                    <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                    <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                    <div className='ms-1'>4.500.000đ</div>
                                                </IonCard>
                                            </IonCol>
                                        </IonRow>
                                    </div>
                                </IonAccordion>
                                <IonAccordion value='2' className='rounded-4 bg-transparent mt-4 shadow-sm'>
                                    <IonItem lines="none" className='fs-13 rounded-4 bg-white' slot="header">
                                        <IonLabel className='fw-bold py-2'>
                                            Món chính
                                        </IonLabel>
                                    </IonItem>
                                    <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                        <IonRow className='d-flex align-items-center'>
                                            <IonCol size='6'>
                                                <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                    <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                    <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                    <div className='ms-1'>4.500.000đ</div>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size='6'>
                                                <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                    <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                    <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                    <div className='ms-1'>4.500.000đ</div>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size='6'>
                                                <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                    <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                    <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                    <div className='ms-1'>4.500.000đ</div>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size='6'>
                                                <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                    <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                    <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                    <div className='ms-1'>4.500.000đ</div>
                                                </IonCard>
                                            </IonCol>
                                        </IonRow>
                                    </div>
                                </IonAccordion>
                                <IonAccordion value='3' className='rounded-4 bg-transparent mt-4 shadow-sm'>
                                    <IonItem lines="none" className='fs-13 rounded-4 bg-white' slot="header">
                                        <IonLabel className='fw-bold py-2'>
                                            Đồ uống
                                        </IonLabel>
                                    </IonItem>
                                    <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                        <IonRow className='d-flex align-items-center'>
                                            <IonCol size='6'>
                                                <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                    <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                    <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                    <div className='ms-1'>4.500.000đ</div>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size='6'>
                                                <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                    <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                    <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                    <div className='ms-1'>4.500.000đ</div>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size='6'>
                                                <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                    <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                    <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                    <div className='ms-1'>4.500.000đ</div>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size='6'>
                                                <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                    <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                    <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                    <div className='ms-1'>4.500.000đ</div>
                                                </IonCard>
                                            </IonCol>
                                        </IonRow>
                                    </div>
                                </IonAccordion>
                            </IonAccordionGroup>
                        </IonCard>
                        <IonRow className='p-2 mt-3 d-flex align-items-center '>
                            <IonCol size='6'>
                                <button className='rounded-pill bg-secondary text-white fs-13 p-3 w-100' onClick={() => setStep(3)}>Quay lại</button>
                            </IonCol>
                            <IonCol size='6'>
                                <button className='rounded-pill bg-pink text-white fs-13 p-3 w-100' onClick={() => setStep(5)}>Tiếp tục</button>
                            </IonCol>
                        </IonRow>
                    </>
                )}
                {step === 5 && (
                    <>
                        <IonCard className='m-0 p-3  py-4 rounded-4 mt-3 fs-13 shadow'>
                            <div className='fw-bold'>Thông tin thanh toán</div>
                            <IonRow className=' fs-13 fw-bold mt-3'>Cọc trước</IonRow>
                            <IonRow className='mt-2'>
                                <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Cọc trước'></input>
                            </IonRow>

                            <IonRow className=' fs-13 fw-bold mt-3'>Hình thức</IonRow>
                            <IonSegment value="1">
                                <IonSegmentButton value="1">
                                    <IonLabel>Chuyển khoản</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="2">
                                    <IonLabel>Tiền mặt</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>

                        </IonCard>
                        <IonRow className='p-2 mt-3 d-flex align-items-center '>
                            <IonCol size='6'>
                                <button className='rounded-pill bg-secondary text-white fs-13 p-3 w-100' onClick={() => setStep(4)}>Quay lại</button>
                            </IonCol>
                            <IonCol size='6'>
                                <button className='rounded-pill bg-pink text-white fs-13 p-3 w-100' onClick={() => { success() }}>Hoàn tất</button>
                            </IonCol>
                        </IonRow>
                    </>
                )}
            </div>
        </Page>

    );
}
export default RoomPage;