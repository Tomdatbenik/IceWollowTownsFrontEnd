package IceWollowTown.Controllers;

import SocialHub.Dal.Memory;
import SocialHub.Models.Friend;
import SocialHub.Models.FriendList;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SocialHubController {

    @RequestMapping("/friend")
    public Friend greeting(@RequestParam(value="id", defaultValue="0") String id) {
        return new Friend(Memory.Friends.get(Integer.parseInt(id)).getUsername());
    }
}