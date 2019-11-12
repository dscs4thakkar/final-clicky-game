import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
// import Cards from "./components/Cards"
import data from "./data.json"

class App extends Component {
state = {
 // data:data
data:data, 
topScore : 0,
score : 0
}
componentDidMount=()=>{
this.setState({data:this.shuffle(this.state.data)})
};
shuffle = (data)=>{
  let len = data.length-1;
  //Fisher-Yates Formula
  for(let i = (len); i > 0; i--){
    //j represents a random index in the array
    //i is the limit for j, meaning that as we work backwards it will not reset the earlier randomized index
    const j = Math.floor(Math.random() * i)
    //temporary placeholder so that we don't lose the value of data[i]
    const temp = data[i]
    //data[i] is replaced by the index of our randomized value
    //because of the limiting, we know this value is coming in from a smaller index than i
    data[i] = data[j]
    //replacing our random index with our original number at i
    data[j] = temp
  }
   return data; 
};
handleClick=(id, value) => {
  console.log(id, value);
  //If it hasn't been clicked
if(value==="false"){
  let newScore = this.state.score+1
  let newData = this.state.data.map(item=>{
    //The item in out state.data that has the same id, we make that value=>true
    if(item.id===id){
      item.value = "true";
    }
    //return our item change
    return item;
  })
  //Setting all parameters in state
  this.setState({data:this.shuffle(newData), score:newScore})
}else{
  alert("LOSER!!!!!!!!!")
  //Create new variable to hold top score
  var newTop;
  //determine what our top score is
  if(this.state.score>this.state.topScore){
    newTop = this.state.score;
  }else{
    newTop = this.state.topScore
  }
  let newData = this.state.data.map(item=>{
    if(item.value === "true"){
      item.value="false"
    }
    return item;
  })
  this.setState({data:this.shuffle(newData), topScore:newTop, score:0})
}
//detetrmine whether item has been clicked before
//map over the items and checked whether item has chicked using {this} has a clicked value as false
}
  render(){
  return (
      <div>
      <Nav score={this.state.score} topScore={this.state.topScore} />
      {this.state.data.map(item => (
            <img
              key={item.id}
              id={item.id}
              alt={item.name}
              value={item.value}
              onClick={()=> this.handleClick(item.id, item.value)}
              src={item.image}
            />
          ))}
    </div>
  );
}
}
export default App;
