package UserComponent.Dal.Context;

import UserComponent.Interfaces.friend.IFriendContext;
import UserComponent.Models.Friend;
import UserComponent.Models.FriendList;
import UserComponent.Models.User;

public class FriendContextSql implements IFriendContext {

    @Override
    public FriendList GetAllFriends() {
        return null;
    }

    @Override
    public void RemoveFriend(Friend friend) {

    }

    @Override
    public void AddFriend(Friend friend, User user) {

    }
}