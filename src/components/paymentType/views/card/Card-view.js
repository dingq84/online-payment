import React from 'react';

import { InputFilds } from './Card-container';
import visa from '../../../../assets/images/svg/icon_VISA.svg';
import master from '../../../../assets/images/svg/icon_Master.svg';
import jsb from '../../../../assets/images/svg/icon_JCB.svg';

import './Card-view.scss';

export default function CardView(props) {
  const cardInput = InputFilds({
    type: 'number',
    name: '信用卡卡號',
    length: '16',
    id: 'cardNumber'
  });
  const owenerNameInput = InputFilds({
    type: 'english',
    name: '持卡人英文姓名',
    id: 'ownerName'
  });
  const mmyyInput = InputFilds({
    type: 'MMYY',
    name: '有效年月',
    length: '4',
    id: 'cardMMYY'
  });
  const pinInput = InputFilds({
    type: 'number',
    name: '安全驗證碼',
    length: '3',
    inputType: 'password',
    id: 'cardPIN'
  });
  const phoneInput = InputFilds({
    type: 'phone',
    name: '手機號碼',
    length: '10',
    id: 'ownerPhone'
  });

  function handleClick(e) {
    const errorLengths = document.querySelector('.onlinePayment__paymentType__detail--bycard--form').getElementsByTagName('span').length;
    const inputCollection = document.querySelector('.onlinePayment__paymentType__detail--bycard--form').getElementsByTagName('input');
    const isEmpty = [...inputCollection].filter($0 => $0.value === '');
    if (isEmpty.length !== 0 || errorLengths !== 0)
      e.preventDefault();
  }

  return (
    <div className="onlinePayment__paymentType__detail--bycard">
      <div className="onlinePayment__paymentType__detail--bycard--text">
        <span>應付金額</span>
        <span>$ 2000</span>
        <span>支援信用卡種類</span>
        <div>
          <img src={visa} alt="visa" />
          <img src={master} alt="master" />
          <img src={jsb} alt="jsb" />
        </div>
      </div>
      <div className="onlinePayment__paymentType__detail--bycard--form">
        {cardInput}
        {owenerNameInput}
        {mmyyInput}
        {pinInput}
        {phoneInput}
      </div>
      <div className="onlinePayment__paymentType__detail--bycard--warning">
        <h3>注意事項</h3>
        <ul>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ex rerum commodi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa quae neque Dicta facere similique ratione odio delectus!</li>
          <li>Laliquam sapiente. Enim rem asperiores exercitationem corrupti.</li>
        </ul>
      </div>
      <div className="onlinePayment__paymentType__detail--bycard--buttons">
        {props.back}
        {
          React.cloneElement(props.send, {
            onClick: handleClick
          })
        }
      </div>
    </div>
  );
}
