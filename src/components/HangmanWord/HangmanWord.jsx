import React from 'react';
import './HangmanWord.scss';

const HangmanWord = ({word, userWord, result}) => {
    const stringWord = word.split('');
    return (
        <div className='hangmanWord'>
            {
                stringWord.map((item, index) => {
                    const mistake = () => {
                        if (userWord.includes(item)) {
                            return 'allWord';
                        } else if (result === 'You win!') {
                            return 'allWord success';
                        } else {
                            return 'allWord mistake';
                        }
                    }
                    return (
                        <span key={index} className={mistake()}>
                    <span className={userWord.includes(item) ? 'letter visible' : 'letter hidden'}>
                        {item}
                    </span>
                        </span>
                    );
                })
            }
        </div>
    );
};

export default HangmanWord;