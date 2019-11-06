package UserComponent.Factories;

import UserComponent.Dal.Context.FriendContextMemory;
import UserComponent.Dal.Context.FriendContextSql;
import UserComponent.Dal.Repo.FriendRepo;
import UserComponent.Interfaces.friend.IFriendCollectionRepo;

public class FriendFactory {
        public IFriendCollectionRepo CreateFriendCollectionRepo() {
            IFriendCollectionRepo friendCollectionRepo = new FriendRepo(new FriendContextMemory());

            return friendCollectionRepo;
    }
}
