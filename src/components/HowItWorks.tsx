import { Paper, Flex, Container, Text, Badge } from "@mantine/core";
// import { IconChevronRight } from "@tabler/icons-react";

const info = [
  {
    number: 1,
    title: "Lorem, ipsum dolor.",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt vel neque ipsum ab modi ad!",
  },
  {
    number: 2,
    title: "Lorem, ipsum dolor.",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt vel neque ipsum ab modi ad!",
  },
  {
    number: 3,
    title: "Lorem, ipsum dolor.",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt vel neque ipsum ab modi ad!",
  },
];

export function HowItWorks() {
  return (
    <section id="howitworks" className="my-24 pt-[100px]">
      <h1 className="text-[36px] font-[500] text-center">How it works</h1>
      <Container className="my-8">
        <Flex className="flex-col md:flex-row" gap={"xl"}>
          {info.map((item, index) => {
            const { title, message, number } = item;
            return (
              <Paper key={index} shadow="lg" p="lg" className="text-center">
                <Badge
                  className={`${
                    index === 0
                      ? "bg-primary"
                      : index === 1
                      ? "bg-blue-600"
                      : "bg-orange-600"
                  }`}
                  radius={"xs"}
                  size="xl"
                >
                  {number}
                </Badge>
                <Text className="font-[500] my-4">{title}</Text>
                <Text>{message}</Text>
                {/* <Anchor
                  href="#"
                  inherit
                  className="mx-1 my-2 text-primary flex items-center justify-center"
                >
                  Learn more{" "}
                  <span>
                    <IconChevronRight />
                  </span>
                </Anchor> */}
              </Paper>
            );
          })}
        </Flex>
      </Container>
    </section>
  );
}
