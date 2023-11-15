"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Dialog,
  Flex,
  TextField,
  Text,
  Callout,
} from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

interface NewClientForm {
  name: string;
  email: string;
  avatar: string;
  organization: string;
  assigned_user: string;
}

const AddClient = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<NewClientForm>();
  const [error, setError] = useState("");

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Add New Client</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Add New Client</Dialog.Title>
          {error && (
            <Callout.Root color="red" className="mb-5">
              <Callout.Text>{error}</Callout.Text>
            </Callout.Root>
          )}
          <form
            onSubmit={handleSubmit(async (data) => {
              try {
                await axios.post("/api/clients", data);
                router.push("/");
              } catch (error) {
                setError("An unexpected error occured.");
              }
            })}
          >
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Name
                </Text>
                <TextField.Input
                  defaultValue=""
                  placeholder="Enter name"
                  {...register("name")}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Contact
                </Text>
                <TextField.Input
                  defaultValue=""
                  placeholder="Enter email"
                  {...register("email")}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Avatar
                </Text>
                <TextField.Input
                  defaultValue=""
                  placeholder="Enter web address of image"
                  {...register("avatar")}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Organization
                </Text>
                <TextField.Input
                  defaultValue=""
                  placeholder="Enter organization name"
                  {...register("organization")}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Assigned User
                </Text>
                <TextField.Input
                  defaultValue=""
                  placeholder="Enter assigned user"
                  {...register("assigned_user")}
                />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Button>Submit</Button>
            </Flex>
          </form>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default AddClient;
