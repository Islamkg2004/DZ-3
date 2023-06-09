import React from 'react';
import { useDispatch } from 'react-redux';
function Form() {
    const dispatch = useDispatch();
    const handleAgeChange = (e) => {
        const age = e.target.value;
        dispatch({ type: 'UPDATE_AGE', payload: age });
    };
    const handleNameChange = (e) => {
        const name = e.target.value;
        dispatch({ type: 'UPDATE_NAME', payload: name });
    };
    const handleGenderChange = (e) => {
        const gender = e.target.value;
        dispatch({ type: 'UPDATE_GENDER', payload: gender });
    };

    return (
        <div>
            <div className="form">
                <label htmlFor="age">Возраст:</label>
                <input type="number" id="age" onChange={handleAgeChange} />
             </div>
            <div className="form">
                <label htmlFor="name">Имя:</label>
                <input type="text" id="name" onChange={handleNameChange} />
            </div>
            <div className="form">
                <label htmlFor="gender">Пол:</label>
                <select id="gender" onChange={handleGenderChange}>
                    <option value="Мужской">Мужской</option>
                    <option value="Женский">Женский</option>
                </select>
            </div>
        </div>
    );
}

export default Form