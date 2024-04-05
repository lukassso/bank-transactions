import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useGlobalContext } from '../context';

export const NewTransactionComponent = () => {
  const { addTransaction } = useGlobalContext();
  const [newTransaction, setNewTransaction] = useState({
    id: 10000,
    beneficiary: 'dsd',
    account: 'ds',
    date: '2021-12-15T01:05:42',
    amount: 0,
    address: 'dfg',
    description: 'dfsd',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTransaction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddTransaction = () => {
    addTransaction?.(newTransaction);
    setNewTransaction({
      id: 120,
      beneficiary: '',
      account: '',
      date: '',
      amount: 0,
      address: '',
      description: '',
    });
  };

  return (
    <Card className="order-first lg:order-last">
      <CardHeader>
        <CardTitle>Add new Transaction</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        <Input
          type="text"
          name="beneficiary"
          placeholder="Beneficiary"
          value={newTransaction.beneficiary}
          onChange={handleInputChange}
        />
        <Input type="text" name="date" placeholder="Date" value={newTransaction.date} onChange={handleInputChange} />
        <Input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={newTransaction.address}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="description"
          placeholder="Description"
          value={newTransaction.description}
          onChange={handleInputChange}
        />
        <Button onClick={handleAddTransaction}>Add Transaction</Button>
      </CardContent>
    </Card>
  );
};
