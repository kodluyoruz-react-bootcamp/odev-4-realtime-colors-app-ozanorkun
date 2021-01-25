import { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import ChatDashboard from "../ChatDashboard/ChatDashboard";
import SettingsBar from "../SettingsBar/SettingBar";
import ChatInput from "../ChatInput/ChatInput";
import styles from "./index.module.css";

function ChatPage() {
  const { color } = useContext(ChatContext);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <SettingsBar></SettingsBar>
        <ChatDashboard></ChatDashboard>
        <ChatInput></ChatInput>
      </div>
    </div>
  );
}

export default ChatPage;
