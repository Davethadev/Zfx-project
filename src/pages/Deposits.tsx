import { TableDeposits } from "../components/TableDeposits";
import { DepositStats } from "../components/DepositStats";
import { Nav } from "../components/Nav";
import { MobileNav } from "../components/MobileNav";
import { useGlobalContext } from "../context";

export function Deposits() {
  const { isNav } = useGlobalContext();
  return (
    <>
      <MobileNav />
      {isNav && <Nav />}
      <main className="px-4 mt-4">
        <h1 className="text-[28px] font-[500]">Deposits</h1>
        <DepositStats />
        <TableDeposits />
      </main>
    </>
  );
}
