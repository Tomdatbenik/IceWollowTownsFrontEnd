package SocialHub.Dal;

import SocialHub.Models.Friend;

import java.util.ArrayList;
import java.util.List;

public class Memory {

    public static List<Friend> Friends;

    public Memory() {
        Friends = new ArrayList<Friend>();

        Friends.add(new Friend("Tomdatbenik"));
        Friends.add(new Friend("SkullCrusher"));
        Friends.add(new Friend("MrLuiggi"));
    }
}
