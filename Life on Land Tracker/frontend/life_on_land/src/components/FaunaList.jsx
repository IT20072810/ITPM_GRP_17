import React, { useState } from 'react';
import { Input, Row } from 'antd';
import FaunaModal from '../modals/FaunaModal';
import { useParams } from 'react-router-dom';


const FaunaList = ({ faunas }) => {
  const params = useParams()
  const category = params.category;
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFauna = faunas.filter((fauna) =>
    fauna.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return faunas.length == 0 ?
    (
      <div
        style={{
          height: "400px"
        }}
      >
        <h1>No Faunas under the category of {category}</h1>
      </div>
    )
    : (
      <div className="site-card-wrapper">
        <Input.Search placeholder="Search by name" onChange={handleSearch} style={{ marginBottom: '16px' }} />
        <Row gutter={16}>
          {filteredFauna.map((fauna) => (
            <div key={fauna._id}>
              <FaunaModal fauna={fauna} />
            </div>
          ))}
        </Row>
      </div>
    );
};

export default FaunaList;
