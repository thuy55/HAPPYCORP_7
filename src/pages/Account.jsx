import React, { useEffect, useRef, useState } from 'react';
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
    Sheet,
    PageContent
} from 'framework7-react';
import moment from 'moment';
import { number } from 'prop-types';
import CommonNavbar from '../components/CommonNavbar';


const AccountPage = () => {

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

    const [showPasswordold, setShowPasswordold] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const [sheetOpenedChangePass, setSheetOpenedChangePass] = useState(false);
    const [sheetOpenedChangeInfo, setSheetOpenedChangeInfo] = useState(false);

    // const [avatar, setAvatar] = useState < File | null > (null);
    const [updateAvatar, setUpdateAvatar] = useState("");

    // const fileInputRef = useRef <HTMLInputElement> (null);

    const triggerFileInputAvatar = () => {
        // fileInputRef.current?.click();
        document.getElementById("fileInput").click();
    };

    const handleImageAvatar = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            // setAvatar(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    setUpdateAvatar(e.target.result); // base64 string
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImageAddAvatar = () => {
        // setAvatar(null);
        setUpdateAvatar("");
    };
    return (

        <>
            <Page name="home">
                {/* Top Navbar */}
                <CommonNavbar />
                {/* Page content */}

                <div className='p-2 position-relative'>
                    <img src="https://hinhnenpowerpoint.com/wp-content/uploads/images/tai-hinh-nen-powerpoint-mau-trang-mien-phi.jpg" className=' rounded-4 w-100' style={{ height: '200px', objectFit: 'cover' }}></img>

                    <div className='position-absolute top-0 end-0 m-3'>
                        <img src='../image/happy-corp-logo.png' style={{ height: "70px" }}></img>
                    </div>
                    <img src="https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/anh-dai-dien-tet-44.jpg" className='rounded-circle border border-4 border-dark position-absolute top-50 start-0 m-3' style={{ height: "150px", width: "150px" }}></img>
                </div>
                <div className=' mx-4 ' style={{ marginTop: "15%" }}>
                    <div className='fs-5 fw-bold mt-4'>Thanh Thúy</div>
                    <div className=''>thuy@gmail.com</div>

                </div>
                <List className='my-4 fs-13 rounded-3 list-no-chevron mx-3' dividersIos mediaList outlineIos strongIos>
                    <ListItem className='px-3'
                        title={
                            <div className='mt-1' style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                <span className="text-color">Mã của bạn:</span>
                                <span className="fw-bold">#00001</span>
                            </div>
                        }
                    >
                        <div slot="media" className='text-center bg-pink text-white rounded-circle' style={{ width: "8px", height: "8px" }}></div>
                    </ListItem>
                    <ListItem className='px-3'
                        title={
                            <div className='mt-1' style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                <span className="text-color">Họ và tên:</span>
                                <span className="fw-bold">Nguyễn Thị Thanh Thúy</span>
                            </div>
                        }
                    >
                        <div slot="media" className='text-center bg-pink text-white rounded-circle' style={{ width: "8px", height: "8px" }}></div>
                    </ListItem>
                    <ListItem className='px-3'
                        title={
                            <div className='mt-1' style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                <span className="text-color">Số điện thoại:</span>
                                <span className="fw-bold">0123456789</span>
                            </div>
                        }
                    >
                        <div slot="media" className='text-center bg-pink text-white rounded-circle' style={{ width: "8px", height: "8px" }}></div>
                    </ListItem>
                    <ListItem className='px-3'
                        title={
                            <div className='mt-1' style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                <span className="text-color">Email:</span>
                                <span className="fw-bold">thuy@gmail.com</span>
                            </div>
                        }
                    >
                        <div slot="media" className='text-center bg-pink text-white rounded-circle' style={{ width: "8px", height: "8px" }}></div>
                    </ListItem>
                    <ListItem className='px-3'
                        title={
                            <div className='mt-1' style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                <span className="text-color">Tài khoản:</span>
                                <span className="fw-bold">thanhthuy</span>
                            </div>
                        }
                    >
                        <div slot="media" className='text-center bg-pink text-white rounded-circle' style={{ width: "8px", height: "8px" }}></div>
                    </ListItem>
                    <ListItem className='px-3'
                        title={
                            <div className='mt-1' style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                <span className="text-color">Ngày sinh:</span>
                                <span className="fw-bold">05/05/2000</span>
                            </div>
                        }
                    >
                        <div slot="media" className='text-center bg-pink text-white rounded-circle' style={{ width: "8px", height: "8px" }}></div>
                    </ListItem>
                    <ListItem className='px-3'
                        title={
                            <div className='mt-1' style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                <span className="text-color">Giới tính:</span>
                                <span className="fw-bold">Nữ</span>
                            </div>
                        }
                    >
                        <div slot="media" className='text-center bg-pink text-white rounded-circle' style={{ width: "8px", height: "8px" }}></div>
                    </ListItem>
                    <ListItem className='px-3'
                        title={
                            <div className='mt-1' style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                <span className="text-color">Ngày đăng ký:</span>
                                <span className="fw-bold">21/07/2025</span>
                            </div>
                        }
                    >
                        <div slot="media" className='text-center bg-pink text-white rounded-circle' style={{ width: "8px", height: "8px" }}></div>
                    </ListItem>
                </List>
                <Card className='p-0 border border-0 rounded-4'>
                    <List className='fs-13 m-0 ' dividersIos mediaList outlineIos strongIos>
                        <ListItem className='px-3 pt-2 ' fill sheetOpen=".sheet-changepassword" link
                            title="Đổi mật khẩu"
                        >
                            <lord-icon
                                slot="media"
                                src="https://cdn.lordicon.com/exymduqj.json"
                                trigger="loop"
                                colors="primary:#f30771,secondary:#f30771"
                                style={{ width: '20px', height: '20px' }}
                            ></lord-icon>
                        </ListItem>
                        <ListItem className='px-3 pt-2 ' fill sheetOpen=".sheet-changeinfo" link
                            title="Cập nhật thông tin"
                        >
                            <lord-icon
                                slot="media"
                                src="https://cdn.lordicon.com/fikcyfpp.json"
                                trigger="loop"
                                colors="primary:#f30771,secondary:#f30771"
                                style={{ width: '20px', height: '20px' }}
                            ></lord-icon>
                        </ListItem>
                    </List>
                </Card>

                <Card className='p-3 border border-0 rounded-4'>
                    <BlockTitle className='m-0 mb-3'>Mời bạn bè</BlockTitle>
                    <div className='row d-flex align-items-center'>
                        <div className='col-1'>
                            <div className='text-center bg-primary text-white rounded-circle' style={{ width: "20px", height: "20px" }}>1</div>
                            {/* <Chip text="1" color="blue"  /> */}
                        </div>
                        <div className='col-11'>
                            <Block className='m-0 p-0'>
                                <p>Bạn gửi liên kết lời mời của mình tới bạn bè.</p>
                            </Block>
                        </div>
                    </div>
                    <div className='row my-3  d-flex align-items-center'>
                        <div className='col-1'>
                            <div className='text-center bg-primary text-white rounded-circle' style={{ width: "20px", height: "20px" }}>2</div>
                        </div>
                        <div className='col-11'>
                            <Block className='m-0 p-0'>
                                <p>Họ đăng ký và đặt phòng bằng cách sử dụng liên kết giới thiệu của bạn.</p>
                            </Block>
                        </div>
                    </div>
                    <div className='row  d-flex align-items-center'>
                        <div className='col-1'>
                            <div className='text-center bg-primary text-white rounded-circle' style={{ width: "20px", height: "20px" }}>3</div>
                        </div>
                        <div className='col-11'>
                            <Block className='m-0 p-0'>
                                <p>Từ lần đặt phòng đầu tiên của họ, bạn sẽ bắt đầu sẽ hoa hồng.</p>
                            </Block>
                        </div>
                    </div>
                    <BlockTitle className='m-0 mt-3 fs-14 '>Liên kết của bạn</BlockTitle>
                    <div className="m-2 mx-1  row border border-1 rounded-pill p-2 d-flex align-items-center " >
                        <div className='col-11 p-1 border border-0 text-truncate'>https://beta.ellm.io/?</div>

                        <div className='col-1 d-flex justify-content-end px-0' onClick={() => {
                            navigator.clipboard.writeText(`https://beta.ellm.io/?`);
                            alert("Coppy success");
                        }} >
                            <Icon f7="doc_on_doc" size='20px'></Icon>
                        </div>
                    </div>
                </Card>
            </Page>
            <Sheet
                className="sheet-changepassword h-auto"
                opened={sheetOpenedChangePass}
                onSheetClosed={() => {
                    setSheetOpenedChangePass(false);
                }}
            >
                <Toolbar style={{ backgroundColor: "red !important" }}>
                    <div className="left fs-14">Đổi mật khẩu</div>
                    <div className="right">
                        <Link sheetClose>Close</Link>
                    </div>
                </Toolbar>
                <PageContent>
                    <Block className='my-3'>
                        <List className='my-2'>
                            <div className='fs-14 mt-4'>Mật khẩu cũ</div>
                            <div className="position-relative rounded-pill mt-2 w-100" style={{ border: "0.5px solid #f07" }}>
                                <input
                                    className="rounded-pill w-100 pe-5 px-3"
                                    placeholder="Mật khẩu"
                                    type={showPasswordold ? 'text' : 'password'}
                                />
                                <span
                                    onClick={() => setShowPasswordold(!showPasswordold)}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                        color: '#666'

                                    }}
                                >
                                    {showPasswordold ? <span class="material-icons fs-6" >
                                        visibility
                                    </span> : <span class="material-icons fs-6">
                                        visibility_off
                                    </span>}
                                </span>
                            </div>
                            <div className='fs-14 mt-4'>Mật khẩu mới</div>
                            <div className="position-relative rounded-pill mt-2 w-100" style={{ border: "0.5px solid #f07" }}>
                                <input
                                    className="rounded-pill  w-100 pe-5 px-3"
                                    placeholder="Mật khẩu"
                                    type={showPassword ? 'text' : 'password'}
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                        color: '#666'

                                    }}
                                >
                                    {showPassword ? <span class="material-icons fs-6" >
                                        visibility
                                    </span> : <span class="material-icons fs-6">
                                        visibility_off
                                    </span>}
                                </span>
                            </div>
                            <div className='fs-14 mt-4'>Nhập lại mật khẩu</div>
                            <div className="position-relative rounded-pill mt-2 w-100" style={{ border: "0.5px solid #f07" }}>
                                <input
                                    className="rounded-pill  w-100 pe-5 px-3"
                                    placeholder="Mật khẩu"
                                    type={showRePassword ? 'text' : 'password'}
                                />
                                <span
                                    onClick={() => setShowRePassword(!showRePassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                        color: '#666'

                                    }}
                                >
                                    {showRePassword ? <span class="material-icons fs-6" >
                                        visibility
                                    </span> : <span class="material-icons fs-6">
                                        visibility_off
                                    </span>}
                                </span>
                            </div>
                            <div className='mt-4 grid grid-cols-2 grid-gap'>
                                <div>
                                    <button className='p-2 rounded-pill border border-secondary bg-transparent fs-14 text-color'>Hủy</button>
                                </div>
                                <div>
                                    <button type="button" className='p-2 rounded-pill border-btn fs-14 text-pink'>Cập nhật</button>
                                </div>
                            </div>
                        </List>
                    </Block>
                </PageContent>
            </Sheet>

            <Sheet
                className="sheet-changeinfo h-auto"
                opened={sheetOpenedChangeInfo}
                onSheetClosed={() => {
                    setSheetOpenedChangeInfo(false);
                }}
            >
                <Toolbar style={{ backgroundColor: "red !important" }}>
                    <div className="left fs-14">Cập nhật thông tin</div>
                    <div className="right">
                        <Link sheetClose>Close</Link>
                    </div>
                </Toolbar>
                <PageContent>
                    <Block className='my-3'>
                        <List className='my-2'>
                            <div className='fs-14 mt-4'>Họ và tên</div>
                            <input type='text' className='rounded-pill border-input mt-2 w-100' placeholder='Họ và tên'></input>
                            <div className='fs-14 mt-4'>Email</div>
                            <input type='email' className='rounded-pill border-input mt-2 w-100' placeholder='Email'></input>
                            <div className='fs-14 mt-4'>Ngày sinh</div>
                            <input type='date' className='rounded-pill border-input mt-2 w-100' placeholder='Ngày sinh'></input>
                            <div className='fs-14 mt-4'>Giới tính</div>
                            <select className='rounded-pill border-input mt-2 w-100'>
                                <option value="1">Nam</option>
                                <option value="2">Nữ</option>
                            </select>
                            <div className='fs-14 mt-4'>Ảnh đại diện</div>

                            <Card>
                                <div style={{ cursor: "pointer" }}>
                                    {updateAvatar ? (
                                        <div className="position-relative">
                                            <button
                                                className="btn bg-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle p-1"
                                                onClick={handleDeleteImageAddAvatar}
                                                style={{ width: "40px", height: "40px", zIndex: 2 }}
                                            >
                                                <Icon f7="trash" size="15px" color="white" />
                                            </button>
                                            <img
                                                src={updateAvatar}
                                                className="w-100 rounded-4 object-fit-cover"
                                                alt="avatar preview"
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            className=""
                                            style={{ height: "160px", borderRadius: "10px" }}
                                            onClick={triggerFileInputAvatar}
                                        >
                                            <div className="d-flex justify-content-center">
                                                <Icon f7="cloud_upload" size="30px" />
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">Nhấn vào để tải hình ảnh của bạn lên</div>
                                        </div>
                                    )}

                                    {/* Input file ẩn */}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        // ref={fileInputRef}
                                        style={{ display: "none" }}
                                        onChange={handleImageAvatar}
                                    />
                                </div>
                            </Card>
                            <div className='mt-4 grid grid-cols-2 grid-gap'>
                                <div>
                                    <button className='p-2 rounded-pill border border-secondary bg-transparent fs-14'>Hủy</button>
                                </div>
                                <div>
                                    <button type="button" className='p-2 rounded-pill border-btn fs-14'>Cập nhật</button>
                                </div>
                            </div>
                        </List>


                    </Block>
                </PageContent>
            </Sheet>
        </>

    );
}
export default AccountPage;