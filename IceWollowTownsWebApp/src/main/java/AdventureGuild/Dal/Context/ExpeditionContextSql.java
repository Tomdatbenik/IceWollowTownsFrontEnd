package AdventureGuild.Dal.Context;

import AdventureGuild.Interfaces.expedition.IExpeditionContext;
import AdventureGuild.Models.Expedition;
import UserComponent.Models.User;

import java.util.List;

public class ExpeditionContextSql implements IExpeditionContext {
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
