package UserComponent.Interfaces.user;

import UserComponent.Models.User;

import java.util.List;

public interface IUserCollectionRepo {
    User Login(User user);

    void AddUser(User user);

    void RemoveUser(User user);

    List<User> GetAllUsers();

    User GetUserById(int id);

    User GetUserByName(String name);
}
