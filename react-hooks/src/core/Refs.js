import React, { Fragment, useRef } from 'react';

const Refs = () => {
    const chat1 = useRef(null);

    const chat1Submit = event => {
        event.preventDefault();

        console.log(chat1.current.value);
    }

    const form = () => (
        <form>
            <div className="row">
                <div className="col">
                    <input 
                        ref={chat1}
                        type="text" 
                        className="form-control" 
                        placeholder="This input has a ref"
                    />
                </div>

                <div className="col">
                    <button onClick={chat1Submit} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    );

    return (
        <Fragment>
            <h1 className="mt-4">Refs</h1>

            {form()}
        </Fragment>
    );
};

export default Refs;