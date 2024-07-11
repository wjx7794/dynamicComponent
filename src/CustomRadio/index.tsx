/**
 * @description 单选
 * @author Jack
 * @date 2024-07-11
 */
import type { RadioChangeEvent } from 'antd';
import { Radio, Space } from 'antd';
import React from 'react';
import { DirectionEnum, type IProps } from './config';

const CustomRadio = (props: IProps) => {
  // props
  const {
    value,
    onChange,
    enums,
    direction = DirectionEnum.horizontal,
    disabled = false,
  } = props || {};

  // Radio change Event
  const onRadioChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  return (
    <>
      <Radio.Group onChange={onRadioChange} value={value} disabled={disabled}>
        <Space direction={direction}>
          {(enums || []).map((item) => {
            return (
              <Radio
                key={item.value}
                value={item.value}
                disabled={item.disabled}
              >
                {item.label}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </>
  );
};

export default CustomRadio;
