import React from 'react';
import ReactDOM from 'react-dom';

import Decoration from './components/decoration/index';
import Pages from './routes/paymentType/index';
import Footer from './components/footer/index';

import './_base.scss';
import './index.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div className="onlinePayment">
    <Decoration />
    <Pages />
    <Footer />
  </div>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
