import React from 'react';

import { PaymentTypeButton } from './PaymentType-container';

import card from '../../assets/images/svg/icon_PayByCard.svg';
import atm from '../../assets/images/svg/icon_PayByATM.svg';
import shop from '../../assets/images/svg/icon_PayByShop.svg';

import './PaymentType.scss';

export default function PaymentTypeView() {
  const [paymentTypeBtns, paymentTypeDetailDOM] = PaymentTypeButton({
    cls: 'onlinePayment__paymentType--buttons',
    src: [card, atm, shop],
    alt: ['card', 'atm', 'shop'],
    text: ['使用信用卡付款', '使用WebATM付款', '使用超商代碼付款']
  });

  return (
    <div className="onlinePayment__paymentType">
      <h1 className="onlinePayment__paymentType--title">
        選擇付款方式
      </h1>
      {paymentTypeBtns}
      <div className="onlinePayment__paymentType--warning">
        <h3>注意事項</h3>
        <ul>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ex rerum commodi, consequatur, quos, doloremque error sit cupiditate totam tempore harum rem voluptatibus necessitatibus delectus sequi laborum excepturi nemo saepe.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa quae neque quibusdam magni quisquam magnam voluptatibus, laudantium illo! Porro reprehenderit suscipit eum hic. Dicta facere similique ratione odio delectus!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A distinctio sequi similique sint pariatur, reprehenderit consequatur ab, perspiciatis provident enim quisquam necessitatibus aspernatur, aliquam sapiente. Enim rem asperiores exercitationem corrupti.</li>
        </ul>
      </div>
      <div className="onlinePayment__paymentType__detail">
        {paymentTypeDetailDOM}
      </div>
    </div>
  )
}