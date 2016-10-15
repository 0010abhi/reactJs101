import React from 'react';

class homePage extends React.Component {
   render() {
      return (
         <div className="row">
            <div className="col-sm-12">
              <h2> React Js Learning </h2>
              <p>Hello, Abhishek Let's Start wid react js.</p>
            </div>
            <div className="col-sm-12">
              <h4>Useful links</h4>
              <p>Beginners : <a href="http://www.tutorialspoint.com/reactjs/" target="_blank">React Js Tutorials</a></p>
              <p>React Router : <a href="https://css-tricks.com/learning-react-router/" target="_blank">Learn React Router</a></p>
              <p>Official website : <a href="https://facebook.github.io/react/docs/getting-started.html" target="_blank">Documentation Of ReactJs By Facebook</a></p>
            </div>

         </div>
      );
   }
}

export default homePage;
