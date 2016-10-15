import React from 'react';
import ReactDOM from 'react-dom';

class level1 extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        "Desc" : "Use state top pass data",
         Name : "Abhishek Sachdeva",
         Company : "Mindtree Ltd.",
         "Profession": "Sofware Engineer"
      };

      this.stateToPropData = {
        Name : "Abhishek Sachdeva",
        Age : "23",
        Native : "Rajasthan"
      };

      this.dataToSetState = {
        data : []
      };
      this.number = 20;
      this.dataToSetStateHandler = this.dataToSetStateHandler.bind(this);
      this.dataToForceUpdateHandler = this.dataToForceUpdateHandler.bind(this);
      this.styleSetStateButton = this.styleSetStateButton.bind(this);
   }

   dataToSetStateHandler(){
     var number = this.number;
     var MyArray = this.dataToSetState.data;
     if(MyArray.length > 0){
        number = MyArray[MyArray.length-1] + 20;
     }
     MyArray.push(number);
     this.setState({data:MyArray});
   }

   dataToForceUpdateHandler(){
     this.forceUpdate();
   }

   styleSetStateButton(){
     var div = document.getElementById('setStateButton');
     if(ReactDOM.findDOMNode(div).style.backgroundColor === 'rgb(255, 255, 255)'){
       ReactDOM.findDOMNode(div).style.backgroundColor = "rgb(0, 0, 0)";
       ReactDOM.findDOMNode(div).style.color = "rgb(255, 255, 255)";
     } else {
        ReactDOM.findDOMNode(div).style.backgroundColor = "rgb(255, 255, 255)";
        ReactDOM.findDOMNode(div).style.color = "rgb(0, 0, 0)";
     }
   }

   render() {
      return (
         <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-6">
                <h3>Calculation under curly braces.</h3>
                <p>abhi00 ==> {5+5}</p>
              </div>
              <div className="col-sm-6">
                <AddConditionModule/>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-sm-12">
              <div className="col-sm-6">
                <AddStyleModule/>
              </div>
              <div className="col-sm-6">
                <CustomAttributeModule/>
              </div>
            </div>
         </div>
      );
   }
}

class AddConditionModule extends React.Component {
  render(){
    var varriable = 10;
    return(
      <div>
        <h3>Add Conditions.</h3>
        <p>{(varriable === 10) ? 'equals to 10' : 'not equals to 10'}</p>
        <p>{(varriable === 20) ? 'equals to 20' : 'not equals to 20'}</p>
      </div>
    );
  }
}

class AddStyleModule extends React.Component {
  render(){
    var paragraphStyle = {
      fontSize: '20px',
      backgroundColor: '#6f6f6f'
    };
    return(
      <div>
        <h3>Add styles.</h3>
        <p style={paragraphStyle} >abhishek sachdeva is a good boy.</p>
      </div>
    );
  }
}

class CustomAttributeModule extends React.Component {
  render(){
    var varriable = 10;
    return(
      <div>
        <h3>Add custom attribute.</h3>
        <p data-varValue={varriable} data-constValue="20">know the significance of custom attributes.</p>
      </div>
    );
  }
}

export default level1;
