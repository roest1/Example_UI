import React from "react";

const Calendar = () => {

    return (
        <div className="cards-wrapper" style={{"--delay": ".6s"}}>
            <div className="cards-header">
                <div className="cards-header-date">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-chevron-left">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    <div className="title">January 2020</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-chevron-right">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </div>
            </div>
            <div className="cards card">
                <div className="cards-head">
                    <div className="cards-info">
                        <div className="calendar-hour">08.20 <span className="am-pm">pm</span></div>
                        <div className="degree">
                            <svg viewBox="0 0 512 512">
                                <circle cx="330.2" cy="240.1" fill="#feb137" r="78.9" />
                                <g fill="#ffd15b">
                                    <path
                                        d="M320.5 130c-7.4.6-14-5-14.6-12.3l-4.1-47a13.5 13.5 0 0126.9-2.4l4 47c.7 7.4-4.8 14-12.2 14.6z" />
                                    <path
                                        d="M320.5 130c-7.4.6-14-5-14.6-12.3l-4.1-47a13.5 13.5 0 0126.9-2.4l4 47c.7 7.4-4.8 14-12.2 14.6zM438 228.5c-.6-7.4 4.9-14 12.3-14.6l47-4a13.5 13.5 0 012.4 26.8l-47 4.1c-7.5.7-14-4.8-14.7-12.3zM413 307.7a13.5 13.5 0 0119-1.6l36.2 30.3a13.5 13.5 0 01-17.3 20.7l-36.2-30.4a13.5 13.5 0 01-1.6-19z" />
                                    <path
                                        d="M413 307.7a13.5 13.5 0 0119-1.6l36.2 30.3a13.5 13.5 0 01-17.3 20.7l-36.2-30.4a13.5 13.5 0 01-1.6-19zM190 120.6a13.5 13.5 0 0119-1.7l36.2 30.4a13.5 13.5 0 01-17.3 20.6l-36.2-30.3a13.5 13.5 0 01-1.7-19zM447.4 98a13.5 13.5 0 011.7 19l-30.4 36.2A13.5 13.5 0 01398 136l30.4-36.2a13.5 13.5 0 0119-1.6z" />
                                </g>
                                <path
                                    d="M360 335.4a70.8 70.8 0 00-87.4-74A95 95 0 0085 286a85 85 0 00-3.4 170h273a60.4 60.4 0 005.2-120.6z"
                                    fill="#d8ecfe" />
                                <path
                                    d="M360 335.4a70.8 70.8 0 00-87.4-74 95 95 0 00-125.7-68.3 95 95 0 0190.6 74.2 70.8 70.8 0 0187.4 74A60.4 60.4 0 01345.6 456h9.2a60.4 60.4 0 005.1-120.6z"
                                    fill="#c4e2ff" />
                            </svg>
                            81.2° F in Sylhet
                        </div>
                    </div>
                    <svg viewBox="0 0 512 512" fill="currentColor">
                        <path
                            d="M272 512h-32c-26 0-47.2-21.1-47.2-47.1V454c-11-3.5-21.8-8-32.1-13.3l-7.7 7.7a47.1 47.1 0 01-66.7 0l-22.7-22.7a47.1 47.1 0 010-66.7l7.7-7.7c-5.3-10.3-9.8-21-13.3-32.1H47.1c-26 0-47.1-21.1-47.1-47.1v-32.2c0-26 21.1-47.1 47.1-47.1H58c3.5-11 8-21.8 13.3-32.1l-7.7-7.7a47.1 47.1 0 010-66.7l22.7-22.7a47.1 47.1 0 0166.7 0l7.7 7.7c10.3-5.3 21-9.8 32.1-13.3V47.1c0-26 21.1-47.1 47.1-47.1h32.2c26 0 47.1 21.1 47.1 47.1V58c11 3.5 21.8 8 32.1 13.3l7.7-7.7a47.1 47.1 0 0166.7 0l22.7 22.7a47.1 47.1 0 010 66.7l-7.7 7.7c5.3 10.3 9.8 21 13.3 32.1h10.9c26 0 47.1 21.1 47.1 47.1v32.2c0 26-21.1 47.1-47.1 47.1H454c-3.5 11-8 21.8-13.3 32.1l7.7 7.7a47.1 47.1 0 010 66.7l-22.7 22.7a47.1 47.1 0 01-66.7 0l-7.7-7.7c-10.3 5.3-21 9.8-32.1 13.3v10.9c0 26-21.1 47.1-47.1 47.1zM165.8 409.2a176.8 176.8 0 0045.8 19 15 15 0 0111.3 14.5V465c0 9.4 7.7 17.1 17.1 17.1h32.2c9.4 0 17.1-7.7 17.1-17.1v-22.2a15 15 0 0111.3-14.5c16-4.2 31.5-10.6 45.8-19a15 15 0 0118.2 2.3l15.7 15.7a17.1 17.1 0 0024.2 0l22.8-22.8a17.1 17.1 0 000-24.2l-15.7-15.7a15 15 0 01-2.3-18.2 176.8 176.8 0 0019-45.8 15 15 0 0114.5-11.3H465c9.4 0 17.1-7.7 17.1-17.1v-32.2c0-9.4-7.7-17.1-17.1-17.1h-22.2a15 15 0 01-14.5-11.2c-4.2-16.1-10.6-31.6-19-45.9a15 15 0 012.3-18.2l15.7-15.7a17.1 17.1 0 000-24.2l-22.8-22.8a17.1 17.1 0 00-24.2 0l-15.7 15.7a15 15 0 01-18.2 2.3 176.8 176.8 0 00-45.8-19 15 15 0 01-11.3-14.5V47c0-9.4-7.7-17.1-17.1-17.1h-32.2c-9.4 0-17.1 7.7-17.1 17.1v22.2a15 15 0 01-11.3 14.5c-16 4.2-31.5 10.6-45.8 19a15 15 0 01-18.2-2.3l-15.7-15.7a17.1 17.1 0 00-24.2 0l-22.8 22.8a17.1 17.1 0 000 24.2l15.7 15.7a15 15 0 012.3 18.2 176.8 176.8 0 00-19 45.8 15 15 0 01-14.5 11.3H47c-9.4 0-17.1 7.7-17.1 17.1v32.2c0 9.4 7.7 17.1 17.1 17.1h22.2a15 15 0 0114.5 11.3c4.2 16 10.6 31.5 19 45.8a15 15 0 01-2.3 18.2l-15.7 15.7a17.1 17.1 0 000 24.2l22.8 22.8a17.1 17.1 0 0024.2 0l15.7-15.7a15 15 0 0118.2-2.3z">
                        </path>
                        <path
                            d="M256 367.4c-61.4 0-111.4-50-111.4-111.4s50-111.4 111.4-111.4 111.4 50 111.4 111.4-50 111.4-111.4 111.4zm0-192.8a81.5 81.5 0 000 162.8 81.5 81.5 0 000-162.8z">
                        </path>
                    </svg>
                </div>
                <div className="items days">
                    <div className="item">Mon</div>
                    <div className="item">Tue</div>
                    <div className="item">Wed</div>
                    <div className="item">Thu</div>
                    <div className="item">Fri</div>
                    <div className="item">Sat</div>
                    <div className="item">Sun</div>
                </div>
                <div className="items numbers">
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                    <div className="item">5</div>
                    <div className="item">6</div>
                    <div className="item">7</div>
                    <div className="item">8</div>
                    <div className="item">9</div>
                    <div className="item">10</div>
                    <div className="item">11</div>
                    <div className="item">12</div>
                    <div className="item">13</div>
                    <div className="item">14</div>
                    <div className="item">15</div>
                    <div className="item">16</div>
                    <div className="item is-active">17</div>
                    <div className="item">18</div>
                    <div className="item">19</div>
                    <div className="item">20</div>
                    <div className="item">21</div>
                    <div className="item">22</div>
                    <div className="item">23</div>
                    <div className="item">24</div>
                    <div className="item">25</div>
                    <div className="item">26</div>
                    <div className="item">27</div>
                    <div className="item">28</div>
                    <div className="item">29</div>
                    <div className="item">30</div>
                    <div className="item">31</div>
                    <div className="item disable">1</div>
                    <div className="item disable">2</div>
                    <div className="item disable">3</div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;