package AdventureGuild.Interfaces.expedition;

import AdventureGuild.Models.Expedition;
import UserComponent.Models.User;

public interface IExpeditionRepo {
    void RewardPlayer(User user, Expedition expedition);

    void PenalizePlayer(User user, Expedition expedition);

    void EndExpedition(Expedition expedition);

    void StartExpedition(Expedition expedition);
}
