import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Air purifier', value: 100},
  { name: 'Water purifier', value: 250 },
  { name: 'Climate', value: 500 },
  { name: 'Appliances', value: 400 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function SimplePieChart() {
  return (
    <PieChart width={400} height={400} style={{marginTop: '-50px', marginLeft: "25px"}}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label={(entry) => entry.name}
      >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default SimplePieChart;