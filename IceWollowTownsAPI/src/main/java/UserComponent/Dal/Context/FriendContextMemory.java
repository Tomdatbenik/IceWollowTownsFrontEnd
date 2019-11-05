package UserComponent.Dal.Context;

import UserComponent.Interfaces.friend.IFriendContext;
import UserComponent.Models.Friend;
import UserComponent.Models.FriendList;

import java.util.ArrayList;
import java.util.List;

public class FriendContextMemory implements IFriendContext {

    @Override
    public FriendList GetAllFriends() {
        Friend friend = new Friend("Peter");
        List<Friend> friends = new ArrayList<Friend>();
        friends.add(friend);
        FriendList friendList = new FriendList(friends);

        return friendList;
    }

    @Override
    public void RemoveFriend(Friend friend) {

    }

    @Override
    public void AddFriend(Friend friend) {

    }
}
