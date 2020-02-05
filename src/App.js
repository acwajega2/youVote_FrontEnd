import React, { Component } from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import CandidateList from './components/CandidateList'


import CustomLayout from './containers/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          <React.Fragment>
            <CandidateList/>
          </React.Fragment>
         </CustomLayout>
      </div>
    );
  }
}

export default App;
