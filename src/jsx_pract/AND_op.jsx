// Demonstrate AND (&&) Operator 

function And(){

    const islogin = true;

    const user = "Swapnil";

    return(
        <>
        <h1>Hello..!</h1>
        {islogin && <h2>Welcome {user}</h2>}
        </>
    )
}

export default And;