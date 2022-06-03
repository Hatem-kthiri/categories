import { Fragment } from "react";
import "./App.css";

function App() {
    return (
        <Fragment>
            <header id="header" class="u-header u-header-left-aligned-nav">
                <div class="u-header__section">
                    <div class="d-none d-xl-block container">
                        <div class="row">
                            <div class="col-md-auto d-none d-xl-block">
                                <div class="max-width-270 min-width-270">
                                    <div id="basicsAccordion">
                                        <div class="card border-0">
                                            <div
                                                class="card-header card-collapse border-0"
                                                id="basicsHeadingOne"
                                            >
                                                <button
                                                    type="button"
                                                    class="btn-link btn-remove-focus btn-block d-flex card-btn py-3 text-lh-1 px-4 shadow-none btn-primary rounded-top-lg border-0 font-weight-bold text-gray-90"
                                                    data-toggle="collapse"
                                                    data-target="#basicsCollapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="basicsCollapseOne"
                                                >
                                                    <span class="ml-0 text-gray-90 mr-2">
                                                        <span class="fa fa-list-ul"></span>
                                                    </span>
                                                    <span class="pl-1 text-gray-90">
                                                        All Departments
                                                    </span>
                                                </button>
                                            </div>
                                            <div
                                                id="basicsCollapseOne"
                                                class="collapse show vertical-menu"
                                                aria-labelledby="basicsHeadingOne"
                                                data-parent="#basicsAccordion"
                                            >
                                                <div class="card-body p-0">
                                                    <nav class="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space hs-menu-initialized">
                                                        <div
                                                            id="navBar"
                                                            class="collapse navbar-collapse u-header__navbar-collapse"
                                                        >
                                                            <ul class="navbar-nav u-header__navbar-nav">
                                                                <li
                                                                    class="nav-item u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left"
                                                                >
                                                                    <a
                                                                        href="#"
                                                                        class="nav-link u-header__nav-link font-weight-bold"
                                                                    >
                                                                        Value of
                                                                        the Day
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    class="nav-item u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left"
                                                                >
                                                                    <a
                                                                        href="#"
                                                                        class="nav-link u-header__nav-link font-weight-bold"
                                                                    >
                                                                        Top 100
                                                                        Offers
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    class="nav-item u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left"
                                                                >
                                                                    <a
                                                                        href="#"
                                                                        class="nav-link u-header__nav-link font-weight-bold"
                                                                    >
                                                                        New
                                                                        Arrivals
                                                                    </a>
                                                                </li>

                                                                <li
                                                                    class="nav-item hs-has-mega-menu u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-animation-in="slideInUp"
                                                                    data-animation-out="fadeOut"
                                                                    data-position="left"
                                                                >
                                                                    <a
                                                                        id="basicMegaMenu"
                                                                        class="nav-link u-header__nav-link u-header__nav-link-toggle"
                                                                        href="javascript:;"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        Computers
                                                                        &
                                                                        Accessories
                                                                    </a>

                                                                    <div
                                                                        class="hs-mega-menu vmm-tfw u-header__sub-menu"
                                                                        aria-labelledby="basicMegaMenu"
                                                                    >
                                                                        <div class="vmm-bg">
                                                                            <img
                                                                                class="img-fluid"
                                                                                src="../../assets/img/500X400/img1.png"
                                                                                alt="Image Description"
                                                                            />
                                                                        </div>
                                                                        <div class="row u-header__mega-menu-wrapper">
                                                                            <div class="col mb-3 mb-sm-0">
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Computers
                                                                                    &
                                                                                    Accessories
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group mb-3">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            All
                                                                                            Computers
                                                                                            &
                                                                                            Accessories
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Laptops,
                                                                                            Desktops
                                                                                            &
                                                                                            Monitors
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Printers
                                                                                            &
                                                                                            Ink
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Networking
                                                                                            &
                                                                                            Internet
                                                                                            Devices
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Computer
                                                                                            Accessories
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Software
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start"
                                                                                            href="#"
                                                                                        >
                                                                                            <div class="">
                                                                                                All
                                                                                                Electronics
                                                                                            </div>
                                                                                            <div class="u-nav-subtext font-size-11 text-gray-30">
                                                                                                Discover
                                                                                                more
                                                                                                products
                                                                                            </div>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>

                                                                            <div class="col mb-3 mb-sm-0">
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Office
                                                                                    &
                                                                                    Stationery
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            All
                                                                                            Office
                                                                                            &
                                                                                            Stationery
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li
                                                                    class="nav-item hs-has-mega-menu u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left"
                                                                >
                                                                    <a
                                                                        id="basicMegaMenu1"
                                                                        class="nav-link u-header__nav-link u-header__nav-link-toggle"
                                                                        href="javascript:;"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        Cameras,
                                                                        Audio &
                                                                        Video
                                                                    </a>

                                                                    <div
                                                                        class="hs-mega-menu vmm-tfw u-header__sub-menu"
                                                                        aria-labelledby="basicMegaMenu1"
                                                                    >
                                                                        <div class="vmm-bg">
                                                                            <img
                                                                                class="img-fluid"
                                                                                src="../../assets/img/500X400/img4.png"
                                                                                alt="Image Description"
                                                                            />
                                                                        </div>
                                                                        <div class="row u-header__mega-menu-wrapper">
                                                                            <div class="col mb-3 mb-sm-0">
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Cameras
                                                                                    &
                                                                                    Photography
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group mb-3">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Lenses
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Camera
                                                                                            Accessories
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Security
                                                                                            &
                                                                                            Surveillance
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Binoculars
                                                                                            &
                                                                                            Telescopes
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Camcorders
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Software
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start"
                                                                                            href="#"
                                                                                        >
                                                                                            <div class="">
                                                                                                All
                                                                                                Electronics
                                                                                            </div>
                                                                                            <div class="u-nav-subtext font-size-11 text-gray-30">
                                                                                                Discover
                                                                                                more
                                                                                                products
                                                                                            </div>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>

                                                                            <div class="col mb-3 mb-sm-0">
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Audio
                                                                                    &
                                                                                    Video
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            All
                                                                                            Audio
                                                                                            &
                                                                                            Video
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Headphones
                                                                                            &
                                                                                            Speakers
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li
                                                                    class="nav-item hs-has-mega-menu u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left"
                                                                >
                                                                    <a
                                                                        id="basicMegaMenu2"
                                                                        class="nav-link u-header__nav-link u-header__nav-link-toggle"
                                                                        href="javascript:;"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        Mobiles
                                                                        &
                                                                        Tablets
                                                                    </a>

                                                                    <div
                                                                        class="hs-mega-menu vmm-tfw u-header__sub-menu vmm-bg-extended"
                                                                        aria-labelledby="basicMegaMenu2"
                                                                    >
                                                                        <div class="vmm-bg">
                                                                            <img
                                                                                class="img-fluid"
                                                                                src="../../assets/img/500X400/img3.png"
                                                                                alt="Image Description"
                                                                            />
                                                                        </div>
                                                                        <div class="row u-header__mega-menu-wrapper">
                                                                            <div class="col mb-3 mb-sm-0">
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Mobiles
                                                                                    &
                                                                                    Tablets
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group mb-3">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            All
                                                                                            Mobile
                                                                                            Phones
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Smartphones
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Refurbished
                                                                                            Mobiles
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link border-top pt-2"
                                                                                            href="#"
                                                                                        >
                                                                                            All
                                                                                            Mobile
                                                                                            Accessories
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Cases
                                                                                            &
                                                                                            Covers
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start"
                                                                                            href="#"
                                                                                        >
                                                                                            <div class="">
                                                                                                All
                                                                                                Electronics
                                                                                            </div>
                                                                                            <div class="u-nav-subtext font-size-11 text-gray-30">
                                                                                                Discover
                                                                                                more
                                                                                                products
                                                                                            </div>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>

                                                                            <div class="col mb-3 mb-sm-0">
                                                                                <ul class="u-header__sub-menu-nav-group">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            All
                                                                                            Tablets
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Tablet
                                                                                            Accessories
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li
                                                                    class="nav-item hs-has-mega-menu u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left"
                                                                >
                                                                    <a
                                                                        id="basicMegaMenu3"
                                                                        class="nav-link u-header__nav-link u-header__nav-link-toggle"
                                                                        href="javascript:;"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        Movies,
                                                                        Music &
                                                                        Video
                                                                        Game
                                                                    </a>

                                                                    <div
                                                                        class="hs-mega-menu vmm-tfw u-header__sub-menu"
                                                                        aria-labelledby="basicMegaMenu3"
                                                                    >
                                                                        <div class="vmm-bg">
                                                                            <img
                                                                                class="img-fluid"
                                                                                src="../../assets/img/500X400/img2.png"
                                                                                alt="Image Description"
                                                                            />
                                                                        </div>
                                                                        <div class="row u-header__mega-menu-wrapper">
                                                                            <div class="col mb-3 mb-sm-0">
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Movies
                                                                                    &
                                                                                    TV
                                                                                    Shows
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group mb-3">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            All
                                                                                            Movies
                                                                                            &
                                                                                            TV
                                                                                            Shows
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            All
                                                                                            English
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link border-bottom pb-3"
                                                                                            href="#"
                                                                                        >
                                                                                            All
                                                                                            Hindi
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Video
                                                                                    Games
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            PC
                                                                                            Games
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Consoles
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Accessories
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>

                                                                            <div class="col mb-3 mb-sm-0">
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Music
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            All
                                                                                            Music
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Indian
                                                                                            Classical
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Musical
                                                                                            Instruments
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li
                                                                    class="nav-item hs-has-mega-menu u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left"
                                                                >
                                                                    <a
                                                                        id="basicMegaMenu4"
                                                                        class="nav-link u-header__nav-link u-header__nav-link-toggle"
                                                                        href="javascript:;"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        TV &
                                                                        Audio
                                                                    </a>

                                                                    <div
                                                                        class="hs-mega-menu vmm-tfw u-header__sub-menu"
                                                                        aria-labelledby="basicMegaMenu4"
                                                                    >
                                                                        <div class="vmm-bg">
                                                                            <img
                                                                                class="img-fluid"
                                                                                src="../../assets/img/500X400/img5.png"
                                                                                alt="Image Description"
                                                                            />
                                                                        </div>
                                                                        <div class="row u-header__mega-menu-wrapper">
                                                                            <div class="col mb-3 mb-sm-0">
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Audio
                                                                                    &
                                                                                    Video
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group mb-3">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            All
                                                                                            Audio
                                                                                            &
                                                                                            Video
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Televisions
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Headphones
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Speakers
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Audio
                                                                                            &
                                                                                            Video
                                                                                            Accessories
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start"
                                                                                            href="#"
                                                                                        >
                                                                                            <div class="">
                                                                                                Electro
                                                                                                Home
                                                                                                Appliances
                                                                                            </div>
                                                                                            <div class="u-nav-subtext font-size-11 text-gray-30">
                                                                                                Available
                                                                                                in
                                                                                                select
                                                                                                cities
                                                                                            </div>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>

                                                                            <div class="col mb-3 mb-sm-0">
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Music
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Televisions
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Headphones
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li
                                                                    class="nav-item hs-has-mega-menu u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left"
                                                                >
                                                                    <a
                                                                        id="basicMegaMenu5"
                                                                        class="nav-link u-header__nav-link u-header__nav-link-toggle"
                                                                        href="javascript:;"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        Watches
                                                                        &
                                                                        Eyewear
                                                                    </a>

                                                                    <div
                                                                        class="hs-mega-menu vmm-tfw u-header__sub-menu"
                                                                        aria-labelledby="basicMegaMenu5"
                                                                    >
                                                                        <div class="vmm-bg">
                                                                            <img
                                                                                class="img-fluid"
                                                                                src="../../assets/img/500X400/img6.png"
                                                                                alt="Image Description"
                                                                            />
                                                                        </div>
                                                                        <div class="row u-header__mega-menu-wrapper">
                                                                            <div class="col mb-3 mb-sm-0">
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Watches
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group mb-3">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            All
                                                                                            Watches
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Men's
                                                                                            Watches
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Women's
                                                                                            Watches
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Premium
                                                                                            Watches
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Deals
                                                                                            on
                                                                                            Watches
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>

                                                                            <div class="col mb-3 mb-sm-0">
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Eyewear
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Men's
                                                                                            Sunglasses
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li
                                                                    class="nav-item hs-has-mega-menu u-header__nav-item"
                                                                    data-event="hover"
                                                                    data-position="left"
                                                                >
                                                                    <a
                                                                        id="basicMegaMenu3"
                                                                        class="nav-link u-header__nav-link u-header__nav-link-toggle"
                                                                        href="javascript:;"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        Car,
                                                                        Motorbike
                                                                        &
                                                                        Industrial
                                                                    </a>

                                                                    <div
                                                                        class="hs-mega-menu vmm-tfw u-header__sub-menu"
                                                                        aria-labelledby="basicMegaMenu3"
                                                                    >
                                                                        <div class="vmm-bg">
                                                                            <img
                                                                                class="img-fluid"
                                                                                src="../../assets/img/500X400/img7.png"
                                                                                alt="Image Description"
                                                                            />
                                                                        </div>
                                                                        <div class="row u-header__mega-menu-wrapper">
                                                                            <div class="col mb-3 mb-sm-0">
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Car
                                                                                    &
                                                                                    Motorbike
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group mb-3">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            All
                                                                                            Cars
                                                                                            &
                                                                                            Bikes
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Car
                                                                                            &
                                                                                            Bike
                                                                                            Care
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link border-bottom pb-3"
                                                                                            href="#"
                                                                                        >
                                                                                            Lubricants
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Shop
                                                                                    for
                                                                                    Bike
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Helmets
                                                                                            &
                                                                                            Gloves
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Bike
                                                                                            Parts
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>

                                                                            <div class="col mb-3 mb-sm-0">
                                                                                <span class="u-header__sub-menu-title">
                                                                                    Industrial
                                                                                    Supplies
                                                                                </span>
                                                                                <ul class="u-header__sub-menu-nav-group">
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            All
                                                                                            Industrial
                                                                                            Supplies
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            class="nav-link u-header__sub-menu-nav-link"
                                                                                            href="#"
                                                                                        >
                                                                                            Lab
                                                                                            &
                                                                                            Scientific
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li
                                                                    class="nav-item hs-has-sub-menu u-header__nav-item"
                                                                    data-event="click"
                                                                    data-animation-in="slideInUp"
                                                                    data-animation-out="fadeOut"
                                                                    data-position="left"
                                                                >
                                                                    <a
                                                                        id="homeMegaMenu"
                                                                        class="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-toggle"
                                                                        href="javascript:;"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                        aria-labelledby="homeSubMenu"
                                                                    >
                                                                        Accessories
                                                                    </a>

                                                                    <ul
                                                                        id="homeSubMenu"
                                                                        class="hs-sub-menu u-header__sub-menu animated hs-position-left fadeOut"
                                                                        aria-labelledby="homeMegaMenu"
                                                                        style={{
                                                                            minWidth:
                                                                                "230px",
                                                                            display:
                                                                                "none",
                                                                        }}
                                                                    >
                                                                        <li class="hs-has-sub-menu">
                                                                            <a
                                                                                class="nav-link u-header__sub-menu-nav-link"
                                                                                href="index.html"
                                                                            >
                                                                                Home-v1
                                                                            </a>
                                                                        </li>

                                                                        <li class="hs-has-sub-menu">
                                                                            <a
                                                                                class="nav-link u-header__sub-menu-nav-link"
                                                                                href="home-v2.html"
                                                                            >
                                                                                Home-v2
                                                                            </a>
                                                                        </li>

                                                                        <li class="hs-has-sub-menu">
                                                                            <a
                                                                                class="nav-link u-header__sub-menu-nav-link"
                                                                                href="home-v3.html"
                                                                            >
                                                                                Home-v3
                                                                            </a>
                                                                        </li>

                                                                        <li class="hs-has-sub-menu">
                                                                            <a
                                                                                class="nav-link u-header__sub-menu-nav-link"
                                                                                href="home-v4.html"
                                                                            >
                                                                                Home-v4
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <nav class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
                                    <div
                                        id="navBar"
                                        class="collapse navbar-collapse u-header__navbar-collapse"
                                    >
                                        <ul class="navbar-nav u-header__navbar-nav">
                                            <li
                                                class="nav-item hs-has-mega-menu u-header__nav-item"
                                                data-event="click"
                                                data-animation-in="slideInUp"
                                                data-animation-out="fadeOut"
                                                data-position="left"
                                            >
                                                <a
                                                    id="homeMegaMenu"
                                                    class="nav-link u-header__nav-link u-header__nav-link-toggle text-sale"
                                                    href="javascript:;"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Super Deals
                                                </a>

                                                <div
                                                    class="hs-mega-menu w-100 u-header__sub-menu"
                                                    aria-labelledby="homeMegaMenu"
                                                >
                                                    <div class="row u-header__mega-menu-wrapper">
                                                        <div class="col-md-3">
                                                            <span class="u-header__sub-menu-title">
                                                                Home & Static
                                                                Pages
                                                            </span>
                                                            <ul class="u-header__sub-menu-nav-group">
                                                                <li>
                                                                    <a
                                                                        href="index.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Home v1
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-v2.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Home v2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-v3.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Home v3
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-v3-full-color-bg.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Home
                                                                        v3.1
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-v4.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Home v4
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-v5.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Home v5
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-v6.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Home v6
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-v7.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Home v7
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="about.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        About
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="contact-v1.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Contact
                                                                        v1
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="contact-v2.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Contact
                                                                        v2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="faq.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        FAQ
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="store-directory.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Store
                                                                        Directory
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="terms-and-conditions.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Terms
                                                                        and
                                                                        Conditions
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="404.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        404
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <span class="u-header__sub-menu-title">
                                                                Shop Pages
                                                            </span>
                                                            <ul class="u-header__sub-menu-nav-group mb-3">
                                                                <li>
                                                                    <a
                                                                        href="../shop/shop-grid.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Shop
                                                                        Grid
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/shop-grid-extended.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Shop
                                                                        Grid
                                                                        Extended
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/shop-list-view.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Shop
                                                                        List
                                                                        View
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/shop-list-view-small.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Shop
                                                                        List
                                                                        View
                                                                        Small
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/shop-left-sidebar.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Shop
                                                                        Left
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/shop-full-width.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Shop
                                                                        Full
                                                                        width
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/shop-right-sidebar.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Shop
                                                                        Right
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <span class="u-header__sub-menu-title">
                                                                Product
                                                                Categories
                                                            </span>
                                                            <ul class="u-header__sub-menu-nav-group">
                                                                <li>
                                                                    <a
                                                                        href="../shop/product-categories-4-column-sidebar.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        4 Column
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/product-categories-5-column-sidebar.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        5 Column
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/product-categories-6-column-full-width.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        6 Column
                                                                        Full
                                                                        width
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/product-categories-7-column-full-width.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        7 Column
                                                                        Full
                                                                        width
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <span class="u-header__sub-menu-title">
                                                                Single Product
                                                                Pages
                                                            </span>
                                                            <ul class="u-header__sub-menu-nav-group mb-3">
                                                                <li>
                                                                    <a
                                                                        href="../shop/single-product-extended.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Single
                                                                        Product
                                                                        Extended
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/single-product-fullwidth.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Single
                                                                        Product
                                                                        Fullwidth
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/single-product-sidebar.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Single
                                                                        Product
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <span class="u-header__sub-menu-title">
                                                                Ecommerce Pages
                                                            </span>
                                                            <ul class="u-header__sub-menu-nav-group">
                                                                <li>
                                                                    <a
                                                                        href="../shop/shop.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Shop
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/cart.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Cart
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/checkout.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Checkout
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/my-account.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        My
                                                                        Account
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/track-your-order.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Track
                                                                        your
                                                                        Order
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/compare.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Compare
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <span class="u-header__sub-menu-title">
                                                                Blog Pages
                                                            </span>
                                                            <ul class="u-header__sub-menu-nav-group mb-3">
                                                                <li>
                                                                    <a
                                                                        href="../blog/blog-v1.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Blog v1
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../blog/blog-v2.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Blog v2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../blog/blog-v3.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Blog v3
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../blog/blog-full-width.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Blog
                                                                        Full
                                                                        Width
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../blog/single-blog-post.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        Single
                                                                        Blog
                                                                        Post
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <span class="u-header__sub-menu-title">
                                                                Shop Columns
                                                            </span>
                                                            <ul class="u-header__sub-menu-nav-group">
                                                                <li>
                                                                    <a
                                                                        href="../shop/shop-7-columns-full-width.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        7 Column
                                                                        Full
                                                                        width
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/shop-6-columns-full-width.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        6 Column
                                                                        Full
                                                                        width
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/shop-5-columns-sidebar.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        5 Column
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/shop-4-columns-sidebar.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        4 Column
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="../shop/shop-3-columns-sidebar.html"
                                                                        class="nav-link u-header__sub-menu-nav-link"
                                                                    >
                                                                        3 Column
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="nav-item u-header__nav-item">
                                                <a
                                                    class="nav-link u-header__nav-link"
                                                    href="#"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    aria-labelledby="pagesSubMenu"
                                                >
                                                    Featured Brands
                                                </a>
                                            </li>

                                            <li class="nav-item u-header__nav-item">
                                                <a
                                                    class="nav-link u-header__nav-link"
                                                    href="#"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    aria-labelledby="blogSubMenu"
                                                >
                                                    Trending Styles
                                                </a>
                                            </li>

                                            <li class="nav-item u-header__nav-item">
                                                <a
                                                    class="nav-link u-header__nav-link"
                                                    href="#"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Gift Cards
                                                </a>
                                            </li>

                                            <li class="nav-item u-header__nav-last-item">
                                                <a
                                                    class="text-gray-90"
                                                    href="#"
                                                    target="_blank"
                                                >
                                                    Free Shipping on Orders $50+
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default App;
