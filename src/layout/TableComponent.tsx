import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { useGlobalContext } from '../context';
import { Pagination, PaginationContent, PaginationItem } from '../components/ui/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export const TableComponent = () => {
  const { transactions, isLoading, currentPage, itemsPerPage, setPage } = useGlobalContext();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

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
            {currentTransactions.map((transaction) => (
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
          Showing{' '}
          <strong>
            {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, transactions.length)}
          </strong>{' '}
          of <strong>{transactions.length}</strong> transactions
        </div>
      </CardFooter>
      <Pagination className="ml-auto mr-0 w-auto pb-12">
        <PaginationContent>
          <PaginationItem>
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10 md:h-6 md:w-6"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span className="sr-only">Previous Order</span>
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10 md:h-6 md:w-6"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={indexOfLastItem >= transactions.length}
            >
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="sr-only">Next Order</span>
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Card>
  );
};
