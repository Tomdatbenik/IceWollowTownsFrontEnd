package SocialHub.Factories;
import SocialHub.Dal.Context.FriendContextMemory;
import SocialHub.Dal.Repo.FriendRepo;
import SocialHub.Interfaces.Friend.Repo.*;
public class FriendFactory {

    public static IFriendRepo GetFriendRepository()
    {
        return new FriendRepo(new FriendContextMemory());
    }
}
