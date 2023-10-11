import { Flex, Text, Button, Group, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <section id="contact" className="h-[400px] bg-secondary flex items-center">
      <footer className="w-full md:w-[80%] mx-auto">
        <Flex
          className="flex-col md:flex-row"
          justify={"space-between"}
          align={"center"}
        >
          <Text className="text-[28px] text-white text-center">
            Ready to get started with Zfx?
          </Text>
          <Link to={"/signup"}>
            <Button
              size="lg"
              className="text-white font-[500] bg-primary p-2 w-full md:w-auto mt-4 md:mt-0"
            >
              Get Started
            </Button>
          </Link>
        </Flex>
        <Group className="flex justify-center my-16">
          <Anchor href="#" className="">
            <IconBrandFacebook />
          </Anchor>
          <Anchor href="#" className="">
            <IconBrandTwitter />
          </Anchor>
          <Anchor href="#" className="">
            <IconBrandLinkedin />
          </Anchor>
          <Anchor href="#" className="">
            <IconBrandInstagram />
          </Anchor>
        </Group>
        <Text className="text-white font-[500] text-center">
          Copyright &copy; 2023
        </Text>
      </footer>
    </section>
  );
}
