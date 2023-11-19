import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, ResponsiveContainer } from 'recharts';
import { Select } from 'antd';
import { renderLabel } from '../utils';
import { treeData } from '../constants';

const renderCustomizedTooltip = ({ active, payload }) => {
  const data = payload.map((el) => el.payload)[0];

  if (active && payload && payload.length) {
    return (
      <div style={{ padding: 10, fontSize: 10 }}>
        <p>1. Приоритетные проекты: {data.pv}</p>
      </div>
    );
  }

  return null;
};

const SubChartOne = ({ data }) => {
  const [value, setValue] = useState('2');
  const onChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div style={{ marginLeft: 40, marginTop: 20, marginBottom: 20, display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: 41 }}>Группировка 1</div>
        <Select
          value={value}
          defaultValue="0"
          style={{ width: '80%', height: 40 }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          options={treeData}
          onChange={onChange}
          placeholder="1. Приоритетные проекты"
          treeDefaultExpandAll
        />
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#F4F6FA',
          alignItems: 'flex-start',
          borderRadius: 16,
        }}
      >
        <ResponsiveContainer minWidth={600} maxWidth={850} height={160}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis stroke="#B5BEC7" tick={{ fontSize: 12 }} dataKey="name" />
            <YAxis stroke="#B5BEC7" tick={{ fontSize: 14 }} />
            <Tooltip
              cursor={{ fill: '#E7EAF0' }}
              content={renderCustomizedTooltip}
              wrapperStyle={{
                backgroundColor: 'white',
                borderRadius: 16,
                border: 'none',
                paddingLeft: '10px',
                paddingRight: '10px',
              }}
            />
            <Bar
              animationDuration={1000}
              animationEasing="linear"
              barSize={15}
              radius={[20, 20, 20, 20]}
              dataKey="pv"
              stackId="a"
              fill="#C7DDFF"
            >
              <LabelList
                style={{ fill: '#47647E', fontWeight: 800 }}
                fontSize={8}
                position="top"
                formatter={renderLabel}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SubChartOne;
