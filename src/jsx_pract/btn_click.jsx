// Demonstrate Button clicked 

function Btn() {

    const Click = () => {
        alert("Button Clicked!");
    };

    return (
        <>
        <p>on click (event)</p>
        <button onClick={Click}>Click Me..</button>
        </>
    )
}
export default Btn;