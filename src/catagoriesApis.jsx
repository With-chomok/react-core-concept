import { use } from "react"
import CataDetails from "./ShowCata"
export default function CataApis({fetchCataApis}) {
    // console.log(fetchCataApis);
    const allCataApis = use(fetchCataApis)
    const objectCatas = allCataApis.categories
    
    return(
        <div className="card">
            <h3>All Catagories Data Load: {objectCatas.length}</h3>
            {
                objectCatas.map(objCata => <CataDetails key={objCata.id} objCata={objCata}></CataDetails>)
            }
        </div>
    )
}