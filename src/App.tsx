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
        <div>
          <Button icon={<span>1</span>}>Help</Button>
          <Button color="red">Thanks, button!</Button>
          <Button color="blue">Badonkadonk</Button>
          <Button color="green" icon={<span className="material-symbols-outlined">light_mode</span>}>
            This is another button
          </Button>
          <Button color="orange" icon={<span>5</span>}>
            This is another button
          </Button>
        </div>
      </Content>
    </>
  )
}

export default App
