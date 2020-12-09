import React, {Component} from 'react';
import './App.css';
import HeaderOne from "./HeaderOne";




class Preview extends Component{

    constructor(props){
        super(props);
    }

    state = {
        previewData:null
    }

    componentDidMount(){
       // console.log(this.props.location);
        const jsonU = {
            "header": {
              "layoutType" : "d1",
              "fieldData" :[
             {
                "type" : "Sender_Name",
                "required": "y",
                "field": "input",
                "label":"from"
             },
             {
               "type" : "Sender_GSTIN",
               "required": "y",
               "field": "input",
               "label": "GSTIN NO"
             },
             {
               "type" : "Sender_Phone",
               "required": "y",
               "field": "input",
               "label":"Phone"
             },
             {
               "type" : "Bill_Number",
               "required": "y",
               "field": "input",
               "label":"Bil No."
             },
             {
               "type" : "Bill_date",
               "required": "y",
               "field": "input",
               "label":"Bill Date."
             },
             {
               "type" : "Invoice_Number",
               "required": "y",
               "field": "input",
               "label":"Invoice No."
             },
             {
               "type" : "Rec_Name",
               "required": "y",
               "field": "input",
               "label":"To"
             },
             {
               "type" : "Rec_Phone",
               "required": "y",
               "field": "input",
               "label":"Phone"
             },
             {
               "type" : "Rec_GSTIN",
               "required": "y",
               "field": "input",
               "label":"GSTIN No."
             }
            ]
              
            }
            
            
            
            
            
           
          }
        this.setState({
            //previewData: this.props.location.state
            previewData: jsonU
        })
    }



    render(){

        const { previewData } =  this.state;

        //console.log(previewData);

        let headerrenderForm = null;

        if(previewData)
        {
            //console.log(previewData.header.fieldData);
            if(previewData.header.layoutType==="d1")
            {
                headerrenderForm = <HeaderOne fields={previewData.header.fieldData}/>
            }

        }
        
        return(
            <div>
                <form id="formRender">
                    {headerrenderForm}
                </form>
            </div>
        )
    }
}

export default Preview;