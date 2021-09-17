import React, {useEffect} from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({userData, fetchUsers}) {
useEffect(() => {
    fetchUsers()
}, [])
  return userData.loading ? (
      <h4>Loading</h4>
  ) : userData.error ? (
        <h4>{userData.error}</h4>
  ) : (
      <div>
          <h4>User list</h4>
          <div>
              {
                  userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
              }
          </div>
      </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(UserContainer);
