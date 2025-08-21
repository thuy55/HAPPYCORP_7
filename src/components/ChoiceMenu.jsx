import { Sheet, Toolbar, PageContent, Block, Link, Card, ListInput, List, Icon, Button, AccordionToggle, AccordionItem, AccordionContent } from "framework7-react";
import { useEffect, useState } from "react";
import moment from 'moment';
import SheetBooking1 from "./SheetBooking1";
import SheetMenuDetail from "./MenuDetail";
export default function SheetChoiceMenu({ opened, onClose }) {
  
    const formatPrice = (price) => {
        if (price === 0) return '0';
        return price.toLocaleString('vi-VN');
    };




    const [menu, setMenu] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const a = localStorage.getItem("cart1");
            if (a) {
                try {
                    setMenu(JSON.parse(a)); // chuyển string -> mảng
                    console.log(123, JSON.parse(a));

                } catch (e) {
                    console.error("Không parse được cart1:", e);
                }
            }
        }, 500);
    }, [])

    // tăng giảm
    const increaseQty = (id) => {
        setMenu(prev => {
            const updated = prev.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            localStorage.setItem("cart1", JSON.stringify(updated));
            return updated;
        });
    };
    const decreaseQty = (id) => {
        setMenu(prev => {
            const updated = prev
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0); // loại bỏ item có quantity = 0

            localStorage.setItem("cart1", JSON.stringify(updated));
            return updated;
        });
    };


    // tổng số lượng
    // const totalQty = Object.values(menu).reduce((sum, section) => {
    //     return (
    //         sum +
    //         section.categories.reduce((catSum, cat) => {
    //             return catSum + cat.items.reduce((iSum, it) => iSum + it.quantity, 0);
    //         }, 0)
    //     );
    // }, 0);
    // lưu luôn cả services và categories

    const [sheetOpened1, setSheetOpened1] = useState(false);
    const [sheetOpened2, setSheetOpened2] = useState(false);
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
                        Chọn menu
                    </div>
                    <div className="right">
                    </div>
                </Toolbar>
                <PageContent>
                    <Card className="rounded-4 p-3 shadow-none border border-light fs-13">


                        {menu && menu.map((item) => (
                            <>

                                {/* <div key={item.id} className="col-6">
                                            <Card className="m-0 p-0 rounded-3 shadow-none border-light">
                                                <img src={item.image} className="w-100 rounded-top-3" onClick={() => { setSheetOpened2(true) }} />
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
                                                                className="bg-light p-1 d-flex align-items-center"
                                                                onClick={() => decreaseQty(item.id)}
                                                            >
                                                                <Icon f7="minus" size="10px" />
                                                            </button>
                                                            <span style={{ minWidth: "10px", textAlign: "center" }}>
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                className="bg-light p-1 d-flex align-items-center"
                                                                onClick={() => increaseQty(item.id)}
                                                            >
                                                                <Icon f7="plus" size="10px" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div> */}
                                <div className="row w-10 mt-3">
                                    <div className="col-2 p-1">
                                        <img src={item.image} className="w-100 rounded-3"></img>
                                    </div>
                                    <div className="col-10 p-1 pe-2">
                                        <div className="fs-13 fw-bold ">{item.name}</div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="fs-11 text-secondary">{formatPrice(item.price)}đ</div>
                                            <div className="d-flex align-items-center gap-2 mt-2 fs-13">
                                                <button
                                                    className="bg-light p-1 d-flex align-items-center"
                                                    onClick={() => decreaseQty(item.id)}
                                                >
                                                    <Icon f7="minus" size="10px" />
                                                </button>
                                                <span style={{ minWidth: "10px", textAlign: "center" }}>
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    className="bg-light p-1 d-flex align-items-center"
                                                    onClick={() => increaseQty(item.id)}
                                                >
                                                    <Icon f7="plus" size="10px" />
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}



                    </Card>
                </PageContent>
                <footer className="fixed-bottom p-3 py-2 bg-white">
                    <div className="grid grid-cols-2 grid-gap">
                        <Button sheetClose className="bg-secondary bg-opacity-25 p-3 rounded-pill  fs-15">Quay lại</Button>
                        <Button className="bg-pink p-3 rounded-pill text-white fs-15" onClick={() => {
                            setSheetOpened1(true), console.log(32354);
                        }}> Tiếp tục</Button>
                    </div>
                </footer>
            </Sheet>
            <SheetBooking1
                opened={sheetOpened1}
                onClose={() => setSheetOpened1(false)}
            />
        </>
    );
}
