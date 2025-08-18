import { Sheet, Toolbar, PageContent, Block, Link, Card, ListInput, List, Icon, Button, Segmented, ListItem, f7 } from "framework7-react";
import { useEffect, useState } from "react";
import SheetBookingMenu from "./SheetBookingMenu";
export default function SheetRoomDetail({ opened, onClose }) {
    const [sheetOpenebMenu, setSheetOpenebMenu] = useState(false);
    return (
        <>
            <Sheet
                className="demo-sheet-2 h-100 bg-light"
                opened={opened}
                onSheetClosed={onClose}
            >
                {/* <Toolbar className="">
                    <div className="left fw-bold d-flex align-items-center">

                        Chi tiết phòng
                    </div>
                    <div className="right fs-13">
                        <Link sheetClose>Close</Link>
                    </div>
                </Toolbar> */}
                <PageContent className="pb-5">
                    {/* <div className=''>
                        <img src='https://thietkethicong.org/images/Product/Mau-phong-hat-karaoke-vip-phong-cach-Tan-Co-Dien-1.jpg' className=' w-100'></img>
                    </div> */}
                    <div className="position-relative">
                        <img
                            src="https://thietkethicong.org/images/Product/Mau-phong-hat-karaoke-vip-phong-cach-Tan-Co-Dien-1.jpg"
                            className="w-100"
                            alt="karaoke"
                        />

                        {/* nút đóng */}
                        <button
                            className="rounded-circle border-0 bg-light position-absolute top-0 end-0 m-2"
                            style={{ width: "30px", height: "30px", lineHeight: "30px" }}
                            onClick={() => f7.sheet.close()}
                        >
                            ✕
                        </button>

                        {/* <span  className=" rounded-circle position-absolute top-0 end-0 m-3"
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '10px',
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
                            </span> */}
                    </div>

                    <div className="row m-3 mx-0 d-flex align-items-center">
                        <div className="col-9 fs-15 fw-bold">
                            Mẫu phòng hát karaoke vip phong cách Tân Cổ Điển
                        </div>
                        <div className="col-3 text-end">
                            999.000đ
                        </div>
                    </div>
                    <div className="border border-bottom"></div>
                    <div className="p-3 fs-13">
                        <div className="fw-bold">Mô tả </div>
                        <div className="mt-2 px-2">
                            1. Cách âm và tiêu âm:
                            Cách âm:
                            Sử dụng các vật liệu như bông khoáng, mút trứng, cao su non, thạch cao kết hợp các lớp cách âm để ngăn âm thanh lọt ra ngoài và giữ âm thanh trong phòng.
                            Tiêu âm:
                            Bố trí các vật liệu tiêu âm như mút gai, mút trứng, hoặc các vật dụng trang trí có khả năng hấp thụ âm thanh để giảm tiếng vang và tạo không gian âm thanh tốt hơn.
                            2. Âm thanh:
                            Hệ thống âm thanh chất lượng:
                            Bao gồm loa, micro, amply, vang số, và các thiết bị xử lý âm thanh khác để đảm bảo chất lượng âm thanh tốt, rõ ràng và sống động.
                            Bố trí loa:
                            Đặt loa ở các vị trí phù hợp để tạo hiệu ứng âm thanh stereo, tránh gây khó chịu cho người nghe và người hát.
                            Điều chỉnh âm thanh:
                            Cần có các thiết bị điều chỉnh âm thanh để người dùng có thể tùy chỉnh âm lượng, âm sắc, độ vang theo sở thích cá nhân.
                            3. Ánh sáng:
                            Ánh sáng đa dạng:
                            Sử dụng ánh sáng có thể thay đổi màu sắc, cường độ để tạo không gian ấm cúng, sôi động hoặc lãng mạn.
                            Đèn chiếu sáng sân khấu:
                            Bố trí đèn sân khấu như đèn moving head, đèn laser, đèn led để tạo hiệu ứng ánh sáng độc đáo và ấn tượng.
                            Ánh sáng tập trung:
                            Sử dụng đèn chiếu sáng tập trung vào khu vực sân khấu, màn hình để tạo điểm nhấn và thu hút sự chú ý.
                            4. Nội thất:
                            Ghế sofa:
                            Chọn ghế sofa êm ái, thoải mái để người hát có thể ngồi thư giãn.
                            Bàn:
                            Bố trí bàn để đặt đồ uống, đồ ăn và các thiết bị điều khiển.
                            Bàn karaoke:
                            Bàn karaoke có thể được tích hợp màn hình cảm ứng hoặc các phím điều khiển để dễ dàng chọn bài hát.
                            Trang trí:
                            Sử dụng các vật dụng trang trí như tranh ảnh, cây xanh, kệ sách để tạo không gian độc đáo và ấn tượng.
                            5. Các yếu tố khác:
                            Không gian:
                            Phòng karaoke nên có diện tích phù hợp với số lượng người sử dụng, không quá chật chội hoặc quá rộng.
                            Vách ngăn:
                            Sử dụng vách ngăn cách âm để phân chia các khu vực khác nhau trong phòng, tạo không gian riêng tư.
                            Hệ thống thông gió:
                            Đảm bảo hệ thống thông gió hoạt động tốt để không khí trong phòng luôn trong lành.
                        </div>
                    </div>


                </PageContent>
                <footer className="fixed-bottom p-3 py-2 bg-white">
                    <div className="grid grid-cols-2 grid-gap">
                        <Button sheetClose className="bg-secondary bg-opacity-25 p-3 rounded-pill  fs-15">Đóng</Button>
                        <Button className="bg-pink p-3 rounded-pill text-white fs-15" onClick={() => {
                            setSheetOpenebMenu(true), console.log(32354);
                        }}>Tiếp tục</Button>
                    </div>
                </footer>
            </Sheet>
            <SheetBookingMenu
                opened={sheetOpenebMenu}
                onClose={() => setSheetOpenebMenu(false)}
            />

        </>


    );
}
