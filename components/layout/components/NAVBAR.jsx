import React from 'react'

export default function NAVBAR() {
    return (
        <nav className="navbar" id="navbar">
            <div className="nav-container">
                <div className="navlinks">
                    <ul className="parent">
                        <li className="navigation-item dropdown">
                            <a className="header-menu-top dropdown-toggle" href="#">Appliances</a>
                            <div className="dropdown-container">
                                <div className="dropdown-menu">
                                    <div className="row">
                                        <div className="column">
                                            <ul className="dropdown_content">
                                                <a href="#"><span className="dropdown__menu-title">Kitchen
                                                    Appliances</span></a>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span className="dropdown__menu-subtitle">Oven Toaster
                                                        Griller</span></a>
                                                </li>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span className="dropdown__menu-subtitle">Air
                                                        Fryer</span></a>
                                                </li>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span className="dropdown__menu-subtitle">Sandwich &
                                                        Waffle
                                                        Makers</span></a>
                                                </li>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span className="dropdown__menu-subtitle">Popup
                                                        Toasters</span></a>
                                                </li>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span className="dropdown__menu-subtitle">Egg
                                                        Boilers</span></a>
                                                </li>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span className="dropdown__menu-subtitle">Electric Rice
                                                        Cookers</span></a>
                                                </li>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span
                                                        className="dropdown__menu-subtitle">Juicers</span></a>
                                                </li>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span className="dropdown__menu-subtitle">Mixer
                                                        Grinders</span></a>
                                                </li>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span className="dropdown__menu-subtitle">Choppers &
                                                        Blenders</span></a>
                                                </li>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span className="dropdown__menu-subtitle">Electric
                                                        Kettles</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="column">
                                            <ul className="dropdown_content">
                                                <a href="#"><span className="dropdown__menu-title">Cooktops</span></a>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span className="dropdown__menu-subtitle">Induction
                                                        Cooktop</span></a>
                                                </li>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span className="dropdown__menu-subtitle">Gas
                                                        Stove</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="column">
                                            <ul className="dropdown_content">
                                                <a href="#"><span className="dropdown__menu-title">Home
                                                    Care</span></a>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span
                                                        className="dropdown__menu-subtitle">Irons</span></a>
                                                </li>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span className="dropdown__menu-subtitle">Oil Filled
                                                        Radiators</span></a>
                                                </li>
                                                <li className="dropdown__menu-list">
                                                    <a href="#"><span className="dropdown__menu-subtitle">UV
                                                        Sterilizers</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="#">
                                        <div className="mm-megamenu--image">
                                            <img src="/img/megaimg.webp" width="300px" height="300px" />
                                            <div className="mm-megamenu--image-overlay">
                                                <div className="title">SHOP ALL APPLIANCES</div>
                                            </div>
                                        </div>
                                    </a>


                                </div>
                            </div>


                        </li>

                        <li className="navigation-item">
                            <a className="header-menu-top nav-item-dinnerware " href="#">Dinnerware</a>
                        </li>
                        <li className="navigation-item">
                            <a className="header-menu-top nav-item-serveware " href="#">Serveware</a>
                        </li>
                        <li className="navigation-item">
                            <a className="header-menu-top nav-item-storage " href="#">Storage</a>
                        </li>
                        <li className="navigation-item">
                            <a className="header-menu-top nav-item-drinkware " href="#">Drinkware</a>
                        </li>
                        <li className="navigation-item">
                            <a className="header-menu-top nav-item-bottles " href="#">Bottles</a>
                        </li>

                        <li className="navigation-item">
                            <a className="header-menu-top nav-item-lunchboxes " href="#">Lunchboxes</a>
                        </li>

                        <li className="navigation-item">
                            <a className="header-menu-top nav-item-cookware " href="#">Cookware</a>
                        </li>

                        <li className="navigation-item">
                            <a className="header-menu-top nav-item-home-decor " href="#">Home Decor</a>
                        </li>

                        <li className="navigation-item">
                            <a className="header-menu-top nav-item-deals nav-item-deals"
                                href="/collections/deals">Deals</a>
                        </li>

                    </ul>
                </div>
                <div className="search-cart-container">
                    <div className="search-container">
                        <input className="search-input" name="st" placeholder="Search Product" type="text" />
                        <input id="search-icon" type="image"
                            src="//cdn.shopify.com/s/files/1/0551/8009/9722/t/269/assets/icon_search.svg?v=3224031156035080011684421431"
                            alt="Submit" width="16" height="16" />
                    </div>
                    <div className="cart">
                        <a href="/cart">
                            <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" width="22.372" height="21.078"
                                viewBox="0 0 22.372 21.078">
                                <g id="noun_cart_1864278_1_" data-name="noun_cart_1864278 (1)"
                                    transform="translate(0.25 0.25)">
                                    <g id="Group_1985" data-name="Group 1985">
                                        <path id="Path_568" data-name="Path 568"
                                            d="M23.884,9.535a2.215,2.215,0,0,0-1.726-.852H8.139L7.7,6.98A2.213,2.213,0,0,0,5.561,5.3H3.214a.714.714,0,0,0,0,1.427H5.561A.761.761,0,0,1,6.3,7.3L9.106,18.489a2.213,2.213,0,0,0,2.141,1.68h9.184a2.193,2.193,0,0,0,2.141-1.68L24.3,11.4A2.11,2.11,0,0,0,23.884,9.535Zm-.99,1.542-1.726,7.09a.761.761,0,0,1-.737.575H11.247a.761.761,0,0,1-.737-.575l-2-8.033h13.65a.763.763,0,0,1,.6.3A.722.722,0,0,1,22.894,11.077Z"
                                            transform="translate(-2.5 -5.3)" fill="#013564" stroke="#013564"
                                            strokeWidth="0.5" />
                                        <path id="Path_569" data-name="Path 569"
                                            d="M34.594,73.9a2.394,2.394,0,1,0,2.394,2.394A2.407,2.407,0,0,0,34.594,73.9Zm0,3.338a.944.944,0,1,1,.944-.944A.963.963,0,0,1,34.594,77.238Z"
                                            transform="translate(-25.364 -58.11)" fill="#013564" stroke="#013564"
                                            strokeWidth="0.5" />
                                        <path id="Path_570" data-name="Path 570"
                                            d="M68.994,73.9a2.394,2.394,0,1,0,2.394,2.394A2.407,2.407,0,0,0,68.994,73.9Zm0,3.338a.944.944,0,1,1,.944-.944A.963.963,0,0,1,68.994,77.238Z"
                                            transform="translate(-51.846 -58.11)" fill="#013564" stroke="#013564"
                                            strokeWidth="0.5" />
                                    </g>
                                </g>
                            </svg>
                            <div data-cart-count-bubble>
                                <span className="cart-counter">0</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
