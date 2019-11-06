package AdventureGuild.Models;

import AdventureGuild.Models.enums.AffectedResource;
import UserComponent.Models.User;

import java.util.Date;

public class Expedition {
    private int Id;
    private User user;
    private String Name;
    private int Reward;
    private AffectedResource RewardType;
    private Date StartTime;
    private Date EndTime;

    public Expedition(int id, User user, String name, int reward, AffectedResource rewardType, Date startTime, Date endTime) {
        Id = id;
        this.user = user;
        Name = name;
        Reward = reward;
        RewardType = rewardType;
        StartTime = startTime;
        EndTime = endTime;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public int getReward() {
        return Reward;
    }

    public void setReward(int reward) {
        Reward = reward;
    }

    public AffectedResource getRewardType() {
        return RewardType;
    }

    public void setRewardType(AffectedResource rewardType) {
        RewardType = rewardType;
    }

    public Date getStartTime() {
        return StartTime;
    }

    public void setStartTime(Date startTime) {
        StartTime = startTime;
    }

    public Date getEndTime() {
        return EndTime;
    }

    public void setEndTime(Date endTime) {
        EndTime = endTime;
    }
}
