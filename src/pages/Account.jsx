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

    return (


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
            <List className='my-2 fs-13 mx-4 '>
                <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    <div>
                        <lord-icon
                            src="https://cdn.lordicon.com/puebsmel.json"
                            trigger="loop"
                            colors="primary:#f30771,secondary:#f30771"
                            className=' me-1'
                            style={{ width: '20px', height: '20px' }}>
                        </lord-icon>    
                        Mã của bạn :
                    </div>
                    <div className='fw-bold'>#02</div>
                </div>
                <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Họ và tên :<div className='fw-bold'>Thanh Thúy</div>
                </div>
                <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Email :<div className='fw-bold'>Thuy@gmail.com</div>
                </div>
                <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Tài khoản :<div className='fw-bold'>thuy</div>
                </div>
                <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Điện thoại :<div className='fw-bold'>0763462675</div>
                </div>
                <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Ngày sinh :<div className='fw-bold'>Không có</div>
                </div>
                <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Giới tính :<div className='fw-bold'>Nữ</div>
                </div>
                <div className='d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom'>
                    Ngày đăng kí :<div className='fw-bold'>Không có</div>
                </div>
            </List>
            <Card className='p-3 border border-secondary-10 rounded-4'>
                <div className='d-flex align-items-center pb-3  border-bottom'>
                    Đổi mật khẩu
                </div>
                <div className='d-flex align-items-center  mt-3'>
                    Cập nhật thông tin
                </div>
            </Card>

            <Card className='p-3 border border-secondary-10 rounded-4'>
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
                    <input
                        readOnly
                        className='col-11 text-truncate'
                        type="text"
                        value={`https://beta.ellm.io/?ref=`}
                    />

                    <div className='col-1 d-flex justify-content-end px-0' onClick={() => {
                        navigator.clipboard.writeText(`https://beta.ellm.io/?ref=`);
                        alert("Coppy success");
                    }} >

                        <Icon f7="doc_on_doc" size='20px'
                        >
                        </Icon>
                    </div>
                </div>

            </Card>
        </Page>

    );
}
export default AccountPage;