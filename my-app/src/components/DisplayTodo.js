import React from 'react'

const DisplayTodo = ({numberOfToDos, getAllTodo}) => {
    
    return(
        <div className="display-wrapper">
            <div className="display-box">
                <div className="display-board">
                    <h4>생성된 수</h4>
                    <div className="number">
                    {numberOfToDos}
                    </div>
                </div>
                <div className="get-button">
                    <button onClick={() => getAllTodo()}>Get all toDos</button>
                </div>
            </div>
        </div>
    )
}

export default DisplayTodo;