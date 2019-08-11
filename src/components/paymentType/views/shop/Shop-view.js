import React from 'react';

import Img711 from '../../../../assets/images/icon_7-11/icon_7-11.png';
import ImgFM from '../../../../assets/images/icon_FM/icon_FM.png';
import ImgOK from '../../../../assets/images/icon_OK/icon_OK.png';
import ImgHilife from '../../../../assets/images/icon_Hilife/icon_Hilife.png';

import './Shop-view.scss';

export default function ShopView(props) {
  return (
    <div className="onlinePayment__paymentType__detail--byshop">
      <h3 className="onlinePayment__paymentType__detail--byshop--title">
        需自行至超商機台輸入代碼，產生繳費單據後至櫃檯繳費。
      </h3>
      <div className="onlinePayment__paymentType__detail--byshop--text">
        <span>應付金額</span>
        <span>$ 2000</span>
        <span>選擇超商</span>
        <div>
          <img src={Img711} alt="711" />
          <img src={ImgFM} alt="FM" />
          <img src={ImgOK} alt="OK" />
          <img src={ImgHilife} alt="Hilife" />
        </div>
      </div>
      <div className="onlinePayment__paymentType__detail--byshop--warning">
        <h3>注意事項</h3>
        <ul>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ex rerum commodi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa quae neque Dicta facere similique ratione odio delectus!</li>
          <li>Laliquam sapiente. Enim rem asperiores exercitationem corrupti.</li>
        </ul>
      </div>
      <div className="onlinePayment__paymentType__detail--byshop--buttons">
        {props.back}
        {props.send}
      </div>
    </div>
  );
}
