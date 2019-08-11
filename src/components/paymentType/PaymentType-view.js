import React from 'react';

import Routes from '../../routes/paymentType/index';

import './PaymentType.scss';

export default function PaymentTypeView() {
  // const [routes, routesDOM] = Routes();
  console.log(Routes)
  return (
    <div className="onlinePayment__paymentType">
      <h1 className="onlinePayment__paymentType--title">
        選擇付款方式
      </h1>
      <Routes />
    </div>
  )
}