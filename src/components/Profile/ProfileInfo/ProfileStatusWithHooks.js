import React, { useEffect, useState } from 'react';

// react увидит объект и сохранит его в памяти, он живет и можно внутри хранить стэйт локальный
const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode]  = useState(false); // хук возвр массив из двух элементов
// переменная инициал-я в локальном стэйте и функция которая будет менять её значение - за этой функ-цией следит реакт
// если менять этой функ-ей переменную - то будет запускаться цикл рендеринга 

    let [status, setStatus]  = useState(props.status);

    useEffect( () => { // хук - выполняется посл отрисовки
        //debugger;
        setStatus(props.status);
    }, [props.status] ); // пустой массив - отрисуйся один раз, но так незя

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <div>        
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "------"}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input autoFocus={true} onChange={onStatusChange} onBlur = {deActivateEditMode} value={status}/>
                </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;