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

        let newOrderArr_2, valueObj_2, dest_Arr, newDest_Arr, newSource_Arr;

        //----if the values are dropped back into main column
        if(destination.droppableId==='column_A')
        {
            console.log("change 1");
            //----copy the souce array----         
            newOrderArr_2 = Array.from(this.state[source.droppableId]);

            //----find the value dropped----
            valueObj_2 = newOrderArr_2[source.index];

            //----take out value from soruce array----
            newOrderArr_2.splice(source.index, 1);

            //----make copy of destination array in this case coulmn_A----
            dest_Arr = Array.from(this.state.getFormFields.LayoutOne.headerField)

            //----insert the value in destination array----
            dest_Arr.splice(destination.index, 0,valueObj_2);

            //----copy the destination values in new varaible
            newDest_Arr = {
                ...this.state,
                LayoutOne:{
                    ...this.state.getFormFields.LayoutOne,
                    headerField: dest_Arr,                    
                }
            };   

            //----update the state with new values----
            this.setState({
                getFormFields: newDest_Arr,
                [source.droppableId] : newOrderArr_2
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
            
            //----make copy of destination array----
            //dest_Arr = Array.from(this.state[destination.droppableId]);

            let b = JSON.parse(JSON.stringify(this.state.headerSection));
            //console.log("[b value before]");
            //console.log(b);

            let indexofColumn, coulmnName;

            for (let key in b) {
                let keys = Object.keys(b[key]);
                if(keys[0]===destination.droppableId)
                {
                    indexofColumn = key;
                    //console.log(keys[0]);

                }
                
            }

            //console.log("[indexofColumn]", indexofColumn);
            //console.log(b[indexofColumn][destination.droppableId]);

            b[indexofColumn][destination.droppableId].splice(destination.index, 0,valueObj_2);

            //console.log("[value of b after]");
            //console.log(b);
            //console.log("-----");
            //console.log(this.state.headerSection);

             //----copy the destination values in new varaible
            const newState_2 = {
                ...this.state,
                LayoutOne:{
                    ...this.state.getFormFields.LayoutOne,
                    headerField: newOrderArr_2,
                    
                }
            };  


            




           
           
           
           
           
            //let b = JSON.parse(JSON.stringify(this.state.headerSection));
            //console.log(b);
            //console.log(b[0]["column_1"].push('apple'));

            

            

            // for(let i=0;i<b.length;i++)
            // {
                
            //     let keys = Object.keys(b[i]);     
                           
            //     if(keys[0]===destination.droppableId)
            //     {
            //         console.log("in12");
                   
            //         b[i][keys[0]].splice(destination.index, 0,valueObj_2);
                    
            //     }
            //     console.log(b[i]);

            // }
            
            // console.log(b);
            // console.log("---------");
            

            // console.log(this.state.headerSection);
            // console.log("----------");

       

            // //----insert the value in destination array----
            // dest_Arr.splice(destination.index, 0,valueObj_2);

            // //----copy the destination values in new varaible
            // const newState_2 = {
            //     ...this.state,
            //     LayoutOne:{
            //         ...this.state.getFormFields.LayoutOne,
            //         headerField: newOrderArr_2,
                    
            //     }
            // };  
            
            //  this.setState({
            //     getFormFields: newState_2,
            //     [destination.droppableId] : dest_Arr
            // });

            return;
            
        }
        else if(source.droppableId!=='column_A' && destination.droppableId!=='column_A')
        {
            console.log("change 3");
            //----copy the souce array----
            newOrderArr_2 = Array.from(this.state[source.droppableId]);;

            //----find the value dropped----
            valueObj_2 = newOrderArr_2[source.index];

            //----take out value from soruce array----
            newOrderArr_2.splice(source.index, 1);

            //----make copy of destination array----
            dest_Arr = Array.from(this.state[destination.droppableId]);

            //----insert the value in destination array----
            dest_Arr.splice(destination.index, 0,valueObj_2);

           
            
             this.setState({
                [source.droppableId]: newOrderArr_2,
                [destination.droppableId] : dest_Arr
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