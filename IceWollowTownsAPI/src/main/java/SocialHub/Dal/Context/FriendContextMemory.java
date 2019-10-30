package SocialHub.Dal.Context;
import SocialHub.Dal.Memory;
import SocialHub.Interfaces.Friend.Context.IFriendContext;
import SocialHub.Models.Friend;

public class FriendContextMemory implements IFriendContext {

    @Override
    public Friend getFriendById(int id) {
        return Memory.Friends.get(id);
    }
}
