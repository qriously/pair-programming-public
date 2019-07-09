import * as React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import ItemTypes from '../ItemTypes'
import {useRef} from "react";
import {useDrag, useDrop} from "react-dnd";

export const Question = ({question, index, active, deleteQuestion, setActive, dropQuestion}) => {

    const getClassName = (active, isOver, isDragging) => {
        let className = 'question';
        if (active) {
            className += ' active'
        }
        if (isOver) {
            className += ' isOver'
        }
        if (isDragging) {
            className += ' isDragging'
        }
        return className
    };

    const ref = useRef(null);

    // Stuff that the drop event provides (namely drop and isOver)
    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.QUESTION,
        drop(item) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return
            }

            // -------------------- drop question handler -------------------- //

            dropQuestion(dragIndex, hoverIndex);

            // -------------------- drop question handler -------------------- //

            item.index = hoverIndex
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    // Stuff that the drag event provides (namely isDragging)
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.QUESTION, question, index },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    return <div ref={ref}
                className={getClassName(active, isOver, isDragging)} onClick={() => setActive(question.id)}>
        <div className={'action-container'}>
            <span className={'action far fa-trash-alt'}
                  onClick={(e) => {
                      e.stopPropagation();
                      deleteQuestion(question.id);
                  }} />
        </div>

        <div>
            <div>
                <strong>{question.text}</strong>
            </div>
            <div>{question.type}</div>
        </div>
    </div>
};