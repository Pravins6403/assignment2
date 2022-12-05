import React from 'react';
import{ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid,Legend,BarChart,Bar,} from 'recharts';
// import Card from '../UI/Card/Card';
// import classes from './Home.module.css';


const pdata = [
  {
    name:'python',
    student:603 ,
    fees:522
  },
  {
    name:'java',
    student:404 ,
    fees:488
  },
  {
    name:'javascript',
    student:350 ,
    fees:354
  },
  {
    name:'php',
    student:160 ,
    fees:852
  },
  {
    name:'c#',
    student:500 ,
    fees:754
  },
]

function Home(){
 
  return (
    <div className='container-fluid'>
      {/* {console.log(data)} */}
      <ResponsiveContainer width="100%" aspect={3}>
      <LineChart width={730} height={250} data={pdata}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis/>
 <Tooltip/>
 <Legend/>
  <Line dataKey="student" stroke='red' activeDot={{r:8}}/>
  <Line dataKey="fees" stroke='green' activeDot={{r:8}}/>
</LineChart>


      </ResponsiveContainer>
    </div>
    
  );
};

export default Home;
