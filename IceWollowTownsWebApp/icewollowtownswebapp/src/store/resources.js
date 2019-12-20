export default {
    state: {
        resources: {
            Autonomy: 0,
            Gold: 0,
            Wood: 0,
            Stone: 0,
            Iron: 0,
            Food: 0,
            Population: 0,
            Adventurers: 0
        },
        resourceLoadingStatus: false,
    },
    mutations: {
        SET_RESOURCE_LOADING_STATUS(state, status) {
            state.resourceLoadingStatus = status;
        },
        SET_AUTONOMY(state, Autonomy) {
            state.resources.Autonomy = Autonomy;
        },
        SET_GOLD(state, Gold) {
            state.resources.Gold = Gold;
        },
        SET_WOOD(state, Wood) {
            state.resources.Wood = Wood;
        },
        SET_STONE(state, Stone) {
            state.resources.Stone = Stone;
        },
        SET_IRON(state, Iron) {
            state.resources.Iron = Iron;
        },
        SET_FOOD(state, Food) {
            state.resources.Food = Food;
        },
        SET_POPULATION(state, Population) {
            state.resources.Population = Population;
        },
        SET_ADVENTURERS(state, Adventurers) {
            state.resources.Adventurers = Adventurers;
        },
    },
    getters: {

    },
    actions: {
        FetchResources(context) {
            context.commit('SET_RESOURCE_LOADING_STATUS', true)
        },
        SetWood(context, wood)
        {
            context.commit('SET_WOOD', wood)
        }
    }
}
