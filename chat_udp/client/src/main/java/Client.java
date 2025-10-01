import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class Client {
    public static void main(String[] args)throws Exception {
        DatagramSocket socket = new DatagramSocket();
        String message = "HW AMB";
        byte[] data = message.getBytes();
        DatagramPacket packet = 
            new DatagramPacket(data, data.length, 
                InetAddress.getByName("192.168.131.42"), 5000);

        socket.send(packet);

        socket.close();
    }
}
