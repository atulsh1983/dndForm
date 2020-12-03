import React, { Component } from 'react';
import './App.css';

export default class HeaderOne extends Component{

    constructor(props)
    {
        super(props);
        
    }

    render(){

        //console.log(this.props);

        let setUI,leftCol1,midCol1, rightCol1 = null;

        const {  fields } = this.props;

        

        if(fields)
        {
            leftCol1 = <div>
                            1
                     </div>;
            midCol1 = <div>2</div>;
            
            rightCol1=<div>3</div>;
        }



        return(
            <div className="fullw">
                <div className="txtc sethead">Tax Invoice</div>
                <div id="SenderDetails" className="mt5 setbox bg1 setm">                    
                    {leftCol1}
                    {midCol1}
                    {rightCol1}                    
                </div>
            </div>
        );
    }



}