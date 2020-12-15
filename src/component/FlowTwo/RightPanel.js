import React from "react";
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import FieldsName from "./FieldsName";
import "../../App.css";

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;

export default class RightPanel extends React.Component{

    render(){
        const { header} = this.props;

        //console.log(this.props.header);

        let SectionOne, SectionTwo;
        

        
        SectionOne = header.map((val,index)=>{
            if(index<3)
            {
               // console.log(val);
                let newID = "column_"+(index);
               // console.log(val[newID]);
                return(
                        <div key={index} className="disptc vtop">
                            <Droppable                         
                                droppableId={newID}>
                                {(provided, snapshot) => 
                                    <TaskList
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    isDraggingOver={snapshot.isDraggingOver}
                                    >
                                        {val[newID].map((task, index) => (
                                            <FieldsName keyid={task.id} key={task.id} val={task.label} index={index} />
                                        ))}
                                    {provided.placeholder}
                                    </TaskList>
                                }
                            </Droppable>
                        </div>
                );
            }
        });

        SectionTwo = header.map((val,index)=>{
            //console.log(typeof index);
            if(2 < index )
            {
               // console.log("second", index);
                let newID = "column_"+(index);
               
                return(
                        <div key={index} className="disptc vtop">
                            <Droppable                         
                                droppableId={newID}>
                                {(provided, snapshot) => 
                                    <TaskList
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    isDraggingOver={snapshot.isDraggingOver}
                                    >
                                        {val[newID].map((task, index) => (
                                            <FieldsName keyid={task.id} key={task.id} val={task.label} index={index} />
                                        ))}
                                    {provided.placeholder}
                                    </TaskList>
                                }
                            </Droppable>
                        </div>
                );
            }
        })




        return(
            <div className="rightpanel">  
                <div id="head1" className="dispt bg2">
                    {SectionOne}
                    
                </div>  
                <div id="head2" className="dispt bg2">                    
                    {SectionTwo}
                </div>
            </div>
        )
    }


}

