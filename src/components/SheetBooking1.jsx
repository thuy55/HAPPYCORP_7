import { Sheet, Toolbar, PageContent, Block, Link, Card, ListInput, List, Icon, Button, Segmented } from "framework7-react";
import { useEffect, useState } from "react";
import moment from 'moment';
import SheetBookingMenu from "./SheetBookingMenu";
export default function SheetBooking1({ opened, onClose }) {
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

    const [time, setTime] = useState("");
    useEffect(() => {
        const now = new Date();
        const hh = String(now.getHours()).padStart(2, "0");
        const mm = String(now.getMinutes()).padStart(2, "0");
        setTime(`${hh}:${mm}`);
    }, []);


      const [activeStrongButton, setActiveStrongButton] = useState(0);
    return (
        <>
            <Sheet
                className="demo-sheet-2 h-100 bg-light"
                opened={opened}
                onSheetClosed={onClose}
            >
                <Toolbar className="">
                    <div className="left fw-bold d-flex align-items-center">
                        <Link sheetClose>
                            <img src='../image/icon-backward.gif' className='size-icon me-1'></img>
                        </Link>
                        Tạo đơn
                    </div>
                    <div className="right">
                    </div>
                </Toolbar>
                <PageContent className="pb-5">
                    <Card className="rounded-4 p-3 shadow-none border border-light">
                        <div className="text-pink">
                            Ngày đặt <span className=" text-danger">(*)</span>
                        </div>
                        <List className="mx-0" strongIos dividersIos insetIos>
                            <input
                                type="time"
                                className="rounded-3 border border-secondary-10 p-2 mt-3 fs-14 w-100"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                            <div className='mt-3 row px-2'>
                                <div className='col-4 p-1'>
                                    <select className='p-2 rounded-3 fs-14 border border-1 w-100 ' value={selectedDate} onChange={(e) => setSelectedDate(parseInt(e.target.value))}>
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
                                <div className='col-4 p-1'>
                                    <select className='p-2 rounded-3 fs-14 border border-1 w-100 ' value={selectedMonth}
                                        onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
                                        {moment.months().map((month, idx) => (
                                            <option key={idx} value={idx}>{month}</option>
                                        ))}
                                    </select>

                                </div>
                                <div className='col-4 p-1'>
                                    <select className='p-2 rounded-3 fs-14 border border-1 w-100 ' value={selectedYear}
                                        onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
                                        {Array.from({ length: 10 }, (_, i) => {
                                            const year = moment().year() - 5 + i;
                                            return <option key={year} value={year}>{year}</option>;
                                        })}
                                    </select>
                                </div>
                            </div>

                        </List>

                        <div className="mt-4 fs-13 text-pink">
                            Thông tin người đặt
                        </div>
                        <div className="position-relative rounded-3 mt-2 w-100 border border-1" style={{ padding: "12px" }}>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                }}
                            >
                                <lord-icon
                                    slot="media"
                                    src="https://cdn.lordicon.com/shcfcebj.json"
                                    trigger="loop"
                                    colors="secondary:#f30771"
                                    style={{ width: '20px', height: '20px' }}
                                ></lord-icon>
                            </span>
                            <input
                                className="rounded-3  w-100 " style={{ paddingLeft: "10%", paddingRight: "10%" }}
                                placeholder="Số điện thoại"
                                type="tel"
                            />
                            <span
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',

                                }}
                            >
                                <lord-icon
                                    slot="media"
                                    src="https://cdn.lordicon.com/sjoccsdj.json"
                                    trigger="loop"
                                    colors="primary:#f30771,secondary:#f30771"
                                    style={{ width: '20px', height: '20px' }}
                                ></lord-icon>
                            </span>
                        </div>
                        <div className="position-relative rounded-3 mt-3 w-100 border border-1" style={{ padding: "12px" }}>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                }}
                            >
                                <lord-icon
                                    slot="media"
                                    src="https://cdn.lordicon.com/shcfcebj.json"
                                    trigger="loop"
                                    colors="secondary:#f30771"
                                    style={{ width: '20px', height: '20px' }}
                                ></lord-icon>
                            </span>
                            <input
                                className="rounded-3  w-100 " style={{ paddingLeft: "10%", paddingRight: "10%" }}
                                placeholder="Họ và tên"
                                type="text"
                            />
                        </div>
                        <div className="mt-3">
                            <Button className="p-3 bg-secondary bg-opacity-25 rounded-pill">Lưu thông tin người đặt</Button>
                        </div>

                        <div className="mt-4 fs-13 text-pink">
                            Thông tin đặt
                        </div>
                        <div className="position-relative rounded-3 mt-3 w-100 border border-1" style={{ padding: "12px" }}>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                }}
                            >
                                <lord-icon
                                    slot="media"
                                    src="https://cdn.lordicon.com/shcfcebj.json"
                                    trigger="loop"
                                    colors="secondary:#f30771"
                                    style={{ width: '20px', height: '20px' }}
                                ></lord-icon>
                            </span>
                            <input
                                className="rounded-3  w-100 " style={{ paddingLeft: "10%", paddingRight: "10%" }}
                                placeholder="Số người"
                                type="number"
                            />
                        </div>

                        <div className="position-relative rounded-3 mt-3 w-100 border align-items-top border-1" style={{ padding: "12px" }}>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                }}
                            >
                                <lord-icon
                                    slot="media"
                                    src="https://cdn.lordicon.com/shcfcebj.json"
                                    trigger="loop"
                                    colors="secondary:#f30771"
                                    style={{ width: '20px', height: '20px' }}
                                ></lord-icon>
                            </span>
                            <textarea rows={5}
                                className="rounded-3  w-100 " style={{ paddingLeft: "10%", paddingRight: "10%" }}
                                placeholder="Ghi chú"
                            />
                        </div>

                        <div className="mt-4 fs-13 text-pink">
                            Phương thức thanh toán
                        </div>
                        <div className="position-relative rounded-3 mt-3 w-100 border border-1" style={{ padding: "12px" }}>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                }}
                            >
                                <lord-icon
                                    slot="media"
                                    src="https://cdn.lordicon.com/shcfcebj.json"
                                    trigger="loop"
                                    colors="secondary:#f30771"
                                    style={{ width: '20px', height: '20px' }}
                                ></lord-icon>
                            </span>
                            <input
                                className="rounded-3  w-100 " style={{ paddingLeft: "10%", paddingRight: "10%" }}
                                placeholder="Cọc trước"
                                type="number"
                            />
                        </div>

                        <div className=' fs-13 mt-3'>Hình thức</div>
                        <Segmented strong tag="p" className="w-100 bg-white">
                            <Button active={activeStrongButton === 0} onClick={() => setActiveStrongButton(0)}>
                                Chuyển khoản
                            </Button>
                            <Button active={activeStrongButton === 1} onClick={() => setActiveStrongButton(1)}>
                                Tiền mặt
                            </Button>
                        </Segmented>
                    </Card>
                </PageContent>
                <footer className="fixed-bottom p-3 py-2 bg-white">
                    <div className="grid grid-cols-2 grid-gap">
                        <Button sheetClose className="bg-secondary bg-opacity-25 p-3 rounded-pill  fs-15">Hủy đơn</Button>
                        <Button className="bg-pink p-3 rounded-pill text-white fs-15">Hoàn thành</Button>
                    </div>
                </footer>
            </Sheet>

         
        </>


    );
}
