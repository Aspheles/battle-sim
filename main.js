// Yavuz Dereli
// Applicatie ontwikkelaar A1

class Person {
    constructor(health, energy, strength, name) {
        this.health = health;
        this.energy = energy;
        this.strength = strength;
        this.name = name;
    }

    
    punch(enemy) {
        this.energy -= 5;
        var damage = parseInt(this.strength * Math.random()) + 1;
        enemy.health -= damage;
        return this.name + ' punched ' + enemy.name + ' for ' + damage + ' damage.';
    }

    headbutt(enemy) {
        this.energy -= 10;
        var damage = parseInt(this.strength * Math.random()) * 2 + 1;
        enemy.health -= damage;
        var text = this.name + ' headbutted ' + enemy.name + ' for ' + damage + ' damage.';
        if (Math.random() > 0.5) {
            var selfdamage = parseInt(Math.random() * 7) + 20;
            this.health -= selfdamage;
            text += "<br>" + this.name + ' Hurt himself using headbutt for ' + selfdamage + ' damage ';
        }
        return text;

    }

    meditate() {
        var regained = 25;
        this.energy += regained;
        return this.name + " used meditation and regained " + regained + " energy";

    }

    spell(enemy) {
        this.energy -= 50;
        var damage = parseInt(this.strength * 2.5);
        enemy.health -= damage;
        return this.name + ' Used spell on ' + enemy.name + ' for ' + damage + ' damage ';
        
    }
    

}

var playerNameInput = prompt("Enter your name");
alert('Read me: Your goal is to kill your enemy with the attacks be careful with using headbutt you might hurt yourself at the meantime as well, and when you run out of energy make sure to use meditate to get some energy back but be careful because you will be defenseless')
alert('When your ready to fight click ok, goodluck');
var player1 = new Person(1000, 100, 60, playerNameInput);
var player2 = new Person(1000, 125, 90, "Enemy");

var playerName;
var EnemyName;
var playeroneHealth;
var playertwoHealth;
var playeroneEnergy;
var playertwoEnergy;
var combatLog;

window.onload = function () {
    combatLog = document.getElementById("combatlog");
    playeroneHealth = document.getElementById("playeroneHealth");
    playertwoHealth = document.getElementById("playertwoHealth");
    playeroneEnergy = document.getElementById("playeroneEnergy");
    playertwoEnergy = document.getElementById("playertwoEnergy");
    playerName = document.getElementById("playername")
    playeroneHealth.innerHTML = player1.health;
    playertwoHealth.innerHTML = player2.health;
    playeroneEnergy.innerHTML = player1.energy;
    playertwoEnergy.innerHTML = player2.energy;
    playerName.innerHTML = playerNameInput;
}
function activateMove(move) {

    if (player1.health < 1 || player2.health < 1) return;
    
    if (Math.random() < 1 && player2.energy >= 50) {

        combatLog.innerHTML = player2.spell(player1);
    }
    
    if (player2.energy < 10) {
        combatLog.innerHTML = player2.meditate();
    }
    else {
        if (Math.random() < 0.4 && player2.energy >= 10) {
            combatLog.innerHTML = player2.headbutt(player1);
        }
    else {
        if (Math.random() < 0.5 && player2.energy >= 5) {

            combatLog.innerHTML = player2.punch(player1);

        } 


    }    
    }

    switch (move) {
        case 'punch':
            if (player1.energy >= 5) {
                combatLog.innerHTML += "<br>" + player1.punch(player2);
            }
            else {
                alert(' Not enough energy for that.');
            }
            break;
        case 'headbutt':
            if (player1.energy >= 10) {
                combatLog.innerHTML += "<br>" + player1.headbutt(player2);
            }
            else {
                alert(' Not enough energy for that.');
            }
            break;
        case 'meditate':
            combatLog.innerHTML += "<br>" + player1.meditate();
            break;
        case 'spell':
        if (player1.energy >= 50) {
            combatLog.innerHTML += "<br>" + player1.spell(player2);
        }
        else {
            alert(' Not enough energy for that.');
        }
        break;    
    
            
    }
    

    playeroneHealth.innerHTML = player1.health;
    playertwoHealth.innerHTML = player2.health;
    playeroneEnergy.innerHTML = player1.energy;
    playertwoEnergy.innerHTML = player2.energy;
    console.log(player1);
    console.log(player2);

    if (player1.health < 1) alert('You lose!');
    else if (player2.health < 1) alert('You win!');

}