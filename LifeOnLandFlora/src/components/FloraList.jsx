import React, { useState } from 'react';
import { Card, Col, Input, Row } from 'antd';
import FloraModal from '../modals/FloraModal';

const FloraList = ({ floras }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFauna = floras.filter((fauna) =>
    fauna.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="site-card-wrapper">
      <Input.Search placeholder="Search by name" onChange={handleSearch} style={{ marginBottom: '16px' }} />
      <Row gutter={16}>
        {filteredFauna.map((flora) => (

          <FloraModal flora={flora} />


        ))}
      </Row>
    </div>
  );
};

export default FloraList;
