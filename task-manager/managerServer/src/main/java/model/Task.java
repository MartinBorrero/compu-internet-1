package model;

public class Task {
    private int id;
    private String name;
    private String description;
    private TaskStage stage;

    public Task(int id, String name, String description, TaskStage stage) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.stage = stage;
    }

    public Task(){

    }

    public void setId(int id) {
        this.id = id;
    }
    public int getId() {
        return id;
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

    public TaskStage getStage() {
        return stage;
    }

    public void setStage(TaskStage stage) {
        this.stage = stage;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return id +" - " +name;
    }

}
