package CityComponent.Models.Buildings;

import CityComponent.Models.Modifier.Buff;
import CityComponent.Models.Modifier.Modifier;
import CityComponent.Models.Resources.Gold;
import CityComponent.Models.Resources.Resource;

import java.util.List;

public abstract class Building {

    public String name;
    public String description;

    public int level;
    public Resource resource;

    public float income;

    public List<Modifier> modifierList;

    //region Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public Resource getResource() {
        return resource;
    }

    public void setResource(Resource resource) {
        this.resource = resource;
    }
    //endregion


    public Building() {
    }

    public Building(String name, String description, int level, Resource resource) {
        this.name = name;
        this.description = description;
        this.level = level;
        this.resource = resource;
    }

    public void AddModifier(Modifier modifier)
    {
        modifierList.add(modifier);
    }

}
