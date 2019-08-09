import React, { useState, useRef } from 'react';

function PaymentTypeButton(props) {
  const [currentPage, setCurrentPage] = useState();
  const buttonRef = useRef(null);

  function handleClick(pos) {
    document.querySelector('.onlinePayment__orderInfo__datas').style.display = 'none';
    document.querySelector('.onlinePayment__paymentType--warning').style.display = 'none';
    const childeNodeArray = [...buttonRef.current.childNodes];
    for (let i = 0; i < childeNodeArray.length; i++) {
      if (i === pos)
        childeNodeArray[i].style.backgroundColor = 'var(--color-dark-blue)'
      else
        childeNodeArray[i].style.backgroundColor = 'var(--color-white)';
    }
    setCurrentPage(pos);
  }

  const buttonDOM =
    <div
      className={props.cls}
      ref={buttonRef}
    >
      <div onClick={() => handleClick(0)} >
        <img src={props.src[0]} alt={props.alt[0]} />
        <h2>{props.text[0]}</h2>
      </div>
      <div onClick={() => handleClick(1)}>
        <img src={props.src[1]} alt={props.alt[1]} />
        <h2>{props.text[1]}</h2>
      </div>
      <div onClick={() => handleClick(2)}>
        <img src={props.src[2]} alt={props.alt[2]} />
        <h2>{props.text[2]}</h2>
      </div>
    </div>

  const backButton = (
    <button
      style={{
        width: '180px',
        height: '50px',
        borderRadius: '50px',
        color: 'var(--color-white)',
        padding: '13px 58px',
        fontSize: '16px',
        backgroundColor: 'var(--color-light-blue)',
        marginRight: '35px'
      }}
    >
      返回訂單
    </button>
  );

  const sendButton = (
    <button
      style={{
        width: '180px',
        height: '50px',
        borderRadius: '50px',
        color: 'var(--color-white)',
        padding: '13px 58px',
        fontSize: '16px',
        backgroundColor: 'var(--color-yellow)'
      }}
    >
      送出訂單
    </button>
  )
  const cardDetailDOM = <h1>123</h1>
  const webATMDOM = (
    <>
      <div>
        <span>應付金額</span>
        <span>$ 2000</span>
        <span>選擇銀行</span>
        <select name="bank">
          <option name="bank" value="812">台新</option>
          <option name="bank" value="813">中信</option>
          <option name="bank" value="814">華南</option>
        </select>
      </div>
      <div>
        <h3>注意事項</h3>
        <ul
          style={{
            paddingLeft: '14px'
          }}
        >
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ex rerum commodi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa quae neque Dicta facere similique ratione odio delectus!</li>
          <li>Laliquam sapiente. Enim rem asperiores exercitationem corrupti.</li>
        </ul>
      </div>
      <div>
        {backButton}
        {sendButton}
      </div>
    </>
  );
  const shopATM = (
    <>
      <h3
        style={{
          fontSize: '16px',
          color: 'var(--color-dark-grey)',
          marginBottom: '18px'
        }}
      >需自行至超商機台輸入代碼，產生繳費單據後至櫃檯繳費。</h3>
      <div
        style={{
          color: 'var(--color-dark-grey)',
          fontSize: '14px',
          marginBottom: '12px'
        }}
      >
        <span
          style={{
            marginRight: '20px'
          }}
        >應付金額</span>
        <span
          style={{
            fontSize: '30px',
            color: 'var(--color-light-blue)',
            marginRight: '43px'
          }}
        >$ 2000</span>
        <span>選擇超商</span>
      </div>
      <div
        style={{
          color: 'var(--color-light-grey)',
          marginBottom: '18px'
        }}
      >
        <h3>注意事項</h3>
        <ul>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ex rerum commodi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa quae neque Dicta facere similique ratione odio delectus!</li>
          <li>Laliquam sapiente. Enim rem asperiores exercitationem corrupti.</li>
        </ul>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {backButton}
        {sendButton}
      </div>
    </>
  );

  let finalPage = '';
  if (currentPage === 0)
    finalPage = cardDetailDOM
  else if (currentPage === 1)
    finalPage = webATMDOM
  else if (currentPage === 2)
    finalPage = shopATM

  return [buttonDOM, finalPage];
}

export { PaymentTypeButton }