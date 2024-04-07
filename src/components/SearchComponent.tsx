import { useGlobalContext } from '../context';
import { Input } from '../components/ui/input';
import { Search } from 'lucide-react';

export const SearchComponent = () => {
  const { query, handleSearch } = useGlobalContext();

  return (
    <>
      <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-5 w-5" />
      <Input
        inputName="search"
        type="search"
        placeholder="Search beneficiary"
        className="bg-background w-full rounded-lg pl-8"
        value={query}
        onChange={(e) => handleSearch?.(e.target.value)}
      />
    </>
  );
};
