import { Menu, Group, Text, Avatar, rem } from "@mantine/core";
import {
  IconLogout,
  IconSettings,
  IconTrash,
  IconSwitchHorizontal,
  IconWallet,
} from "@tabler/icons-react";

export function UserMenu() {
  return (
    <Group justify="center">
      <Menu
        withArrow
        width={300}
        position="bottom"
        transitionProps={{ transition: "pop" }}
        withinPortal
      >
        <Menu.Target>
          <Avatar
            radius="xl"
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          />
        </Menu.Target>
        <Menu.Dropdown>
          <div className="p-2">
            <Text fw={500}>Nancy Eggshacker</Text>
            <Text size="xs" c="dimmed">
              neggshaker@mantine.dev
            </Text>
          </div>

          <Menu.Divider />
          <Menu.Item
            leftSection={
              <IconWallet
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Deposit
          </Menu.Item>

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item
            leftSection={
              <IconSettings
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Account settings
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconSwitchHorizontal
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Change account
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconLogout
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Logout
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item
            color="red"
            leftSection={
              <IconTrash
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Delete account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
