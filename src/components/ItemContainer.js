import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIce } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h4>Item - {props.item}</h4>
      <button onClick={props.buyItem}>buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numOfCakes : state.ice.numOfIce;
  return {
    item: itemState,
  };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIce())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(ItemContainer);
