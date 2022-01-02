import React from 'react';

// react увидит объект и сохранит его в памяти, он живет и можно внутри хранить стэйт локальный
class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }  

    // объявляем стрелочной, чтобы не байндить
    activateEditMode = () => {
        this.setState( // нормальный метод реакта для обновления локального стэйта и авто перерисовки компоненты
            {
                editMode: true,              
            }
        );
       // this.ForceUpdate();  - функция React заставляет принудительно перерисовать компоненту
    }

    // объявляем простой - то нужно привязать к this класса, забайндить
    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false,
            }
        );
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {  
        return (
            <div>        
                { !this.state.editMode &&
                    <div>
                        <span onDoubleClick = { this.activateEditMode }>{this.props.status || "------"}</span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        <input onChange = {this.onStatusChange} autoFocus={true} onBlur = { this.deactivateEditMode } value = {this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;