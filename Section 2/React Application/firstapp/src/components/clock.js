import { useState } from 'react';

const Clock = props => {

    const [textValue, setTextValue] = useState('');

    let time = <h2>{new Date().toLocaleString()}</h2>


    const handleClick = () => {
        props.setCount(props.count + 10);
        console.log(props.count);
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setTextValue(e.target.value);
        console.log('value changed!');
    }


    setInterval(() => {
        time = <h2>{new Date().toLocaleString()}</h2>
    }, 1000);

    return (
        <div className="container">
            <h1>Count : {props.count}</h1>
            <button className="btn btn-primary" onClick={handleClick}>Increase</button>

            <div className="card mt-5">
                <div className="card-body">
                    <input className="form-control" onChange={handleChange} />
                    <h1 className="mt-5">{textValue}</h1>
                    {time}
                </div>
            </div>
        </div>
    )
}


export default Clock;