import { TableWithdrawals } from "../components/TableWithdrawals";
import { WithdrawalStats } from "../components/WithdrawalStats";
import { MobileNav } from "../components/MobileNav";
import { Nav } from "../components/Nav";
import { useGlobalContext } from "../context";

export function Withdrawals() {
  const { isNav } = useGlobalContext();
  return (
    <>
      <MobileNav />
      {isNav && <Nav />}
      <main className="px-4 mt-4">
        <h1 className="text-[28px] font-[500]">Withdrawals</h1>
        <WithdrawalStats />
        <TableWithdrawals />
      </main>
    </>
  );
}
