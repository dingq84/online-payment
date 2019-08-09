import React from 'react';
import ReactDOM from 'react-dom';

import Decoration from './components/decoration/index';
import OrderInfo from './components/orderInfo/index';
import PaymentType from './components/paymentType/index';
import Footer from './components/footer/index';

import './_base.scss';
import './index.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div className="onlinePayment">
    <Decoration />
    <OrderInfo />
    <PaymentType />
    <Footer />
  </div>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
