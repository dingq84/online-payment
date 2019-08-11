import React from 'react';

import { Counter } from './OrderInfo-container';

import ipadpro from '../../assets/images/ipadpro-9_TP_V4/ipadpro-9_TP_V4.png';
import headphone from '../../assets/images/headphoneIMGL4494_TP_V4/headphoneIMGL4494_TP_V4.png';
import deleteBTN from '../../assets/images/svg/order_btn_delete_normal.svg';

import './OrderInfo.scss';

export default function OrderInfoView() {
  const [ipadCount, ipadCountDOM] = Counter({ cls: "onlinePayment__orderInfo__datas--context--items--wrap--total--count" });
  const [headphoneCount, headphoneCountDOM] = Counter({ cls: "onlinePayment__orderInfo__datas--context--items--wrap--total--count" });
  function controlFontNumber(fonts) {
    return fonts.substring(0, 95) + '...';
  }

  return (
    <div className="onlinePayment__orderInfo">
      <div className="onlinePayment__orderInfo__datas">
        <h1>確認訂單金額</h1>
        <div className="onlinePayment__orderInfo__datas--context">
          <h1>訂單編號201908100111</h1>
          <div className="onlinePayment__orderInfo__datas--context--items">
            <span>
              <img src={ipadpro} alt="ipad" />
            </span>
            <div className="onlinePayment__orderInfo__datas--context--items--wrap">
              <div className="onlinePayment__orderInfo__datas--context--items--wrap--text"
              >
                <h3>Ipad pro</h3>
                <p>
                  {
                    controlFontNumber('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum numquam debitis quibusdam consequuntur quia nisi harum quidem, assumenda consequatur natus alias beatae quos nulla perferendis quisquam, culpa repellat impedit.')
                  }
                </p>
              </div>
              <div className="onlinePayment__orderInfo__datas--context--items--wrap--total">
                {ipadCountDOM}
                <span>
                  {`$${1000 * ipadCount}`}
                </span>
                <div>
                  <img src={deleteBTN} alt="delete" />
                </div>
              </div>
            </div>
          </div>
          <div className="onlinePayment__orderInfo__datas--context--items">
            <span>
              <img src={headphone} alt="headphone" />
            </span>
            <div className="onlinePayment__orderInfo__datas--context--items--wrap">
              <div className="onlinePayment__orderInfo__datas--context--items--wrap--text">
                <h3>Headphone</h3>
                <p>
                  {
                    controlFontNumber('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum numquam debitis quibusdam consequuntur quia nisi harum quidem, assumenda consequatur natus alias beatae quos nulla perferendis quisquam, culpa repellat impedit.')
                  }
                </p>
              </div>
              <div className="onlinePayment__orderInfo__datas--context--items--wrap--total">
                {headphoneCountDOM}
                <span>
                  {`$${1000 * headphoneCount}`}
                </span>
                <div>
                  <img src={deleteBTN} alt="delete" />
                </div>
              </div>
            </div>
          </div>
          <span>
            <h3>Total</h3>
            <h2>
              {`$${1000 * (ipadCount + headphoneCount)}`}
            </h2>
          </span>
        </div>
      </div>
    </div>
  );
}
