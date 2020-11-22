import React, { useState } from 'react'
import './Form.css'

const Form: React.FC<{}> = () => {

    const [enter, setEnter] = useState<boolean>(false)
    const [completedDror, setCompletedDrop] = useState<boolean>(false)

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault()
        if (!enter) {
            setEnter(true)
        } 
    }

    const dragOutHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault()       
        if (enter) {
            setEnter(false)
        } 
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault()
        setEnter(false)
        setCompletedDrop(true)
        console.log('DROP', [e.dataTransfer.files]);
    }

    const dragAreaClasses: Array<string> = ['form__drag-area']

    if (enter) {
        dragAreaClasses.push('enter')
    }
    
    return (
        <form className="form">
            <div className="form__input-field">
                <label htmlFor="secName">Name: </label>
                <input type="text" placeholder="Your name..." name="name" id="secName"/>
            </div>

            <div className="form__input-field">
                <label htmlFor="pass">Password: </label>
                <input type="password" placeholder="Your password..." name="password" id="pass"/>
            </div>

            <div className="form__input-field">
                <input type="file"/>
                <div className={dragAreaClasses.join(' ')}>
                    <img src="./img/file.png" alt="file"/>
                    <p>
                        {
                            completedDror 
                                ? 'Файл загружен'
                                : enter
                                    ? 'Drop a File'
                                    :'Add a File'
                        }
                    </p>
                    <div className="form__drag-handler"
                        onDragStart={dragStartHandler}
                        onDragOver={dragStartHandler}
                        onDragLeave={dragOutHandler}
                        onDrop={dropHandler}
                    >
                    </div>
                </div>
            </div>

        </form>
    )
}

export default Form