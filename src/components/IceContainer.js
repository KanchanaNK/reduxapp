import React from "react";
import {connect} from 'react-redux'
import {buyIce} from '../redux'

function IceContainer(props) {
  return (
    <div>
      <h2>Ice - {props.numOfIce}</h2>
      <button onClick={props.buyIce}>Bu Ice</button>
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    numOfIce: state.ice.numOfIce,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    buyIce: () => dispatch(buyIce()),
  };
};

export default connect(mapStateToProp, mapDispatchtoProps) (IceContainer);
