import React from 'react';
import Entry from './entry';
import List from './list';
import axios from 'axios';

class Empolyee extends React.Component{
    constructor()
    {
        super()
        this.state={
            listdata:[],
            editData: []
        }
    }
    insert=data=>{
      
       axios.post("http://localhost:5000/insertupdate",data).then((data)=>{
        console.log(data)
           this.list()
       }) 
    }
    list()
    {
        axios.get("http://localhost:5000/list").then((data)=>{
           this.setState({
               listdata:data.data
           })
            
        }) 

    }
    assigndata=data=>{
       
        this.setState({
            editData: data
        })
       
    }
    componentDidMount()
    {
        this.list()
    }
    delete=data=>{
        axios.put("http://localhost:5000/delete/"+data._id).then((data)=>{
            console.log(data)
               this.list()
           }) 
    }
    render(){
        return(
            <div className="container">
             <div className="row">
                 <div className="col-md-6">
                     <Entry SaveEntry={this.insert} SetData={this.state.editData}></Entry>
                 </div>
                 <div className="col-md-6">
                     <List ListData={this.state.listdata} editvalue={this.assigndata} del={this.delete}></List>
                 </div>
                 </div>                
            </div>
        )
    }
}
export default Empolyee