import TextEditor from "./components/TextEditor";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ChakraProvider>
      <NavBar backdropFilter="auto" backdropBlur="8px" />
      <TextEditor />
    </ChakraProvider>
  );
}

export default App;
