import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase';
import fire from './fire';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { drinks: [], counter: "-"}
    }

    componentWillMount(){
        let drinksRef = fire.database().ref('drinks').orderByKey().limitToLast(100);
        drinksRef.on('value', snapshot => {
            this.setState((prevState) => {
                return {counter: snapshot.numChildren()};
            });
        })
    }

    add(e){
        fire.database().ref('drinks').push({ date: new Date().toString() });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="title">Vocês tomaram</div>
                    <div className="count">{this.state.counter}</div>
                    <div className="subtitle">energéticos em 2018</div>
                    <RaisedButton onClick={this.add.bind(this)} className="add" label="Tomei mais um" secondary={true} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
