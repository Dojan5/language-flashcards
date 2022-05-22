import { Drawer, Content, Flashcard, FlashcardContainer, ThemeToggler, Button, SettingsDialogue } from './components';

const App = () => {

  return (
    <>
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
    </>
  )
}

export default App
