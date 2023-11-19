import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, ResponsiveContainer } from 'recharts';
import { renderLabel } from '../utils';

const renderCustomizedTooltip = ({ active, payload }) => {
  const data = payload.map((el) => el.payload)[0];

  if (active && payload && payload.length) {
    return (
      <div style={{ padding: 10, fontSize: 10 }}>
        <p>3. Прочие проекты: {data.uv}</p>
      </div>
    );
  }

  return null;
};

const SubChartThree = ({ data }) => {
  return (
    <div>
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
            <XAxis stroke="#B5BEC7" dataKey="name" tick={{ fontSize: 12 }} />
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
              dataKey="uv"
              stackId="a"
              fill="#02499C"
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

export default SubChartThree;
