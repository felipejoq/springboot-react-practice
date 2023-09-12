import {useContext} from "react"
import {UserContext} from "../context/UserContext"
import {UserRow} from "./UserRow"

export const UsersList = () => {

    const {users} = useContext(UserContext);
    return (
        <table className="table table-hover table-striped">

            <thead>
            <tr>
                <th>#</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>update</th>
                <th>update route</th>
                <th>remove</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map(({id, username, email, name}) => (
                    <UserRow
                        key={id}
                        id={id}
                        username={username}
                        email={email}
                        name={name}
                    />
                ))
            }
            </tbody>
        </table>
    )
}