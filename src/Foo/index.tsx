import React, { type FC } from 'react';
import { Button } from 'antd';

const Foo: FC<{ title: string }> = (props) => {
  return (
    <>
      <h4 style={{color: 'red'}}>{props.title}</h4>
      <Button type="primary">Primary Button</Button>
    </>
  )
};

export default Foo;
