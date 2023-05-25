

export default function NavbarTop({user}){
  return(
    <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow">
    <div className="navbar-container d-flex content">
      <div className="bookmark-wrapper d-flex align-items-center">
        <ul className="nav navbar-nav d-xl-none">
          <li className="nav-item"><a className="nav-link menu-toggle" href=""><i className="ficon" data-feather="menu" /></a></li>
        </ul>
        <ul className="nav navbar-nav bookmark-icons">
          <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-email.html" data-toggle="tooltip" data-placement="top" title="Email"><i className="ficon" data-feather="mail" /></a></li>
          <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-chat.html" data-toggle="tooltip" data-placement="top" title="Chat"><i className="ficon" data-feather="message-square" /></a></li>
          <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-calendar.html" data-toggle="tooltip" data-placement="top" title="Calendar"><i className="ficon" data-feather="calendar" /></a></li>
          <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-todo.html" data-toggle="tooltip" data-placement="top" title="Todo"><i className="ficon" data-feather="check-square" /></a></li>
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
      <ul className="nav navbar-nav align-items-center ml-auto">
      
        <li className="nav-item d-none d-lg-block"><a className="nav-link nav-link-style"><i className="ficon" data-feather="moon" /></a></li>
        <li className="nav-item nav-search"><a className="nav-link nav-link-search"><i className="ficon" data-feather="search" /></a>
          <div className="search-input">
            <div className="search-input-icon"><i data-feather="search" /></div>
            <input className="form-control input" type="text" placeholder="Explore Vuexy..." tabIndex={-1} data-search="search" />
            <div className="search-input-close"><i data-feather="x" /></div>
            <ul className="search-list search-list-main" />
          </div>
        </li>
        <li className="nav-item dropdown dropdown-user"><a className="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="user-nav d-sm-flex d-none"><span className="user-name font-weight-bolder">{user.name}</span><span className="user-status">{user.email}</span></div><span className="avatar"><img className="round" src="../../../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height={40} width={40} /><span className="avatar-status-online" /></span>
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-user"><a className="dropdown-item" href="page-profile.html"><i className="mr-50" data-feather="user" /> Profile</a><a className="dropdown-item" href="app-email.html"><i className="mr-50" data-feather="mail" /> Inbox</a><a className="dropdown-item" href="app-todo.html"><i className="mr-50" data-feather="check-square" /> Task</a><a className="dropdown-item" href="app-chat.html"><i className="mr-50" data-feather="message-square" /> Chats</a>
            <div className="dropdown-divider" /><a className="dropdown-item" href="page-account-settings.html"><i className="mr-50" data-feather="settings" /> Settings</a><a className="dropdown-item" href="page-pricing.html"><i className="mr-50" data-feather="credit-card" /> Pricing</a><a className="dropdown-item" href="page-faq.html"><i className="mr-50" data-feather="help-circle" /> FAQ</a><a className="dropdown-item" href="page-auth-login-v2.html"><i className="mr-50" data-feather="power" /> Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  )
}