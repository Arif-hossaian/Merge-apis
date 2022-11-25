/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card } from 'antd';
import { cardTypesProps } from '../../types/types';

const App: React.FC<cardTypesProps> = ({ title, authorName, content }) => (
  <Card
    title={title}
    extra={<a href="">{authorName}</a>}
    style={{ width: 300 }}
  >
    <p>{content}</p>
  </Card>
);

export default App;
