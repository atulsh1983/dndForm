import React from 'react';
import ReactDOM from 'react-dom';

import Column from "./column";
import {DragDropContext} from 'react-beautiful-dnd';
import { useHistory } from "react-router-dom";
import './App.css';
import axios from "axios";



class DragUI extends React.Component {
  // "https://run.mocky.io/v3/e15d6b45-8507-499c-a39d-1f09cf84c62f"

  state={
    getFormFields: null ,
    fieldSaved: null   
  }

 
  

  componentDidMount(){

    axios.get('https://run.mocky.io/v3/e52b9ce4-0ded-4bc7-a5e6-3e07e50c7fff')
    .then(response=>{
      //console.log(response);
      this.setState({
        getFormFields: response.data
      })
    })
    .catch(error=>{
      //console.log(error);
    })
  }

  onDragEnd = result => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';

    //console.log(result);
  
    const {destination, source, draggableId } = result;
  
    if(!destination) {
      return;
    }
  
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
  
    const start = this.state.getFormFields.columns[source.droppableId];
    const finish = this.state.getFormFields.columns[destination.droppableId];

    
  
    if(start === finish) 
    {
        const newTaskIds = Array.from(start.formIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        const newColumn = {
          ...finish,
          formIds: newTaskIds,
        };
        const newState= {
          ...this.state.getFormFields,
          columns:{
            ...this.state.getFormFields.columns,
            [newColumn.id]: newColumn,
          }
        }      
        this.setState({
          getFormFields : newState
        });
        return;  
    }

    // Moving from one list to another
    const startFormIds = Array.from(start.formIds);   
    startFormIds.splice(source.index, 1);
    const newStart = {
      ...start,
      formIds: startFormIds,
    };
    const finishFormIds = Array.from(finish.formIds);
    finishFormIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      formIds: finishFormIds,
    };    

    const newState = {
      ...this.state.getFormFields,
      columns: {
        ...this.state.getFormFields.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    this.setState({
      getFormFields : newState
    });
  
  };


  finalFormJson = () =>{

    console.log("in submit");

    let fields = document.querySelectorAll("[data-rbd-droppable-id='column-2']")[0].childNodes
;

    //TBD:  create the json from fields data and save in in require format

   //console.log(fields);

   let fieldObj=[];

   if(fields.length>0)
   {
     for(let i=0;i<fields.length;i++)
     {
        //console.log(fields[i].getAttribute('data-getfieldid'));  
        fieldObj.push({
          'type' : fields[i].getAttribute('data-getfieldid'),
          'required' : "Y"
        })
     }

     //TBD: data output to be send in API 
     console.log(fieldObj)

     this.setState({
        fieldSaved: fieldObj
     },()=>{
      this.props.history.push({ 

        pathname: '/Preview',
        state: this.state.fieldSaved
      })
     })
   }

    
  }

  

  render() {
    
    const { getFormFields } = this.state;

    

    // console.log("[App redner]");
    // console.log(getFormFields);

    let setDragParent;

    if(getFormFields)
    {
      setDragParent=  <div>
                        <DragDropContext onDragEnd={this.onDragEnd}>
                          <div className="setbox">
                            {getFormFields.columnOrder.map(columnId => {
                              const column = getFormFields.columns[columnId];
                              
                              const tasks = column.formIds.map(fieldId => getFormFields.field[fieldId]);
                              
                              return <Column key={column.id} column={column} tasks={tasks} />;
                            })}
                          </div>
                        </DragDropContext>
                        
                      </div>;
    }
    else
    {
      setDragParent = <div>Loading</div>
    }


    
    

    return (
      <div>
          {setDragParent}

         
              <div onClick={this.finalFormJson}>Preview</div>
          
      </div>
     
    )
  }
}

export default DragUI;
