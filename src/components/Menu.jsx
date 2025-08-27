import { Sheet, Toolbar, PageContent, Block, Link, Card, ListInput, List, Icon, Button, AccordionToggle, AccordionItem, AccordionContent } from "framework7-react";
import { useEffect, useState } from "react";
import moment from 'moment';
import SheetBooking1 from "./SheetBooking1";
import SheetMenuDetail from "./MenuDetail";
export default function SheetMenu({ opened, onClose }) {
    const [activeTab, setActiveTab] = useState('service');

    // Sample data cho từng tab
    const menuData = {
        service: {
            categories: [
                {
                    id: 'private-room',
                    title: 'Private Room',
                    isOpen: false,
                    items: []
                },
                {
                    id: 'phu-thu',
                    title: 'Phụ thu',
                    isOpen: false,
                    items: []
                },
                {
                    id: 'giam-gia',
                    title: 'Giảm giá',
                    isOpen: false,
                    items: []
                },
                {
                    id: 'promotion',
                    title: 'Promotion',
                    isOpen: true,
                    items: [
                        {
                            id: 1,
                            name: 'KHĂN LẠNH',
                            price: 0,
                            image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/anh-dai-dien-tet-41.jpg'
                        },
                        {
                            id: 2,
                            name: 'WELCOME DRINK',
                            price: 0,
                            image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/anh-dai-dien-tet-41.jpg'
                        }
                    ]
                }
            ]
        },
        food: {
            categories: [
                {
                    id: 'thuc-an',
                    title: 'Thức ăn',
                    isOpen: false,
                    items: []
                },
                {
                    id: 'do-uong',
                    title: 'Đồ uống',
                    isOpen: false,
                    items: []
                },
                {
                    id: 'trai-cay',
                    title: 'TRÁI CÂY',
                    isOpen: true,
                    items: [
                        {
                            id: 3,
                            name: 'FRUIT PLATTER',
                            price: 690000,
                            image: '../image/fruit-1.png'
                        },
                        {
                            id: 4,
                            name: 'Fruit Platter',
                            price: 0,
                            image: '../image/fruit-2.png'
                        }
                    ]
                },
                {
                    id: 'do-kho',
                    title: 'ĐỒ KHÔ',
                    isOpen: false,
                    items: []
                },
                {
                    id: 'promotion-food',
                    title: 'Promotion',
                    isOpen: false,
                    items: []
                },
                {
                    id: 'funky',
                    title: 'FUNKY',
                    isOpen: false,
                    items: []
                },
                {
                    id: 'ss-tl-pod',
                    title: 'SS/TL/POD',
                    isOpen: false,
                    items: []
                }
            ]
        },
        combo: {
            categories: [
                {
                    id: 'combo-vip',
                    title: 'Combo VIP',
                    isOpen: false,
                    items: []
                },
                {
                    id: 'combo-add-on',
                    title: 'Combo Add On',
                    isOpen: false,
                    items: []
                },
                {
                    id: 'food-combo',
                    title: 'Food Combo',
                    isOpen: true,
                    items: [
                        {
                            id: 5,
                            name: 'CHILL & CHEER',
                            price: 1900000,
                            image: '../image/combo-1.png'
                        },
                        {
                            id: 6,
                            name: 'GLAMOUR NIGHT',
                            price: 1900000,
                            image: '../image/combo-2.png'
                        }
                    ]
                },
                {
                    id: 'combo-8',
                    title: 'COMBO 8',
                    isOpen: false,
                    items: []
                },
                {
                    id: 'combo-16',
                    title: 'COMBO 16',
                    isOpen: false,
                    items: []
                }
            ]
        }
    };

    const formatPrice = (price) => {
        if (price === 0) return '0';
        return price.toLocaleString('vi-VN');
    };

    const getCurrentData = () => {
        return menuData[activeTab] || { categories: [] };
    };

     const [sheetOpened1, setSheetOpened1] = useState(false);
    return (
        <>
            <Sheet
                className="demo-sheet-2 h-100 "
                opened={opened}
                onSheetClosed={onClose}
            >
                <Toolbar className="">
                    <div className="left fw-bold d-flex align-items-center">
                        <Link sheetClose>
                            <img src='../img/backward.gif' className='size-icon me-1'></img>
                        </Link>
                        Chọn menu
                    </div>
                    <div className="right">
                    </div>
                </Toolbar>
                <PageContent>
                    <Card className="rounded-4 p-3 shadow-none border border-light fs-13">
                        <div className="px-1 py-2">
                            <div className="row g-2">
                                <div className="col-4">
                                    <Button
                                        fill={activeTab === 'service'}
                                        round
                                        className={`w-100 py-3 ${activeTab === 'service'
                                            ? 'bg-pink text-white border-0'
                                            : ' text-color border-0'
                                            }`}
                                        onClick={() => setActiveTab('service')}
                                    >
                                        Dịch vụ
                                    </Button>
                                </div>
                                <div className="col-4">
                                    <Button
                                        fill={activeTab === 'food'}
                                        round
                                        className={`w-100 py-3 ${activeTab === 'food'
                                            ? 'bg-pink text-white border-0'
                                            : ' text-color border-0'
                                            }`}
                                        onClick={() => setActiveTab('food')}
                                    >
                                        Món ăn
                                    </Button>
                                </div>
                                <div className="col-4">
                                    <Button
                                        fill={activeTab === 'combo'}
                                        round
                                        className={`w-100 py-3 ${activeTab === 'combo'
                                            ? 'bg-pink text-white border-0'
                                            : ' text-color border-0'
                                            }`}
                                        onClick={() => setActiveTab('combo')}
                                    >
                                        Combo
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="px-2 fs-13">
                            <div accordionList className='my-3'>
                                {getCurrentData().categories.map((category) => (
                                    <AccordionItem
                                        key={category.id}
                                        accordionOpened={category.isOpen}
                                    >
                                        <AccordionToggle>
                                            <div className="d-flex justify-content-between align-items-center w-100 py-3 mt-2">
                                                <span className="fw-semibold fs-13">
                                                    {category.title}
                                                </span>
                                                <Icon
                                                    f7="chevron_down"
                                                    size="16px"
                                                    className="text-muted accordion-toggle-icon"
                                                />
                                            </div>
                                        </AccordionToggle>

                                        <AccordionContent>
                                            {category.items.length > 0 ? (
                                                <div className="row g-3 py-3">
                                                    {category.items.map((item) => (
                                                        <div key={item.id} className="col-6">
                                                            <Card className="m-0 border-0 shadow-sm p-2 h-100" >
                                                                <div className="text-center">
                                                                    <div className="mb-3">
                                                                        <img onClick={() => {setSheetOpened1(true)}}
                                                                            src={item.image}
                                                                            alt={item.name}
                                                                            className="w-100 rounded-3"
                                                                            style={{
                                                                                height: '120px',
                                                                                objectFit: 'cover',
                                                                                backgroundColor: '#f8f9fa'
                                                                            }}
                                                                            onError={(e) => {
                                                                                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjhGOUZBIi8+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjIwIiBmaWxsPSIjREVFMkU2Ii8+PC9zdmc+';
                                                                            }}
                                                                        />
                                                                    </div>

                                                                    <div className="mb-2">
                                                                        <h6 className=" mb-1 fs-13 text-uppercase">
                                                                            {item.name}
                                                                        </h6>
                                                                        <p className=" fw fs-13">
                                                                            {formatPrice(item.price)}
                                                                            {item.price > 0 && <span className="fs-12 text-muted">đ</span>}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </Card>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="text-center py-4">
                                                    <p className=" fs-13 mb-0">
                                                        Không có dữ liệu
                                                    </p>
                                                </div>
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </div>
                        </div>
                        {getCurrentData().categories.length === 0 && (
                            <div className="text-center py-5">
                                <Icon f7="square_list" size="48px" className=" mb-3" />
                                <p className="">Không có dữ liệu</p>
                            </div>
                        )}
                    </Card>
                </PageContent>
            </Sheet>
            <SheetMenuDetail
                opened={sheetOpened1}
                onClose={() => setSheetOpened1(false)}
            />
        </>
    );
}
