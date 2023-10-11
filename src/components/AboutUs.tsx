import { Image, Text, Flex, Stack } from "@mantine/core";

export function AboutUs() {
  return (
    <section id="about" className="w-[85%] mx-auto my-8 md:my-0 pt-[100px]">
      <h1 className="text-[36px] font-[500] text-center">About Us</h1>
      <Flex className="flex-col md:flex-row" align={"center"} gap={"86px"}>
        <Stack>
          <Text className="text-[24px] font-[500] my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam
            veniam obcaecati beatae? Delectus vero voluptas cumque harum impedit
            praesentium?
          </Text>
        </Stack>
        <Image src="./stock2.svg" fit="contain" w={450} />
      </Flex>
    </section>
  );
}
