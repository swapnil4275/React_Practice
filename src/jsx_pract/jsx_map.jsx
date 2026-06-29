// Demonstrate jsx map() 

function Student1() {

    const names = ["Atul", "Aditya", "Sanika"];

    return (
        <>
            <h1>List Of Students :    (jsx map())</h1>

            {
                names.map((name) => (
                    <h2>{name}</h2>
                ))
            }
        </>
    );
}

export default Student1;