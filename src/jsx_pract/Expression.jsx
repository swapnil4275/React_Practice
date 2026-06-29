// Demonstrate jsx Expression 

function Exp() {

    let name = "Swapnil";
    let age = 22;

    return (
        <>
            <div>
                <h1>Name : {name}</h1>
                <h1>Age : {age}</h1>
                <h1>After  5 years Age : {age + 5}</h1>
            </div>
        </>
    )
}

export default Exp;