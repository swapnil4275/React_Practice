// Demonstrate jsx Expression 

function Exp2() {

    const mycar = { name: "fiat", colour: "white", model: 500 };

    return (
        <>
            <div>
                <h1>my car name : {mycar.name}</h1>
                <h1>my car colour : {mycar.colour}</h1>
                <h1>my car model : {mycar.model}</h1>
            </div>
        </>
    )
}

export default Exp2;