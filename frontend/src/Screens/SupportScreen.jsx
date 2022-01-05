import React from "react";
import MessageBox from "../components/MessageBox";
function SupportScreen() {
  return (
    <div className="rows top full-container">
      <div className="col-1 support-users">
        {user.filter((x) => x._id !== userInfo._id).length === 0 && (
          <MessageBox>No online User found</MessageBox>
        )}
        <ul>
          {users
            .filter((x) => x._id !== userInfo._id)
            .map((user) => (
              <li
                key={user.id}
                className={user._id === selectedUser._id ? " selected" : " "}
              >
                <button
                  className="block"
                  type="button"
                  onClick={() => selectUser(user)}
                >
                  {user.name}
                </button>
                <span
                  className={
                    user.unread ? "unread" : user.online ? "online" : "offline"
                  }
                ></span>
              </li>
            ))}
        </ul>
      </div>
      <div className="col-3 support-message">
        {!selectedUser._id ? (
          <MessageBox>Select a user to start a chat</MessageBox>
        ) : (
          <div>
            <div className="rows">
              <strong>Chat with {selectedUser.name}</strong>
            </div>
            <ul ref={uiMessageRef}>
              {messages.length === 0 && <li>No message</li>}
              {messages.map((msg, index) => (
                <li key={index}>
                  <strong>{`${msg.name}: `}</strong>
                  {msg.body}
                </li>
              ))}
            </ul>
            <div>
              <form onSubmit={submitHandler} className="row">
                <input
                  type="text"
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  placeholder="type message"
                />
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SupportScreen;
