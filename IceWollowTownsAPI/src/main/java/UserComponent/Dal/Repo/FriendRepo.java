package UserComponent.Dal.Repo;

import UserComponent.Interfaces.friend.IFriendContext;
import UserComponent.Models.Friend;
import UserComponent.Models.FriendList;
import UserComponent.Models.User;
import org.springframework.stereotype.Controller;

import javax.naming.Context;
import java.util.List;

public class FriendRepo implements IFriendContext {
    private IFriendContext Context;

    public FriendRepo(IFriendContext context) {
        Context = context;
    }

    @Override
    public FriendList GetAllFriends()  { return Context.GetAllFriends(); }

    @Override
    public void RemoveFriend(Friend friend) { Context.RemoveFriend(friend); }

    @Override
    public void AddFriend(Friend friend, User user) { Context.AddFriend(friend, user); }
}
