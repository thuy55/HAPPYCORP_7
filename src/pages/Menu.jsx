import React, { useEffect, useMemo, useState } from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavRight,
    Link,
    Block,
    List,
    ListItem,
    Button,
    Card,
    Icon,
    AccordionItem,
    AccordionContent,
    AccordionToggle,
    f7,
    PageContent
} from 'framework7-react';
import CommonNavbar from '../components/CommonNavbar';
import PageTransition from '../components/PageTransition';

const MenuPage = () => {
    const [activeTab, setActiveTab] = useState('service');

    // Sample data cho từng tab


    const formatPrice = (price) => {
        if (price === 0) return '0';
        return price.toLocaleString('vi-VN');
    };


    // const [menu, setMenu] = useState([
    //     {
    //         id: 1,
    //         name: "Cơm chiên",
    //         content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
    //         image: "https://bianhapkhau.net/wp-content/uploads/2023/11/uong-ruou-vang-an-gi.jpg",
    //         price: "9.000.000",
    //         quantity: 0

    //     },
    //     {
    //         id: 2,
    //         name: "Cơm chiên hải sản",
    //         content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
    //         image: "https://bianhapkhau.net/wp-content/uploads/2023/11/uong-ruou-vang-an-gi.jpg",
    //         price: "9.000.000",
    //         quantity: 0
    //     },
    //     {
    //         id: 3,
    //         name: "Lẩu hải sản",
    //         content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
    //         image: "https://bianhapkhau.net/wp-content/uploads/2023/11/uong-ruou-vang-an-gi.jpg",
    //         price: "9.000.000",
    //         quantity: 0
    //     },
    //     {
    //         id: 4,
    //         name: "Trái cây tươi mát",
    //         content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
    //         image: "https://bianhapkhau.net/wp-content/uploads/2023/11/uong-ruou-vang-an-gi.jpg",
    //         price: "9.000.000",
    //         quantity: 0
    //     },
    //     {
    //         id: 5,
    //         name: "Cơm chiên hải sản ssfsdfg",
    //         content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
    //         image: "https://bianhapkhau.net/wp-content/uploads/2023/11/uong-ruou-vang-an-gi.jpg",
    //         price: "9.000.000",
    //         quantity: 0
    //     },
    //     {
    //         id: 6,
    //         name: "Lẩu hải sản fdhgbfd",
    //         content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
    //         image: "https://bianhapkhau.net/wp-content/uploads/2023/11/uong-ruou-vang-an-gi.jpg",
    //         price: "9.000.000",
    //         quantity: 0
    //     },
    //     {
    //         id: 7,
    //         name: "Trái cây tươi mát fgsd",
    //         content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
    //         image: "https://bianhapkhau.net/wp-content/uploads/2023/11/uong-ruou-vang-an-gi.jpg",
    //         price: "9.000.000",
    //         quantity: 0
    //     }
    // ]);

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

    // hàm thêm quantity = 0 vào tất cả item
    const addQuantityToMenu = (menu) => {
        const newMenu = {};
        Object.keys(menu).forEach((sectionKey) => {
            newMenu[sectionKey] = {
                ...menu[sectionKey],
                categories: menu[sectionKey].categories.map((cat) => ({
                    ...cat,
                    items: cat.items.map((item) => ({
                        ...item,
                        quantity: item.quantity ?? 0   // nếu chưa có thì gán = 0
                    }))
                }))
            };
        });
        return newMenu;
    };


    const [menu, setMenu] = useState(addQuantityToMenu(menuData));

    useEffect(() => {
       localStorage.removeItem("cart");


    }, [])

    const getCurrentData = () => {
        return menu[activeTab] || { categories: [] };
    };

    // tăng giảm
    const increaseQty = (sectionKey, categoryId, itemId) => {
        setMenu((prev) => {
            const updated = { ...prev };
            updated[sectionKey] = {
                ...updated[sectionKey],
                categories: updated[sectionKey].categories.map((cat) =>
                    cat.id === categoryId
                        ? {
                            ...cat,
                            items: cat.items.map((it) =>
                                it.id === itemId
                                    ? { ...it, quantity: it.quantity + 1 }
                                    : it
                            )
                        }
                        : cat
                )
            };
            saveCart(updated);
            return updated;
        });
    };

    const decreaseQty = (sectionKey, categoryId, itemId) => {
        setMenu((prev) => {
            const updated = { ...prev };
            updated[sectionKey] = {
                ...updated[sectionKey],
                categories: updated[sectionKey].categories.map((cat) =>
                    cat.id === categoryId
                        ? {
                            ...cat,
                            items: cat.items.map((it) =>
                                it.id === itemId && it.quantity > 0
                                    ? { ...it, quantity: it.quantity - 1 }
                                    : it
                            )
                        }
                        : cat
                )
            };
            saveCart(updated);
            return updated;
        });
    };

    // tổng số lượng
    const totalQty = Object.values(menu).reduce((sum, section) => {
        return (
            sum +
            section.categories.reduce((catSum, cat) => {
                return catSum + cat.items.reduce((iSum, it) => iSum + it.quantity, 0);
            }, 0)
        );
    }, 0);
    // lưu luôn cả services và categories
    const saveCart = (menu) => {
        let cart = [];

        Object.keys(menu).forEach((serviceKey) => {
            const service = menu[serviceKey];

            service.categories.forEach((cat) => {
                const itemsWithQty = cat.items.filter((item) => item.quantity > 0);

                if (itemsWithQty.length > 0) {
                    cart.push({
                        serviceId: serviceKey,          // service key (ví dụ: "drink")
                        serviceTitle: service.title,    // tên service
                        categoryId: cat.id,             // id category
                        categoryTitle: cat.title,       // tên category
                        items: itemsWithQty.map((it) => ({
                            id: it.id,
                            name: it.name,
                            price: it.price,
                            quantity: it.quantity
                        }))
                    });
                }
            });
        });

        localStorage.setItem("cart", JSON.stringify(cart));

            let cart1 = [];
        Object.keys(menu).forEach((sectionKey) => {
            menu[sectionKey].categories.forEach((cat1) => {
                cat1.items.forEach((item) => {
                    if (item.quantity > 0) {
                        cart1.push({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            quantity: item.quantity
                        });
                    }
                });
            });
        });
        localStorage.setItem("cart1", JSON.stringify(cart1));
    };


    return (
        <Page name="menu">
            {/* Top Navbar */}
            <CommonNavbar />
            <div className="grid grid-cols-2 grid-gap">
                <Button sheetClose className="bg-secondary bg-opacity-25 p-3 rounded-pill  fs-15">Hủy đơn</Button>
                <Button className="bg-pink p-3 rounded-pill text-white fs-15" onClick={() => {
                    setSheetOpened1(true), console.log(32354);
                }}>{totalQty} Món</Button>
            </div>
            {/* Header with back button */}
            <List className='m-2' simpleList>
                <div className='d-flex align-items-center fs-6 fw-bold'>
                    <PageTransition href="/" >
                        <img src='../image/icon-backward.gif' className='size-icon me-1'></img>
                    </PageTransition>
                    Thực đơn
                </div>
            </List>

            <div className="px-1 py-2">
                <div className="row g-2">
                    <div className="col-4">
                        <Button
                            fill={activeTab === 'service'}
                            round
                            className={`w-100 py-3 ${activeTab === 'service'
                                ? 'bg-pink text-white border-0'
                                : 'bg-light text-pink border-0'
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
                                : 'bg-light text-pink border-0'
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
                                : 'bg-light text-pink border-0'
                                }`}
                            onClick={() => setActiveTab('combo')}
                        >
                            Combo
                        </Button>
                    </div>
                </div>
            </div>

            <div className="px-2 fs-13">
                <div accordionList className="my-3">
                    {getCurrentData().categories.map((category) => (
                        <AccordionItem key={category.id} accordionOpened={category.isOpen}>
                            <AccordionToggle>
                                <div className="d-flex justify-content-between align-items-center w-100 py-3 mt-2">
                                    <span className="fw-semibold fs-13">{category.title}</span>
                                    <Icon f7="chevron_down" size="16px" className="text-muted accordion-toggle-icon" />
                                </div>
                            </AccordionToggle>

                            <AccordionContent>
                                {category.items.length > 0 ? (
                                    <div className="row g-3 py-3">
                                        {category.items.map((item) => (
                                            <div key={item.id} className="col-6">
                                                <Card className="m-0 p-0 rounded-3 shadow-sm border-light">
                                                    <img src={item.image} className="w-100 rounded-top-3" />
                                                    <div className="p-2">
                                                        <div className="fw-bold fs-13">
                                                            {item.name}
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="fs-11 fw-bold text-secondary">
                                                                {formatPrice(item.price)}đ
                                                            </div>
                                                            <div className="d-flex align-items-center gap-2 mt-2 fs-13">
                                                                <button
                                                                    className="bg-light p-1"
                                                                    onClick={() => decreaseQty(activeTab, category.id, item.id)}
                                                                >
                                                                    <Icon f7="minus" size="15px" />
                                                                </button>
                                                                <span style={{ minWidth: "15px", textAlign: "center" }}>
                                                                    {item.quantity}
                                                                </span>
                                                                <button
                                                                    className="bg-light p-1"
                                                                    onClick={() => increaseQty(activeTab, category.id, item.id)}
                                                                >
                                                                    <Icon f7="plus" size="15px" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-4">
                                        <p className="text-muted fs-13 mb-0">Không có dữ liệu</p>
                                    </div>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </div>
            </div>


            {/* <div className="grid grid-cols-2 grid-gap mx-2">

                    {menu && menu.map((food, key) => {
                        return (
                            <>
                                <div>
                                    <Card className='m-0 p-0 rounded-3 shadow-sm border-light'>
                                        <img src={`${food.image}`} className='w-100 rounded-top-3'></img>
                                        <div className='p-2'>
                                            <div className='fw-bold fs-13'>{food.name}</div>
                                            <div className='fs-11'>{food.content}</div>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <div className='fs-11 fw-bold text-secondary'>
                                                    {food.price}đ
                                                </div>
                                              
                                                <div className="d-flex justify-content-center align-items-center gap-2 mt-2 fs-13">
                                                    <button className='bg-light p-1'
                                                        onClick={() => decreaseQty(food.id)}
                                                    >
                                                        <Icon f7="minus" size="15px"></Icon>
                                                    </button>

                                                    <span style={{ minWidth: "15px", textAlign: "center" }}>{food.quantity}</span>

                                                    <button className='bg-light p-1'
                                                        size="small"
                                                        fill="outline"
                                                        onClick={() => increaseQty(food.id)}
                                                    >
                                                        <Icon f7='plus' size="15px"></Icon>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </>
                        )
                    })}

                </div> */}
            {/* <footer className="fixed-bottom p-3 py-2 bg-white">
               
            </footer> */}

        </Page>
    );
};

export default MenuPage;