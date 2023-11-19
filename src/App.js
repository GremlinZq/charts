import React, { useEffect, useState } from 'react';

import MainChart from './MainChart';
import SubChartOne from './SubCharts/SubChartOne';
import SubChartTwo from './SubCharts/SubChartTwo';
import SubChartThree from './SubCharts/SubChartThree';
import SubChartFour from './SubCharts/SubChartFour';

import './App.css';
import { data } from './constants';

function App() {
  const [isDates, setDates] = useState(false);
  const [d, setD] = useState(data);

  useEffect(() => {
    if (isDates) {
      setD([
        ...data,
        {
          name: 2022,
          uv: 44500,
          pv: 444500,
          vv: 32200,
          amt: 122500,
        },
      ]);
    }
  }, [isDates]);

  return (
    <div style={{ background: 'fff' }}>
      <div style={{ width: '100vw', display: 'flex', gap: 10 }}>
        <div style={{ width: '50%', borderRadius: 16 }}>
          <MainChart data={d} setDates={setDates} />
        </div>
        <div style={{ width: '50%', borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <SubChartOne data={d} />
          </div>
          <div>
            <SubChartTwo data={d} />
          </div>
          <div>
            <SubChartThree data={d} />
          </div>
          <div>
            <SubChartFour data={d} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
