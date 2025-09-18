export default function ApiDetailsShow ({arrApi}) {
    console.log(arrApi);
    
    return(
        <div className="card">
            <h3>ID: {arrApi.id}</h3>
            <h2>Title: {arrApi.title}</h2>
            <p>Price: {arrApi.price}</p>
           
        </div>
    )
}