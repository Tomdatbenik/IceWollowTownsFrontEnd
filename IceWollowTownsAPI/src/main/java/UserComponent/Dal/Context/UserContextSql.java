package UserComponent.Dal.Context;

import UserComponent.Interfaces.user.IUserContext;
import UserComponent.Models.User;

import java.util.List;

public class UserContextSql implements IUserContext {
    @Override
    public User Login(User user) {
        return null;
    }

    @Override
    public void AddUser(User user) {

    }

    @Override
    public void RemoveUser(User user) {

    }

    @Override
    public List<User> GetAllUsers() {
        return null;
    }

    @Override
    public User GetUserById(int id) {
        return null;
    }

    @Override
    public User GetUserByName(String name) {
        return null;
    }

    @Override
    public void UpdatePassword(String password) {

    }
}
