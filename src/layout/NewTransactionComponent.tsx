import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useGlobalContext } from '../context';
import { type Transaction } from '../types';

const schema = yup.object().shape({
  beneficiary: yup.string().required('Beneficiary is required'),
  amount: yup
    .number()
    .positive('Amount must be positive')
    .required('Amount is required')
    .transform(({ originalValue }) => (originalValue === '' ? undefined : originalValue)),
  account: yup
    .string()
    .required('Account number is required')
    .matches(/^\d+$/, 'Account number must contain only digits'),
  address: yup.string().required('Address is required'),
  description: yup.string().required('Description is required'),
  date: yup
    .date()
    .required('Date is required')
    .transform(({ originalValue }) => (originalValue === '' ? undefined : originalValue)),
});

type FormInputs = Omit<Transaction, 'id'>;

export const NewTransactionComponent = () => {
  const { addTransaction } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const newTransaction = { ...data, id: Math.floor(Math.random() * 100000) };
    addTransaction?.(newTransaction);
  };

  return (
    <Card className="order-first lg:order-last">
      <CardHeader>
        <CardTitle>Add new Transaction</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
          <Input type="text" inputName="beneficiary" placeholder="Beneficiary" {...register('beneficiary')} />
          {errors.beneficiary && <p className="text-sm text-red-500">{errors.beneficiary.message}</p>}
          <Input type="date" inputName="date" placeholder="Date" {...register('date')} />
          {errors.date && <p className="text-sm text-red-500">{errors.date.message}</p>}
          <Input type="number" inputName="amount" placeholder="Amount" {...register('amount')} />
          {errors.amount && <p className="text-sm text-red-500">{errors.amount.message}</p>}
          <Input type="text" inputName="account" placeholder="Account Number" {...register('account')} />
          {errors.account && <p className="text-sm text-red-500">{errors.account.message}</p>}
          <Input type="text" inputName="address" placeholder="Address" {...register('address')} />
          {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
          <Input type="text" inputName="description" placeholder="Description" {...register('description')} />
          {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
          <Button type="submit">Add Transaction</Button>
        </form>
      </CardContent>
    </Card>
  );
};
