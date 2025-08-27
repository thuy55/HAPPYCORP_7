import { Sheet, Toolbar, PageContent, Block, Link, Card, ListInput, List, Icon, Button, Segmented, ListItem, f7 } from "framework7-react";
import { useEffect, useState } from "react";
import SheetEventDetail from "./EventDetail";
export default function SheetEvent({ opened, onClose }) {
    const [sheetOpened1, setSheetOpened1] = useState(false);
    return (
        <>
            <Sheet
                className="demo-sheet-2 h-100"
                opened={opened}
                onSheetClosed={onClose}
            >
                <Toolbar className="">
                    <div className="left fw-bold d-flex align-items-center">
                        Sự kiện
                    </div>
                    <div className="right fs-13">
                        <Link sheetClose>Close</Link>
                    </div>
                </Toolbar>
                <PageContent className="pb-5">

                    {/* <div className='bg-warning bg-opacity-10 '> */}
                    {/* <div className="row w-100"> */}

                    <div className=' position-relative'>
                        <img src="https://hinhnenpowerpoint.com/wp-content/uploads/images/tai-hinh-nen-powerpoint-mau-trang-mien-phi.jpg" className=' rounded-bottom-4 w-100' style={{ height: '200px', objectFit: 'cover' }}></img>

                        <div className='position-absolute top-0 end-0 m-3'>
                            <img src='../image/happy-corp-logo.png' style={{ height: "70px" }}></img>
                        </div>
                        <div className='position-absolute bottom-0 start-0 m-3 mt-0 text-pink fs-15 fw-bold fst-italic'>
                            <div className="mb-2"> Where style meets nightlife</div>

                            Thưởng thức từng giọt – Sống trọn từng đêm
                        </div>

                    </div>

                    <List className=' mb-3 mt-0'>
                        <Card className='border border-0 my-2 mx-2 shadow-none p-1 rounded-3'>
                            <div className="row ">
                                <div className='col-4'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKv4lB6fNSa_h68PcOdC13yJFniPqZaq2uow&s' className='rounded-3 w-100'></img>
                                </div>
                                <div className='col-8 ps-0 fs-13'>
                                    <div className='d-flex align-items-center fw-bold'>
                                        <img src='../image/6.gif' style={{ width: "25px", height: "25px" }}></img>HappyCorp - Câu chuyện kinh doanh
                                    </div>
                                    <div className='limited-lines2 fst-italic fs-11 mt-1'>90's House - Biểu tượng mới của giải trí và ẩm thực cao cấp tạp thành phố Hồ Chí Minh</div>
                                    <div className='d-flex justify-content-end  mt-2'>
                                        <button className=' p-1 px-3 rounded-3 border-btn text-pink' style={{ width: "auto", display: "inline-block" }} onClick={() => setSheetOpened1(true)}>Xem ngay</button>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className='border border-0 my-2 mx-2 shadow-none p-1 rounded-3'>
                            <div className="row ">
                                <div className='col-4'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKv4lB6fNSa_h68PcOdC13yJFniPqZaq2uow&s' className='rounded-3 w-100'></img>
                                </div>
                                <div className='col-8 ps-0 fs-13'>
                                    <div className='d-flex align-items-center fw-bold'>
                                        <img src='../image/6.gif' style={{ width: "25px", height: "25px" }}></img>HappyCorp - Câu chuyện kinh doanh
                                    </div>
                                    <div className='limited-lines2 fst-italic fs-11 mt-1'>90's House - Biểu tượng mới của giải trí và ẩm thực cao cấp tạp thành phố Hồ Chí Minh</div>
                                    <div className='d-flex justify-content-end  mt-2'>
                                        <button className=' p-1 px-3 rounded-3 border-btn text-pink' style={{ width: "auto", display: "inline-block" }} onClick={() => setSheetOpened1(true)}>Xem ngay</button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-0 my-2 mx-2 shadow-none p-1 rounded-3'>
                            <div className="row ">
                                <div className='col-4'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKv4lB6fNSa_h68PcOdC13yJFniPqZaq2uow&s' className='rounded-3 w-100'></img>
                                </div>
                                <div className='col-8 ps-0 fs-13'>
                                    <div className='d-flex align-items-center fw-bold'>
                                        <img src='../image/6.gif' style={{ width: "25px", height: "25px" }}></img>HappyCorp - Câu chuyện kinh doanh
                                    </div>
                                    <div className='limited-lines2 fst-italic fs-11 mt-1'>90's House - Biểu tượng mới của giải trí và ẩm thực cao cấp tạp thành phố Hồ Chí Minh</div>
                                    <div className='d-flex justify-content-end  mt-2'>
                                        <button className=' p-1 px-3 rounded-3 border-btn text-pink' style={{ width: "auto", display: "inline-block" }} onClick={() => setSheetOpened1(true)}>Xem ngay</button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-0 my-2 mx-2 shadow-none p-1 rounded-3'>
                            <div className="row ">
                                <div className='col-4'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKv4lB6fNSa_h68PcOdC13yJFniPqZaq2uow&s' className='rounded-3 w-100'></img>
                                </div>
                                <div className='col-8 ps-0 fs-13'>
                                    <div className='d-flex align-items-center fw-bold'>
                                        <img src='../image/6.gif' style={{ width: "25px", height: "25px" }}></img>HappyCorp - Câu chuyện kinh doanh
                                    </div>
                                    <div className='limited-lines2 fst-italic fs-11 mt-1'>90's House - Biểu tượng mới của giải trí và ẩm thực cao cấp tạp thành phố Hồ Chí Minh</div>
                                    <div className='d-flex justify-content-end  mt-2'>
                                        <button className=' p-1 px-3 rounded-3 border-btn text-pink' style={{ width: "auto", display: "inline-block" }} onClick={() => setSheetOpened1(true)}>Xem ngay</button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </List>


                    <div className='fs-6 fw-bold mx-3 mt-4 d-flex align-items-center'><img src='../image/6.gif' className='size-icon'></img>  Ưu đãi</div>
                    <div className='row d-flex flex-nowrap mx-2 mt-2 pb-2' style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                        <div className='col-5 px-1'>
                            <Card className='m-0 border border-0 p-1 fs-13'>
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
                        <div className='col-5 px-1'>
                            <Card className='m-0 border border-0 p-1 fs-13'>
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
                        <div className='col-5 px-1'>
                            <Card className='m-0 border border-0 p-1 fs-13'>
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
                        <div className='col-5 px-1'>
                            <Card className='m-0 border border-0 p-1 fs-13'>
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


                </PageContent>

            </Sheet>
            <SheetEventDetail
                opened={sheetOpened1}
                onClose={() => setSheetOpened1(false)}
            />

        </>


    );
}
