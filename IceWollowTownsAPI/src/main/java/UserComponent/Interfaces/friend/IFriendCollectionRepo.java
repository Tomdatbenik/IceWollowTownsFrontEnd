package UserComponent.Interfaces.friend;

import UserComponent.Factories.FriendFactory;
import UserComponent.Models.Friend;
import UserComponent.Models.FriendList;
import UserComponent.Models.User;

import java.util.List;

public interface IFriendCollectionRepo {
    FriendList GetAllFriends();

    void RemoveFriend(Friend friend);

    void AddFriend(Friend friend, User user);
}
