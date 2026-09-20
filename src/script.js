/* =====================================================
   CARD LIST
===================================================== */

const cards = [

  {
    name: "Shadow Dragon",
    type: "CREATURE",
    attack: 90,
    health: 80,
    symbol: "🐉"
  },

  {
    name: "Void Knight",
    type: "WARRIOR",
    attack: 75,
    health: 95,
    symbol: "⚔️"
  },

  {
    name: "Frost Mage",
    type: "MAGE",
    attack: 85,
    health: 65,
    symbol: "❄️"
  },

  {
    name: "Dark Golem",
    type: "CREATURE",
    attack: 60,
    health: 120,
    symbol: "🗿"
  },

  {
    name: "Storm Raven",
    type: "CREATURE",
    attack: 70,
    health: 60,
    symbol: "🦅"
  },

  {
    name: "Moon Guardian",
    type: "WARRIOR",
    attack: 55,
    health: 110,
    symbol: "🌙"
  },

  {
    name: "Arcane Wizard",
    type: "MAGE",
    attack: 95,
    health: 55,
    symbol: "🧙"
  },

  {
    name: "Iron Titan",
    type: "CREATURE",
    attack: 100,
    health: 130,
    symbol: "🤖"
  },

  {
    name: "Night Wolf",
    type: "CREATURE",
    attack: 80,
    health: 70,
    symbol: "🐺"
  },

  {
    name: "Cyber Samurai",
    type: "WARRIOR",
    attack: 88,
    health: 85,
    symbol: "🥷"
  },

  {
    name: "Abyss Mage",
    type: "MAGE",
    attack: 110,
    health: 50,
    symbol: "🔮"
  },

  {
    name: "Steel Guardian",
    type: "WARRIOR",
    attack: 65,
    health: 115,
    symbol: "🛡️"
  }

];


const cardContainer =
  document.getElementById(
    "cardContainer"
  );


/*
  FOR LOOP:
  Used to display every card
  in the card list.
*/

for (
  let i = 0;
  i < cards.length;
  i++
) {

  const card = cards[i];

  const el =
    document.createElement("article");


  el.classList.add("card");


  el.innerHTML = `

    <div class="card-art">

      <div class="symbol">
        ${card.symbol}
      </div>

    </div>


    <div class="card-number">

      CARD
      ${String(i + 1).padStart(3, "0")}

    </div>


    <h3 class="card-name">

      ${card.name}

    </h3>


    <span class="card-type">

      ${card.type}

    </span>


    <div class="stats">

      <div class="stat">

        <span class="stat-label">
          ATK
        </span>

        <span class="stat-value">
          ${card.attack}
        </span>

      </div>


      <div class="stat">

        <span class="stat-label">
          HP
        </span>

        <span class="stat-value">
          ${card.health}
        </span>

      </div>

    </div>

  `;


  cardContainer.appendChild(el);

}


document.getElementById(
  "cardCount"
).textContent =
  cards.length;


/* =====================================================
   MAIN LOOP TABS
===================================================== */

document
  .querySelectorAll(".tab")
  .forEach(tab => {

    tab.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".tab")
          .forEach(t => {

            t.classList.remove(
              "active"
            );

          });


        document
          .querySelectorAll(".loop-group")
          .forEach(group => {

            group.classList.remove(
              "active"
            );

          });


        tab.classList.add(
          "active"
        );


        const group =
          document.getElementById(
            tab.dataset.tab
          );


        if (group) {

          group.classList.add(
            "active"
          );

        }

      }
    );

  });


/* =====================================================
   FUNCTION SUB-TABS
===================================================== */

document
  .querySelectorAll(".function-tabs")
  .forEach(tabBar => {

    tabBar
      .querySelectorAll(".function-tab")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            tabBar
              .querySelectorAll(
                ".function-tab"
              )
              .forEach(btn => {

                btn.classList.remove(
                  "active"
                );

              });


            const group =
              tabBar.closest(
                ".loop-group"
              );


            if (group) {

              group
                .querySelectorAll(
                  ".function-panel"
                )
                .forEach(panel => {

                  panel.classList.remove(
                    "active"
                  );

                });


              const target =
                group.querySelector(
                  `[data-function-panel="${button.dataset.function}"]`
                );


              if (target) {

                target.classList.add(
                  "active"
                );

              }

            }


            button.classList.add(
              "active"
            );

          }
        );

      });

  });


