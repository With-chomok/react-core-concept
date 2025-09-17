import { use } from "react"

export default function Friends({fetchFriends}){
   const Userr = use(fetchFriends)
    return(
        <div className="card">
            <h3>Friends: {Userr.length}</h3>

        </div>
    )
}