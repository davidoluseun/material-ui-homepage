import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Navbar />
      <Home />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
