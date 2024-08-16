import { fetchUsers } from "@/utils/actions";
import DeleteButton from "./DeleteButton";

async function UsersList() {
  const users = await fetchUsers();
  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <>
                <h4 key={user.id} className="capitalize text-lg">
                  {user.firstName} {user.lastName}
                </h4>
                <DeleteButton id={user.id} />
              </>
            );
          })}
        </div>
      ) : (
        <p>NO users found</p>
      )}
    </div>
  );
}

export default UsersList;
