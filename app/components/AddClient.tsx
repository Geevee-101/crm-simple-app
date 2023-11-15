"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button, Dialog, Flex, TextField, Text } from "@radix-ui/themes";

interface ClientDetailForm {
  name: string;
  email: string;
  avatar: string;
  organization: string;
  assigned_user: string;
}

const AddClient = () => {
  const { register, handleSubmit } = useForm<ClientDetailForm>();

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Add New Client</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Add New Client</Dialog.Title>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Name
              </Text>
              <TextField.Input defaultValue="" placeholder="Enter name" />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Contact
              </Text>
              <TextField.Input defaultValue="" placeholder="Enter email" />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Avatar
              </Text>
              <TextField.Input
                defaultValue=""
                placeholder="Enter web address of image"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Organization
              </Text>
              <TextField.Input
                defaultValue=""
                placeholder="Enter organization name"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Assigned User
              </Text>
              <TextField.Input
                defaultValue=""
                placeholder="Enter assigned user"
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button>Submit</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default AddClient;
