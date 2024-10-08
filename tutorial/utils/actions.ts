"use server";

import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};
export const createUser = async (prevState: any, formdata: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const firstName = formdata.get("firstName") as string;
  const lastName = formdata.get("lastName") as string;
  const newUser: User = { firstName, lastName, id: Date.now().toString() };
  try {
    await saveUser(newUser);
    revalidatePath("/actions");

    return "user created successfully...";
  } catch (error) {
    console.log(error);
    return "failed to create user";
  }
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);

  await writeFile("users.json", JSON.stringify(users));
};

export const deleteUser = async (formdata: FormData) => {
  const id = formdata.get("id") as string;
  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id != id);
  await writeFile("users.json", JSON.stringify(updatedUsers));
  revalidatePath("/actions");
};
export const removeUser = async (id: string, formdata: FormData) => {
  const name = formdata.get("name");
  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id != id);
  await writeFile("users.json", JSON.stringify(updatedUsers));
  revalidatePath("/actions");
};
