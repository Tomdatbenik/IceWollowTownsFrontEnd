package SocialHub.Logic;

import SocialHub.Dal.Repo.FriendRepo;
import SocialHub.Factories.FriendFactory;
import SocialHub.Models.Friend;
import SocialHub.Interfaces.Friend.Repo.*;

public class FriendLogic {

    private IFriendRepo Repo = FriendFactory.GetFriendRepository();

    public FriendLogic() {
        Repo = FriendFactory.GetFriendRepository();
    }

    public FriendLogic(FriendRepo r)
    {
        Repo = FriendFactory.GetFriendRepository();
    }

    public Friend GetFrienById(int id)
    {
        return Repo.getFriendById(id);
    }

}
