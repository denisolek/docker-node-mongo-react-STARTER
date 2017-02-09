import React from 'react';
import {Link} from 'react-router';

export class Header extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-inverse">
            <a className="navbar-brand" href="#">MAGAZYN</a>
                <ul className="nav navbar-nav">
                    <li className="nav-item"><Link to={'/home'} className="nav-link" activeClassName="active">Stan magazynu</Link></li>
                    <li className="nav-item"><Link to={'/newItem'} className="nav-link" activeClassName="active">Dodaj przedmiot</Link></li>
                </ul>
        </nav>
    );
  }
}
