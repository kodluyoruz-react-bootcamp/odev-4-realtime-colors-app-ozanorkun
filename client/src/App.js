import { ChatProvider } from "./contexts/ChatContext";
import Container from "./components/Container";
import PageRoute from "./components/PageRoute/PageRoute";

function App() {
  return (
    <ChatProvider>
      <PageRoute></PageRoute>
      <Container></Container>
    </ChatProvider>
  );
}

export default App;
