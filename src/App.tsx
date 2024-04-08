import { Footer } from './layout/Footer';
import { Navbar } from './layout/Navbar';
import { TableComponent } from './layout/TableComponent';
import { BalanceComponent } from './layout/BalanceComponent';
import { NewTransactionComponent } from './layout/NewTransactionComponent';

const App = () => (
  <>
    <Navbar />
    <main className="grid gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 ">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 ">
          <BalanceComponent />
        </div>
        <NewTransactionComponent />
      </div>
      <div className="overflow-hidden">
        <TableComponent />
      </div>
    </main>
    <Footer />
  </>
);
export default App;
