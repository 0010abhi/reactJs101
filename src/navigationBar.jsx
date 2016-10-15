import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

class navigationBar extends React.Component{
  constructor(props){
    super(props);
    this.makeMeActive = this.makeMeActive.bind(this);
  }

  makeMeActive(e){
    $('.navLi').each(function(){
      $(this).removeClass('navActive');
    });
    $(e.target).addClass('navActive');
  }

  render(){
    return(
      <div className="col-sm-12 navigation">
        <ul className="noListStyle">
          <Link to="/"><li id="Home" className="col-sm-2 navLi navActive" onClick={this.makeMeActive}>Home</li></Link>
          <Link to="/level1"><li id="Level1" className="col-sm-2 navLi" onClick={this.makeMeActive}>Level 1</li></Link>
          <Link to="/level2"><li id="Level2" className="col-sm-2 navLi" onClick={this.makeMeActive}>Level 2</li></Link>
          <Link to="/level3"><li id="Level3" className="col-sm-2 navLi" onClick={this.makeMeActive}>Level 3</li></Link>
          <Link to="/level4"><li id="Level4" className="col-sm-2 navLi" onClick={this.makeMeActive}>Level 4</li></Link>
          <Link to="/demoApp"><li id="DemoApp" className="col-sm-2 navLi" onClick={this.makeMeActive}>Demo Application</li></Link>
        </ul>
        {this.props.children}
      </div>
    );
  }
};

export default navigationBar;
