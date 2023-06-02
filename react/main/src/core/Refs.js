import React, { Fragment, useRef, useState } from 'react';

const Refs = () => {
    const [ value, setValue ] = useState('');
    const input1 = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();

        setValue(input1.current.value)
    }

    const form = () => (
        <form>
            <div className="row">
                <div className="col">
                    <input 
                        ref={input1}
                        type="text" 
                        className="form-control" 
                        placeholder="This input has a ref"
                    />
                </div>

                <div className="col">
                    <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    );

    return (
        <Fragment>
            <h1 className="mt-4">Refs</h1>

            {form()}

            <hr />

            <h4>Value: {value}</h4>
        </Fragment>
    );
};

export default Refs;