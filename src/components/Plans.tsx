import { Container, Flex, Paper, Text, Button, Stack } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function Plans() {
  const info = [
    {
      price: "$28",
      plan: "Plus",
      text: "Earn 0.25usdt everyday",
      // features: [
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum",
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum dolor.",
      // ],
    },
    {
      price: "$58",
      plan: "Pro",
      text: "Earn 1.2usdt everyday",
      // features: [
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum ",
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum dolor.",
      // ],
    },
    {
      price: "$110",
      plan: "Pro",
      text: "Earn 2.5usdt everyday",
      // features: [
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum.",
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum dolor.",
      // ],
    },
    {
      price: "$250",
      plan: "Pro",
      text: "Earn 5.3usdt everyday",
      // features: [
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum.",
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum dolor.",
      // ],
    },
    {
      price: "$500",
      plan: "Pro",
      text: "Earn 10.3usdt everyday",
      // features: [
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum.",
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum dolor.",
      // ],
    },
    {
      price: "$1000",
      plan: "Pro",
      text: "Earn 18usdt everyday",
      // features: [
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum.",
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum dolor.",
      // ],
    },
    {
      price: "$5,000",
      plan: "Pro",
      text: "Earn 101usdt everyday",
      // features: [
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum.",
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum dolor.",
      // ],
    },
    {
      price: "$10,000",
      plan: "Pro",
      text: "Earn 205usdt everyday",
      // features: [
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum.",
      //   "Lorem, ipsum dolor.",
      //   "Lorem, ipsum dolor.",
      // ],
    },
  ];
  return (
    <section id="plans" className="my-24 pt-[100px]">
      <h1 className="text-[36px] font-[500] my-8 text-center">
        Choose the plan
      </h1>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {info.map((item, index) => {
            const { price, plan, text } = item;
            return (
              <Paper key={index} shadow="lg" p="xl">
                <Stack>
                  <Text>
                    <span className="text-[36px] font-[500] text-center">
                      {price}
                    </span>
                  </Text>
                  <Text className="text-[32px] font-[500]">{plan}</Text>
                  <Text>{text}</Text>
                  {/* {features.map((item, index) => {
                    return (
                      <Text className="flex items-center gap-4" key={index}>
                        <span>
                          <IconCircleCheck />
                        </span>
                        {item}
                      </Text>
                    );
                  })} */}
                  <Link to={"/signup"}>
                    <Button className="text-white font-[500] bg-primary p-2 w-full">
                      Get Started
                    </Button>
                  </Link>
                </Stack>
              </Paper>
            );
          })}
        </div>
        {/* <Flex className="flex-col md:flex-row gap-4">
        </Flex> */}
      </Container>
    </section>
  );
}
