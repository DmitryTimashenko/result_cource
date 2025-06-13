function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const heroDecorator = {
  hitEnemy: function (enemy) {
    enemy.health -= 10;
  },
};

const enemyDecorator = {
  hitHero: function (hero) {
    hero.health -= 10;
  },
};

function startGame(heroPlayer, enemyPlayer) {
  heroPlayer = { ...heroPlayer, ...heroDecorator };
  enemyPlayer = { ...enemyPlayer, ...enemyDecorator };

  while (heroPlayer.health >= 0 && enemyPlayer.health >= 0) {
    const randomValue = getRandomNumberInRange(0, 1);

    if (randomValue === 0) {
      heroPlayer.hitEnemy(enemyPlayer);
    } else {
      enemyPlayer.hitHero(heroPlayer);
    }
  }

  const winner = heroPlayer.health > 0 ? heroPlayer : enemyPlayer;
  alert(`${winner.name} победил! У него осталось ${winner.health} здоровья`);
}

const hero = {
  name: "Batman",
  health: 100,
};

const enemy = {
  name: "Joker",
  health: 100,
};

startGame(hero, enemy);
