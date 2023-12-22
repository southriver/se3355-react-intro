
import React from 'react';


// class Item extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             clicks : 0
//         }
//     }

//     clickedMe()  {
//         console.log("I clicked : " , this.state.clicks);
//         this.setState({
//             clicks : this.state.clicks + 1
//         })
//     }

//     render() {
//       return (
//         <div>
//             {/* <h1 onClick={() => this.clickedMe()}>Hello World - my item {this.props.name}</h1>
//             <span>you clicked {this.state.clicks} times </span>  */}
//             <button onClick={() => this.clickedMe()}>
//                 Clicked {this.state.clicks} times
//             </button>
//         </div>           
//       )
//     }
//   }

import { useState } from 'react';

function Item({ count, onClick }) {


  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}


export default Item
