import { Button } from 'antd';
import React, { type FC } from 'react';

const Foo: FC<{ title: string }> = (props) => {
  return (
    <>
      <h4 style={{ color: 'red' }}>{props.title}</h4>
      <Button type="primary">Primary Buttonxxxx</Button>
    </>
  );
};

export default Foo;
