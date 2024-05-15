import React from 'react';
import { FaSearch } from 'react-icons/fa';
import userpic from '../assets/userpic.png';
import data from '../assets/data.json';
import { HiTrendingUp, HiTrendingDown } from 'react-icons/hi';
import './dash.css';
import { BiMaleFemale } from "react-icons/bi";

import { Chart, LinearScale } from 'chart.js';
import { BarChart, DoughnutChart } from './Charts';
import Table from '../components/DasboardTable'



const Dashboard = () => {
  const WidgetItem = ({ heading, value, percent, color, amount = false }) => (
    <article className="widget flex mt-6">
      <div className="widget-info">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="text-green-600 flex items-center">
            <HiTrendingUp /> +{percent}%{' '}
          </span>
        ) : (
          <span className="text-red-600 flex items-center">
            <HiTrendingDown /> {percent}%{' '}
          </span>
        )}
      </div>

      <div
        className="widget-circle"
        style={{
          background: `conic-gradient(
            ${color} ${(Math.abs(percent) / 100) * 360}deg,
            rgb(255, 255, 255) 0
          )`,
        }}
      >
        <span style={{ color }}>{percent}%</span>
      </div>
    </article>
  );

  const CategoryItem = ({ color, value, heading }) => (
    <div className="category-item">
      <h5>{heading}</h5>
      <div>
        <div
          style={{
            backgroundColor: color,
            width: `${value}%`,
          }}
        ></div>
      </div>
      <span>{value}%</span>
    </div>
  );

  return (
    <div className="container p-7 overflow-y-auto">
      <div className="flex items-center border border-gray-300 rounded-md p-3">
        <div className="text-gray-400">
          <FaSearch className="text-[20px] mr-2" />
        </div>
        <input type="text" className="w-full outline-none p-[8px] mr-[20px] rounded-lg" />
        <div className="text-gray-400">
          <img className="h-10 w-10 object-fill" src={userpic} alt="profile" />
        </div>
      </div>

      <section className="widget-container flex justify-between">
        <WidgetItem percent={90} amount={true} value={340000} heading="Revenue" color="rgb(0,115,255)" />
        <WidgetItem percent={-14} value={400} heading="Users" color="rgb(0 198 202)" />
        <WidgetItem percent={80} value={23000} heading="Transactions" color="rgb(255 196 0)" />
        <WidgetItem percent={30} value={1000} heading="Products" color="rgb(76 0 255)" />
      </section>

      <section className="graph-container gap-[18px] mt-6">
        <div className="revenue-chart">
          <h2>Revenue & Transaction</h2>
          <BarChart
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            data_2={[300, 144, 433, 655, 237, 755, 190]}
            title_1="Revenue"
            title_2="Transaction"
            bgColor_1="rgb(0,115,255)"
            bgColor_2="rgba(53,162,235,0.8)"
          />
        </div>

        <div className="dashboard-categories">
          <h2>Inventory</h2>
          <div>
            {data.categories.map((item, index) => (
              <CategoryItem
                key={index}
                heading={item.heading}
                value={item.value}
                color={`hsl(${item.value * 4}, ${item.value}%, 50%)`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="transaction-container">
      <div className="gender-chart">
        <h2>Gender Ratio</h2>

        <DoughnutChart
          labels={["Female", "Male"]}
          data={[12, 19]}
          backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
          cutout={90}
        />

        <p>
          <BiMaleFemale />
        </p>
      </div>
      <Table data={data.transaction} />
    </section>
    </div>
  );
};

export default Dashboard;
