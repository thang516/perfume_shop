import { Tab, Tabs } from "@mui/material"
import Box from "@mui/material/Box/Box"
import React from "react";
import "./scentGroup.scss"
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
    

export const ScentGroup = () => {
        const [value, setValue] = React.useState(0);
      
        const handleChange = (event: React.SyntheticEvent, newValue: number) => {
          setValue(newValue);
        };
    return <>
        <div className="perfume-by-scent-group-wrapper">
            <h3>Nước hoa theo nhóm hương</h3>
           <div className="box-className">
           <Box  sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}  aria-label="basic tabs example">
                    <Tab  className="tab-scent-group" label="Woody cuốn hút" />
                    <Tab  className="tab-scent-group"  label="Musk quyến rũ"  />
                    <Tab  className="tab-scent-group"  label="Chypre sang trọng" />
                    <Tab  className="tab-scent-group"  label="Oriental huyền bí" />
                </Tabs>
            </Box>
           </div>
            <CustomTabPanel value={value} index={0}>

                 <div className="cart-endow">
                <div className="cart-endow-content">
                    <img src="https://product.hstatic.net/200000374707/product/no.34_66d2c7e71336486bb1cf57d6be50b09c_grande.png" alt="" />
                    <div className="price-and-name">
                        <div className="name-endow">
                            Nước hoa No.34
                        </div>
                        <div className="price-endow">
                            <span className="price-has-decreased">390,000đ</span>
                            <span className="original-price">450,000đ</span>
                        </div>
                    </div>
                    <div className="percent-decrease">
                        <span>-13%</span>
                    </div>
                </div>
                <div className="cart-endow-content-hover">
                    <img src="https://product.hstatic.net/200000374707/product/no.34-_nhom_huong_d5261d07c94e4937945070491d0f0009_grande.png" alt="" />
                    <div className="view-detail-cart-endow">
                        <span>XEM CHI TIẾT</span>
                    </div>
                </div>
            </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            <div className="cart-endow">
                <div className="cart-endow-content">
                    <img src="https://product.hstatic.net/200000374707/product/no.34_66d2c7e71336486bb1cf57d6be50b09c_grande.png" alt="" />
                    <div className="price-and-name">
                        <div className="name-endow">
                            Nước hoa No.34
                        </div>
                        <div className="price-endow">
                            <span className="price-has-decreased">390,000đ</span>
                            <span className="original-price">450,000đ</span>
                        </div>
                    </div>
                    <div className="percent-decrease">
                        <span>-13%</span>
                    </div>
                </div>
                <div className="cart-endow-content-hover">
                    <img src="https://product.hstatic.net/200000374707/product/no.34-_nhom_huong_d5261d07c94e4937945070491d0f0009_grande.png" alt="" />
                    <div className="view-detail-cart-endow">
                        <span>XEM CHI TIẾT</span>
                    </div>
                </div>
            </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
            <div className="cart-endow">
                <div className="cart-endow-content">
                    <img src="https://product.hstatic.net/200000374707/product/no.34_66d2c7e71336486bb1cf57d6be50b09c_grande.png" alt="" />
                    <div className="price-and-name">
                        <div className="name-endow">
                            Nước hoa No.34
                        </div>
                        <div className="price-endow">
                            <span className="price-has-decreased">390,000đ</span>
                            <span className="original-price">450,000đ</span>
                        </div>
                    </div>
                    <div className="percent-decrease">
                        <span>-13%</span>
                    </div>
                </div>
                <div className="cart-endow-content-hover">
                    <img src="https://product.hstatic.net/200000374707/product/no.34-_nhom_huong_d5261d07c94e4937945070491d0f0009_grande.png" alt="" />
                    <div className="view-detail-cart-endow">
                        <span>XEM CHI TIẾT</span>
                    </div>
                </div>
            </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
            <div className="cart-endow">
                <div className="cart-endow-content">
                    <img src="https://product.hstatic.net/200000374707/product/no.34_66d2c7e71336486bb1cf57d6be50b09c_grande.png" alt="" />
                    <div className="price-and-name">
                        <div className="name-endow">
                            Nước hoa No.34
                        </div>
                        <div className="price-endow">
                            <span className="price-has-decreased">390,000đ</span>
                            <span className="original-price">450,000đ</span>
                        </div>
                    </div>
                    <div className="percent-decrease">
                        <span>-13%</span>
                    </div>
                </div>
                <div className="cart-endow-content-hover">
                    <img src="https://product.hstatic.net/200000374707/product/no.34-_nhom_huong_d5261d07c94e4937945070491d0f0009_grande.png" alt="" />
                    <div className="view-detail-cart-endow">
                        <span>XEM CHI TIẾT</span>
                    </div>
                </div>
            </div>
            </CustomTabPanel>
          
        </div>
        <div className="view-detail-wrap"> <div className="view-detail">
                <span>XEM THÊM</span>

            </div></div>
    </>
}