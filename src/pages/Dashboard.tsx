import { Stats } from "../components/Stats";
import { Nav } from "../components/Nav";
import { useGlobalContext } from "../context";
import { MobileNav } from "../components/MobileNav";

export function Dashboard() {
  const { isNav } = useGlobalContext();
  return (
    <main className="relative">
      <MobileNav />
      {isNav && <Nav />}
      <Stats />
    </main>
  );
}
