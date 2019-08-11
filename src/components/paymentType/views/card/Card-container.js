import React, { useState } from 'react';

import notice from '../../../../assets/images/svg/icon_notice.svg';

function InputFilds(props) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function checkLength(val) {
    if (props.length && val.length < props.length)
      setError(`${props.name}必須是${props.length}個字`)
    else
      setError('');
  }
  function checkMMYY(val) {
    if (!['0', '1'].includes(val.substring(0, 1)))
      setError('有效月份需是01~12之間1')
    else if (!/\d/.test(val.substring(1, 2)))
      setError('有效月份需是01~12之間')
    else if (!['1', '2'].includes(val.substring(3, 4)))
      setError('有效年份需大於19年')
    else
      setError('');
  }

  function checkPhoneNumber(val) {
    if (val.substring(0, 2) !== '09')
      setError('手機號碼必須是09開頭')
    else
      checkLength(val);
  }

  function checkNumber(val) {
    if (!/^\d+$/.test(val))
      setError('只能輸入數字')
    else
      checkLength(val);
  }

  function checkEnglish(val) {
    if (/[^a-zA-Z-]/.test(val))
      setError('只能輸入英文字母')
    else
      checkLength(val);
  }

  function handleChange(e) {
    let newVal;
    if (props.id === 'cardMMYY' &&
      e.target.value.indexOf('/') === -1 &&
      e.target.value.length === 2
    ) {
      newVal = e.target.value + '/'
    } else
      newVal = e.target.value;

    setValue(newVal);
    switch (props.type) {
      case 'number':
        checkNumber(newVal);
        break;
      case 'english':
        checkEnglish(newVal);
        break;
      case 'phone':
        checkPhoneNumber(newVal);
        break;
      case 'MMYY':
        checkMMYY(newVal);
        break;
      default:
        throw new Error('type Error');
    }
  }

  const inputDOM =
    <div>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        id={props.id}
        type={(props.inputType) ? props.inputType : "text"}
        value={value}
        onChange={handleChange}
        maxLength={(props.id === 'cardMMYY') ? parseInt(props.length) + 1 : props.length}
      />
      {
        error &&
        <span>
          <img src={notice} alt="notice" />
          {error}
        </span>
      }
    </div>

  return inputDOM;
}

export { InputFilds }