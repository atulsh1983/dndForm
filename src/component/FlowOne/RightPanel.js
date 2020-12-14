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
        const {column_1, column_2, column_3, column_4, column_5, column_6, columnOrder} = this.props;

        console.log(this.props);

        let SectionOne = columnOrder.map((val,index)=>{
            if(index<3)
            {
                console.log("[map value]");
                console.log(index);
                console.log(this.props[val]);
                let newID = "column_"+index;
                return(
                        <div key={index} className="disptc vtop">
                            <Droppable                         
                                droppableId={val}>
                                {(provided, snapshot) => 
                                    <TaskList
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    isDraggingOver={snapshot.isDraggingOver}
                                    >
                                        {this.props[val].map((task, index) => (
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
                <div className="dispt bg2">
                    {SectionOne}
                </div>  
            </div>
        )
    }


}



{/* <Droppable                         
                        droppableId="column-2">
                        {(provided, snapshot) => 
                            <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                            >
                                {dataValues.map((task, index) => (
                                <FieldsName keyid={task.id} key={task.id} val={task.label} index={index} />
                                ))}
                            {provided.placeholder}
                            </TaskList>
                        }
                    </Droppable> */}