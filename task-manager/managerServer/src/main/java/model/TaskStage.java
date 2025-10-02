package model;

public class TaskStage {
    private int id;
    private String name;
    private String description;
    public TaskStage(int id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public TaskStage(){

    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getDescription() {
        return description;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    
}
