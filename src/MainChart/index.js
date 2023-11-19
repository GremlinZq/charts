import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList, ResponsiveContainer } from 'recharts';
import { DatePicker } from 'antd';

import { CustomTooltip } from '../Tooltip';
import { renderCustomizedLegend } from '../Legends';
import { renderLabel } from '../utils';

const { RangePicker } = DatePicker;

const MainChart = ({ data, setDates }) => {
  const onChange = () => {
    setDates(true);
  };

  return (
    <div>
      <div style={{ marginLeft: 40, marginTop: 20, marginBottom: 20, display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: 41 }}>Выбор времени</div>
        <RangePicker picker="year" style={{ width: '50%', height: 40 }} format="YYYY-MM-DD" onChange={onChange} />
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
        <ResponsiveContainer minWidth={600} maxWidth={850} height={700}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 20,
              bottom: 50,
            }}
          >
            <XAxis stroke="#B5BEC7" dataKey="name" tick={{ fontSize: 14 }} />
            <YAxis stroke="#90A3B4" tick={{ fontSize: 14 }} />
            <Tooltip
              cursor={{ fill: '#E7EAF0' }}
              wrapperStyle={{
                width: 400,
                backgroundColor: 'white',
                borderRadius: '16px',
                paddingLeft: '10px',
                paddingRight: '10px',
              }}
              content={CustomTooltip}
            />
            <Legend verticalAlign="top" content={renderCustomizedLegend} />
            <Bar
              animationDuration={1000}
              animationEasing="linear"
              label="6. Услуги по супервайзерскому сопровождению скважин и Экспертной группы"
              barSize={32}
              radius={[0, 0, 20, 20]}
              stackId="a"
              fill="#626ed4"
            />
            <Bar
              animationDuration={1000}
              animationEasing="linear"
              label="5. Услуги Филиала 644 ПАО “Газпром” и полномочных представителей ПАО “Газпром”в составе Интегрированных проектных офисов"
              barSize={32}
              radius={[0, 0, 20, 20]}
              stackId="a"
              fill="#002558"
            />
            <Bar
              animationDuration={1000}
              animationEasing="linear"
              label="4. ПИР и РД"
              barSize={32}
              radius={[0, 0, 20, 20]}
              dataKey="amt"
              stackId="a"
              fill="#A971F6"
            />
            <Bar
              animationDuration={1000}
              animationEasing="linear"
              label="3. Прочие проекты"
              dataKey="uv"
              stackId="a"
              fill="#02499C"
            />
            <Bar
              animationDuration={1000}
              animationEasing="linear"
              label="2. Проекты комплексных программ по направлениям деятельности"
              dataKey="vv"
              stackId="a"
              fill="#64B9EE"
            ></Bar>
            <Bar
              isAnimationActive={true}
              animationDuration={1000}
              animationEasing="linear"
              label="1. Приоритетные проекты"
              radius={[20, 20, 0, 0]}
              dataKey="pv"
              stackId="a"
              fill="#C7DDFF"
            >
              <LabelList
                style={{ fill: '#47647E', fontWeight: 800, animation: '3s infinite alternate slidein' }}
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

export default MainChart;
