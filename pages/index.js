//layout
import Head from "next/head";
import Layout from "../layouts/default";
import LinkCSS from "../components/Head";
import Link from "next/link";
import {FaFonticonsFi, FaHandsHelping, FaBook} from "react-icons/fa"
import {  } from "react-icons";


function Home() {

    return(
      <>
            <Head>
                <title>MKBM - 2023 - Moch Surya Aji Sumbaga</title>
                <LinkCSS/>
            </Head>
          

<div className="horizontal-layout horizontal-menu  navbar-floating footer-static " data-open="hover" data-menu="horizontal-menu" data-col="">
  <ul className="main-search-list-defaultlist d-none">
    <li className="d-flex align-items-center"><a href="javascript:void(0);">
        <h6 className="section-label mt-75 mb-0">Files</h6>
      </a></li>
    <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between w-100" href="app-file-manager.html">
        <div className="d-flex">
          <div className="mr-75"><img src="../../../app-assets/images/icons/xls.png" alt="png" height={32} /></div>
          <div className="search-data">
            <p className="search-data-title mb-0">Two new item submitted</p><small className="text-muted">Marketing Manager</small>
          </div>
        </div><small className="search-data-size mr-50 text-muted">'17kb</small>
      </a></li>
    <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between w-100" href="app-file-manager.html">
        <div className="d-flex">
          <div className="mr-75"><img src="../../../app-assets/images/icons/jpg.png" alt="png" height={32} /></div>
          <div className="search-data">
            <p className="search-data-title mb-0">52 JPG file Generated</p><small className="text-muted">FontEnd Developer</small>
          </div>
        </div><small className="search-data-size mr-50 text-muted">'11kb</small>
      </a></li>
    <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between w-100" href="app-file-manager.html">
        <div className="d-flex">
          <div className="mr-75"><img src="../../../app-assets/images/icons/pdf.png" alt="png" height={32} /></div>
          <div className="search-data">
            <p className="search-data-title mb-0">25 PDF File Uploaded</p><small className="text-muted">Digital Marketing Manager</small>
          </div>
        </div><small className="search-data-size mr-50 text-muted">'150kb</small>
      </a></li>
    <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between w-100" href="app-file-manager.html">
        <div className="d-flex">
          <div className="mr-75"><img src="../../../app-assets/images/icons/doc.png" alt="png" height={32} /></div>
          <div className="search-data">
            <p className="search-data-title mb-0">Anna_Strong.doc</p><small className="text-muted">Web Designer</small>
          </div>
        </div><small className="search-data-size mr-50 text-muted">'256kb</small>
      </a></li>
    <li className="d-flex align-items-center"><a href="javascript:void(0);">
        <h6 className="section-label mt-75 mb-0">Members</h6>
      </a></li>
    <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between py-50 w-100" href="app-user-view.html">
        <div className="d-flex align-items-center">
          <div className="avatar mr-75"><img src="../../../app-assets/images/portrait/small/avatar-s-8.jpg" alt="png" height={32} /></div>
          <div className="search-data">
            <p className="search-data-title mb-0">John Doe</p><small className="text-muted">UI designer</small>
          </div>
        </div>
      </a></li>
    <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between py-50 w-100" href="app-user-view.html">
        <div className="d-flex align-items-center">
          <div className="avatar mr-75"><img src="../../../app-assets/images/portrait/small/avatar-s-1.jpg" alt="png" height={32} /></div>
          <div className="search-data">
            <p className="search-data-title mb-0">Michal Clark</p><small className="text-muted">FontEnd Developer</small>
          </div>
        </div>
      </a></li>
    <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between py-50 w-100" href="app-user-view.html">
        <div className="d-flex align-items-center">
          <div className="avatar mr-75"><img src="../../../app-assets/images/portrait/small/avatar-s-14.jpg" alt="png" height={32} /></div>
          <div className="search-data">
            <p className="search-data-title mb-0">Milena Gibson</p><small className="text-muted">Digital Marketing Manager</small>
          </div>
        </div>
      </a></li>
    <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between py-50 w-100" href="app-user-view.html">
        <div className="d-flex align-items-center">
          <div className="avatar mr-75"><img src="../../../app-assets/images/portrait/small/avatar-s-6.jpg" alt="png" height={32} /></div>
          <div className="search-data">
            <p className="search-data-title mb-0">Anna Strong</p><small className="text-muted">Web Designer</small>
          </div>
        </div>
      </a></li>
  </ul>
  <ul className="main-search-list-defaultlist-other-list d-none">
    <li className="auto-suggestion justify-content-between"><a className="d-flex align-items-center justify-content-between w-100 py-50">
        <div className="d-flex justify-content-start"><span className="mr-75" data-feather="alert-circle" /><span>No results found.</span></div>
      </a></li>
  </ul>
  <div className="horizontal-menu-wrapper">
    <div className="header-navbar navbar-expand-sm navbar navbar-horizontal floating-nav navbar-light navbar-shadow menu-border" role="navigation" data-menu="menu-wrapper" data-menu-type="floating-nav">
      <div className="navbar-header">
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item mr-auto"><a className="navbar-brand" href="../../../html/ltr/horizontal-menu-template/index.html"><span className="brand-logo">
                <svg viewBox="0 0 139 95" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={24}>
                  <defs>
                    <linearGradient id="linearGradient-1" x1="100%" y1="10.5120544%" x2="50%" y2="89.4879456%">
                      <stop stopColor="#000000" offset="0%" />
                      <stop stopColor="#FFFFFF" offset="100%" />
                    </linearGradient>
                    <linearGradient id="linearGradient-2" x1="64.0437835%" y1="46.3276743%" x2="37.373316%" y2="100%">
                      <stop stopColor="#EEEEEE" stopOpacity={0} offset="0%" />
                      <stop stopColor="#FFFFFF" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <g id="Artboard" transform="translate(-400.000000, -178.000000)">
                      <g id="Group" transform="translate(400.000000, 178.000000)">
                        <path className="text-primary" id="Path" d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z" style={{fill: 'currentColor'}} />
                        <path id="Path1" d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z" fill="url(#linearGradient-1)" opacity="0.2" />
                        <polygon id="Path-2" fill="#000000" opacity="0.049999997" points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325" />
                        <polygon id="Path-21" fill="#000000" opacity="0.099999994" points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338" />
                        <polygon id="Path-3" fill="url(#linearGradient-2)" opacity="0.099999994" points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288" />
                      </g>
                    </g>
                  </g>
                </svg></span>
              <h2 className="brand-text mb-0">Vuexy</h2>
            </a></li>
          <li className="nav-item nav-toggle"><a className="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i className="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x" /></a></li>
        </ul>
      </div>
      <div className="shadow-bottom" />
      <div className="navbar-container main-menu-content" data-menu="menu-container">
        <ul className="nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation">
          <li className="dropdown nav-item" data-menu="dropdown"><a className="nav-link d-flex align-items-center" href="index.html" ><FaFonticonsFi/><span data-i18n="Dashboards">Notification</span></a>
          </li>
          <li className="dropdown nav-item" data-menu="dropdown"><a className="nav-link d-flex align-items-center" href="#" data-toggle="dropdown"><FaHandsHelping/><span data-i18n="Apps">Help</span></a>
          </li>
          <li className="dropdown nav-item" data-menu="dropdown"><a className="dropdown-toggle nav-link d-flex align-items-center" href="#" data-toggle="dropdown"><FaBook/><span data-i18n="Pages">Pages</span></a>
            <ul className="dropdown-menu">
              <li className="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a className="dropdown-item d-flex align-items-center dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Authentication"><i data-feather="unlock" /><span data-i18n="Authentication">Authentication</span></a>
                <ul className="dropdown-menu">
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-auth-login-v1.html" data-toggle="dropdown" data-i18n="LoginV1" target="_blank"><i data-feather="circle" /><span data-i18n="LoginV1">Login v1</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-auth-login-v2.html" data-toggle="dropdown" data-i18n="LoginV2" target="_blank"><i data-feather="circle" /><span data-i18n="LoginV2">Login v2</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-auth-register-v1.html" data-toggle="dropdown" data-i18n="RegisterV1" target="_blank"><i data-feather="circle" /><span data-i18n="RegisterV1">Register v1</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-auth-register-v2.html" data-toggle="dropdown" data-i18n="RegisterV2" target="_blank"><i data-feather="circle" /><span data-i18n="RegisterV2">Register v2</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-auth-forgot-password-v1.html" data-toggle="dropdown" data-i18n="ForgotPasswordV1" target="_blank"><i data-feather="circle" /><span data-i18n="ForgotPasswordV1">Forgot Password v1</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-auth-forgot-password-v2.html" data-toggle="dropdown" data-i18n="ForgotPasswordV2" target="_blank"><i data-feather="circle" /><span data-i18n="ForgotPasswordV2">Forgot Password v2</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-auth-reset-password-v1.html" data-toggle="dropdown" data-i18n="ResetPasswordV1" target="_blank"><i data-feather="circle" /><span data-i18n="ResetPasswordV1">Reset Password v1</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-auth-reset-password-v2.html" data-toggle="dropdown" data-i18n="ResetPasswordV2" target="_blank"><i data-feather="circle" /><span data-i18n="ResetPasswordV2">Reset Password v2</span></a>
                  </li>
                </ul>
              </li>
              <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-account-settings.html" data-toggle="dropdown" data-i18n="Account Settings"><i data-feather="settings" /><span data-i18n="Account Settings">Account Settings</span></a>
              </li>
              <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-profile.html" data-toggle="dropdown" data-i18n="Profile"><i data-feather="user" /><span data-i18n="Profile">Profile</span></a>
              </li>
              <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-faq.html" data-toggle="dropdown" data-i18n="FAQ"><i data-feather="help-circle" /><span data-i18n="FAQ">FAQ</span></a>
              </li>
              <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-knowledge-base.html" data-toggle="dropdown" data-i18n="Knowledge Base"><i data-feather="info" /><span data-i18n="Knowledge Base">Knowledge Base</span></a>
              </li>
              <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-pricing.html" data-toggle="dropdown" data-i18n="Pricing"><i data-feather="dollar-sign" /><span data-i18n="Pricing">Pricing</span></a>
              </li>
              <li className="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a className="dropdown-item d-flex align-items-center dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Blog"><i data-feather="clipboard" /><span data-i18n="Blog">Blog</span></a>
                <ul className="dropdown-menu">
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-blog-list.html" data-toggle="dropdown" data-i18n="List"><i data-feather="circle" /><span data-i18n="List">List</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-blog-detail.html" data-toggle="dropdown" data-i18n="Detail"><i data-feather="circle" /><span data-i18n="Detail">Detail</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-blog-edit.html" data-toggle="dropdown" data-i18n="Edit"><i data-feather="circle" /><span data-i18n="Edit">Edit</span></a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a className="dropdown-item d-flex align-items-center dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Mail Template"><i data-feather="mail" /><span data-i18n="Mail Template">Mail Template</span></a>
                <ul className="dropdown-menu">
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html" data-toggle="dropdown" data-i18n="Welcome" target="_blank"><i data-feather="circle" /><span data-i18n="Welcome">Welcome</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html" data-toggle="dropdown" data-i18n="Reset Password" target="_blank"><i data-feather="circle" /><span data-i18n="Reset Password">Reset Password</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html" data-toggle="dropdown" data-i18n="Verify Email" target="_blank"><i data-feather="circle" /><span data-i18n="Verify Email">Verify Email</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html" data-toggle="dropdown" data-i18n="Deactivate Account" target="_blank"><i data-feather="circle" /><span data-i18n="Deactivate Account">Deactivate Account</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html" data-toggle="dropdown" data-i18n="Invoice" target="_blank"><i data-feather="circle" /><span data-i18n="Invoice">Invoice</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html" data-toggle="dropdown" data-i18n="Promotional" target="_blank"><i data-feather="circle" /><span data-i18n="Promotional">Promotional</span></a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a className="dropdown-item d-flex align-items-center dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Miscellaneous"><i data-feather="file" /><span data-i18n="Miscellaneous">Miscellaneous</span></a>
                <ul className="dropdown-menu">
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-misc-coming-soon.html" data-toggle="dropdown" data-i18n="Coming Soon" target="_blank"><i data-feather="circle" /><span data-i18n="Coming Soon">Coming Soon</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-misc-not-authorized.html" data-toggle="dropdown" data-i18n="Not Authorized" target="_blank"><i data-feather="circle" /><span data-i18n="Not Authorized">Not Authorized</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-misc-under-maintenance.html" data-toggle="dropdown" data-i18n="Maintenance" target="_blank"><i data-feather="circle" /><span data-i18n="Maintenance">Maintenance</span></a>
                  </li>
                  <li data-menu><a className="dropdown-item d-flex align-items-center" href="page-misc-error.html" data-toggle="dropdown" data-i18n="Error" target="_blank"><i data-feather="circle" /><span data-i18n="Error">Error</span></a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
       
          <li className="nav-item ml-auto"><Link className="nav-link d-flex align-items-center btn btn-primary" href="/login"><i data-feather="home" /><span data-i18n="Dashboards">SignIn</span></Link>
          </li>
          <li className="nav-item ml-1"><Link className="nav-link d-flex align-items-center btn btn-primary" href="/register"><i data-feather="home" /><span data-i18n="Dashboards">SignUp</span></Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  




  <div className="app-content content ecommerce-application">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper">
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <h2 className="content-header-title float-left mb-0">Product List</h2>
          </div>
        </div>
      </div>
      <div className="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
        <div className="form-group breadcrumb-right">
          <div className="dropdown">
            <button className="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="grid" /></button>
            <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item" href="app-todo.html"><i className="mr-1" data-feather="check-square" /><span className="align-middle">Todo</span></a><a className="dropdown-item" href="app-chat.html"><i className="mr-1" data-feather="message-square" /><span className="align-middle">Chat</span></a><a className="dropdown-item" href="app-email.html"><i className="mr-1" data-feather="mail" /><span className="align-middle">Email</span></a><a className="dropdown-item" href="app-calendar.html"><i className="mr-1" data-feather="calendar" /><span className="align-middle">Calendar</span></a></div>
          </div>
        </div>
      </div>
    </div>
    <div className="content-detached content-right">
      <div className="content-body">
        <section id="ecommerce-header">
          <div className="row">
            <div className="col-sm-12">
              <div className="ecommerce-header-items">
                <div className="result-toggler">
                  <button className="navbar-toggler shop-sidebar-toggler" type="button" data-toggle="collapse">
                    <span className="navbar-toggler-icon d-block d-lg-none"><i data-feather="menu" /></span>
                  </button>
                  <div className="search-results">16285 results found</div>
                </div>
                <div className="view-options d-flex">
                  <div className="btn-group dropdown-sort">
                    <button type="button" className="btn btn-outline-primary dropdown-toggle mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="active-sorting">Featured</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);">Featured</a>
                      <a className="dropdown-item" href="javascript:void(0);">Lowest</a>
                      <a className="dropdown-item" href="javascript:void(0);">Highest</a>
                    </div>
                  </div>
                  <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-icon btn-outline-primary view-btn grid-view-btn">
                      <input type="radio" name="radio_options" id="radio_option1" defaultChecked />
                      <i data-feather="grid" className="font-medium-3" />
                    </label>
                    <label className="btn btn-icon btn-outline-primary view-btn list-view-btn">
                      <input type="radio" name="radio_options" id="radio_option2" />
                      <i data-feather="list" className="font-medium-3" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="body-content-overlay" />
        <section id="ecommerce-searchbar" className="ecommerce-searchbar">
          <div className="row mt-1">
            <div className="col-sm-12">
              <div className="input-group input-group-merge">
                <input type="text" className="form-control search-product" id="shop-search" placeholder="Search Product" aria-label="Search..." aria-describedby="shop-search" />
                <div className="input-group-append">
                  <span className="input-group-text"><i data-feather="search" className="text-muted" /></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ecommerce-products" className="grid-view">
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img className="img-fluid card-img-top" src="../../../app-assets/images/pages/eCommerce/1.png" alt="img-placeholder" /></a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                  </ul>
                </div>
                <div>
                  <h6 className="item-price">$339.99</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html">Apple Watch Series 5</a>
                <span className="card-text item-company">By <a href="javascript:void(0)" className="company-name">Apple</a></span>
              </h6>
              <p className="card-text item-description">
                On Retina display that never sleeps, so it’s easy to see the time and other important information, without
                raising or tapping the display. New location features, from a built-in compass to current elevation, help users
                better navigate their day, while international emergency calling1 allows customers to call emergency services
                directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available
                in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$339.99</h4>
                </div>
              </div>
              <a href="javascript:void(0)" className="btn btn-light btn-wishlist">
                <i data-feather="heart" />
                <span>Wishlist</span>
              </a>
              <a href="javascript:void(0)" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img className="img-fluid card-img-top" src="../../../app-assets/images/pages/eCommerce/2.png" alt="img-placeholder" />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                  </ul>
                </div>
                <div>
                  <h6 className="item-price">$669.99</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html">Apple iPhone 11 (64GB, Black)</a>
                <span className="card-text item-company">By <a href="javascript:void(0)" className="company-name">Apple</a></span>
              </h6>
              <p className="card-text item-description">
                The Apple iPhone 11 is a great smartphone, which was loaded with a lot of quality features. It comes with a
                waterproof and dustproof body which is the key attraction of the device. The excellent set of cameras offer
                excellent images as well as capable of recording crisp videos. However, expandable storage and a fingerprint
                scanner would have made it a perfect option to go for around this price range.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$699.99</h4>
                </div>
              </div>
              <a href="javascript:void(0)" className="btn btn-light btn-wishlist">
                <i data-feather="heart" className="text-danger" />
                <span>Wishlist</span>
              </a>
              <a href="javascript:void(0)" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html"><img className="img-fluid card-img-top" src="../../../app-assets/images/pages/eCommerce/3.png" alt="img-placeholder" /></a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                  </ul>
                </div>
                <div>
                  <div className="item-cost">
                    <h6 className="item-price">$999.99</h6>
                  </div>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html">Apple iMac 27-inch</a>
                <span className="card-text item-company">By <a href="javascript:void(0)" className="company-name">Apple</a></span>
              </h6>
              <p className="card-text item-description">
                The all-in-one for all. If you can dream it, you can do it on iMac. It’s beautifully &amp; incredibly intuitive and
                packed with tools that let you take any idea to the next level. And the new 27-inch model elevates the
                experience in way, with faster processors and graphics, expanded memory and storage, enhanced audio and video
                capabilities, and an even more stunning Retina 5K display. It’s the desktop that does it all — better and faster
                than ever.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$999.99</h4>
                  <p className="card-text shipping"><span className="badge badge-pill badge-light-success">Free Shipping</span></p>
                </div>
              </div>
              <a href="javascript:void(0)" className="btn btn-light btn-wishlist">
                <i data-feather="heart" />
                <span>Wishlist</span>
              </a>
              <a href="javascript:void(0)" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img className="img-fluid card-img-top" src="../../../app-assets/images/pages/eCommerce/4.png" alt="img-placeholder" /></a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                  </ul>
                </div>
                <div className="item-cost">
                  <h6 className="item-price">$49.99</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html">OneOdio A71 Wired Headphones</a>
                <span className="card-text item-company">By <a href="javascript:void(0)" className="company-name">OneOdio</a></span>
              </h6>
              <p className="card-text item-description">
                Omnidirectional detachable boom mic upgrades the headphones into a professional headset for gaming, business,
                podcasting and taking calls on the go. Better pick up your voice. Control most electric devices through voice
                activation, or schedule a ride with Uber and order a pizza. OneOdio A71 Wired Headphones voice-controlled device
                turns any home into a smart device on a smartphone or tablet.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$49.99</h4>
                </div>
              </div>
              <a href="javascript:void(0)" className="btn btn-light btn-wishlist">
                <i data-feather="heart" />
                <span>Wishlist</span>
              </a>
              <a href="javascript:void(0)" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img className="img-fluid card-img-top" src="../../../app-assets/images/pages/eCommerce/5.png" alt="img-placeholder" />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                  </ul>
                </div>
                <div className="item-cost">
                  <h6 className="item-price">$999.99</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html">
                  Apple - MacBook Air® (Latest Model) - 13.3" Display - Silver
                </a>
                <span className="card-text item-company">By <a href="javascript:void(0)" className="company-name">Apple</a></span>
              </h6>
              <p className="card-text item-description">
                MacBook Air is a thin, lightweight laptop from Apple. MacBook Air features up to 8GB of memory, a
                fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.1 Its thin,
                light, and durable enough to take everywhere you go-and powerful enough to do everything once you get there,
                better.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$999.99</h4>
                </div>
              </div>
              <a href="javascript:void(0)" className="btn btn-light btn-wishlist">
                <i data-feather="heart" className="text-danger" />
                <span>Wishlist</span>
              </a>
              <a href="javascript:void(0)" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img className="img-fluid card-img-top" src="../../../app-assets/images/pages/eCommerce/6.png" alt="img-placeholder" />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                  </ul>
                </div>
                <div className="item-cost">
                  <h6 className="item-price">$429.99</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html"> Switch Pro Controller </a>
                <span className="card-text item-company">By <a href="javascript:void(0)" className="company-name">Sharp</a></span>
              </h6>
              <p className="card-text item-description">
                The Nintendo Switch Pro Controller is one of the priciest "baseline" controllers in the current console
                generation, but it's also sturdy, feels good to play with, has an excellent direction pad, and features
                impressive motion sensors and vibration systems. On top of all of that, it uses Bluetooth, so you don't need an
                adapter to use it with your PC.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$429.99</h4>
                  <p className="card-text shipping"><span className="badge badge-pill badge-light-success">Free Shipping</span></p>
                </div>
              </div>
              <a href="javascript:void(0)" className="btn btn-light btn-wishlist">
                <i data-feather="heart" />
                <span>Wishlist</span>
              </a>
              <a href="javascript:void(0)" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img className="img-fluid card-img-top" src="../../../app-assets/images/pages/eCommerce/7.png" alt="img-placeholder" />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                  </ul>
                </div>
                <div className="item-cost">
                  <h6 className="item-price">$129.29</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html"> Google - Google Home - White/Slate fabric </a>
                <span className="card-text item-company">By <a href="javascript:void(0)" className="company-name">Google</a></span>
              </h6>
              <p className="card-text item-description">
                Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant. Use
                voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is compatible with
                Android and iOS operating systems, and can control compatible smart devices such as Chromecast or Nest.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$129.29</h4>
                  <p className="card-text shipping">
                    <span className="badge badge-pill badge-light-success">Free Shipping</span>
                  </p>
                </div>
              </div>
              <a href="javascript:void(0)" className="btn btn-light btn-wishlist">
                <i data-feather="heart" />
                <span>Wishlist</span>
              </a>
              <a href="javascript:void(0)" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img className="img-fluid card-img-top" src="../../../app-assets/images/pages/eCommerce/8.png" alt="img-placeholder" />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                  </ul>
                </div>
                <div className="item-cost">
                  <h6 className="item-price">$7999.99</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html"> Sony 4K Ultra HD LED TV </a>
                <span className="card-text item-company">By <a href="javascript:void(0)" className="company-name">Apple</a></span>
              </h6>
              <p className="card-text item-description">
                Sony 4K Ultra HD LED TV has 4K HDR Support. The TV provides clear visuals and provides distinct sound quality
                and an immersive experience. This TV has Yes HDMI ports &amp; Yes USB ports. Connectivity options included are HDMI.
                You can connect various gadgets such as your laptop using the HDMI port. The TV comes with a 1 Year warranty.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$29.99</h4>
                </div>
              </div>
              <a href="javascript:void(0)" className="btn btn-light btn-wishlist">
                <i data-feather="heart" />
                <span>Wishlist</span>
              </a>
              <a href="javascript:void(0)" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img className="img-fluid card-img-top" src="../../../app-assets/images/pages/eCommerce/9.png" alt="img-placeholder" />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                  </ul>
                </div>
                <div className="item-cost">
                  <h6 className="item-price">$14.99</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html"> OnePlus 7 Pro </a>
                <span className="card-text item-company">By <a href="javascript:void(0)" className="company-name">Philips</a></span>
              </h6>
              <p className="card-text item-description">
                The OnePlus 7 Pro features a brand new design, with a glass back and front and curved sides. The phone feels
                very premium but’s it’s also very heavy. The Nebula Blue variant looks slick but it’s quite slippery, which
                makes single-handed use a real challenge. It has a massive 6.67-inch ‘Fluid AMOLED’ display with a QHD+
                resolution, 90Hz refresh rate and support for HDR 10+ content. The display produces vivid colours, deep blacks
                and has good viewing angles.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$14.99</h4>
                </div>
              </div>
              <a href="javascript:void(0)" className="btn btn-light btn-wishlist">
                <i data-feather="heart" />
                <span>Wishlist</span>
              </a>
              <a href="javascript:void(0)" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
        </section>
        <section id="ecommerce-pagination">
          <div className="row">
            <div className="col-sm-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center mt-2">
                  <li className="page-item prev-item"><a className="page-link" href="javascript:void(0);" /></li>
                  <li className="page-item active"><a className="page-link" href="javascript:void(0);">1</a></li>
                  <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                  <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
                  <li className="page-item" aria-current="page"><a className="page-link" href="javascript:void(0);">4</a></li>
                  <li className="page-item"><a className="page-link" href="javascript:void(0);">5</a></li>
                  <li className="page-item"><a className="page-link" href="javascript:void(0);">6</a></li>
                  <li className="page-item"><a className="page-link" href="javascript:void(0);">7</a></li>
                  <li className="page-item next-item"><a className="page-link" href="javascript:void(0);" /></li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div className="sidebar-detached sidebar-left">
      <div className="sidebar">
        <div className="sidebar-shop">
          <div className="row">
            <div className="col-sm-12">
              <h6 className="filter-heading d-none d-lg-block">Filters</h6>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="multi-range-price">
                <h6 className="filter-title mt-0">Multi Range</h6>
                <ul className="list-unstyled price-range" id="price-range">
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="priceAll" name="price-range" className="custom-control-input" defaultChecked />
                      <label className="custom-control-label" htmlFor="priceAll">All</label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="priceRange1" name="price-range" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="priceRange1">&lt;=$10</label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="priceRange2" name="price-range" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="priceRange2">$10 - $100</label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="priceARange3" name="price-range" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="priceARange3">$100 - $500</label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="priceRange4" name="price-range" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="priceRange4">&gt;= $500</label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="price-slider">
                <h6 className="filter-title">Price Range</h6>
                <div className="price-slider">
                  <div className="range-slider mt-2" id="price-slider" />
                </div>
              </div>
              <div id="product-categories">
                <h6 className="filter-title">Categories</h6>
                <ul className="list-unstyled categories-list">
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="category1" name="category-filter" className="custom-control-input" defaultChecked />
                      <label className="custom-control-label" htmlFor="category1">Appliances</label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="category2" name="category-filter" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="category2">Audio</label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="category3" name="category-filter" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="category3">Cameras &amp; Camcorders</label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="category4" name="category-filter" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="category4">Car Electronics &amp; GPS</label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="category5" name="category-filter" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="category5">Cell Phones</label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="category6" name="category-filter" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="category6">Computers &amp; Tablets</label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="category7" name="category-filter" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="category7">Health, Fitness &amp; Beauty</label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="category8" name="category-filter" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="category8">Office &amp; School Supplies</label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="category9" name="category-filter" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="category9">TV &amp; Home Theater</label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="category10" name="category-filter" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="category10">Video Games</label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="brands">
                <h6 className="filter-title">Brands</h6>
                <ul className="list-unstyled brand-list">
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="productBrand1" />
                      <label className="custom-control-label" htmlFor="productBrand1">Insignia™</label>
                    </div>
                    <span>746</span>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="productBrand2" defaultChecked />
                      <label className="custom-control-label" htmlFor="productBrand2">Samsung</label>
                    </div>
                    <span>633</span>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="productBrand3" />
                      <label className="custom-control-label" htmlFor="productBrand3">Metra</label>
                    </div>
                    <span>591</span>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="productBrand4" />
                      <label className="custom-control-label" htmlFor="productBrand4">HP</label>
                    </div>
                    <span>530</span>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="productBrand5" defaultChecked />
                      <label className="custom-control-label" htmlFor="productBrand5">Apple</label>
                    </div>
                    <span>442</span>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="productBrand6" />
                      <label className="custom-control-label" htmlFor="productBrand6">GE</label>
                    </div>
                    <span>394</span>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="productBrand7" />
                      <label className="custom-control-label" htmlFor="productBrand7">Sony</label>
                    </div>
                    <span>350</span>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="productBrand8" />
                      <label className="custom-control-label" htmlFor="productBrand8">Incipio</label>
                    </div>
                    <span>320</span>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="productBrand9" />
                      <label className="custom-control-label" htmlFor="productBrand9">KitchenAid</label>
                    </div>
                    <span>318</span>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="productBrand10" />
                      <label className="custom-control-label" htmlFor="productBrand10">Whirlpool</label>
                    </div>
                    <span>298</span>
                  </li>
                </ul>
              </div>
              <div id="ratings">
                <h6 className="filter-title">Ratings</h6>
                <div className="ratings-list">
                  <a href="javascript:void(0)">
                    <ul className="unstyled-list list-inline">
                      <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                      <li>&amp; up</li>
                    </ul>
                  </a>
                  <div className="stars-received">160</div>
                </div>
                <div className="ratings-list">
                  <a href="javascript:void(0)">
                    <ul className="unstyled-list list-inline">
                      <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                      <li>&amp; up</li>
                    </ul>
                  </a>
                  <div className="stars-received">176</div>
                </div>
                <div className="ratings-list">
                  <a href="javascript:void(0)">
                    <ul className="unstyled-list list-inline">
                      <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                      <li>&amp; up</li>
                    </ul>
                  </a>
                  <div className="stars-received">291</div>
                </div>
                <div className="ratings-list">
                  <a href="javascript:void(0)">
                    <ul className="unstyled-list list-inline">
                      <li className="ratings-list-item"><i data-feather="star" className="filled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                      <li className="ratings-list-item"><i data-feather="star" className="unfilled-star" /></li>
                      <li>&amp; up</li>
                    </ul>
                  </a>
                  <div className="stars-received">190</div>
                </div>
              </div>
              <div id="clear-filters">
                <button type="button" className="btn btn-block btn-primary">Clear All Filters</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <div className="sidenav-overlay" />
  <div className="drag-target" />
  <footer className="footer footer-static footer-light">
    <p className="clearfix mb-0"><span className="float-md-left d-block d-md-inline-block mt-25">COPYRIGHT © 2020<a className="ml-25" href="https://1.envato.market/pixinvent_portfolio" target="_blank">Pixinvent</a><span className="d-none d-sm-inline-block">, All rights Reserved</span></span><span className="float-md-right d-none d-md-block">Hand-crafted &amp; Made with<i data-feather="heart" /></span></p>
  </footer>
  <button className="btn btn-primary btn-icon scroll-top" type="button"><i data-feather="arrow-up" /></button>
</div>




    <script src="app-assets/vendors/js/vendors.min.js"></script>



    <script src="app-assets/vendors/js/ui/jquery.sticky.js"></script>
    <script src="app-assets/vendors/js/extensions/wNumb.min.js"></script>
    <script src="app-assets/vendors/js/extensions/nouislider.min.js"></script>
    <script src="app-assets/vendors/js/extensions/toastr.min.js"></script>



    <script src="app-assets/js/core/app-menu.js"></script>
    <script src="app-assets/js/core/app.js"></script>
    <script src="app-assets/js/scripts/pages/app-ecommerce.js"></script>
</>
    )
}
export default Home