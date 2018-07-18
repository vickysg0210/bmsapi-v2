import React from 'react';
import ReactDOM from 'react-dom';

var RedocBox = React.createClass({

         componentDidMount: function() {
                Redoc.init('https://api.swaggerhub.com/apis/vickysg0210/BLE_Management_System_API/1.0.3');
          },

          render: function() {
            return <div ref={el => this.el = el} />;
          }

});


export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <RedocBox/>
      </div>);
  }
}
