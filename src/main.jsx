import React from 'react'
import { Suspense, lazy } from "react";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Loader from './components/Loader.jsx';

const Order = lazy(()=> import('./components/management/Order.jsx'))
const Product = lazy(()=> import('./components/management/Product.jsx'))
const Customers = lazy(()=> import('./components/management/Customers.jsx'))
const Transaction = lazy(()=> import('./components/Transaction.jsx'))
const BarChart = lazy(()=> import('./components/charts/BarChart.jsx'))
const PieChart = lazy(()=> import('./components/charts/PieChart.jsx'))
const LineChart = lazy(()=> import('./components/charts/LineChart.jsx'))
const Coupon = lazy(()=> import('./components/basic/Coupon.jsx'))
const Stopwatch = lazy(()=> import('./components/basic/Stopwatch.jsx'))
const Dashboard = lazy(()=> import('./components/Dashboard.jsx'))
const NewProduct = lazy(()=> import('./components/management/NewProduct.jsx'))
const ProductManage = lazy(()=> import('./components/management/ProductManage.jsx'))
const TransactionManage = lazy(()=> import('./components/management/TransactionManage.jsx'))
const Toss = lazy(()=> import('./components/basic/Toss.jsx'))


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route path='/' element={<Dashboard/>} />
    <Route path="order" element={<Order />} />
    <Route path="products" element={<Product />} />
    <Route path="product/new" element={<NewProduct/>} />
    <Route path="admin/product/:id" element={<ProductManage />} />
    <Route path='customers' element={<Customers/>} />
    <Route path='/transaction' element={<Transaction/>} />
    <Route path='admin/transaction/:id' element={<TransactionManage/>} />
    <Route path='/barchart' element={<BarChart/>} />
    <Route path='/pie' element={<PieChart/>} />
    <Route path='/line' element={<LineChart/>} />
    <Route path='/coupon' element={<Coupon/>} />
    <Route path='/stopwatch' element={<Stopwatch/>} />
    <Route path='/toss' element={<Toss/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Suspense fallback={<Loader/>}>
  <RouterProvider router={router}>
  <App />
  </RouterProvider>
  </Suspense>
  </React.StrictMode>,
)
