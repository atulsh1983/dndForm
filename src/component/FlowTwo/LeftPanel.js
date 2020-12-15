import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import FieldsName from "./FieldsName";
import styled from 'styled-components';
import "../../App.css";


const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;



export default class LeftPanel extends React.Component{


    render(){

        const {dataValues} = this.props;

        let headerFields;

        headerFields = <div>
            <div className="txtc panelopt">Header</div>
            <div>
            <Droppable                         
                        droppableId="column_A">
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
                    </Droppable>

            </div>
        </div>

       // console.log(dataValues.LayoutOne.headerField);
        
        return(
            <div className="leftpanel">
                 {headerFields}                
            </div>
        )
    }
}