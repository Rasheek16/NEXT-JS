"use server";

import { readFile, writeFile } from "fs/promises";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};
export const createUser = async (formdata: FormData) => {
  const firstName = formdata.get("firstName") as string;
  const lastName = formdata.get("lastName") as string;
  const newUser: User = { firstName, lastName, id: Date.now().toString() };
  await saveUser(newUser);
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
