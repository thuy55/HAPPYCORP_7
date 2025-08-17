import { Sheet, Toolbar, PageContent, Block, Link, Card, ListInput, List, Icon, Button, Segmented, ListItem, f7 } from "framework7-react";
import { useEffect, useState } from "react";
export default function SheetEndowDetail({ opened, onClose }) {

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
                        Chi tiết Ưu đãi
                    </div>
                    <div className="right fs-13">
                        {/* <Link sheetClose>Close</Link> */}
                    </div>
                </Toolbar>
                <PageContent className="pb-5">
                    <div className=' mt-3'>
                        <img src='https://tse1.mm.bing.net/th/id/OIP.oLxcg5eheNmd3t3ansSW-wHaEK?pid=Api&P=0&h=180' className=' w-100'></img>
                    </div>
                

                    <List className='mb-2' style={{
                        position: 'relative',
                        marginTop: '-12%', // đè lên 1/5 list trên
                        zIndex: 10,        // đảm bảo nổi lên
                    }}>
                        <Card className='rounded-4 border-light border-1 p-3 shadow-sm'>
                            <div className='text-center fw-bold'>
                                Tưng bừng khai trương chi nhánh mới với muôn vàng ưu đãi
                            </div>
                            <div className='fs-13 text-center mt-2 pb-4 border-bottom'>Giảm tối đa tiền mặt 1.000.000đ cho hóa đơn từ 50.000.000đ </div>
                            <div className='fs-13 mt-1'><img src='../image/6.gif' style={{ width: "25px", height: "25px" }}></img>Giảm giá Combo</div>
                        </Card>
                    </List>
                    <List className='my-3'>
                        <Card className='rounded-4 border-light border-1 p-2 shadow-sm fs-13'>
                            <div className='fw-bold'>Điều khoản sử dụng</div>
                            <ul className='mt-1' style={{ listStyle: 'disc', paddingLeft: '1.1rem' }}>
                                <li>Thời gian áp dụng: từ thứ 2-6</li>
                                <li>Thời gian áp dụng: từ thứ 2-6</li>
                                <li>Thời gian áp dụng: từ thứ 2-6</li>
                            </ul>
                        </Card>
                    </List>
                    <List className='my-3'>
                        <Card className='rounded-4 border-light border-1 p-2 shadow-sm fs-13'>
                            <div className='fw-bold'>Hướng dẫn sử dụng</div>
                            <ul className='mt-1' style={{ listStyle: 'disc', paddingLeft: '1.1rem' }}>
                                <li>Thời gian áp dụng: từ thứ 2-6</li>
                                <li>Thời gian áp dụng: từ thứ 2-6</li>
                                <li>Thời gian áp dụng: từ thứ 2-6</li>
                            </ul>
                        </Card>
                    </List>


                </PageContent>

            </Sheet>


        </>


    );
}
