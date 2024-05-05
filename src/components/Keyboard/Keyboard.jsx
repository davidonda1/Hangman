import React from 'react';
import './Keyboard.scss';
import keyboard from '../../constants/keyboard.json';

const Keyboard = ({keyonclick, result, disabledKey}) => {
    const disabledKeys = (key) => {
        if (result === 'You Lose!' || result === 'You win!' ||disabledKey.includes(key)) {
            return true;
        } else{
            return false;
        }
    }
    return (
        <div className='keyboard'>
            {
                keyboard.map((item, index) => {
                    return (
                        <button onClick={() => keyonclick(item)} key={index} className='key'
                                disabled={disabledKeys(item)}>
                            {item}
                        </button>
                    );
                })
            }
        </div>
    );
};

export default Keyboard;