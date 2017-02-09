import React from 'react';
import {browserHistory} from 'react-router';


export class NewItem extends React.Component {
  onNavigateHome() {
    browserHistory.push('/home');
  }

  render() {
    return (
        <div>
            <h3>Add item</h3>
            <button onClick={this.onNavigateHome} className="btn btn-primary">Store</button>
        </div>
    );
  }
}
