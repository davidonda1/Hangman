import React from 'react';
import './HangmanDrawing.scss';

const HEAD = (
    <div className='head'/>
);
const BODY = (
    <div className='body'/>
);
const ARMRIGHT = (
    <div className='armRight'/>
);
const ARMLEFT = (
    <div className='armLeft'/>
);
const LEGLEFT = (
    <div className='legLeft'/>
);
const LEGRIGHT = (
    <div className='legRight'/>
);

const HangmanDrawing = ({wrong, setResult, result}) => {
    const game = () => {
        if (wrong === 0) return;
        if (wrong === 1) return HEAD;
        if (wrong === 2) {
            return (
                <>
                    {HEAD}
                    {BODY}
                </>

            );
        }
        if (wrong === 3) {
            return (
                <>
                    {HEAD}
                    {BODY}
                    {ARMRIGHT}
                </>

            );
        }
        if (wrong === 4) {
            return (
                <>
                    {HEAD}
                    {BODY}
                    {ARMRIGHT}
                    {ARMLEFT}
                </>

            );
        }
        if (wrong === 5) {
            return (
                <>
                    {HEAD}
                    {BODY}
                    {ARMRIGHT}
                    {ARMLEFT}
                    {LEGRIGHT}
                </>

            );
        }
        if (wrong === 6) {
            setResult('You Lose!');
            return (
                <>
                    {HEAD}
                    {BODY}
                    {ARMRIGHT}
                    {ARMLEFT}
                    {LEGRIGHT}
                    {LEGLEFT}
                </>

            );
        } else {
            return (
                <>
                    {HEAD}
                    {BODY}
                    {ARMRIGHT}
                    {ARMLEFT}
                    {LEGRIGHT}
                    {LEGLEFT}
                </>

            );
        }
    }
    return (
        <div className='hangmanDrawing'>
            {game()}
            <div className='lastLine'/>
            <div className='topLine'/>
            <div className='lineUp'/>
            <div className='bottomLine'/>
        </div>
    );
};

export default HangmanDrawing;