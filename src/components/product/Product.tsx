import { Breadcrumbs, Link, Typography } from "@mui/material"
import "./product.scss"
import SidebarProduct from "./SidebarProduct";
import { Outlet, useParams } from "react-router-dom";

export const Product = () => {
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    const { param } = useParams();

    return <>
        <div className="product-wrapper" onClick={handleClick}>
           <div className="breadcrumbs-container">
           <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Trang chủ
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Danh mục
                </Link>
                <Typography color="text.primary">Tất cả sản phẩm</Typography>
            </Breadcrumbs>
           <div className="main-product">
            <SidebarProduct/>
            <Outlet/>
           </div>
           </div>
           
        </div>
    </>
 }