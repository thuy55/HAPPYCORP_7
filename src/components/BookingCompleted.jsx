import { Sheet, Toolbar, PageContent, Block, Link, Card, ListInput, List, Icon, Button, Segmented, ListItem, f7 } from "framework7-react";
import { useEffect, useState } from "react";
import moment from 'moment';
import SheetBookingMenu from "./SheetBookingMenu";
export default function SheetBookingCompleted({ opened, onClose }) {
    // ...existing code...

    const handleCloseAllModals = () => {
        try {
            // Đóng tất cả sheet
            const openedSheets = document.querySelectorAll('.sheet.modal-in, .sheet-modal.modal-in');
            openedSheets.forEach(sheet => {
                f7.sheet.close(sheet);
            });
            f7.dialog.close();
            f7.toast.close();
            console.log("All modals closed successfully");
        } catch (error) {
            console.error("Error closing modals:", error);
        }
    };


    return (
        <>
            <Sheet
                className="demo-sheet-2 h-100"
                opened={opened}
                onSheetClosed={onClose}
            >
                <Toolbar className="">
                    <div className="left fw-bold d-flex align-items-center">

                        Chi tiết đơn đặt hàng
                    </div>
                    <div className="right fs-13">
                        <Link onClick={() => {
                            handleCloseAllModals();
                            console.log("Close modal");
                        }}>Close</Link>
                    </div>
                </Toolbar>
                <PageContent className="pb-5">
                    <div className='d-flex justify-content-center mt-4'>
                        <div className='bg-white w-50 p-3 rounded-4 shadow-sm'>
                            <img src='https://quickchart.io/qr?text=akjshdiasjhdiauhsdiuasdi&ecLevel=Q&margin=0&size=500' className=' w-100'></img>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-2 fs-13 fw-bold'>#0000111</div>
                    <Card className="rounded-4 p-3 shadow-none border border-light fs-13">
                        <div className=" fs-13 text-pink mb-2 fw-bold">
                            Thông tin khách hàng
                        </div>
                        <div className='d-flex align-items-center justify-content-between p-2'>
                            Khách hàng <div className='fw-bold'>Mr Nick</div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between p-2'>
                            Điện thoại <div className='fw-bold'>0123456789</div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between p-2'>
                            Ghi chú <div className='fw-bold'>Chọn ems xinh</div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between p-2'>
                            Xác nhận <div className='fw-bold'>Đã xác nhận qua Zalo</div>
                        </div>
                    </Card>
                    <Card className="rounded-4 p-3 shadow-none border border-light fs-13">
                        <div className=" fs-13 text-pink mb-2 fw-bold">
                            Thông tin đặt bàn
                        </div>
                        <div className='d-flex align-items-center justify-content-between p-2'>
                            Nhà hàng <div className='fw-bold'>90s House</div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between p-2'>
                            Mã booking <div className='fw-bold'>#002</div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between p-2'>
                            Ngày <div className='fw-bold'>15:00 05/05/2025</div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between p-2'>
                            Số người <div className='fw-bold'>10</div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between p-2'>
                            Khu vực / Phòng<div className='fw-bold'>Happy</div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between p-2'>
                            Trạng thái <div className='fw-bold text-success'>Đã chuẩn bị phòng</div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between p-2'>
                            Ghi chú <div className='fw-bold'>Yêu cầu có DJ</div>
                        </div>
                    </Card>
                    <Card className="rounded-4 p-3 shadow-none border border-light fs-13">
                        <div className=" fs-13 text-pink mb-2 fw-bold">
                            Chi tiết dịch vụ/ Món ăn
                        </div>
                        <div className='d-flex justify-content-between align-items-center p-2'>
                            <div className=''>
                                <div>Combo1 <span className='fw-bold text-pink'>x 1</span></div>
                                <div>4.500.000đ</div>
                            </div>
                            <div className='fw-bold'>4.500.000đ</div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center p-2'>
                            <div className=''>
                                <div>Combo1 <span className='fw-bold text-pink'>x 1</span></div>
                                <div>4.500.000đ</div>
                            </div>
                            <div className='fw-bold'>4.500.000đ</div>
                        </div>
                    </Card>
                    <Card className="rounded-4 p-3 shadow-none border border-light fs-13">
                        <div className=" fs-13 text-pink mb-2 fw-bold">
                            Thông tin thanh toán
                        </div>
                        <div className='d-flex justify-content-between align-items-center text-warning fw-bold  p-2'>
                            <div>Đã cọc :</div>
                            <div>5.000.000đ</div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center text-danger fw-bold  p-2'>
                            <div>Giảm giá :</div>
                            <div>5.000.000đ</div>
                        </div>

                        <div className='d-flex justify-content-between align-items-center p-2'>
                            <div className=''>Phương thức thanh toán</div>
                            <div className='fw-bold'>Tiền mặt</div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center p-2'>
                            <div className=''>Ngày thanh toán</div>
                            <div className='fw-bold'>17:00 05/05/2025</div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center p-2'>
                            <div className=''>Lễ tân</div>
                            <div className='fw-bold'>Ms Xinh</div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center p-2'>
                            <div className=''>Người đặt</div>
                            <div className='fw-bold'>Mr Lee</div>
                        </div>
                    </Card>
                </PageContent>
                <footer className="fixed-bottom p-3 py-2 bg-white">
                    <div className="">
                        <Button className="bg-pink p-3 rounded-pill text-white fs-15" onClick={() => {
                            handleCloseAllModals();
                            console.log("Close modal");
                        }}>Hoàn thành</Button>
                    </div>
                </footer>
            </Sheet>


        </>


    );
}
