import React from 'react';

import './Success.scss';

export default function Success(props) {

  return (
    <div className="onlinePayment__success">
      <h2>付款完成!</h2>
      <h3>感謝您的訂購，我們將盡快為您處理您的訂單:)</h3>
      {props.back}
    </div>
  );
}
