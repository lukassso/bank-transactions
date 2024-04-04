import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';
import { Input } from './components/ui/input';
import { Menu, DollarSign, CreditCard, Users, Activity, Search } from 'lucide-react';

const App = () => (
  <div>
    <header className="bg-background sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <a href="#" className="text-foreground hover:text-foreground transition-colors">
          Dashboard
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          Orders
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          Products
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          Customers
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          Analytics
        </a>
      </nav>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </header>
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 ">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 ">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-muted-foreground text-xs">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Beneficiares</CardTitle>
              <Users className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-muted-foreground text-xs">+180.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-muted-foreground text-xs">+19% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-muted-foreground text-xs">+201 since last hour</p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Filter transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search beneficiary"
                  className="bg-background w-full rounded-lg pl-8 lg:w-[320px]"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="order-first lg:order-last">
          <CardHeader>
            <CardTitle>New Transaction Form</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">here add form</CardContent>
        </Card>
      </div>
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
    </main>
    <footer className="bg-background bottom-0 flex h-16 items-center justify-center gap-4 border-b px-4 md:px-6">
      <div className="me-0 sm:me-4">&copy; {new Date().getFullYear()} Lukasz Zatyka</div>
    </footer>
  </div>
);
export default App;
