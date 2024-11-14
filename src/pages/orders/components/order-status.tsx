export type OrderStatusType =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OderStatusProps {
  status: OrderStatusType
}

export default function OrderStatus({ status }: OderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-slate-400"
        />
      )}
      {status === 'canceled' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-rose-400"
        />
      )}
      {['processing', 'delivering'].includes(status) && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-amber-400"
        />
      )}

      {status === 'delivered' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-emerald-500"
        />
      )}
      <span className="font-medium text-muted-foreground">{status}</span>
    </div>
  )
}
