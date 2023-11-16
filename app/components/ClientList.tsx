"use client";

import { Table } from "@radix-ui/themes";
import React from "react";
import axios from "axios";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import router from "next/navigation";

const queryClient = new QueryClient();

const ClientList = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ClientListTable />
    </QueryClientProvider>
  );
};

function ClientListTable() {
  const { data } = useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      const response = await axios.get("/api/clients");
      return response.data;
    },
  });

  console.log(data);

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Test</Table.RowHeaderCell>
          <Table.Cell>Test</Table.Cell>
        </Table.Row>
        {/* {data.map((client: any) => (
          <Table.Row>
            <Table.RowHeaderCell>{client.name}</Table.RowHeaderCell>
            <Table.Cell>{client.status}</Table.Cell>
          </Table.Row>
        ))} */}
      </Table.Body>
    </Table.Root>
  );
}

export default ClientList;
