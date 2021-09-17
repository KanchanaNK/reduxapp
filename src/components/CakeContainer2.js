import React from "react";
import {connect} from 'react-redux'
import {buyCake} from '../redux'
import {useState} from 'react'

function CakeContainer2(props) {
    const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Cakes - {props.numOfCakes}</h2>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
      <button onClick={() => props.buyCake(number)}>Buy {number}</button>
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    buyCake: number => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProp, mapDispatchtoProps) (CakeContainer2);
