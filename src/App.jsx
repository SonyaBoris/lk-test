import { Bread } from "./components/bread"
import { Header } from "./components/header"
import { Main } from "./components/main"
import { Wrapper } from "./ui/wrapper"

function App() {

  return (
    <Wrapper>
      <Header />
      <Bread />
      <Main />
    </Wrapper>
  )
}

export default App
