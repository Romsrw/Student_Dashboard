import React from "react";
import "./Chat.scss";
import SmallAvatar from "../../img/SmallAvatar.png";
import AddIcon from "../../img/AddIcon.png";
import DianneAvatar from "../../img/DianneAvatar.png";
import JarvisAvatar from "../../img/JarvisAvatar.png";
import MilesAvatar from "../../img/MilesAvatar.png";
import SuiAvatar from "../../img/SuiAvatar.png";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <img src={SmallAvatar} alt="SmallAvatar" className="chat__avatar" />
        <h2 className="chat__title">Messages</h2>
      </div>
      <div className="chat__body">
        <div className="friends">
          <div className="friend">
            <button>
              <img src={AddIcon} alt="AddIcon" />
            </button>
            <span className="friend__name">Add</span>
          </div>
          <div className="friend">
            <button>
              <img src={DianneAvatar} alt="DianneAvatar" />
            </button>
            <span className="friend__name">Dianne</span>
          </div>
          <div className="friend">
            <button>
              <img src={JarvisAvatar} alt="JarvisAvatar" />
            </button>
            <span className="friend__name">Dianne</span>
          </div>
          <div className="friend">
            <button>
              <img src={MilesAvatar} alt="MilesAvatar" />
            </button>
            <span className="friend__name">Dianne</span>
          </div>
          <div className="friend">
            <button>
              <img src={SuiAvatar} alt="SuiAvatar" />
            </button>
            <span className="friend__name">Sui</span>
          </div>
        </div>
        <div className="chat_list"></div>
      </div>
    </div>
  );
};

export default Chat;
