package UserComponent.Dal.Repo;

import UserComponent.Interfaces.friend.IFriendContext;
import UserComponent.Interfaces.user.IUserContext;
import UserComponent.Models.User;

import java.util.List;

public class UserRepo implements IUserContext {
    private IUserContext Context;

    public UserRepo(IUserContext context) {
        Context = context;
    }

    @Override
    public User Login(User user) { return Context.Login(user); }

    @Override
    public void AddUser(User user) { Context.AddUser(user); }

    @Override
    public void RemoveUser(User user) { Context.RemoveUser(user); }

    @Override
    public List<User> GetAllUsers() { return Context.GetAllUsers(); }

    @Override
    public User GetUserById(int id) { return Context.GetUserById(id); }

    @Override
    public User GetUserByName(String name) { return Context.GetUserByName(name); }

    @Override
    public void Logout() { Context.Logout(); }

    @Override
    public void UpdatePassword(String password, User user) { Context.UpdatePassword(password, user); }
}
