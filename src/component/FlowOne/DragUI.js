import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import '../../App.css';
import axios from "axios";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";


class DragUI extends React.Component{


    state={
        getFormFields: null ,
        fieldSaved: null,
        "column_1":[],
        "column_2":[],
        "column_3":[],
        "column_4":[],
        "column_5":[],
        "column_6":[],
        "columnOrder": [ "column_1", "column_2", "column_3", "column_4", "column_5", "column_6"]
    }



    componentDidMount(){

        axios.get('https://run.mocky.io/v3/b5c01298-8636-4f93-a848-edc22690bd43')
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
        console.log("on dragend");
        document.body.style.color = 'inherit';
        document.body.style.backgroundColor = 'inherit';


        const {destination, source, draggableId } = result;
        console.log("[source]", source);
        console.log("[destination]", destination);        
        console.log("[draggableId]", draggableId);

        if(!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        // same block dnd logic
        if(destination.droppableId === source.droppableId)
        {
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
        const newOrder_2 = Array.from(this.state.getFormFields.LayoutOne.headerField);
        let valueObj_2 = this.state.getFormFields.LayoutOne.headerField[source.index];
        newOrder_2.splice(source.index, 1);
        

        let newDestVal;

        //console.log(destination.droppableId);
        //console.log(this.state[destination.droppableId]);

        const copyColumn = Array.from(this.state[destination.droppableId]);

        //console.log("[copyColumn before]", copyColumn);

        copyColumn.splice(destination.index, 0,valueObj_2);


        //console.log("[copyColumn after]", copyColumn);

        let columID = destination.droppableId;

        const newState_2 = {
            ...this.state,
            LayoutOne:{
                ...this.state.getFormFields.LayoutOne,
                headerField: newOrder_2,
                
            }
        };

        // const newState_2 = {
        //     ...this.state,
        //     LayoutOne:{
        //         ...this.state.getFormFields.LayoutOne,
        //         headerField: newOrder_2,
                
        //     }
        // };

        // const newState_3 = {
        //     ...this.state,
        //     [destination.droppableId]: copyColumn
        // }

        //console.log(newState_2);
        //console.log(newState_3);
        // console.log(valueObj_2);
        this.setState({
            getFormFields: newState_2,
            [destination.droppableId] : copyColumn
        });


        


    }



    render(){

        let setUILeft=null;

        const { getFormFields,toField, column_1, column_2, column_3, column_4, column_5, column_6, columnOrder} =  this.state;

        if(getFormFields)
        {
            
            setUILeft = <div id="mainCont">
                            <DragDropContext onDragEnd={this.onDragEnd}>
                                <LeftPanel dataValues={getFormFields.LayoutOne.headerField}/>
                                <RightPanel 
                                    column_1={column_1}
                                    column_2={column_2}
                                    column_3={column_3}
                                    column_4={column_4}
                                    column_5={column_5}
                                    column_6={column_6}
                                    columnOrder={columnOrder}
                                    />
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