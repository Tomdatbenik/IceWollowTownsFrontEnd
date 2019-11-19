package citycomponent.models.Resources;

public class Resource {

    //region Properties
    public String name;
    public String description;

    public float amount;
    //endregion

    //region Getter and Setters
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

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }
    //endregion

    public Resource() {
    }

    public Resource(String name, String description, float amount) {
        this.name = name;
        this.description = description;
        this.amount = amount;
    }

    public void IncreaseAmount(float amount)
    {
        this.amount += amount;
    }

    public void DecreaseAmount(float amount)
    {
        this.amount -= amount;
    }

}
