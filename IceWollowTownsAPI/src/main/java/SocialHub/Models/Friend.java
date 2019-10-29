package SocialHub.Models;

public class Friend {

    private String Username;

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public Friend(String username) {
        Username = username;
    }
}
