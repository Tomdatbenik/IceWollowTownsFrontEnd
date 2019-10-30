package SocialHub.Dal.Repo;
import SocialHub.Dal.Context.FriendContextMemory;
import SocialHub.Interfaces.Friend.Context.*;
import SocialHub.Interfaces.Friend.Repo.*;
import SocialHub.Models.Friend;

public class FriendRepo implements IFriendRepo{

    private IFriendContext context = new FriendContextMemory();

    public FriendRepo() {
    }

    public FriendRepo(IFriendContext context) {
        this.context = context;
    }

    @Override
    public Friend getFriendById(int id) { return context.getFriendById(id); }
}
