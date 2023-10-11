import { useState } from "react";
import { Group, Button, Flex, Anchor, Burger, Stack } from "@mantine/core";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isNavbar, setIsNavbar] = useState(false);
  return (
    <nav className="w-full py-2 sticky top-0 z-20 bg-white shadow-md">
      <Flex
        className="my-4 w-[95%] mx-auto"
        justify={"space-between"}
        align={"center"}
      >
        <h2>Zfx</h2>
        <Burger
          opened={isNavbar}
          onClick={() => setIsNavbar(!isNavbar)}
          className="md:hidden"
        />
        {/* Desktop Nav */}
        <div className="hidden md:block">
          <Flex gap={"lg"}>
            <Anchor href="#about" inherit className="text-black">
              About Us
            </Anchor>
            <Anchor href="#howitworks" inherit className="text-black">
              How it works
            </Anchor>
            <Anchor href="#plans" inherit className="text-black">
              Plans
            </Anchor>
            <Anchor href="#contact" inherit className="text-black">
              Contact Us
            </Anchor>
          </Flex>
        </div>
        <div className="hidden md:block">
          <Group>
            <Link to={"/login"}>
              <Button variant="default">Login</Button>
            </Link>
            <Link to={"/signup"}>
              <Button className="text-white font-[500] bg-primary p-2">
                Sign Up
              </Button>
            </Link>
          </Group>
        </div>
      </Flex>
      {/* Mobile Nav */}
      {isNavbar && (
        <Stack className="text-center pb-6 md:hidden">
          <Anchor
            href="#about"
            onClick={() => setIsNavbar(false)}
            inherit
            className="text-black uppercase font-[500]"
          >
            About Us
          </Anchor>
          <Anchor
            href="#howitworks"
            onClick={() => setIsNavbar(false)}
            inherit
            className="text-black uppercase font-[500]"
          >
            How it works
          </Anchor>
          <Anchor
            href="#plans"
            onClick={() => setIsNavbar(false)}
            inherit
            className="text-black uppercase font-[500]"
          >
            Plans
          </Anchor>
          <Anchor
            href="#contact"
            onClick={() => setIsNavbar(false)}
            inherit
            className="text-black uppercase font-[500]"
          >
            Contact Us
          </Anchor>
          <Stack className="mt-8">
            <Link className="font-[500] uppercase" to={"/login"}>
              Login
            </Link>
            <Link to={"/signup"}>
              <Button className="text-white font-[500] bg-primary p-2 uppercase">
                Sign Up
              </Button>
            </Link>
          </Stack>
        </Stack>
      )}
    </nav>
  );
}
