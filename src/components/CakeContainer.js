import React from "react";
import {connect} from 'react-redux'
import {buyCake} from '../redux'

function CakeContainer(props) {
  return (
    <div>
      <h2>Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProp, mapDispatchtoProps) (CakeContainer);
