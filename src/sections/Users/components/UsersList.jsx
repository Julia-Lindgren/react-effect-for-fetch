import UsersListItem from "./UsersListItem";

export default function UsersList({ users }) {
    return (
        <ul className="users-list">
            {users.map((user) => (
                <UsersListItem key={user.id} user={user} />
            ))}
        </ul>
    );
}