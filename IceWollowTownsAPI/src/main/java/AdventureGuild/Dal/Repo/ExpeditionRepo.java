package AdventureGuild.Dal.Repo;

import AdventureGuild.Interfaces.expedition.IExpeditionContext;
import AdventureGuild.Models.Expedition;
import UserComponent.Interfaces.friend.IFriendContext;
import UserComponent.Models.User;
import org.springframework.stereotype.Controller;

import java.util.List;

public class ExpeditionRepo implements IExpeditionContext {
    private IExpeditionContext Context;

    public ExpeditionRepo(IExpeditionContext context){
        Context = context;
    }

    @Override
    public Expedition GenerateExpedition() {
        return null;
    }

    @Override
    public Expedition GetActiveExpedition(Expedition expedition) {
        return null;
    }

    @Override
    public List<Expedition> GetAllActiveExpeditions(User user) {
        return null;
    }

    @Override
    public List<String> GetExpeditionVariables() {
        return null;
    }

    @Override
    public void RewardPlayer(User user, Expedition expedition) {

    }

    @Override
    public void PenalizePlayer(User user, Expedition expedition) {

    }

    @Override
    public void EndExpedition(Expedition expedition) {

    }

    @Override
    public void StartExpedition(Expedition expedition) {

    }
}