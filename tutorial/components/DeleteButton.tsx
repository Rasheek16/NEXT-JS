import { deleteUser, removeUser } from "@/utils/actions";

function DeleteButton({ id }: { id: string }) {
  const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={removeUserWithId}>
      <input type="hidden" name="name" value="shakeandbake" />
      <button
        type="submit"
        className="bg-red-500 text-white rounded text-xs p-2"
      >
        Delete
      </button>
    </form>
  );
}

export default DeleteButton;
