import * as React from 'react';
import { User } from './model/User';

interface HelloProps { compiler: string; framework: string; }

interface State {
    user:User;
  }

export class Hello extends React.Component<HelloProps, State> {

    constructor(props) {
        super(props);
        this.state = { user: new User()};
    }

    render() {
    return (
    <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
    
    
    );
    }
}
