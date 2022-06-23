import React, { FC } from 'react';
import { FlashcardContainer } from './flashcard';
import { Button, Flashcard } from './index';

interface IGame {

}

export const Game:FC<IGame> = () => {
    return (
        <>
            <FlashcardContainer>
                <Flashcard />
            </FlashcardContainer>
            <section className="responses">
                {["red", "green", "blue", "orange"].map((v, i) => (
                    <Button 
                        key={i}
                        icon={<span>{i + 1}</span>}
                        //@ts-ignore
                        color={v}
                    >
                        Option
                    </Button>
                ))}
            </section>
        </>
    )
}