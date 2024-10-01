import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.scss"
const SidebarProduct = () => {
    return (
            <div className="layered-content">
                <ul className="menuList-links">
                    <li className=""><Link to="/collections/chypre-huong-vi-dao-chypre" title="Chypre (hương đảo Chypre)"><span>Chypre (hương đảo Chypre)</span></Link></li>
                    <li className=""><Link to="/collections/floral-huong-hoa-co" title="Floral (hương hoa cỏ)"><span>Floral (hương hoa cỏ)</span></Link></li>
                    <li className=""><Link to="/collections/fresh-huong-tuoi-mat" title="Fresh (hương tươi mát)"><span>Fresh (hương tươi mát)</span></Link></li>
                    <li className=""><Link to="/collections/fruity-huong-trai-cay" title="Fruity (hương trái cây)"><span>Fruity (hương trái cây)</span></Link></li>
                    <li className=""><Link to="/collections/musk-xa-huong" title="Musk (xạ hương)"><span>Musk (xạ hương)</span></Link></li>
                    <li className=""><Link to="/collections/leather-huong-da-thuoc" title="Leather (hương da thuộc)"><span>Leather (hương da thuộc)</span></Link></li>
                    <li className=""><Link to="/collections/woody-huong-go" title="Woody (hương gỗ)"><span>Woody (hương gỗ)</span></Link></li>
                    <li className=""><Link to="/collections/oriental-huong-phuong-dong-1" title="Oriental (hương Phương Đông)"><span>Oriental (hương Phương Đông)</span></Link></li>
                    <li className=""><Link to="/collections/fougere-huong-reu-phong" title="Fougere (hương rêu phong)"><span>Fougere (hương rêu phong)</span></Link></li>

                </ul>
            </div>
    );
};

export default SidebarProduct;
