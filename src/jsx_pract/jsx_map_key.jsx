// Demonstrate jsx map() key 

function Student2() {

    const fruits = ["apple", "banana", "mango", "tomato"];

    return (
        <>
            <h1>List of Fruits :  (jsx map() key:-)</h1>

            {
                fruits.map((fruit, index) => (
                    <h2 key={index}>{fruit}</h2>
                ))
            }
        </>
    );
}

export default Student2;