const EventHandling = () => {

    const handleClick = () => {
        alert('You Clicked that button');
        console.log('Button Clicked');
    }

    return (
        <div className="container">
            <button className="btn btn-primary" onClick={handleClick}>Hi There</button>
        </div>
    )
}


export default EventHandling;