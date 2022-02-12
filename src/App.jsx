import React from "react";
import Todo from "./components/Todo";
import { useColorMode, Button } from "@chakra-ui/react";

function App() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <Button className="mode" onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark Mode" : "Light Mode"}
      </Button>
      <Todo />
    </>
  );
}

export default App;
