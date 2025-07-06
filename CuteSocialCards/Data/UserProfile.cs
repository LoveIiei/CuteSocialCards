namespace CuteSocialCards.Data
{
    public class SocialLinks
    {
        public string Twitter { get; set; } = "";
    }

    public class UserProfile
    {
        public string Name { get; set; } = "";
        public string Bio { get; set; } = "";
        public string FavoriteGame { get; set; } = "";
        public string FavoriteSong { get; set; } = "";
        public SocialLinks Social { get; set; } = new();
    }
}
