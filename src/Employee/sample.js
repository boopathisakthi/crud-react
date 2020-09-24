import React from 'react';
class Sample extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div className="row">
                <h1 style={{ textAlign: "center" }}>Entry</h1>
                <div className="col-md-2">

                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Name</label>

                    </div>
                    <div className="form-group">
                        <label>Mobile</label>


                    </div>

                </div>

            </div>
        )
    }
}
export default Sample;