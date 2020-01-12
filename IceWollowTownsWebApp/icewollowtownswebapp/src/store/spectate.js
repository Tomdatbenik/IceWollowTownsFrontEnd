export default {
    state: {
        Spectate_user_id: 0,
        SpectateResources: {
            Autonomy: 0,
            Gold: 0,
            Food: 0,
            Wood: 0,
            Stone: 0,
            Iron: 0,
            Population: 0,
            Adventurers: 0
        },
        Spectate_Loading: true
    },
    mutations: {
        SET_SPECTATE_USER_ID(state, id) {
            state.Spectate_user_id = id
        },
        SET_SPECTATELOADING(state, loading)
        {
            state.Spectate_Loading = loading;
        },
        SET_SPECTATE_RESOURCES(state, stockpile) {
            state.SpectateResources.Autonomy = stockpile.autonomy.amount;
            state.SpectateResources.Gold = stockpile.gold.amount;
            state.SpectateResources.Wood = stockpile.wood.amount;
            state.SpectateResources.Stone = stockpile.stone.amount;
            state.SpectateResources.Iron = stockpile.iron.amount;
            state.SpectateResources.Food = stockpile.food.amount;
            state.SpectateResources.Population = stockpile.population.amount;
            state.SpectateResources.Adventurers = stockpile.adventurer.amount;
        },
        SET_SPECTATE_AUTONOMY(state, Autonomy) {
            state.SpectateResources.Autonomy = Autonomy;
        },
        SET_SPECTATE_GOLD(state, Gold) {
            state.SpectateResources.Gold = Gold;
        },
        SET_SPECTATE_WOOD(state, Wood) {
            state.SpectateResources.Wood = Wood;
        },
        SET_SPECTATE_STONE(state, Stone) {
            state.SpectateResources.Stone = Stone;
        },
        SET_SPECTATE_IRON(state, Iron) {
            state.SpectateResources.Iron = Iron;
        },
        SET_SPECTATE_FOOD(state, Food) {
            state.SpectateResources.Food = Food;
        },
        SET_SPECTATE_POPULATION(state, Population) {
            state.SpectateResources.Population = Population;
        },
        SET_SPECTATE_ADVENTURERS(state, Adventurers) {
            state.SpectateResources.Adventurers = Adventurers;
        },
    },
    getters: {
        SpectateAutonomy: state => {
            return state.SpectateResources.Autonomy;
        },
        SpectateGold: state => {
            return state.SpectateResources.Gold;
        },
        SpectateFood: state => {
            return state.SpectateResources.Food;
        },
        SpectateWood: state => {
            return state.SpectateResources.Wood;
        },
        SpectateStone: state => {
            return state.SpectateResources.Stone;
        },
        SpectateIron: state => {
            return state.SpectateResources.Iron;
        },
        SpectatePopulation: state => {
            return state.SpectateResources.Population;
        },
        SpectateAdventurer: state => {
            return state.SpectateResources.Adventurers;
        },
        GetSpectateuserId:state=>{
            return state.Spectate_user_id;
        },
        GetSpectateLoading: state=>{
            return state.Spectate_Loading;
        }
    },
    actions: {
        setSpectateResources(context, stockpile) {
            context.commit("SET_SPECTATE_RESOURCES", stockpile)
        },
        setSpectateUserId(context, id) {
            context.commit("SET_SPECTATE_USER_ID",id)
        }
    }
}
