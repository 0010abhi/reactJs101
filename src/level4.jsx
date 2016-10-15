import React from 'react';

class level4 extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: 'yeah'
      };
      this.cState = {
         cData: 'hi'
      };
      this.updateState = this.updateState.bind(this);
      this.cUpdateState = this.cUpdateState.bind(this);

      this.myObject = [
        {'Id' : 0, 'value' : {'name' : 'Abhishek Sachdeva', 'age' : 23}},
        {'Id' : 1, 'value' : {'name' : 'Aman Bains', 'age' : 24}},
        {'Id' : 2, 'value' : {'name' : 'Ayush Aggarwal', 'age' : 24}},
        {'Id' : 3, 'value' : {'name' : 'Ayush Dheer', 'age' : 22}},
        {'Id' : 4, 'value' : {'name' : 'Swaraj Subba', 'age' : 22}}
      ];
   }

   updateState(e) {
      this.setState({data: e.target.value});
   }

   cUpdateState(e) {
      this.setState({cData: e.target.value});
   }

   render() {
      var paddingTop40 = {paddingTop: '40px'};
      return (
         <div className="row" style={paddingTop40}>
           <div className="col-sm-12">
             <div className="col-sm-6">
               <input className="form-control" type="text" value={this.state.data} onChange={this.updateState} />
               <h4>{this.state.data}</h4>
             </div>
            <Content myDataProp={this.cState.cData} updateStateProp={this.cUpdateState} />
            </div>
            <div className="col-sm-12">
              <div className="col-sm-6">
                <h4>Dyanmic object binding</h4>
                <table className="table">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Name</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                {
                  this.myObject.map(function(data){
                    return <tr key={data.Id+1}><td>{data.Id + 1}</td><td>{data.value.name}</td><td>{data.value.age}</td></tr>;
                  })
                }
                </tbody>
                </table>
              </div>
              <div className="col-sm-6">
                <h4>form Elements</h4>
                <form className='form form-inline'>
                    <div className="col-sm-12">
                    <label className="col-sm-4">Name</label>
                    <input className="col-sm-8 form-control" type='text'/>
                    </div>
                    <div className="col-sm-12">
                    <label className="col-sm-4">Gender</label>
                          <span className='col-sm-2'><input type="radio" name="gender" value="male"/>&nbsp;Male</span>
                          <span className='col-sm-2'><input type="radio" name="gender" value="female"/>&nbsp;Female</span>
                          <span className='col-sm-2'><input type="radio" name="gender" value="other"/>&nbsp;Other</span>
                    </div>
                    <div className="col-sm-12">
                    <label className="col-sm-4">Category</label>
                      <select className="col-sm-4 form-control" name="cars">
                        <option value="volvo">C1</option>
                        <option value="saab">C2</option>
                        <option value="fiat">C3</option>
                        <option value="audi">C4</option>
                      </select>
                    </div>
                    <div className="col-sm-12">
                    <label className="col-sm-4">Comment</label>
                    <textarea className="col-sm-4 form-control" name="message" rows="4" cols="40" value="The cat was playing in the garden."></textarea>
                    </div>
                    <div className="col-sm-12">
                      <span className='col-sm-5'><input type="checkbox" name="vehicle1" value="Bike"/>&nbsp;store values as cookie</span>
                  </div>
                  <div className="col-sm-12">
                    <div className='col-sm-2'></div>
                    <input className="col-sm-3 btn btn-default" type="submit" value="Submit"/>
                    <div className='col-sm-2'></div>
                  <input className="col-sm-3 btn btn-primary" type="reset" value="Reset"/>
                  <div className='col-sm-2'></div>
                  </div>
                  </form>
              </div>
            </div>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div className="col-sm-6">
            <input className="form-control" type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}

export default level4;
