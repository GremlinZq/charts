import React from 'react';

export const renderCustomizedLegend = (props) => {
  const { payload } = props;

  const itemsLeft = payload
    .map(({ color, payload }) => {
      return (
        <div style={{ display: 'flex', gap: 13 }}>
          <div style={{ width: 22, height: 22, background: color, borderRadius: '100%' }}></div>
          <div style={{ fontSize: 12, width: 220 }}>{payload.label}</div>
        </div>
      );
    })
    .reverse();

  const itemsRight = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
      <div style={{ display: 'flex', gap: 13 }}>
        <div style={{ width: 22, height: 22, background: '#2c52e1', borderRadius: '100%' }}></div>
        <div style={{ fontSize: 14, width: 50 }}>ДФВ</div>
      </div>
      <div style={{ display: 'flex', gap: 13 }}>
        <div style={{ width: 22, height: 22, background: '#ef549c', borderRadius: '100%' }}></div>
        <div style={{ fontSize: 14, width: 50 }}>ПВА</div>
      </div>
    </div>
  );

  return (
    <div style={{ marginBottom: '62px', marginLeft: '20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>{itemsLeft}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>{itemsRight}</div>
      </div>
    </div>
  );
};
