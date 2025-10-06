import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class ManagerServer {

    public static void main(String[] args)throws Exception {
        // Dao<Task, Integer> dao = new TaskDaoDB();
        // // dao.save(
        // //     new Task(0, "Task1", "Desc1",
        // //          new TaskStage(1, "null", "null")
        // //             )
        // //         );
        // List<Task> tasks = dao.findAll();

        // System.out.println(tasks.toString());
        ServerSocket socket = new ServerSocket(5000);
        while (true) {
            Socket sc = socket.accept();
            resoveClient(sc);
        }
        
    }

    public static void resoveClient(Socket sc) throws IOException{
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(sc.getInputStream()));
            BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(sc.getOutputStream()));
            while (true) {
                String line = br.readLine();
                System.out.println(line);
                writer.write("response from server\n");
                writer.flush();        
            }
        } catch (Exception e) {
            sc.close();
        }
    }
    
}