/* =====================================================
   PACK OPENER
===================================================== */

const packCards = [

  "🔥 Fire Dragon",

  "💧 Water Mage",

  "🌑 Shadow Knight",

  "⚡ Lightning Beast",

  "🌲 Forest Guardian",

  "🔮 Dark Sorcerer"

];


let inventory = [];

let currentPack = [];


function startOpening() {

  document
    .getElementById(
      "openPackBtn"
    )
    .disabled = true;


  openPacks();

}


function openPacks() {

  document
    .getElementById(
      "choices"
    )
    .innerHTML = "";


  document
    .getElementById(
      "packResults"
    )
    .innerHTML = "";


  currentPack = [];


  /*
    DO-WHILE LOOP:
    The pack opening process can
    execute at least once.
  */

  let i = 0;


  do {

    currentPack.push(

      packCards[
        Math.floor(
          Math.random() *
          packCards.length
        )
      ]

    );


    i++;

  }

  while (
    i < 3
  );


  displayPack(
    currentPack
  );


  showChoices();

}


function displayPack(
  obtainedCards
) {

  const results =
    document.getElementById(
      "packResults"
    );


  results.innerHTML =
    "<h2>🎁 You Opened a Pack!</h2>";


  obtainedCards.forEach(
    card => {

      results.innerHTML += `

        <div
          class="card"
          style="
            margin:8px 0;
            min-height:auto
          ">

          <div class="card-icon">
            🃏
          </div>

          <div class="card-name">
            ${card}
          </div>

        </div>

      `;

    }
  );

}


function saveCurrentPackToInventory() {

  currentPack.forEach(
    cardName => {

      let existing =
        inventory.find(
          card =>
            card.name ===
            cardName
        );


      if (existing) {

        existing.owned++;

      }

      else {

        inventory.push({

          name: cardName,

          owned: 1

        });

      }

    }
  );


  displayInventory();


  currentPack = [];

}


function showChoices() {

  const choices =
    document.getElementById(
      "choices"
    );


  choices.innerHTML = `

    <div class="result">

      <p>

        Do you want to open
        another card pack?

      </p>


      <button
        class="action"
        id="okButton">

        OK - Open Another

      </button>


      <button
        class="action danger"
        id="cancelButton">

        Cancel - Stop

      </button>

    </div>

  `;


  document
    .getElementById(
      "okButton"
    )
    .onclick = () => {

      saveCurrentPackToInventory();


      choices.innerHTML = "";


      openPacks();

    };


  document
    .getElementById(
      "cancelButton"
    )
    .onclick = () => {

      saveCurrentPackToInventory();


      choices.innerHTML = "";


      document
        .getElementById(
          "packResults"
        )
        .innerHTML = "";


      document
        .getElementById(
          "openPackBtn"
        )
        .disabled = false;


      alert(
        "Finished opening card packs!\n\n" +
        "Total Cards: " +
        getTotalCards()
      );

    };

}


function displayInventory() {

  document
    .getElementById(
      "inventoryCount"
    )
    .innerText =
      "Cards Collected: " +
      getTotalCards();


  const div =
    document.getElementById(
      "inventory"
    );


  div.innerHTML = "";


  inventory.forEach(
    card => {

      div.innerHTML += `

        <div class="card">

          <div class="card-icon">
            🃏
          </div>

          <div class="card-name">
            ${card.name}
          </div>

          <div>
            Owned: ${card.owned}
          </div>

        </div>

      `;

    }
  );

}


function getTotalCards() {

  let total = 0;


  inventory.forEach(
    card => {

      total += card.owned;

    }
  );


  return total;

}


/* =====================================================
   QUICK BATTLE
===================================================== */

let playerHP = 100;

let enemyHP = 100;

let gameOver = false;


const cardsForBattle = {

  FireKnight: {

    name: "Fire Knight",

    damage: 20

  },


  ThunderMage: {

    name: "Thunder Mage",

    damage: 25

  },


  IceWarrior: {

    name: "Ice Warrior",

    damage: 15

  }

};


