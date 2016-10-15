import React from 'react';
import ReactDOM from 'react-dom';

class level3 extends React.Component {
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

      this.componentLifeCycleNum = {
        data : 0
      };
      this.number = 20;
      this.componentLifeCycleStatus = "";
      this.setNewNumber = this.setNewNumber.bind(this);
      this.dataToSetStateHandler = this.dataToSetStateHandler.bind(this);
      this.dataToForceUpdateHandler = this.dataToForceUpdateHandler.bind(this);
      this.styleSetStateButton = this.styleSetStateButton.bind(this);
   }
setNewNumber(){
  this.setState({data : this.componentLifeCycleNum.data + 1});
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
                <h2>Props Validation</h2>
                <h4>Array : {this.props.propArray}</h4>
                <p>Note - Array is declared as isRequired so if we dont declare it we will get error like :
                  Warning: Failed prop type: Required prop `Property Name declared` was not specified in `App Name`</p>
                <h4>Boolean : {this.props.propBool1 ? 'True ...' : 'Sabhi False Hoga ...'}</h4>
                <h4>Boolean : {this.props.propBool2 ? 'True ...' : 'Sabhi False Hoga ...'}</h4>
                <h4>Function : {this.props.propFunc()}</h4>
                <h4>Number : {this.props.propNumber}</h4>
                <h4>String : {this.props.propString}</h4>
                <h4>Object : {this.props.propObject.Fname} ----- {this.props.propObject.Lname} </h4>
              </div>
              <div className="col-sm-6">
                <h2>Component api</h2>
                <ol>
                  <li>setState</li>
                  <p>For updating the state Of the component and It will not replcae the content but add changes to original content.</p>
                  <li>forceUpdate</li>
                  <p>To update the component manually.</p>
                  <li>ReactDOM.findDOMNode</li>
                  <p>For dom manuplation and For using This need to Import react-dom</p>
                </ol>
              </div>
            </div>

            <div className="clearfix"></div>
            <div className="col-sm-12">
              <h3>Demo For component api</h3>
              <div className="col-sm-4">
                <button className="btn btn-default" id="setStateButton" onClick={this.dataToSetStateHandler}>set state</button>
                <h4>setState : {this.dataToSetState.data}</h4>
              </div>
              <div className="col-sm-4">
                <button className="btn btn-default" onClick={this.dataToForceUpdateHandler}>force update</button>
                <h4>Random number: {Math.random()}</h4>
              </div>
              <div className="col-sm-4">
                <button className="btn btn-default" onClick={this.styleSetStateButton}>Dom Manuplation</button>
              </div>
            </div>

            <div className="clearfix"></div>
            <div className="col-sm-12">
              <h3>Component LifeCycle</h3>
              <div className="col-sm-6">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                    <th>Component LifeCycle Functions</th>
                    <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>componentWillMount</td>
                      <td>is executed before rendering, on both server and client side.</td>
                    </tr>
                    <tr>
                      <td>componentDidMount</td>
                      <td>is executed after first render only on the client side. This is where AJAX requests and DOM or state updates should occur. This method is also used for integration with other JavaScript frameworks and any functions with delayed execution like setTimeout or setInterval. We are using it to update the state so we can trigger the other lifecycle methods.</td>
                    </tr>
                    <tr>
                      <td>componentWillReceiveProps</td>
                      <td>is invoked as soon as the props are updated before another render is called. We triggered it from setNewNumber when we updated the state.</td>
                    </tr>
                    <tr>
                      <td>shouldComponentUpdate</td>
                      <td>should return true or false value. This will determine if component will be updated or not. This is set to true by default. If you are sure that component doesn't need to render after state or props are updated, you can return false value.</td>
                    </tr>
                    <tr>
                      <td>componentWillUpdate</td>
                      <td>is called just before rendering.</td>
                    </tr>
                    <tr>
                      <td>componentDidUpdate</td>
                      <td>is called just after rendering.</td>
                    </tr>
                    <tr>
                      <td>componentWillUnmount</td>
                      <td>is called after the component is unmounted from the dom.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-sm-6">
                <p>component lifecycle status : {this.componentLifeCycleStatus}</p>
                <button className="btn btn-primary" onClick={this.setNewNumber}>see component lifcycle status</button>
                <Content myNumber={this.componentLifeCycleNum.data} />
              </div>
            </div>
         </div>
      );
   }
}

level3.propTypes = {
   propArray: React.PropTypes.array.isRequired,
   propBool1: React.PropTypes.bool.isRequired,
   propBool2: React.PropTypes.bool.isRequired,
   propFunc: React.PropTypes.func,
   propNumber: React.PropTypes.number,
   propString: React.PropTypes.string,
   propObject: React.PropTypes.object
}

level3.defaultProps = {
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

class Content extends React.Component {
   componentWillMount() {
     this.componentLifeCycleStatus = 'Component WILL MOUNT!';
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
     this.componentLifeCycleStatus = 'Component DID MOUNT!';
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {
     this.componentLifeCycleStatus = 'Component WILL RECIEVE PROPS!';
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
     this.componentLifeCycleStatus = true;
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
     this.componentLifeCycleStatus = 'Component WILL UPDATE!';
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
     this.componentLifeCycleStatus = 'Component DID UPDATE!';
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
     this.componentLifeCycleStatus = 'Component WILL UNMOUNT!';
      console.log('Component WILL UNMOUNT!')
   }
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

export default level3;
