package UserComponent.Logic;

import UserComponent.Dal.Repo.FriendRepo;
import UserComponent.Factories.FriendFactory;
import UserComponent.Interfaces.friend.IFriendCollectionRepo;
import UserComponent.Models.Friend;
import UserComponent.Models.FriendList;
import UserComponent.Models.User;

public class FriendCollectionLogic {
    private FriendFactory friendFactory = new FriendFactory();
    private IFriendCollectionRepo friendCollectionRepo = friendFactory.CreateFriendCollectionRepo();

    public FriendList GetAllFriends(User user) { return friendCollectionRepo.GetAllFriends(); }

    public void RemoveFriend(Friend friend) { friendCollectionRepo.RemoveFriend(friend); }

    public void AddFriend(Friend friend, User user) { friendCollectionRepo.AddFriend(friend, user); }
}
