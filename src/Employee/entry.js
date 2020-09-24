import React from 'react';

class Entry extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            mobile: '',
            _id: ''
        }
    }
    change_event = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    saveprocess = event => {
        this.props.SaveEntry(this.state)
        this.setState({
            name: '',
            mobile: '',
            _id: ''
        })
    }
    componentWillReceiveProps(props) {
        if (props.SetData._id) {
            this.setState({
                name: props.SetData.name,
                mobile: props.SetData.mobile,
                _id: props.SetData._id
            })
        }

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
                        <input type="text" onChange={this.change_event} name="name" value={this.state.name} className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Mobile</label>
                        <input type="text" onChange={this.change_event} name="mobile" value={this.state.mobile} className="form-control"></input>
                    </div>
                    <div className="text-center">
                        <input type="hidden" value={this.state._id}></input>
                        <button onClick={this.saveprocess} className="btn btn-success">Save</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default Entry