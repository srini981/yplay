import React from "react";
import { Paper,TextField } from "@material-ui/core";
class SearchBar extends React.Component{
 
 state={
    searchTerm:'',
 }

 handleSubmit=(event)=>{
  const{searchTerm}=this.state
  const{OnFormSubmit}=this.props

  OnFormSubmit(searchTerm);
  event.preventDefault();
 }
 handleChange=(event)=>{
    this.setState({searchTerm:event.target.value})
 }

    render() {
      return (
        <div>
            <Paper elevation={6} style={{padding:'25px'}}>

                <form onSubmit={this.handleSubmit }>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}/>
                </form>
            </Paper> 
        </div>
      )
    } 
}
export default SearchBar;