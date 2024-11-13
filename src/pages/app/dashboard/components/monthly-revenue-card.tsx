import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthRevenue } from '@/api/get-month-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function MonthlyRevenueCard() {
  const { data: monthRevenueAmount } = useQuery({
    queryFn: getMonthRevenue,
    queryKey: ['metrics', 'month-receipt'],
  })
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Monthly revenue
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenueAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthRevenueAmount.receipt / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthRevenueAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthRevenueAmount.diffFromLastMonth}%
                  </span>{' '}
                  relative to last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthRevenueAmount.diffFromLastMonth}%
                  </span>{' '}
                  relative to last month
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
