package IceWollowTown;
import SocialHub.Dal.Memory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        Memory memory = new Memory();

        SpringApplication.run(Application.class, args);
    }
}
