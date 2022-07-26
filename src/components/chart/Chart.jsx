import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DashboardRounded } from '@mui/icons-material';

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const Chart = ({aspect, title}) => {
  return (
    <div className='chart'>
      <div className="title">{title}</div>
   <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3"  className='chartGrid'/>
          <XAxis dataKey="name"  stroke="gray" strokeDasharray="3 3" fontSize={14} fontWeight={500}/>
          <YAxis strokeDasharray="3 3"  stroke="gray" fontSize={14} fontWeight={500}/>
          <Tooltip />
          <Area type="monotone" dataKey="Total" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={.5} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart