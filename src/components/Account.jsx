import React from "react";

const AccountProfile = () => {
    return (
        <div className="account-profile">
            <img 
                src="https://via.placeholder.com/84?text=User"
                alt="User"
            />
            <div className="blob-wrap">
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
            </div>
            <div className="account-name">User Name</div>
            <div className="account-title">Admin Dashboard</div>
        </div>
    );
};

const AccountCard = () => {
    return (
        <div className="account card">
            <div className="account-cash">$ 170.00</div>
            <div className="account-income">Total Saved Per Ton of Emissions</div>
        </div>
    );
};

const Account = () => {

    return (
        <div className="account-wrapper" style={{"--delay": ".8s"}}>
            <AccountProfile />
            <AccountCard />
        </div>
    );
};

export default Account;