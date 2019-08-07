import React from 'react';

import './OrderInfo.scss';

export default function OrderInfoView() {
  return (
    <div className="onlinePayment__orderInfo">
      <div className="onlinePayment__orderInfo__steps">
        <h1 className="onlinePayment__orderInfo__steps--title">
          訂單資訊
        </h1>
        <div className="onlinePayment__orderInfo__steps--progress">
          <div className="onlinePayment__orderInfo__steps--progress--circle" />
          <div className="onlinePayment__orderInfo__steps--progress--line" />
          <span className="onlinePayment__orderInfo__steps--progress--text">
            <span>
              Step1
            </span>
            <span>
              選定支付方式
            </span>
          </span>
          <div className="onlinePayment__orderInfo__steps--progress--circle" />
          <div className="onlinePayment__orderInfo__steps--progress--line" />
          <span className="onlinePayment__orderInfo__steps--progress--text">
            <span>
              Step2
            </span>
            <span>
              輸入信用卡資訊或取得支付代碼
            </span>
          </span>
          <div className="onlinePayment__orderInfo__steps--progress--circle" />
        </div>
      </div>
      <div className="onlinePayment__orderInfo__datas">
        <h1>確認訂單金額</h1>
        <div className="onlinePayment__orderInfo__datas--context">
          <h1>訂單編號201908100111</h1>
          <div>123</div>
          <div>123</div>
          <span>
            <h3>Total</h3>
            <h2>$2000</h2>
          </span>
        </div>
      </div>
    </div>
  );
}
