import React from 'react';
import "../../App.css";
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';


const Container = styled.div`
  border: 1px solid lightgrey;
  width:200px;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightGreen' : 'white')};
`;



export default class FieldsName extends React.Component{


    render(){
        //console.log(this.props);
        return(
         
          <Draggable draggableId={this.props.keyid} index={this.props.index} >
            {(provided, snapshot) => (
              <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
              >
                {this.props.val}
              </Container>
            )}
          </Draggable>
        
            
        )
    }
}