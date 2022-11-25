import { Col, Row } from 'antd';
import React from 'react';
import Card from '../shared/card/Card';

const AllPosts: React.FC<any> = ({ post }) => {
  return (
    <Row gutter={20}>
      {post.map((i: any, id: number) => (
        <div style={{ padding: 10 }}>
          <Col
            key={id}
            xs={{ span: 12, offset: 1 }}
            lg={{ span: 12, offset: 2 }}
          >
            <Card title={i?.title} authorName={i?.username} content={i?.body} />
          </Col>
        </div>
      ))}
    </Row>
  );
};

export default AllPosts;
