import { useContext } from "react";
import { Link } from "react-router-dom";
import ChatContext from "../../contexts/ChatContext";
import { nanoid } from "nanoid";

function JoinPage() {
  const { name, setName } = useContext(ChatContext);

  return (
    <div className="joinGlobalContainer">
      <div className="joinContainer">
        <h1>GİRİŞ</h1>
        <div>
          <input
            placeholder="İsim"
            className="joinInput"
            type="text"
            onChange={(e) => setName(`${e.target.value}#${nanoid(5)}`)}
          />
        </div>
        {console.log(name)}
        <Link onClick={(e) => (!name ? e.preventDefault() : null)} to="/chat">
          <button className="button" type="submit">
            Sohbete Katıl
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JoinPage;
