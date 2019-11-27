package AdventureGuild.Interfaces.expedition;

import AdventureGuild.Models.Expedition;
import UserComponent.Models.User;

import java.util.List;

public interface IExpeditionCollectionRepo {
    Expedition GenerateExpedition();

    Expedition GetActiveExpedition(Expedition expedition);

    List<Expedition> GetAllActiveExpeditions(User user);

    List<String> GetExpeditionVariables();
}
