// Print Student name and age using map (key) 

function Std() {

    const student = [{ id: 1, name: "Swapnil", age: 22 }, { id: 2, name: "Atul", age: 23 }, { id: 3, name: "Abrar", age: 24 },];

    return (
        <>
            <h1>Student Data:</h1>

            {
                student.map((s) => (
                    <div key={s.id}>
                        <h2>{s.name}</h2>
                        <h2>{s.age}</h2>
                    </div>
                ))
            }
        </>
    );
}

export default Std;