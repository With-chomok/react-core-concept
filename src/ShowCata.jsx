export default function CataDetails ({objCata}) {
    
    
    return (
        <div className="card">
            <h2>Id : {objCata.id}</h2>
            <h3>Name: {objCata.categoryName}</h3>
        </div>
    )
}