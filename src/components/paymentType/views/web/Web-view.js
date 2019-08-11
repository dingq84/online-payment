import React from 'react';

import './Web-view.scss';

export default function WebView(props) {
  return (
    <div className="onlinePayment__paymentType__detail--byweb">
      <div className="onlinePayment__paymentType__detail--byweb--text">
        <span>應付金額</span>
        <span>$ 2000</span>
        <span >選擇銀行</span>
        <select name="bank">
          <option name="bank" value="812">台新</option>
          <option name="bank" value="813">中信</option>
          <option name="bank" value="814">華南</option>
        </select>
      </div>
      <div className="onlinePayment__paymentType__detail--byweb--warning">
        <h3>注意事項</h3>
        <ul>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ex rerum commodi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa quae neque Dicta facere similique ratione odio delectus!</li>
          <li>Laliquam sapiente. Enim rem asperiores exercitationem corrupti.</li>
        </ul>
      </div>
      <div className="onlinePayment__paymentType__detail--byweb--buttons">
        {props.back}
        {props.send}
      </div>
    </div>
  )
}