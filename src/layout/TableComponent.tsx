import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { useGlobalContext } from '../context';

export const TableComponent = () => {
  const { transactions, isLoading } = useGlobalContext(); 

  if (isLoading) {
    return <div>Loading...</div>; // Wyświetlamy ładowanie, jeśli dane są jeszcze pobierane
  }

  return (
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
            {transactions.map(transaction => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.beneficiary}</TableCell>
                <TableCell>{new Date(transaction.date).toLocaleString()}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell className="hidden md:table-cell">{transaction.address}</TableCell>
                <TableCell className="hidden md:table-cell">{transaction.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
        <CardFooter>
        <div className="text-muted-foreground text-xs">
          Showing <strong>1-{transactions.length}</strong> of <strong>{transactions.length}</strong> transactions
        </div>
      </CardFooter>
    </Card>
  );
};

