export const CustomTooltip = ({ active, payload, label }) => {
  const data = payload.map((el) => el.payload)[0];

  if (active && payload && payload.length) {
    return (
      <div style={{ padding: 10, fontSize: 10 }}>
        <div>time_2021</div>

        <p>1. Приоритетные проекты: {data.pv}</p>
        <p>2. Проекты комплексных программ по направлениям деятельности: {data.vv}</p>
        <p>3. Прочие проекты: {data.uv}</p>
        <p>4. ПИР и РД: {data.amt}</p>
        <p>
          5. Услуги Филиала 644 ПАО “Газпром” и полномочных представителей ПАО “Газпром” в составе Интегрированных
          проектных офисов: {0}
        </p>
        <p>6. Услуги по супервайзерскому сопровождению скважин и Экспертной группы: {0}</p>
        <p>ДФВ {0}</p>
        <p style={{ marginBottom: 20 }}>ПВА {0}</p>
      </div>
    );
  }

  return null;
};
