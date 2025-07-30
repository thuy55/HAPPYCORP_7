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

    return (


        <Page name="home">
            {/* Top Navbar */}
            <CommonNavbar />

            {/* Page content */}
            <List className='m-2' simpleList>
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
                <div className='d-flex justify-content-center mt-2 px-3 mb-3'>
                    <button className='bg-pink text-white fs-13 fw-bold p-3 rounded-pill w-100' onClick={() => { handleSearchMonth() }}>Xem</button>
                </div>
            </div>
            <List className='my-2'>
                <div className='bg-warning bg-opacity-10 row'>
                    <div className='col-7 p-2 ps-4 pe-0 fs-5 fw-bold'>
                        <div className=''>Hãy đến với HappyCorp để nào</div>
                        <div className='mt-1'> <span className='bg-pink rounded-1 text-white px-2'>đến 50%</span></div>
                    </div>
                    <div className='col-5 ps-0'>
                        <img src='../image/10.gif' className='w-100'></img>
                    </div>
                </div>
            </List>
            <List className=' mb-3 mt-0'>
                <Card className='border-1 border-light my-3 shadow-sm p-1 rounded-3'>
                    <div className="row " onClick={() => { handleClick(1) }}>
                        <div className='col-4'>
                            <img src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3' className='rounded-3 w-100'></img>
                        </div>
                        <div className='col-8 ps-0 fs-13'>
                            <div className='d-flex align-items-center fst-italic'>
                                <img src='../image/6.gif' style={{ width: "25px", height: "25px" }}></img>Giảm giá sốc
                            </div>
                            <div className='fw-bold '>Giảm 10%</div>
                            <div className='limited-lines2'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
                            <div className='d-flex justify-content-end mt-1'>
                                <button className='bg-pink p-1 px-3 rounded-3 border-0 text-white'>Xem ngay</button>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className='border-1 border-light my-3 shadow-sm p-1 rounded-3'>
                    <div className="row ">
                        <div className='col-4'>
                            <img src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3' className='rounded-3 w-100'></img>
                        </div>
                        <div className='col-8 ps-0 fs-13'>
                            <div className='d-flex align-items-center fst-italic fw-bold'>
                                <img src='../image/6.gif' style={{ width: "25px", height: "25px" }}></img>Giảm giá sốc
                            </div>
                            <div className='fw-bold text-pink'>Giảm 10%</div>
                            <div className='limited-lines2'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
                            <div className='d-flex justify-content-end mt-1'>
                                <button className='bg-pink p-1 px-3 rounded-3 border-0 text-white'>Xem ngay</button>
                            </div>
                        </div>
                    </div>
                </Card>
            </List>


            <div className='fs-6 fw-bold mx-3 mt-4 d-flex align-items-center'><img src='../image/6.gif' className='size-icon'></img>  Ưu đãi</div>
            <div className='row d-flex flex-nowrap mx-2 mt-2 pb-2' style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                <div className='col-4 px-1'>
                    <Card className='m-0 border-light p-1 fs-13'>
                        <div>
                            <img src='https://image.made-in-china.com/202f0j00vzJeGPLHZIoB/Gold-Restaurant-Bar-Counter-Square-U-Stylish-Wholesale-Night-Club-Bar-Design.webp' className='w-100 rounded-3'></img>
                            <div className='d-flex'>
                                <div className='mt-2 fst-italic'> <img src='../image/6.gif' style={{ width: "25px", height: "25px" }}></img>Giảm giá sốc</div>
                            </div>
                            <div className='fw-bold text-pink my-1'>Giảm 10%</div>
                            <div className='limited-lines1'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
                        </div>
                    </Card>
                </div>
                <div className='col-4 px-1'>
                    <Card className='m-0 border-light p-1 fs-13'>
                        <div>
                            <img src='https://image.made-in-china.com/202f0j00vzJeGPLHZIoB/Gold-Restaurant-Bar-Counter-Square-U-Stylish-Wholesale-Night-Club-Bar-Design.webp' className='w-100 rounded-3'></img>
                            <div className='d-flex'>
                                <div className='mt-2 fst-italic'> <img src='../image/6.gif' style={{ width: "25px", height: "25px" }}></img>Giảm giá sốc</div>
                            </div>
                            <div className='fw-bold text-pink my-1'>Giảm 10%</div>
                            <div className='limited-lines1'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
                        </div>
                    </Card>
                </div>
                <div className='col-4 px-1'>
                    <Card className='m-0 border-light p-1 fs-13'>
                        <div>
                            <img src='https://image.made-in-china.com/202f0j00vzJeGPLHZIoB/Gold-Restaurant-Bar-Counter-Square-U-Stylish-Wholesale-Night-Club-Bar-Design.webp' className='w-100 rounded-3'></img>
                            <div className='d-flex'>
                                <div className='mt-2 fst-italic'> <img src='../image/6.gif' style={{ width: "25px", height: "25px" }}></img>Giảm giá sốc</div>
                            </div>
                            <div className='fw-bold text-pink my-1'>Giảm 10%</div>
                            <div className='limited-lines1'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
                        </div>
                    </Card>
                </div>
                <div className='col-4 px-1'>
                    <Card className='m-0 border-light p-1 fs-13'>
                        <div>
                            <img src='https://image.made-in-china.com/202f0j00vzJeGPLHZIoB/Gold-Restaurant-Bar-Counter-Square-U-Stylish-Wholesale-Night-Club-Bar-Design.webp' className='w-100 rounded-3'></img>
                            <div className='d-flex'>
                                <div className='mt-2 fst-italic'> <img src='../image/6.gif' style={{ width: "25px", height: "25px" }}></img>Giảm giá sốc</div>
                            </div>
                            <div className='fw-bold text-pink my-1'>Giảm 10%</div>
                            <div className='limited-lines1'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
                        </div>
                    </Card>
                </div>

            </div>
        </Page>

    );
}
export default RoomPage;