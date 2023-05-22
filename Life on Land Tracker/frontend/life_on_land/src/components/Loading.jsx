import React from 'react';
import { Spin } from 'antd';

function Loading() {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Spin size="large" spinning={true} />
        </div>
    );
}

export default Loading;
