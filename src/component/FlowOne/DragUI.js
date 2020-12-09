import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import '../../App.css';
import axios from "axios";
import LeftPanel from "./LeftPanel";


class DragUI extends React.Component{


    state={
        getFormFields: null ,
        fieldSaved: null   
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

        //console.log("[destination]", destination);
        //console.log("[source]", source);
        //console.log("[draggableId]", draggableId);

        if(!destination) {
            return;
        }
        
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        // same block dnd logic
        if(destination.droppableId === source.droppableId)
        {
            console.log(this.state.getFormFields);

            const newOrder = Array.from(this.state.getFormFields.LayoutOne.headerField);

            let valueObj = this.state.getFormFields.LayoutOne.headerField[source.index];

            //console.log(valueObj);

            //console.log(newOrder);

            newOrder.splice(source.index, 1);
            newOrder.splice(destination.index, 0,valueObj);
            
            console.log("[After]");
            console.log(newOrder);

            const newState = {
                ...this.state.getFormFields,
                LayoutOne:{
                    ...this.state.getFormFields.LayoutOne,
                    headerField: newOrder
                }
            }

            console.log("[new state]");
            console.log(newState);

            this.setState({
                getFormFields: newState
            })



        }

    }



    render(){

        let setUILeft=null;

        const { getFormFields } =  this.state;

        if(getFormFields)
        {
            
            setUILeft = <div id="mainCont">
                            <DragDropContext onDragEnd={this.onDragEnd}>
                                <LeftPanel dataValues={getFormFields}/>
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