function attack(card) {

  if (gameOver)
    return;


  enemyHP -=
    card.damage;


  if (enemyHP < 0)
    enemyHP = 0;


  updateHealth();


  document
    .getElementById(
      "message"
    )
    .textContent =
      card.name +
      " dealt " +
      card.damage +
      " damage!";


  if (enemyHP === 0) {

    gameOver = true;


    document
      .getElementById(
        "message"
      )
      .textContent =
        "🏆 Enemy defeated! YOU WIN!";


    return;

  }


  setTimeout(
    enemyAttack,
    1000
  );

}


function enemyAttack() {

  if (gameOver)
    return;


  const enemyDamage = 15;


  playerHP -=
    enemyDamage;


  if (playerHP < 0)
    playerHP = 0;


  updateHealth();


  document
    .getElementById(
      "message"
    )
    .textContent =
      "👹 Enemy dealt " +
      enemyDamage +
      " damage!";


  if (playerHP === 0) {

    gameOver = true;


    document
      .getElementById(
        "message"
      )
      .textContent =
        "💀 You lost! Your HP reached ZERO!";

  }

}


function updateHealth() {

  document
    .getElementById(
      "playerHP"
    )
    .textContent =
      playerHP +
      " / 100 HP";


  document
    .getElementById(
      "enemyHP"
    )
    .textContent =
      enemyHP +
      " / 100 HP";


  document
    .getElementById(
      "playerHealth"
    )
    .style.width =
      playerHP + "%";


  document
    .getElementById(
      "enemyHealth"
    )
    .style.width =
      enemyHP + "%";

}


function resetGame() {

  playerHP = 100;

  enemyHP = 100;

  gameOver = false;


  updateHealth();


  document
    .getElementById(
      "message"
    )
    .textContent =
      "Choose a card to attack!";

}


/* =====================================================
   DAMAGE CALCULATOR
===================================================== */

function calculateBattle() {

  const attackerName =
    document.getElementById(
      "attackerName"
    ).value;


  const attackValue =
    Number(
      document.getElementById(
        "attack"
      ).value
    );


  const attackerElement =
    document.getElementById(
      "attackerElement"
    ).value;


  const defenderName =
    document.getElementById(
      "defenderName"
    ).value;


  let hp =
    Number(
      document.getElementById(
        "hp"
      ).value
    );


  const defense =
    Number(
      document.getElementById(
        "defense"
      ).value
    );


  const defenderElement =
    document.getElementById(
      "defenderElement"
    ).value;


  const critical =
    document.getElementById(
      "critical"
    ).checked;


  const shield =
    document.getElementById(
      "shield"
    ).checked;


  const poison =
    document.getElementById(
      "poison"
    ).checked;


  const heal =
    document.getElementById(
      "heal"
    ).checked;


  let damage =
    attackValue -
    defense;


  if (damage < 0)
    damage = 0;


  const multiplier =
    getElementMultiplier(
      attackerElement,
      defenderElement
    );


  damage =
    Math.floor(
      damage *
      multiplier
    );


  const log = [];


  log.push(
    attackerName +
    " attacks " +
    defenderName
  );


  log.push(
    "Base damage: " +
    damage
  );


  if (
    multiplier > 1
  ) {

    log.push(
      "🔥 Element advantage!"
    );

  }

  else if (
    multiplier < 1
  ) {

    log.push(
      "💧 Element disadvantage!"
    );

  }


  if (critical) {

    damage =
      Math.floor(
        damage * 1.5
      );


    log.push(
      "💥 Critical Hit!"
    );

  }


  if (shield) {

    damage =
      Math.floor(
        damage * 0.5
      );


    log.push(
      "🛡️ Shield reduced damage."
    );

  }


  hp -= damage;


  if (poison) {

    hp -= 20;


    log.push(
      "☠️ Poison dealt 20 damage."
    );

  }


  if (heal) {

    hp += 30;


    log.push(
      "💚 Healing restored 30 HP."
    );

  }


  if (hp < 0)
    hp = 0;


  document
    .getElementById(
      "damageResult"
    )
    .textContent =
      damage +
      " Damage";


  document
    .getElementById(
      "remainingHP"
    )
    .textContent =
      "Remaining HP: " +
      hp;


  document
    .getElementById(
      "winner"
    )
    .textContent =
      hp <= 0
        ? "🏆 " +
          attackerName +
          " wins!"
        : defenderName +
          " survives!";


  const battleLog =
    document.getElementById(
      "battleLog"
    );


  battleLog.innerHTML = "";


  log.forEach(
    message => {

      const p =
        document.createElement(
          "p"
        );


      p.textContent =
        message;


      battleLog.appendChild(p);

    }
  );

}


