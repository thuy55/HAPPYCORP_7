import { Sheet, Toolbar, PageContent, Block, Link, Card } from "framework7-react";

export default function SheetBooking1({ opened, onClose }) {
    return (
        <Sheet
            className="demo-sheet-2 h-100 bg-light"
            opened={opened}
            onSheetClosed={onClose}
        >
            <Toolbar className="">
                <div className="left fw-bold">Tạo đơn</div>
                <div className="right">
                    <Link sheetClose className="fs-13">Close</Link>
                </div>
            </Toolbar>
            <PageContent>
                <Card className="rounded-4 p-3 shadow-none border border-light">
                    <div>
                        Ngày đặt phòng
                    </div>
                </Card>
            </PageContent>
        </Sheet>
    );
}
