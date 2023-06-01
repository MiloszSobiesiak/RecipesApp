namespace MyAppAPI.Models
{
    public class dish
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description  { get; set; }

        public Boolean isFavorite { get; set; }

        public int Portions { get; set; }

        public int DifficultyLevel   { get; set; }

        public int PreparationTime  { get; set; }

        public List<ingredient> Ingredients { get; set; }
    }
}
