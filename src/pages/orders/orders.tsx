import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

export default function Orders() {
  return (
    <main>
      <Helmet title="Orders" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
      </div>
      <div className="my-2.5">
        <form action="" className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filters:</span>
          <Input placeholder="Client's name" className="h-8 w-[320px]" />
        </form>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Placed</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Total</TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Button variant="outline" size="xs">
                  <Search className="h-3 w-3" />
                  <span className="sr-only">Order details</span>
                </Button>
              </TableCell>
              <TableCell className="font-mono text-xs font-medium">
                123456
              </TableCell>
              <TableCell className="text-muted-foreground">
                15 minutes ago
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pending
                  </span>
                </div>
              </TableCell>
              <TableCell className="font-medium">Anon</TableCell>
              <TableCell className="font-medium">$ 149,00</TableCell>
              <TableCell>
                <Button variant="outline" size="xs">
                  <ArrowRight className="mr-2 h-3 w-3" />
                  Approve
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="xs">
                  <X className="mr-2 h-3 w-3" />
                  Cancel
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  )
}
