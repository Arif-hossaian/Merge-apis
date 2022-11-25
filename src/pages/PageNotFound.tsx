import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, page not found."
    extra={
      <Link to="/">
        <Button type="primary">Back Home</Button>
      </Link>
    }
  />
);

export default PageNotFound;
