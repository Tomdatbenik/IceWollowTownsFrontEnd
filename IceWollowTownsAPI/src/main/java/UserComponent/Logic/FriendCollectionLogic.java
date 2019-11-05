package UserComponent.Logic;

import UserComponent.Dal.Repo.FriendRepo;
import UserComponent.Factories.FriendFactory;
import UserComponent.Interfaces.friend.IFriendCollectionRepo;
import UserComponent.Models.Friend;
import UserComponent.Models.FriendList;
import UserComponent.Models.User;

public class FriendCollectionLogic {
    FriendFactory friendFactory = new FriendFactory();
    IFriendCollectionRepo friendCollectionRepo = friendFactory.CreateFriendCollectionRepo();

    public FriendList GetAllFriends(User user) {
        FriendList friendList = friendCollectionRepo.GetAllFriends();

        return friendList;
    }

    public void RemoveFriend(Friend friend) {

    }

    public void AddFriend(Friend friend, User user) {

    }
}
