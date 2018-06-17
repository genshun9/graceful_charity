import {connect} from 'react-redux';
import AppComponent from "../components/AppComponent";

const mapStateToProps = state => {
  return {
    userName: ""
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeUserName: {}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)