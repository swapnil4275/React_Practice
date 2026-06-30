// Demonstrate Rendering List Map() 

function Map(){

    const Students = ["Sanika", "Atul", "Swapnil", "Aditya", "Abrar"];

    return(
        <>
        <h1>Students List using map().</h1>

        {Students.map((student) => (
            <h2>{student}</h2>
        ))}
        </>
    )
}

export default Map;