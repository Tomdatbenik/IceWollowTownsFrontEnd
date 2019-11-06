package UserComponent.Logic;

import UserComponent.Factories.UserFactory;
import UserComponent.Interfaces.user.IUserRepo;
import UserComponent.Models.User;

public class UserLogic {
    private UserFactory userFactory = new UserFactory();
    private IUserRepo userRepo = userFactory.CreateUserRepo();

    public void Logout(User user) { userRepo.Logout(); }

    public void UpdatePassword(User user, String password) { userRepo.UpdatePassword(password, user); }
}
