package AdventureGuild.Factories;

import AdventureGuild.Dal.Context.ExpeditionContextMemory;
import AdventureGuild.Dal.Repo.ExpeditionRepo;
import AdventureGuild.Interfaces.expedition.IExpeditionCollectionRepo;
import AdventureGuild.Interfaces.expedition.IExpeditionRepo;

public class ExpeditionFactory {
    public IExpeditionCollectionRepo CreateUserCollectionRepo() {
        IExpeditionCollectionRepo expeditionCollectionRepo = new ExpeditionRepo(new ExpeditionContextMemory());

        return expeditionCollectionRepo;
    }

    public IExpeditionRepo CreateUserRepo() {
        IExpeditionRepo expeditionRepo = new ExpeditionRepo(new ExpeditionContextMemory());

        return expeditionRepo;
    }
}
