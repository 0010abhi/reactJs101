import React from 'react';
import ReactDOM from 'react-dom';

class level2 extends React.Component {
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
                <h2>{this.state.Desc}</h2>
                <h3>{this.state.Name}</h3>
                <h4>{this.state.Company}</h4>
                <h4>{this.state.Profession}</h4>
              </div>
              <div className="col-sm-6">
                <h2>Use props to pass data</h2>
                <h3>{this.props.prop1}</h3>
                <h4>{this.props.prop2}</h4>
                <h4>{this.props.footerProp}</h4>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-sm-12">
              <div className="col-sm-6">
                <h2>Pass props with AppName.defaultProps</h2>
                <h3>{this.props.headerProp}</h3>
                <h3>{this.props.footerProp}</h3>
              </div>
              <div className="col-sm-6">
                <StateWithProps prop1={this.stateToPropData.Name}
                                prop2={this.stateToPropData.Age}
                                prop3={this.stateToPropData.Native}/>
              </div>
            </div>
         </div>
      );
   }
}

class StateWithProps extends React.Component {
  render(){
    return(
      <div>
        <h2>Use state with props</h2>
        <h3>{this.props.prop1}</h3>
        <h3>{this.props.prop2}</h3>
        <h3>{this.props.prop3}</h3>
      </div>
    );
  }
}

level2.propTypes = {
   propArray: React.PropTypes.array.isRequired,
   propBool1: React.PropTypes.bool.isRequired,
   propBool2: React.PropTypes.bool.isRequired,
   propFunc: React.PropTypes.func,
   propNumber: React.PropTypes.number,
   propString: React.PropTypes.string,
   propObject: React.PropTypes.object
}

level2.defaultProps = {
   headerProp: "Hello, Good Morning ...",
   footerProp: "Copyright Banner for footer",
   propArray : [1,2,3,4,5],
   propBool1 : true,
   propBool2 : false,
   propFunc : function(){ return 'I am the function';},
   propNumber : 12,
   propString : "Abhishek Sachdeva",
   propObject : {Fname: 'Abhishek', Lname: 'Sachdeva'}
}

export default level2;
