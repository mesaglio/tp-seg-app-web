package utn.seg.app.web.dto;

public class MovieDTO {
    private String name;

    public MovieDTO() { }

    public MovieDTO(String name) {
        this.name = name;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
