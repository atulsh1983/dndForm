import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import '../../App.css';
import axios from "axios";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

class DragUI extends React.Component{


    state={
        "getFormFields": null ,
        "fieldSaved": null,
        "headerSection":[
            {"column_0":[]},
            {"column_1":[]},
            {"column_2":[]},
            {"column_3":[]},
            {"column_4":[]},
            {"column_5":[]}
        ]
       
    }



    componentDidMount(){

        axios.get('https://run.mocky.io/v3/99759884-e9d2-40f2-b623-71360aaff5de')
        .then(response=>{
            this.setState({
                getFormFields: response.data
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }

    onDragEnd = result => {
        //console.log("on dragend");
        document.body.style.color = 'inherit';
        document.body.style.backgroundColor = 'inherit';


        const {destination, source, draggableId } = result;
        //console.log("[source]", source);
        //console.log("[destination]", destination);        
        //console.log("[draggableId]", draggableId);

        if(!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        // same block dnd logic
        if(source.droppableId==='column_A' && destination.droppableId==='column_A')
        {
            console.log("same movement");

            const newOrder = Array.from(this.state.getFormFields.LayoutOne.headerField);
            let valueObj = this.state.getFormFields.LayoutOne.headerField[source.index];
            newOrder.splice(source.index, 1);
            newOrder.splice(destination.index, 0,valueObj);
            
            const newState = {
                ...this.state.getFormFields,
                LayoutOne:{
                    ...this.state.getFormFields.LayoutOne,
                    headerField: newOrder
                }
            }

            this.setState({
                getFormFields: newState
            });

            return;
        }

        // Moving from one list to another

        let newOrderArr_2, valueObj_2, dest_Arr, newDest_Arr, newSource_Arr;

        //----if the values are dropped back into main column
        if(destination.droppableId==='column_A')
        {
            console.log("change 1");

            let b = JSON.parse(JSON.stringify(this.state.headerSection));

            //console.log(b);

            let sourceIndex;

            for (let key in b) {
                let keys = Object.keys(b[key]);               
                if(keys[0]===source.droppableId)
                {
                    sourceIndex = key;
                }                           
            }

            //console.log("[sourceIndex]", sourceIndex);

            valueObj_2 = b[sourceIndex][source.droppableId][source.index];           

            b[sourceIndex][source.droppableId].splice(source.index, 1);

           

            
            let newOrder_2 = Array.from(this.state.getFormFields.LayoutOne.headerField);

            newOrder_2.splice(destination.index, 0,valueObj_2);

            let newState_2 = {
                ...this.state.getFormFields,
                LayoutOne:{
                    ...this.state.getFormFields.LayoutOne,
                    headerField: newOrder_2
                }
            }
            

            // console.log("[after] b");
            // console.log(b);
            // console.log("[newOrder_2]");
            // console.log(newOrder_2);

            //----update the state with new values----
            this.setState({
                getFormFields: newState_2,
                headerSection:b
            });
    
            
            return;

        }

        else if(source.droppableId==='column_A')
        {
            console.log("change 2");
            //----copy the souce array----
            newOrderArr_2 = Array.from(this.state.getFormFields.LayoutOne.headerField);

            //----find the value dropped----
            valueObj_2 = this.state.getFormFields.LayoutOne.headerField[source.index];

            //----take out value from soruce array----
            newOrderArr_2.splice(source.index, 1);            
          
            //----make shallow copy of headersection----
            let b = JSON.parse(JSON.stringify(this.state.headerSection));
            
            let indexofColumn, coulmnName;

            //----find the index whicd is dragged and dropped
            for (let key in b) {
                let keys = Object.keys(b[key]);
                if(keys[0]===destination.droppableId)
                {
                    indexofColumn = key;
                }                
            }

            //---- change the shallow copied array value ----
            b[indexofColumn][destination.droppableId].splice(destination.index, 0,valueObj_2);

            //----copy the source values in new varaible
            const newState_2 = {
                ...this.state,
                LayoutOne:{
                    ...this.state.getFormFields.LayoutOne,
                    headerField: newOrderArr_2,                    
                }

            };  

            this.setState({
                getFormFields: newState_2,
                headerSection: b
            });

            return;
            
        }
        else if(source.droppableId!=='column_A' && destination.droppableId!=='column_A')
        {
            console.log("change 3");
            let b = JSON.parse(JSON.stringify(this.state.headerSection));

            let sourceIndex, dropIndex, valueObj_2;

            for (let key in b) {
                let keys = Object.keys(b[key]);               
                if(keys[0]===source.droppableId)
                {
                    sourceIndex = key;
                }  
                if(keys[0]===destination.droppableId)
                {
                    dropIndex = key;
                }            
            }

            valueObj_2 = b[sourceIndex][source.droppableId][source.index];           

            b[sourceIndex][source.droppableId].splice(source.index, 1);

            b[dropIndex][destination.droppableId].splice(destination.index, 0,valueObj_2);
            
             this.setState({
                 ...this.state,
                headerSection: b
                
            });

            return;
            
        }

               
        
       
        

        


    }



    render(){

        let setUILeft=null;

        const { getFormFields,toField, headerSection } =  this.state;

        if(getFormFields)
        {
            
            setUILeft = <div id="mainCont">
                            <DragDropContext onDragEnd={this.onDragEnd}>
                                <LeftPanel dataValues={getFormFields.LayoutOne.headerField}/>
                                <RightPanel header={headerSection}/>
                            </DragDropContext>
                        </div>
        }



        return(
            <div>
                {setUILeft}
            </div>
        )
    }
};

export default DragUI;