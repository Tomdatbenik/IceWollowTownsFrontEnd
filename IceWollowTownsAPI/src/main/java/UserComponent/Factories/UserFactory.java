package UserComponent.Factories;

import UserComponent.Dal.Context.FriendContextMemory;
import UserComponent.Dal.Context.UserContextMemory;
import UserComponent.Dal.Repo.FriendRepo;
import UserComponent.Dal.Repo.UserRepo;
import UserComponent.Interfaces.friend.IFriendCollectionRepo;
import UserComponent.Interfaces.user.IUserCollectionRepo;
import UserComponent.Interfaces.user.IUserRepo;

public class UserFactory {
    public IUserCollectionRepo CreateUserCollectionRepo() {
        IUserCollectionRepo userCollectionRepo = new UserRepo(new UserContextMemory());

        return userCollectionRepo;
    }

    public IUserRepo CreateUserRepo() {
        IUserRepo userRepo = new UserRepo(new UserContextMemory());

        return userRepo;
    }
}
