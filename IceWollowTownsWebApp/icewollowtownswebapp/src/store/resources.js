export default {
    state: {
        resources: {
            Autonomy: 0,
            Gold: 0,
            Food: 0,
            Wood: 0,
            Stone: 0,
            Iron: 0,
            Population: 0,
            Adventurers: 0
        },
        lastResources: {
            Autonomy: 0,
            Gold: 0,
            Food: 0,
            Wood: 0,
            Stone: 0,
            Iron: 0,
            Population: 0,
            Adventurers: 0
        },
        resourceLoadingStatus: false,
    },
    mutations: {
        SET_RESOURCE_LOADING_STATUS(state, status) {
            state.resourceLoadingStatus = status;
        },
        SET_RESOURCES(state, stockpile) {
            state.lastResources.Autonomy = this.getters.Autonomy;
            state.lastResources.Gold = this.getters.Gold;
            state.lastResources.Wood = this.getters.Wood;
            state.lastResources.Stone = this.getters.Stone;
            state.lastResources.Iron = this.getters.Iron;
            state.lastResources.Food = this.getters.Food;
            state.lastResources.Population = this.getters.Population;
            state.lastResources.Adventurers = this.getters.Adventurers;

            console.log(this.getters.Gold)
            console.log(stockpile.gold.amount)
            state.resources.Autonomy = stockpile.autonomy.amount;
            state.resources.Gold = stockpile.gold.amount;
            state.resources.Wood = stockpile.wood.amount;
            state.resources.Stone = stockpile.stone.amount;
            state.resources.Iron = stockpile.iron.amount;
            state.resources.Food = stockpile.food.amount;
            state.resources.Population = stockpile.population.amount;
            state.resources.Adventurers = stockpile.adventurer.amount;
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
        Autonomy: state => {
            return state.resources.Autonomy;
        },
        Gold: state => {
            return state.resources.Gold;
        },
        Food: state => {
            return state.resources.Food;
        },
        Wood: state => {
            return state.resources.Wood;
        },
        Stone: state => {
            return state.resources.Stone;
        },
        Iron: state => {
            return state.resources.Iron;
        },
        Population: state => {
            return state.resources.Population;
        },
        Adventurer: state => {
            return state.resources.Adventurers;
        },
        lastAutonomy: state => {
            return state.lastResources.Autonomy;
        },
        lastGold: state => {
            return state.lastResources.Gold;
        },
        lastFood: state => {
            return state.lastResources.Food;
        },
        lastWood: state => {
            return state.lastResources.Wood;
        },
        lastStone: state => {
            return state.lastResources.Stone;
        },
        lastIron: state => {
            return state.lastResources.Iron;
        },
        lastPopulation: state => {
            return state.lastResources.Population;
        },
        lastAdventurer: state => {
            return state.lastResources.Adventurers;
        },
    },
    actions: {
        setResources(context, stockpile) {
            context.commit("SET_RESOURCES", stockpile)
        }
    }
}
