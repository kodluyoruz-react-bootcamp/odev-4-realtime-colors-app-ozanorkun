import { useEffect, useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import { numberOfConnections } from "../../socketService";
import styles from "./index.module.css";
import gearIcon from "../../icons/gearIcon.png";

function SettingBar() {
  const { setMessages, setNumberOfConnections } = useContext(ChatContext);
  useEffect(() => {
    numberOfConnections((number) => {
      setNumberOfConnections(number);
    });
  }, [setMessages, setNumberOfConnections]);
  return (
    <div className={styles.infoBar}>
      <div className={styles.leftInnerContainer}>
        <h5>{numberOfConnections} Kişi Çevrimiçi</h5>
      </div>
      <div className={styles.rightInnerContainer}>
        <img src={gearIcon} alt="settings icon"></img>
      </div>
    </div>
  );
}

export default SettingBar;
