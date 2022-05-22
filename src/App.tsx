import React, { FC, ReactNode } from 'react';
import { Drawer, Content, Flashcard, FlashcardContainer, ThemeToggler, SettingsDialogue } from './components';
import AppStateProvider from './data/application-context';

const App: FC<ReactNode> = () => {
  
  return (
    <AppStateProvider>
      <Drawer>
        <h1>Flashcards</h1>
        <SettingsDialogue />
      </Drawer>
      <Content>
        <ThemeToggler />
        <FlashcardContainer>
          <Flashcard />
        </FlashcardContainer>
      </Content>
    </AppStateProvider>
  )
}

export default App
