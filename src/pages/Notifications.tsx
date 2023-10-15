import { Nav } from "../components/Nav";
import { MobileNav } from "../components/MobileNav";
import { useGlobalContext } from "../context";

export function Notifications() {
  const { isNav } = useGlobalContext();
  return (
    <>
      <MobileNav />
      {isNav && <Nav />} <h1 className="px-4 mt-4">Notifications</h1>
    </>
  );
}
