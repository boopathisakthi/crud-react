import React from 'react';

class List extends React.Component{
    constructor()
    {
        super()
    }
    render(){
        return(
            <div>
                   <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
              this.props.ListData.length >0?
              (
                this.props.ListData.map(e=>
                  <tr key={e._id}>
                    <td>{e.name}</td>
                    <td>{e.mobile}</td>
                    <td><button type="button" onClick={event=>{this.props.editvalue(e)}} className="btn btn-sm btn-primary">Edit</button>
                       <button type="button" onClick={event=>{this.props.del(e)}} className="btn btn-sm btn-danger">Delete</button></td>
                  </tr>
                )
              )
              :
              (
              <tr>
                 <td>Empty row</td>
              </tr>
              )

              
              }
          
            </tbody>
          </table>

            </div>
        )
    }
}
export default List