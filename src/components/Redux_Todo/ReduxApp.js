import React, { Component } from 'react'
import { connect } from 'react-redux'
import Heading from '../Todo/Heading/Heading';
import ActiveTab from './ActiveTab/ActiveTab';
import Form from './Form/Form';

import '../../styles/App.css';
import ListItem from './ListItem/ListItem';


class ReduxApp extends Component {
    constructor(props) {
        super(props)
    
    }



    render() {
        return (
            <div className="App">
                <Heading/>
                <Form/>
                <ActiveTab/>
                <ListItem/>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp)
