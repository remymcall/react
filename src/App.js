{/* import {Component} from 'react';
import './App.css';

class App extends Component {
 constructor(){
  super()
  this.state ={
    user: [],
    searchBox:''
  }
 }
 componentDidMount(){
  fetch('https://course-api.com/react-store-products')
  .then((response)=> response.json())
  .then(response =>this.setState({user: response}))
 }
 searchProduct =(e)=>{
  this.setState({searchBox: e.target.value})
 }
  render(){
   const filteredItem= this.state.user.filter((user)=>
   user.name.toLowerCase().includes(this.state.searchBox.toLowerCase())
   ); 
   

    return(
      <div className='App'>
        <input type='text' placeholder='Make a search here' onChange={(this.searchProduct)}/>
        {
          filteredItem.map(user =>{
            return(
              <div key={user.id}>
                <h1>{user.name}</h1>
                <p>{user.price}</p>
                <h1>{user.company}</h1>
              </div>
            )
          })
        }
        
        <input type='text' placeholder='type here' onChange={(e)=>{
      
          this.setState({user: e.target.value})
        }}/>
        <h1>{this.state.user}</h1>
        <button type='submit'>change here</button> 
        
      </div>
    )
  }
}
export default App;*/}