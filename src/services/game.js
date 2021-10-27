class Game
{
    // Stats
    inProgress = false;

    // Actions 
    start()
    {
        // Statement
        this.inProgress = true; // Partie en cours

        // Player
        let Barman = new Player();
        Barman.satisfaction = 100; // Satisfaction du bar
        Barman.ingredients  ;
    }

    pause()
    {
        // Statement
        this.inProgress = false;
    }
}

export default Game;