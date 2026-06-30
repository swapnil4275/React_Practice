// Demonstrate Array Map() 

function Array(){

    const Products = ["Rice", "Oil", "Corn", "Sugar"];

    return(
        <>
        <h1>Products List :-</h1>

        {Products.map((product) => (
            <h2>{product}</h2>
        ))}
        </>
    )
}

export default Array;