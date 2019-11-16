import React from 'react';
import Button from './Button';
import './Table.css'

const Table = ({ list, onDismiss }) =>
    <div className='table'>
        {list.map(item =>
            (
                <div key={item.objectID} className='table-row'>
                    <h1 >
                        <a href={item.url}>{item.title}</a>
                    </h1 >
                    <h1 className='aut-btn'><span className='space'> by {item.author}</span>
                        <Button onClick={() => onDismiss(item.objectID)} className='button-inline btn'>
                            Fling
                        </Button>
                    </h1>
                </div>
            )
        )}
    </div>

export default Table;