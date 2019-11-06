package UserComponent.Interfaces.user;

import UserComponent.Models.User;

public interface IUserRepo {
    void Logout();

    void UpdatePassword(String password, User user);
}
