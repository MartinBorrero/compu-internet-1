import java.util.List;

import daos.Dao;
import daos.TaskDaoDB;
import model.Task;

public class ManagerServer {

    public static void main(String[] args) {
        Dao<Task, Integer> dao = new TaskDaoDB();
        // dao.save(
        //     new Task(0, "Task1", "Desc1",
        //          new TaskStage(1, "null", "null")
        //             )
        //         );
        List<Task> tasks = dao.findAll();

        System.out.println(tasks.toString());


    }
    
}
