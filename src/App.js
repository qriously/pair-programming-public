import {DndProvider} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import {QuestionList} from "./components/QuestionList";
import React from "react";

export function App() {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <QuestionList />
            </DndProvider>
        </div>
    )
}