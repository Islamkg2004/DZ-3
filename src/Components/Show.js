import React from 'react';

import { useSelector } from 'react-redux';



function Show() {
    const { name, age, gender } = useSelector((state) => state);

    return (
        <>
            <h2>Введенные данные:</h2>
            <p>Имя: {name || ''}</p>
            <p>Возраст: {age || ''}</p>
            <p>Пол: {gender || ''}</p>
        </>
    );
}

export default Show
