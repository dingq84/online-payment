import React from 'react';

import './Decoration.scss';

export default function DecorationView() {
  return (
    <div className="onlinePayment__decoration">
      <div className="onlinePayment__decoration__topbar">
        <span className="color1" />
        <span className="color2" />
        <span className="color3" />
        <span className="color4" />
        <span className="color5" />
        <span className="color6" />
      </div>
      <div className="onlinePayment__decoration__steps">
        <h1 className="onlinePayment__decoration__steps--title">
          訂單資訊
        </h1>
        <div className="onlinePayment__decoration__steps--progress">
          <div className="onlinePayment__decoration__steps--progress--circle" />
          <div className="onlinePayment__decoration__steps--progress--line" />
          <span className="onlinePayment__decoration__steps--progress--text">
            <span>
              Step1
            </span>
            <span>
              選定支付方式
            </span>
          </span>
          <div className="onlinePayment__decoration__steps--progress--circle" />
          <div className="onlinePayment__decoration__steps--progress--line" />
          <span className="onlinePayment__decoration__steps--progress--text">
            <span>
              Step2
            </span>
            <span>
              輸入信用卡資訊或取得支付代碼
            </span>
          </span>
          <div className="onlinePayment__decoration__steps--progress--circle" />
        </div>
      </div>
    </div>
  );
}