function getElementMultiplier(
  attacker,
  defender
) {

  if (
    attacker === "fire" &&
    defender === "earth"
  )
    return 1.5;


  if (
    attacker === "earth" &&
    defender === "wind"
  )
    return 1.5;


  if (
    attacker === "wind" &&
    defender === "water"
  )
    return 1.5;


  if (
    attacker === "water" &&
    defender === "fire"
  )
    return 1.5;


  if (
    attacker === "earth" &&
    defender === "fire"
  )
    return 0.5;


  if (
    attacker === "wind" &&
    defender === "earth"
  )
    return 0.5;


  if (
    attacker === "water" &&
    defender === "wind"
  )
    return 0.5;


  if (
    attacker === "fire" &&
    defender === "water"
  )
    return 0.5;


  return 1;

}


/* =====================================================
   TURN SYSTEM
===================================================== */

let turnPlayerHP = 100;

let turnEnemyHP = 100;

let turnNumber = 0;

let gameStarted = false;


const turnCard = {

  name: "Fire Dragon",

  attack: 25,

  health: 80

};


function startGame() {

  gameStarted = true;

  turnNumber = 0;


  document
    .getElementById(
      "turnMessage"
    )
    .textContent =
      "Game started! Play your first turn.";


  updateDisplay();

}


function playTurn() {

  if (!gameStarted) {

    document
      .getElementById(
        "turnMessage"
      )
      .textContent =
        "Please start the game first!";


    return;

  }


  if (
    turnEnemyHP <= 0 ||
    turnPlayerHP <= 0
  ) {

    return;

  }


  turnNumber++;


  turnEnemyHP -=
    turnCard.attack;


  turnPlayerHP -= 10;


  if (turnEnemyHP < 0)
    turnEnemyHP = 0;


  if (turnPlayerHP < 0)
    turnPlayerHP = 0;


  document
    .getElementById(
      "turnMessage"
    )
    .textContent =
      `Turn ${turnNumber}: ` +
      `${turnCard.name} attacked ` +
      `the enemy for ` +
      `${turnCard.attack} damage!`;


  updateDisplay();


  if (
    turnEnemyHP <= 0
  ) {

    document
      .getElementById(
        "turnMessage"
      )
      .textContent =
        "🎉 You defeated the enemy!";


    gameStarted = false;


    return;

  }


  if (
    turnPlayerHP <= 0
  ) {

    document
      .getElementById(
        "turnMessage"
      )
      .textContent =
        "💀 You lost the battle!";


    gameStarted = false;

  }

}


function updateDisplay() {

  document
    .getElementById(
      "turnPlayerHP"
    )
    .textContent =
      turnPlayerHP;


  document
    .getElementById(
      "turnEnemyHP"
    )
    .textContent =
      turnEnemyHP;


  document
    .getElementById(
      "turnNumber"
    )
    .textContent =
      turnNumber;

}


function resetTurnGame() {

  turnPlayerHP = 100;

  turnEnemyHP = 100;

  turnNumber = 0;

  gameStarted = false;


  document
    .getElementById(
      "turnMessage"
    )
    .textContent =
      "Game reset! Click Start Game.";


  updateDisplay();

}


/* =====================================================
   HAND MANAGER
===================================================== */

const CARD_POOL = [

  {
    name: "Knight",
    icon: "⚔️",
    value: 5
  },

  {
    name: "Mage",
    icon: "🔮",
    value: 7
  },

  {
    name: "Rogue",
    icon: "🗡️",
    value: 4
  },

  {
    name: "Druid",
    icon: "🌿",
    value: 6
  },

  {
    name: "Paladin",
    icon: "🛡️",
    value: 8
  },

  {
    name: "Archer",
    icon: "🏹",
    value: 5
  },

  {
    name: "Warlock",
    icon: "🌀",
    value: 7
  },

  {
    name: "Shaman",
    icon: "🔥",
    value: 6
  },

  {
    name: "Bard",
    icon: "🎵",
    value: 3
  },

  {
    name: "Monk",
    icon: "👊",
    value: 4
  }

];


