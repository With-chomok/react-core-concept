import { use } from "react"

export default function Users({fetchUsers}) {
    const users = use(fetchUsers);
    console.log(users);
    
    return(
        <div>
            <h1 className="card">User: {users.length}</h1>
        </div>
    )
}