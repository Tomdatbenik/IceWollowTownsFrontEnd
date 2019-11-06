package UserComponent.Logic;

import UserComponent.Factories.UserFactory;
import UserComponent.Interfaces.user.IUserCollectionRepo;
import UserComponent.Models.User;

import java.util.ArrayList;
import java.util.List;

public class UserCollectionLogic {
    private UserFactory userFactory = new UserFactory();
    private IUserCollectionRepo userCollectionRepo = userFactory.CreateUserCollectionRepo();

    public User Login(User _user) { return userCollectionRepo.Login(_user); }

    public void AddUser(User user) { userCollectionRepo.AddUser(user); }

    public void RemoveUser(User user) { userCollectionRepo.RemoveUser(user); }

    public List<User> GetAllUsers() { return userCollectionRepo.GetAllUsers(); }

    public User GetUserById(int id) { return userCollectionRepo.GetUserById(id); }

    public User GetUserByName(String name) { return userCollectionRepo.GetUserByName(name); }
}
