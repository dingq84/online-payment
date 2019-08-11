import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';


import Home from '../../components/paymentType/views/Home';
import Card from '../../components/paymentType/views/card/Card-view';
import Web from '../../components/paymentType/views/web/Web-view';
import Shop from '../../components/paymentType/views/shop/Shop-view';
import Success from '../../components/paymentType/views/Success';
import OrderInfo from '../../components/orderInfo/index';

import card from '../../assets/images/svg/icon_PayByCard.svg';
import atm from '../../assets/images/svg/icon_PayByATM.svg';
import shop from '../../assets/images/svg/icon_PayByShop.svg';

import './index.scss';

export default function Index() {
  const back =
    <Link to='/'>
      <button>
        返回訂單
      </button>
    </Link>
  const send =
    <Link to='/success'>
      <button>
        送出訂單
      </button>
    </Link>
  const backHome =
    <Link to='/'>
      <button
        style={{
          width: '180px',
          height: '50px',
          cursor: 'pointer',
          borderRadius: '50px',
          color: 'var(--color-white)',
          padding: '13px 58px',
          fontSize: '16px',
          backgroundColor: 'var(--color-yellow)'
        }}
      >
        回首頁
      </button>
    </Link>

  return (
    <Router>
      <div className="onlinePayment__pages--routes">
        <Route path="/" exact component={OrderInfo} />
        <h1 className="onlinePayment__pages--routes--title">
          選擇付款方式
        </h1>
        <div className="onlinePayment__pages--routes--buttons">
          <NavLink to="/card">
            <div key='card'>
              <img src={card} alt={card} />
              <h2>使用信用卡付款</h2>
            </div>
          </NavLink>
          <NavLink to="/web">
            <div key='web'>
              <img src={atm} alt={atm} />
              <h2>使用WebATM付款</h2>
            </div>
          </NavLink>
          <NavLink to="/shop">
            <div key='shop'>
              <img src={shop} alt={shop} />
              <h2>使用超商代碼付款</h2>
            </div>
          </NavLink>
        </div>

        <div className="onlinePayment__pages--routes--detail">
          <Route path='/' exact component={Home} />
          <Route
            path="/card"
            render={(props) => <Card {...props} back={back} send={send} />}
          />
          <Route
            path="/web"
            render={(props) => <Web {...props} back={back} send={send} />}
          />
          <Route
            path="/shop"
            render={(props) => <Shop {...props} back={back} send={send} />}
          />
          <Route
            path="/success"
            render={(props) => <Success {...props} back={backHome} />}
          />
        </div>
      </div>
    </Router>
  );
}