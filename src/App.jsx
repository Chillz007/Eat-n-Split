import React from "react";
import FriendsList from "./components/FriendsList";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
      </div>
    </div>
  );
}
