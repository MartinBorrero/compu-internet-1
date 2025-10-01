import java.net.DatagramPacket;
import java.net.DatagramSocket;

public class Server {
    public static void main(String[] args)throws Exception {
        DatagramSocket socket = new DatagramSocket(5000);
        
        do{
            byte[] data = new byte[1024];
            DatagramPacket packet = new DatagramPacket(data, data.length);
    
            socket.receive(packet);
    
            String message = new String(data);
            System.out.println("recive: "+message);
        }while(true);

    }
}
