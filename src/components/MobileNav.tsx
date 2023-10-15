import { Flex, Burger, Group } from "@mantine/core";
import { useGlobalContext } from "../context";
import { UserMenu } from "./UserMenu";

export function MobileNav() {
  const { isNav, toggleNav } = useGlobalContext();
  return (
    <nav
      className={`${
        isNav ? "bg-primary" : "bg-white"
      } sticky top-0 z-50 shadow-md`}
    >
      <Flex
        justify={"space-between"}
        align={"center"}
        className="md:hidden w-[85%] mx-auto py-4"
      >
        <h1 className={`text-xl font-[500] ${isNav ? "text-white" : ""}`}>
          Zfx
        </h1>
        <Group>
          <UserMenu />
          <Burger
            color={`${isNav ? "white" : ""}`}
            opened={isNav}
            onClick={toggleNav}
          />
        </Group>
      </Flex>
    </nav>
  );
}
