import cx from "clsx";
import { useState } from "react";
import { Table, ScrollArea } from "@mantine/core";
import classes from "../css/TableDeposits.module.css";

const data = [
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
  {
    date: "07/09/2023, 06:31",
    type: "Deposit",
    amount: "₦11,800",
    status: "Pending",
  },
];

export function TableDeposits() {
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row, index) => (
    <Table.Tr key={index}>
      <Table.Td>{row.date}</Table.Td>
      <Table.Td>{row.type}</Table.Td>
      <Table.Td>{row.amount}</Table.Td>
      <Table.Td>{row.status}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea
      h={300}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table miw={700}>
        <Table.Thead
          className={cx(classes.header, { [classes.scrolled]: scrolled })}
        >
          <Table.Tr>
            <Table.Th>Transaction date</Table.Th>
            <Table.Th>Type</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
