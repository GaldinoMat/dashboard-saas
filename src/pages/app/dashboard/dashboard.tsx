import { Helmet } from 'react-helmet-async'

import DailyOrdersCard from './components/daily-orders-card'
import MonthlyCancelledOrdersCard from './components/monthly-cancelled-orders-card'
import MonthlyOrdersCard from './components/monthly-orders-card'
import MonthlyRevenueCard from './components/monthly-revenue-card'
import PopularProductsChart from './components/popular-products-chart'
import RevenueChart from './components/revenue-chart'

export default function Dashboard() {
  return (
    <main>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthlyRevenueCard />
          <MonthlyOrdersCard />
          <DailyOrdersCard />
          <MonthlyCancelledOrdersCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </main>
  )
}
