import { Button, Flex, Stack, Image } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="my-4 md:my-24 w-[85%] mx-auto">
      <Flex className="flex-col md:flex-row" align={"center"} gap={"86px"}>
        <Image
          fit="contain"
          w={450}
          src="./stock1.svg"
          className="hidden md:block"
        />
        <article>
          <Stack>
            <h1 className="text-[48px] font-[600] leading-[60px]">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              earum. Vitae adipisci eum itaque illum ipsam, cum quos dignissimos
              est, ea natus a laborum laboriosam.
            </p>
            <Link to={"/signup"}>
              <Button
                className="text-white font-[500] bg-primary p-2"
                rightSection={<IconArrowRight />}
                size="lg"
              >
                Get started
              </Button>
            </Link>
            <Image
              fit="contain"
              w={450}
              src="./stock1.svg"
              className="md:hidden"
            />
          </Stack>
        </article>
      </Flex>
    </section>
  );
}
