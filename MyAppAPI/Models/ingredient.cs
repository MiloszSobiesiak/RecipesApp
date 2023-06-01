using System.Text.Json.Serialization;

namespace MyAppAPI.Models
{
    public class ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Amount { get; set; }
        public string Type { get; set; }

        [JsonIgnore]
        public dish? dish { get; set; }
        public int dishId  { get; set; }

    }
}
