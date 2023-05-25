//import Link
import Link from 'next/link';
import Script from 'next/script';

function Navbar() {

    return (
        <header>
<div>
  <nav className="header-navbar navbar navbar-expand-lg align-items-center  navbar-light navbar-shadow">
    <div className="navbar-container d-flex content">
      <div className="bookmark-wrapper d-flex align-items-center">
        <ul className="nav navbar-nav d-xl-none">
          <li className="nav-item"><a className="nav-link menu-toggle" href=""><i className="ficon" data-feather="menu" /></a></li>
        </ul>
        <ul className="nav navbar-nav bookmark-icons">
          <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-email.html" data-toggle="tooltip" data-placement="top" title="Email"><i className="ficon" data-feather="mail" /></a></li>
          <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-chat.html" data-toggle="tooltip" data-placement="top" title="Chat"><i className="ficon" data-feather="message-square" /></a></li>
          <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-calendar.html" data-toggle="tooltip" data-placement="top" title="Calendar"><i className="ficon" data-feather="calendar" /></a></li>
          <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-todo.html" data-toggle="tooltip" data-placement="top" title="Todo"><Link type="button" href="/login" className="btn btn-primary">Login</Link></a></li>
          <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-todo.html" data-toggle="tooltip" data-placement="top" title="Todo"><Link type="button" href="/register" className="btn btn-primary">Register</Link></a></li>
          
        </ul>
        <ul className="nav navbar-nav">
          <li className="nav-item d-none d-lg-block"><a className="nav-link bookmark-star"><i className="ficon text-warning" data-feather="star" /></a>
            <div className="bookmark-input search-input">
              <div className="bookmark-input-icon"><i data-feather="search" /></div>
              <input className="form-control input" type="text" placeholder="Bookmark" tabIndex={0} data-search="search" />
              <ul className="search-list search-list-bookmark" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <button className="btn btn-primary btn-icon scroll-top" type="button"><i data-feather="arrow-up" /></button>
</div>
        </header>
    )

}

export default Navbar
