import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';

export const TableComponent = () => (
  <Card>
    <CardHeader>
      <CardTitle>Transactions</CardTitle>
      <CardDescription>Check all your transactions here</CardDescription>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Beneficiary</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="hidden md:table-cell">Address</TableHead>
            <TableHead className="hidden md:table-cell">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Laser Lemonade Machine</TableCell>
            <TableCell>$499.99</TableCell>
            <TableCell className="hidden md:table-cell">25</TableCell>
            <TableCell className="hidden md:table-cell">2023-07-12 10:42 AM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Hypernova Headphones</TableCell>

            <TableCell>$129.99</TableCell>
            <TableCell className="hidden md:table-cell">100</TableCell>
            <TableCell className="hidden md:table-cell">2023-10-18 03:21 PM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">AeroGlow Desk Lamp</TableCell>

            <TableCell>$39.99</TableCell>
            <TableCell className="hidden md:table-cell">50</TableCell>
            <TableCell className="hidden md:table-cell">2023-11-29 08:15 AM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">TechTonic Energy Drink</TableCell>

            <TableCell>$2.99</TableCell>
            <TableCell className="hidden md:table-cell">0</TableCell>
            <TableCell className="hidden md:table-cell">2023-12-25 11:59 PM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Gamer Gear Pro Controller</TableCell>

            <TableCell>$59.99</TableCell>
            <TableCell className="hidden md:table-cell">75</TableCell>
            <TableCell className="hidden md:table-cell">2024-01-01 12:00 AM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Luminous VR Headset</TableCell>

            <TableCell>$199.99</TableCell>
            <TableCell className="hidden md:table-cell">30</TableCell>
            <TableCell className="hidden md:table-cell">2024-02-14 02:14 PM</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
    <CardFooter>
      <div className="text-muted-foreground text-xs">
        Showing <strong>1-10</strong> of <strong>32</strong> products
      </div>
    </CardFooter>
  </Card>
);
