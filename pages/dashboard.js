//layout
import Layout from "../layouts/default";

//import hook react
import { useState, useEffect } from 'react';

//import Head
import Head from 'next/head';

//import router
import Router from 'next/router';

//import axios
import axios from 'axios';

//import js cookie
import Cookies from 'js-cookie';

function Dashboard() {

    return (
        <Layout>

        <div>
      

        <div className="app-content content ">
          <div className="content-overlay" />
          <div className="header-navbar-shadow" />
          <div className="content-wrapper">
            <div className="content-header row">
            </div>
            <div className="content-body">
              <section id="dashboard-ecommerce">
                <div className="row match-height">
                  <div className="col-xl-4 col-md-6 col-12">
                    <div className="card card-congratulation-medal">
                      <div className="card-body">
                        <h5>Congratulations 🎉</h5>
                        <p className="card-text font-small-3"></p>
                        <h3 className="mb-75 mt-2 pt-50">
                          <a href="javascript:void(0);">$48.9k</a>
                        </h3>
                        <button type="button" className="btn btn-primary">View Sales</button>
                        <img src="app-assets/images/illustration/badge.svg" className="congratulation-medal" alt="Medal Pic" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-md-6 col-12">
                    <div className="card card-statistics">
                      <div className="card-header">
                        <h4 className="card-title">Statistics</h4>
                        <div className="d-flex align-items-center">
                          <p className="card-text font-small-2 mr-25 mb-0">Updated 1 month ago</p>
                        </div>
                      </div>
                      <div className="card-body statistics-body">
                        <div className="row">
                          <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                            <div className="media">
                              <div className="avatar bg-light-primary mr-2">
                                <div className="avatar-content">
                                  <i data-feather="trending-up" className="avatar-icon" />
                                </div>
                              </div>
                              <div className="media-body my-auto">
                                <h4 className="font-weight-bolder mb-0">230k</h4>
                                <p className="card-text font-small-3 mb-0">Sales</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                            <div className="media">
                              <div className="avatar bg-light-info mr-2">
                                <div className="avatar-content">
                                  <i data-feather="user" className="avatar-icon" />
                                </div>
                              </div>
                              <div className="media-body my-auto">
                                <h4 className="font-weight-bolder mb-0">8.549k</h4>
                                <p className="card-text font-small-3 mb-0">Customers</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-sm-0">
                            <div className="media">
                              <div className="avatar bg-light-danger mr-2">
                                <div className="avatar-content">
                                  <i data-feather="box" className="avatar-icon" />
                                </div>
                              </div>
                              <div className="media-body my-auto">
                                <h4 className="font-weight-bolder mb-0">1.423k</h4>
                                <p className="card-text font-small-3 mb-0">Products</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-sm-6 col-12">
                            <div className="media">
                              <div className="avatar bg-light-success mr-2">
                                <div className="avatar-content">
                                  <i data-feather="dollar-sign" className="avatar-icon" />
                                </div>
                              </div>
                              <div className="media-body my-auto">
                                <h4 className="font-weight-bolder mb-0">$9745</h4>
                                <p className="card-text font-small-3 mb-0">Revenue</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row match-height">
                  <div className="col-lg-4 col-12">
                    <div className="row match-height">
                      <div className="col-lg-6 col-md-3 col-6">
                        <div className="card">
                          <div className="card-body pb-50">
                            <h6>Orders</h6>
                            <h2 className="font-weight-bolder mb-1">2,76k</h2>
                            <div id="statistics-order-chart" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-3 col-6">
                        <div className="card card-tiny-line-stats">
                          <div className="card-body pb-50">
                            <h6>Profit</h6>
                            <h2 className="font-weight-bolder mb-1">6,24k</h2>
                            <div id="statistics-profit-chart" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6 col-12">
                        <div className="card earnings-card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-6">
                                <h4 className="card-title mb-1">Earnings</h4>
                                <div className="font-small-2">This Month</div>
                                <h5 className="mb-1">$4055.56</h5>
                                <p className="card-text text-muted font-small-2">
                                  <span className="font-weight-bolder">68.2%</span><span> more earnings than last month.</span>
                                </p>
                              </div>
                              <div className="col-6">
                                <div id="earnings-chart" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-12">
                    <div className="card card-revenue-budget">
                      <div className="row mx-0">
                        <div className="col-md-8 col-12 revenue-report-wrapper">
                          <div className="d-sm-flex justify-content-between align-items-center mb-3">
                            <h4 className="card-title mb-50 mb-sm-0">Revenue Report</h4>
                            <div className="d-flex align-items-center">
                              <div className="d-flex align-items-center mr-2">
                                <span className="bullet bullet-primary font-small-3 mr-50 cursor-pointer" />
                                <span>Earning</span>
                              </div>
                              <div className="d-flex align-items-center ml-75">
                                <span className="bullet bullet-warning font-small-3 mr-50 cursor-pointer" />
                                <span>Expense</span>
                              </div>
                            </div>
                          </div>
                          <div id="revenue-report-chart" />
                        </div>
                        <div className="col-md-4 col-12 budget-wrapper">
                          <div className="btn-group">
                            <button type="button" className="btn btn-outline-primary btn-sm dropdown-toggle budget-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              2020
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);">2020</a>
                              <a className="dropdown-item" href="javascript:void(0);">2019</a>
                              <a className="dropdown-item" href="javascript:void(0);">2018</a>
                            </div>
                          </div>
                          <h2 className="mb-25">$25,852</h2>
                          <div className="d-flex justify-content-center">
                            <span className="font-weight-bolder mr-25">Budget:</span>
                            <span>56,800</span>
                          </div>
                          <div id="budget-chart" />
                          <button type="button" className="btn btn-primary">Increase Budget</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row match-height">
                  <div className="col-lg-8 col-12">
                    <div className="card card-company-table">
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Company</th>
                                <th>Category</th>
                                <th>Views</th>
                                <th>Revenue</th>
                                <th>Sales</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                      <div className="avatar-content">
                                        <img src="../../../app-assets/images/icons/toolbox.svg" alt="Toolbar svg" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="font-weight-bolder">Dixons</div>
                                      <div className="font-small-2 text-muted">meguc@ruj.io</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-primary mr-1">
                                      <div className="avatar-content">
                                        <i data-feather="monitor" className="font-medium-3" />
                                      </div>
                                    </div>
                                    <span>Technology</span>
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  <div className="d-flex flex-column">
                                    <span className="font-weight-bolder mb-25">23.4k</span>
                                    <span className="font-small-2 text-muted">in 24 hours</span>
                                  </div>
                                </td>
                                <td>$891.2</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="font-weight-bolder mr-1">68%</span>
                                    <i data-feather="trending-down" className="text-danger font-medium-1" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                      <div className="avatar-content">
                                        <img src="../../../app-assets/images/icons/parachute.svg" alt="Parachute svg" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="font-weight-bolder">Motels</div>
                                      <div className="font-small-2 text-muted">vecav@hodzi.co.uk</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-success mr-1">
                                      <div className="avatar-content">
                                        <i data-feather="coffee" className="font-medium-3" />
                                      </div>
                                    </div>
                                    <span>Grocery</span>
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  <div className="d-flex flex-column">
                                    <span className="font-weight-bolder mb-25">78k</span>
                                    <span className="font-small-2 text-muted">in 2 days</span>
                                  </div>
                                </td>
                                <td>$668.51</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="font-weight-bolder mr-1">97%</span>
                                    <i data-feather="trending-up" className="text-success font-medium-1" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                      <div className="avatar-content">
                                        <img src="../../../app-assets/images/icons/brush.svg" alt="Brush svg" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="font-weight-bolder">Zipcar</div>
                                      <div className="font-small-2 text-muted">davcilse@is.gov</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-warning mr-1">
                                      <div className="avatar-content">
                                        <i data-feather="watch" className="font-medium-3" />
                                      </div>
                                    </div>
                                    <span>Fashion</span>
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  <div className="d-flex flex-column">
                                    <span className="font-weight-bolder mb-25">162</span>
                                    <span className="font-small-2 text-muted">in 5 days</span>
                                  </div>
                                </td>
                                <td>$522.29</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="font-weight-bolder mr-1">62%</span>
                                    <i data-feather="trending-up" className="text-success font-medium-1" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                      <div className="avatar-content">
                                        <img src="../../../app-assets/images/icons/star.svg" alt="Star svg" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="font-weight-bolder">Owning</div>
                                      <div className="font-small-2 text-muted">us@cuhil.gov</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-primary mr-1">
                                      <div className="avatar-content">
                                        <i data-feather="monitor" className="font-medium-3" />
                                      </div>
                                    </div>
                                    <span>Technology</span>
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  <div className="d-flex flex-column">
                                    <span className="font-weight-bolder mb-25">214</span>
                                    <span className="font-small-2 text-muted">in 24 hours</span>
                                  </div>
                                </td>
                                <td>$291.01</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="font-weight-bolder mr-1">88%</span>
                                    <i data-feather="trending-up" className="text-success font-medium-1" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                      <div className="avatar-content">
                                        <img src="../../../app-assets/images/icons/book.svg" alt="Book svg" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="font-weight-bolder">Cafés</div>
                                      <div className="font-small-2 text-muted">pudais@jife.com</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-success mr-1">
                                      <div className="avatar-content">
                                        <i data-feather="coffee" className="font-medium-3" />
                                      </div>
                                    </div>
                                    <span>Grocery</span>
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  <div className="d-flex flex-column">
                                    <span className="font-weight-bolder mb-25">208</span>
                                    <span className="font-small-2 text-muted">in 1 week</span>
                                  </div>
                                </td>
                                <td>$783.93</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="font-weight-bolder mr-1">16%</span>
                                    <i data-feather="trending-down" className="text-danger font-medium-1" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                      <div className="avatar-content">
                                        <img src="../../../app-assets/images/icons/rocket.svg" alt="Rocket svg" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="font-weight-bolder">Kmart</div>
                                      <div className="font-small-2 text-muted">bipri@cawiw.com</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-warning mr-1">
                                      <div className="avatar-content">
                                        <i data-feather="watch" className="font-medium-3" />
                                      </div>
                                    </div>
                                    <span>Fashion</span>
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  <div className="d-flex flex-column">
                                    <span className="font-weight-bolder mb-25">990</span>
                                    <span className="font-small-2 text-muted">in 1 month</span>
                                  </div>
                                </td>
                                <td>$780.05</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="font-weight-bolder mr-1">78%</span>
                                    <i data-feather="trending-up" className="text-success font-medium-1" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                      <div className="avatar-content">
                                        <img src="../../../app-assets/images/icons/speaker.svg" alt="Speaker svg" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="font-weight-bolder">Payers</div>
                                      <div className="font-small-2 text-muted">luk@izug.io</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-warning mr-1">
                                      <div className="avatar-content">
                                        <i data-feather="watch" className="font-medium-3" />
                                      </div>
                                    </div>
                                    <span>Fashion</span>
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  <div className="d-flex flex-column">
                                    <span className="font-weight-bolder mb-25">12.9k</span>
                                    <span className="font-small-2 text-muted">in 12 hours</span>
                                  </div>
                                </td>
                                <td>$531.49</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="font-weight-bolder mr-1">42%</span>
                                    <i data-feather="trending-up" className="text-success font-medium-1" />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="card card-developer-meetup">
                      <div className="meetup-img-wrapper rounded-top text-center">
                        <img src="../../../app-assets/images/illustration/email.svg" alt="Meeting Pic" height={170} />
                      </div>
                      <div className="card-body">
                        <div className="meetup-header d-flex align-items-center">
                          <div className="meetup-day">
                            <h6 className="mb-0">THU</h6>
                            <h3 className="mb-0">24</h3>
                          </div>
                          <div className="my-auto">
                            <h4 className="card-title mb-25">Developer Meetup</h4>
                            <p className="card-text mb-0">Meet world popular developers</p>
                          </div>
                        </div>
                        <div className="media">
                          <div className="avatar bg-light-primary rounded mr-1">
                            <div className="avatar-content">
                              <i data-feather="calendar" className="avatar-icon font-medium-3" />
                            </div>
                          </div>
                          <div className="media-body">
                            <h6 className="mb-0">Sat, May 25, 2020</h6>
                            <small>10:AM to 6:PM</small>
                          </div>
                        </div>
                        <div className="media mt-2">
                          <div className="avatar bg-light-primary rounded mr-1">
                            <div className="avatar-content">
                              <i data-feather="map-pin" className="avatar-icon font-medium-3" />
                            </div>
                          </div>
                          <div className="media-body">
                            <h6 className="mb-0">Central Park</h6>
                            <small>Manhattan, New york City</small>
                          </div>
                        </div>
                        <div className="avatar-group">
                          <div data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Billy Hopkins" className="avatar pull-up">
                            <img src="../../../app-assets/images/portrait/small/avatar-s-9.jpg" alt="Avatar" width={33} height={33} />
                          </div>
                          <div data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Amy Carson" className="avatar pull-up">
                            <img src="../../../app-assets/images/portrait/small/avatar-s-6.jpg" alt="Avatar" width={33} height={33} />
                          </div>
                          <div data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Brandon Miles" className="avatar pull-up">
                            <img src="../../../app-assets/images/portrait/small/avatar-s-8.jpg" alt="Avatar" width={33} height={33} />
                          </div>
                          <div data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Daisy Weber" className="avatar pull-up">
                            <img src="../../../app-assets/images/portrait/small/avatar-s-20.jpg" alt="Avatar" width={33} height={33} />
                          </div>
                          <div data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Jenny Looper" className="avatar pull-up">
                            <img src="../../../app-assets/images/portrait/small/avatar-s-20.jpg" alt="Avatar" width={33} height={33} />
                          </div>
                          <h6 className="align-self-center cursor-pointer ml-50 mb-0">+42</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="card card-browser-states">
                      <div className="card-header">
                        <div>
                          <h4 className="card-title">Browser States</h4>
                          <p className="card-text font-small-2">Counter August 2020</p>
                        </div>
                        <div className="dropdown chart-dropdown">
                          <i data-feather="more-vertical" className="font-medium-3 cursor-pointer" data-toggle="dropdown" />
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                            <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                            <a className="dropdown-item" href="javascript:void(0);">Last Year</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="browser-states">
                          <div className="media">
                            <img src="../../../app-assets/images/icons/google-chrome.png" className="rounded mr-1" height={30} alt="Google Chrome" />
                            <h6 className="align-self-center mb-0">Google Chrome</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="font-weight-bold text-body-heading mr-1">54.4%</div>
                            <div id="browser-state-chart-primary" />
                          </div>
                        </div>
                        <div className="browser-states">
                          <div className="media">
                            <img src="../../../app-assets/images/icons/mozila-firefox.png" className="rounded mr-1" height={30} alt="Mozila Firefox" />
                            <h6 className="align-self-center mb-0">Mozila Firefox</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="font-weight-bold text-body-heading mr-1">6.1%</div>
                            <div id="browser-state-chart-warning" />
                          </div>
                        </div>
                        <div className="browser-states">
                          <div className="media">
                            <img src="../../../app-assets/images/icons/apple-safari.png" className="rounded mr-1" height={30} alt="Apple Safari" />
                            <h6 className="align-self-center mb-0">Apple Safari</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="font-weight-bold text-body-heading mr-1">14.6%</div>
                            <div id="browser-state-chart-secondary" />
                          </div>
                        </div>
                        <div className="browser-states">
                          <div className="media">
                            <img src="../../../app-assets/images/icons/internet-explorer.png" className="rounded mr-1" height={30} alt="Internet Explorer" />
                            <h6 className="align-self-center mb-0">Internet Explorer</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="font-weight-bold text-body-heading mr-1">4.2%</div>
                            <div id="browser-state-chart-info" />
                          </div>
                        </div>
                        <div className="browser-states">
                          <div className="media">
                            <img src="../../../app-assets/images/icons/opera.png" className="rounded mr-1" height={30} alt="Opera Mini" />
                            <h6 className="align-self-center mb-0">Opera Mini</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="font-weight-bold text-body-heading mr-1">8.4%</div>
                            <div id="browser-state-chart-danger" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h4 className="card-title">Goal Overview</h4>
                        <i data-feather="help-circle" className="font-medium-3 text-muted cursor-pointer" />
                      </div>
                      <div className="card-body p-0">
                        <div id="goal-overview-radial-bar-chart" className="my-2" />
                        <div className="row border-top text-center mx-0">
                          <div className="col-6 border-right py-1">
                            <p className="card-text text-muted mb-0">Completed</p>
                            <h3 className="font-weight-bolder mb-0">786,617</h3>
                          </div>
                          <div className="col-6 py-1">
                            <p className="card-text text-muted mb-0">In Progress</p>
                            <h3 className="font-weight-bolder mb-0">13,561</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="card card-transaction">
                      <div className="card-header">
                        <h4 className="card-title">Transactions</h4>
                        <div className="dropdown chart-dropdown">
                          <i data-feather="more-vertical" className="font-medium-3 cursor-pointer" data-toggle="dropdown" />
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                            <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                            <a className="dropdown-item" href="javascript:void(0);">Last Year</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="transaction-item">
                          <div className="media">
                            <div className="avatar bg-light-primary rounded">
                              <div className="avatar-content">
                                <i data-feather="pocket" className="avatar-icon font-medium-3" />
                              </div>
                            </div>
                            <div className="media-body">
                              <h6 className="transaction-title">Wallet</h6>
                              <small>Starbucks</small>
                            </div>
                          </div>
                          <div className="font-weight-bolder text-danger">- $74</div>
                        </div>
                        <div className="transaction-item">
                          <div className="media">
                            <div className="avatar bg-light-success rounded">
                              <div className="avatar-content">
                                <i data-feather="check" className="avatar-icon font-medium-3" />
                              </div>
                            </div>
                            <div className="media-body">
                              <h6 className="transaction-title">Bank Transfer</h6>
                              <small>Add Money</small>
                            </div>
                          </div>
                          <div className="font-weight-bolder text-success">+ $480</div>
                        </div>
                        <div className="transaction-item">
                          <div className="media">
                            <div className="avatar bg-light-danger rounded">
                              <div className="avatar-content">
                                <i data-feather="dollar-sign" className="avatar-icon font-medium-3" />
                              </div>
                            </div>
                            <div className="media-body">
                              <h6 className="transaction-title">Paypal</h6>
                              <small>Add Money</small>
                            </div>
                          </div>
                          <div className="font-weight-bolder text-success">+ $590</div>
                        </div>
                        <div className="transaction-item">
                          <div className="media">
                            <div className="avatar bg-light-warning rounded">
                              <div className="avatar-content">
                                <i data-feather="credit-card" className="avatar-icon font-medium-3" />
                              </div>
                            </div>
                            <div className="media-body">
                              <h6 className="transaction-title">Mastercard</h6>
                              <small>Ordered Food</small>
                            </div>
                          </div>
                          <div className="font-weight-bolder text-danger">- $23</div>
                        </div>
                        <div className="transaction-item">
                          <div className="media">
                            <div className="avatar bg-light-info rounded">
                              <div className="avatar-content">
                                <i data-feather="trending-up" className="avatar-icon font-medium-3" />
                              </div>
                            </div>
                            <div className="media-body">
                              <h6 className="transaction-title">Transfer</h6>
                              <small>Refund</small>
                            </div>
                          </div>
                          <div className="font-weight-bolder text-success">+ $98</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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
        </Layout>
        
    )

}

export default Dashboard;