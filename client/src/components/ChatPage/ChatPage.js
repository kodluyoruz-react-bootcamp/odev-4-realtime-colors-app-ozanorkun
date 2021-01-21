import ChatDashboard from "../ChatDashboard/ChatDashboard";
import ChatInput from "../ChatInput/ChatInput";
import styles from "./index.module.css";

function ChatPage() {
  return (
    <div>
      <ChatDashboard></ChatDashboard>
      <ChatInput></ChatInput>
    </div>
  );
}

export default ChatPage;
