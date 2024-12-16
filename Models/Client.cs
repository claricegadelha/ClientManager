namespace ClientManager.Models {
    public class Client {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Cpf { get; set; }
        public DateOnly Birth { get; set; }
        public bool Active { get; set; }
    }
}