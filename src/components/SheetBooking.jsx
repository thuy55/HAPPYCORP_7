import { Sheet, Toolbar, PageContent, Block, Link, Button, Card } from "framework7-react";

export default function SheetBooking({ opened, onClose }) {
    return (
        <Sheet
            className="demo-sheet h-100"
            opened={opened}
            onSheetClosed={onClose}
        >
            <Toolbar>
                <div className="left">Sơ đồ phòng</div>
                <div className="right">
                    <Link sheetClose>Close</Link>
                </div>
            </Toolbar>

            <PageContent className="px-4">
                <div className='my-2'>
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

                <div className='fw-bold d-flex align-items-center fs-13 mt-4'>
                    <lord-icon
                        src="https://cdn.lordicon.com/edcgvlnw.json"
                        trigger="loop"
                        colors="primary:#f30771,secondary:#f30771"
                        className=' me-2 '
                        style={{ width: '30px', height: '30px' }}>
                    </lord-icon>
                    Chốt phòng đã xem ngay !
                </div>

                <swiper-container 
                    loop
                    autoplay='{"delay":5000, "disableOnInteraction": false}'
                    class=" mt-3 demo-swiper-multiple demo-swiper-multiple-auto mb-2"
                    space-between="10"
                    slides-per-view="1.15">
                    <swiper-slide>
                        <Card className="border border-light rounded-3 shadow-sm m-0 ms-3 mb-2 p-0">
                            <div className="row">
                                <div className="col-5 p-0">
                                    <img src="https://img.freepik.com/premium-photo/elite-karaoke-suite-with-velvet-ropes-bartender_416256-24715.jpg" className="w-100 rounded-3"></img>
                                </div>
                                <div className="col-7 fs-13">
                                    <div className='fw-bold'>L1 - Phòng Private 1</div>
                                    <div className="d-flex gap-1 my-1">
                                        {[...Array(5)].map((_, i) => (
                                            <lord-icon
                                                key={i}
                                                src="https://cdn.lordicon.com/cvwrvyjv.json"
                                                trigger="loop"
                                                colors="primary:#f30771,secondary:#f30771"
                                                style={{ width: '15px', height: '15px' }}
                                            />
                                        ))}
                                    </div>

                                    <div className='limited-lines2'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
                                </div>
                            </div>
                        </Card>
                    </swiper-slide>
                    <swiper-slide>
                        <Card className="border border-light rounded-3 shadow-sm m-0 ms-3 mb-2 p-0">
                            <div className="row">
                                <div className="col-5 p-0">
                                    <img src="https://img.freepik.com/premium-photo/elite-karaoke-suite-with-velvet-ropes-bartender_416256-24715.jpg" className="w-100 rounded-3"></img>
                                </div>
                                <div className="col-7 fs-13">
                                    <div className='fw-bold'>L1 - Phòng Private 1</div>
                                    <div className="d-flex gap-1 my-1">
                                        {[...Array(5)].map((_, i) => (
                                            <lord-icon
                                                key={i}
                                                src="https://cdn.lordicon.com/cvwrvyjv.json"
                                                trigger="loop"
                                                colors="primary:#f30771,secondary:#f30771"
                                                style={{ width: '15px', height: '15px' }}
                                            />
                                        ))}
                                    </div>

                                    <div className='limited-lines2'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
                                </div>
                            </div>
                        </Card>
                    </swiper-slide>
                    <swiper-slide>
                        <Card className="border border-light rounded-3 shadow-sm m-0 ms-3 mb-2 p-0">
                            <div className="row">
                                <div className="col-5 p-0">
                                    <img src="https://img.freepik.com/premium-photo/elite-karaoke-suite-with-velvet-ropes-bartender_416256-24715.jpg" className="w-100 rounded-3"></img>
                                </div>
                                <div className="col-7 fs-13">
                                    <div className='fw-bold'>L1 - Phòng Private 1</div>
                                    <div className="d-flex gap-1 my-1">
                                        {[...Array(5)].map((_, i) => (
                                            <lord-icon
                                                key={i}
                                                src="https://cdn.lordicon.com/cvwrvyjv.json"
                                                trigger="loop"
                                                colors="primary:#f30771,secondary:#f30771"
                                                style={{ width: '15px', height: '15px' }}
                                            />
                                        ))}
                                    </div>

                                    <div className='limited-lines2'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
                                </div>
                            </div>
                        </Card>
                    </swiper-slide>
                    <swiper-slide>
                        <Card className="border border-light rounded-3 shadow-sm m-0 ms-3 mb-2 p-0">
                            <div className="row">
                                <div className="col-5 p-0">
                                    <img src="https://img.freepik.com/premium-photo/elite-karaoke-suite-with-velvet-ropes-bartender_416256-24715.jpg" className="w-100 rounded-3"></img>
                                </div>
                                <div className="col-7 fs-13">
                                    <div className='fw-bold'>L1 - Phòng Private 1</div>
                                    <div className="d-flex gap-1 my-1">
                                        {[...Array(5)].map((_, i) => (
                                            <lord-icon
                                                key={i}
                                                src="https://cdn.lordicon.com/cvwrvyjv.json"
                                                trigger="loop"
                                                colors="primary:#f30771,secondary:#f30771"
                                                style={{ width: '15px', height: '15px' }}
                                            />
                                        ))}
                                    </div>

                                    <div className='limited-lines2'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
                                </div>
                            </div>
                        </Card>
                       
                    </swiper-slide>
                </swiper-container>
                

                <div className='fw-bold d-flex align-items-center mt-4'>
                    <lord-icon
                        src="https://cdn.lordicon.com/hqrhprrj.json"
                        trigger="loop"
                        colors="primary:#f30771,secondary:#f30771"
                        className=' me-2 mb-2'
                        style={{ width: '30px', height: '30px' }}>
                    </lord-icon>
                    Phòng siêu HOT
                </div>
                <div className='row d-flex flex-nowrap  mt-2 pb-2' style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                    <div className='col-5 px-1'>
                        <Card className='m-0 border-light p-0 fs-13 rounded-4 shadow-sm'>
                            <div>
                                <img src='https://img.freepik.com/premium-photo/elite-karaoke-suite-with-velvet-ropes-bartender_416256-24715.jpg' className='w-100 rounded-top-4'></img>

                                <div className='p-1 w-100 bg-danger text-white text-center fw-bold'>HOT</div>
                                <div className='p-2'>
                                    <div className='fw-bold'>L1 - Phòng Private 1</div>
                                    <div className="d-flex gap-1 my-1">
                                        {[...Array(5)].map((_, i) => (
                                            <lord-icon
                                                key={i}
                                                src="https://cdn.lordicon.com/cvwrvyjv.json"
                                                trigger="loop"
                                                colors="primary:#f30771,secondary:#f30771"
                                                style={{ width: '15px', height: '15px' }}
                                            />
                                        ))}
                                    </div>

                                    <div className='limited-lines2'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ</div>
                                </div>
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
                <div className="mt-2 ">
                    <Button className="bg-pink p-3 rounded-3 fw-bold fs-13 text-white">Xem tất cả</Button>
                </div>
            </PageContent>
        </Sheet>
    );
}