let hand = [];

let tradeCount = 0;

let selectedIndex = null;


const handGrid =
  document.getElementById(
    "cardGrid"
  );


const drawBtn =
  document.getElementById(
    "drawBtn"
  );


const tradeBtn =
  document.getElementById(
    "tradeBtn"
  );


const useBtn =
  document.getElementById(
    "useBtn"
  );


const resetHandBtn =
  document.getElementById(
    "resetHandBtn"
  );


function renderHandCards() {

  handGrid.innerHTML = "";


  if (
    hand.length === 0
  ) {

    const empty =
      document.createElement(
        "div"
      );


    empty.className =
      "empty-message";


    empty.textContent =
      "↯ no cards — draw some";


    handGrid.appendChild(
      empty
    );


    updateHandButtons();

    updateHandStats();


    return;

  }


  /*
    WHILE LOOP:
    Continue rendering cards
    while i is less than the
    hand length.
  */

  let i = 0;


  while (
    i < hand.length
  ) {

    const card =
      hand[i];


    const cardDiv =
      document.createElement(
        "div"
      );


    cardDiv.className =
      "card card-item";


    if (
      selectedIndex === i
    ) {

      cardDiv.classList.add(
        "selected"
      );

    }


    cardDiv.innerHTML = `

      <div class="card-art">

        <div class="symbol">
          ${card.icon}
        </div>

      </div>


      <div class="card-name">
        ${card.name}
      </div>


      <div class="card-type">
        HAND CARD
      </div>


      <div
        class="stat"
        style="margin-top:12px">

        <span class="stat-label">
          VALUE
        </span>

        <span class="stat-value">
          ⚡${card.value}
        </span>

      </div>

    `;


    const cardIndex = i;


    cardDiv.addEventListener(
      "click",
      event => {

        event.stopPropagation();


        selectedIndex =
          selectedIndex ===
          cardIndex
            ? null
            : cardIndex;


        renderHandCards();

      }
    );


    handGrid.appendChild(
      cardDiv
    );


    i++;

  }


  updateHandButtons();

  updateHandStats();

}


function updateHandButtons() {

  const hasCards =
    hand.length > 0;


  const hasSelected =
    selectedIndex !== null &&
    hand[selectedIndex] !== undefined;


  tradeBtn.disabled =
    !(hasCards && hasSelected);


  useBtn.disabled =
    !(hasCards && hasSelected);

}


function updateHandStats() {

  document
    .getElementById(
      "handCardCount"
    )
    .textContent =
      hand.length;


  document
    .getElementById(
      "handTradeCount"
    )
    .textContent =
      tradeCount;

}


function drawCard() {

  const randomIndex =
    Math.floor(
      Math.random() *
      CARD_POOL.length
    );


  hand.push({
    ...CARD_POOL[randomIndex]
  });


  selectedIndex = null;


  renderHandCards();

}


function tradeCard() {

  if (
    selectedIndex === null ||
    hand.length === 0
  )
    return;


  const randomIndex =
    Math.floor(
      Math.random() *
      CARD_POOL.length
    );


  hand[selectedIndex] = {
    ...CARD_POOL[randomIndex]
  };


  tradeCount++;


  selectedIndex = null;


  renderHandCards();

}


function useCard() {

  if (
    selectedIndex === null ||
    hand.length === 0
  )
    return;


  hand.splice(
    selectedIndex,
    1
  );


  selectedIndex = null;


  renderHandCards();

}


function resetHandGame() {

  hand = [];

  selectedIndex = null;

  tradeCount = 0;


  renderHandCards();

}


drawBtn.addEventListener(
  "click",
  drawCard
);


tradeBtn.addEventListener(
  "click",
  tradeCard
);


useBtn.addEventListener(
  "click",
  useCard
);


resetHandBtn.addEventListener(
  "click",
  resetHandGame
);


/* =====================================================
   INITIALIZE
===================================================== */

updateHealth();

updateDisplay();

renderHandCards();
