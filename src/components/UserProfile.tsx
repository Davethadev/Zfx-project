import { Group, Avatar, Text, Button, Flex } from "@mantine/core";

export function UserProfile() {
  return (
    <section className="my-4 hidden md:block">
      <Flex justify={"end"} align={"center"} gap={"xl"}>
        <Button className="text-white font-[500] bg-primary py-2 px-8">
          Deposit
        </Button>
        <Group>
          <Avatar
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            radius="xl"
          />
          <div style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              Jane Doe
            </Text>
            <Text c="dimmed" size="xs">
              user@example.com
            </Text>
          </div>
        </Group>
      </Flex>
    </section>
  );
}
