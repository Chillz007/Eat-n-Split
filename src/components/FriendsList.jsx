import React from "react";
import { initialFriends } from "../constant/data";
import FriendItem from "./FriendItem";

export default function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <FriendItem
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend }
            onSelection={onSelection}
          />
        );
      })}
    </ul>
  );
}
