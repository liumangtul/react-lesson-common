import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Components/Table';
import Drag from './Components/Drag';

ReactDOM.render(
    <div>
        <Table/>
        <Drag/>
    </div>,
    document.querySelector('#app')
);