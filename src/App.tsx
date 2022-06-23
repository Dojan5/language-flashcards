import React, { FC, ReactNode } from 'react';
import { Drawer, Content, Flashcard, FlashcardContainer, ThemeToggler, SettingsDialogue, Menu, Button, Game } from './components';
import AppStateProvider from './data/application-context';

const App: FC<ReactNode> = () => {

  return (
    <AppStateProvider>
      <Drawer>
        <section title="Header">
          <h1>Flashcards</h1>
        </section>
        <Menu>
          <Button icon={<span className="material-symbols-outlined">stadia_controller</span>} color="green">Play</Button>
          <Button icon={<span className="material-symbols-outlined">insights</span>} color="orange">Score</Button>
        </Menu>
        <section title="Footer">
          <SettingsDialogue />
        </section>
      </Drawer>
      <Content>
        <ThemeToggler />
        <Game />
      </Content>
    </AppStateProvider>
  )
}

export default App
