import React,{Component}  from 'react';

class AddName extends Component{
state={
    name:null,
    age:null
}
handleChange=(e)=>{
this.setState({
[e.target.id]:e.target.value

});

}
handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addName(this.state);
}
render(){

return (


    <div>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name"   onChange={this.handleChange}/>

            <label htmlFor="name">Age:</label>
            <input type="text" id="age"   onChange={this.handleChange}/>
            <button className="btn btn.success">Submit</button>
        </form>
    </div>
)


}




}
export default AddName;