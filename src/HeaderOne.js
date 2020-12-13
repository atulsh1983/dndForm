import React, { Component } from 'react';
import './App.css';

export default class HeaderOne extends Component{

    constructor(props)
    {
        super(props);
        
    }

    render(){

        //console.log(this.props);

        let setUI,leftCol1,midCol1, rightCol1, SenderName, SenderPhone, SenderGSTIN, invoiceUNum, billNum, billDate, recname, recphn , recGSTIN, leftCol2, midCol2, rightCol2 = null;

        const {  fields } = this.props;

        

        if(fields)
        {
            

            fields.map((val,index)=>{
                console.log(val);
                console.log(index);

                if(val.type==='Sender_Name')
                {
                    SenderName = <div className="setbox pad1">
                        <label>From:</label>
                        <input type="text"/>                        
                    </div>
                }
                if(val.type==='Sender_Phone')
                {
                    SenderPhone = <div className="setbox pad1">
                        <label>Phone:</label>
                        <input type="text"/>                        
                    </div>
                }
                if(val.type==='Invoice_Number')
                {
                    invoiceUNum = <div className="setbox pad1">
                        <label>Invoice No.:</label>
                        <input type="text"/>                        
                    </div>
                }
                if(val.type==='Sender_GSTIN')
                {
                    SenderGSTIN = <div className="setbox pad1">
                        <label>GSTIN NO:</label>
                        <input type="text"/>                        
                    </div>
                }
                if(val.type==='Bill_Number')
                {
                    billNum = <div className="setbox pad1">
                        <label>Bill No.:</label>
                        <input type="text"/>                        
                    </div>
                }                
                if(val.type==='Bill_date')
                {
                    billDate = <div className="setbox pad1">
                        <label>Bill Date:</label>
                        <input type="text"/>                        
                    </div>
                }

                if(val.type==='Rec_Name')
                {
                    recname = <div className="setbox pad1">
                        <label>To:</label>
                        <input type="text"/>                        
                    </div>
                }
               
                if(val.type==='Rec_Phone')
                {
                    recphn = <div className="setbox pad1">
                        <label>Phone:</label>
                        <input type="text"/>                        
                    </div>
                }
                if(val.type==='Rec_GSTIN')
                {
                    recGSTIN = <div className="setbox pad1">
                        <label>GSTIN No.:</label>
                        <input type="text"/>                        
                    </div>
                }
               


            })

            
            leftCol1 = <div className="disptc vmid">
                        {SenderName}
                        {SenderPhone}
                     </div>;
            midCol1 = <div className="disptc vmid">
                        {SenderGSTIN}
                    </div>;
            
            rightCol1=<div className="disptc vmid">
                {billNum}
                {billDate}
                {invoiceUNum}
            </div>;

            leftCol2 = <div className="disptc vmid">
            {recname}
            {recphn}
         </div>;

            midCol2 = <div className="disptc vmid">
            {recGSTIN}
            </div>;

            rightCol2 = <div className="disptc vmid"></div>





        }



        return(
            <div className="fullw">
                <div className="txtc sethead">Tax Invoice</div>
                <div id="SenderDetails" className="mt5 bg1 dispt fullw setequal">                    
                    {leftCol1}
                    {midCol1}
                    {rightCol1}                    
                </div>
                <div id="RecieverDetails" className="mt5 bg1 dispt fullw setequal">
                    {leftCol2}
                    {midCol2}
                    {rightCol2}
                    
                </div>
            </div>
        );
    }



}