import React, { Component } from 'react'
import { connect } from 'react-redux'
import Heading from '../Todo/Heading/Heading';
import ActiveTab from './ActiveTab/ActiveTab';
import Form from './Form/Form';



const bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

class ReduxApp extends Component {
    constructor(props) {
        super(props)
    
    }
    



    render() {
        return (
            <div className="ReduxApp" style={{backgroundColor: bgColors.Red}}>
                <Heading/>
                <Form/>
                <ActiveTab/>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp)
