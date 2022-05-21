import React, { FC } from 'react';
import characterData from '../data/hangul.json';
import { IJapaneseData, IKoreanData } from '../data/models';

export interface IFlashcardContainer {
    children?: React.ReactNode;
}

export const FlashcardContainer: FC<IFlashcardContainer> = ({ children }) => {
    return (
        <div className="flashcard-container">
            {children}
        </div>
    )
}

export const Flashcard = () => {
    const data: IKoreanData = characterData;
    var randomIndex = Math.floor(Math.random() * (data.vowels.length));
    var currentChar = data.vowels[randomIndex];
    return (
        <div className="flashcard">
            <span className="character">
                {currentChar.character}
            </span>
            <button type="button" id="listen">
                <span className="material-symbols-outlined">
                    hearing
                </span>
            </button>
        </div>
    )
}