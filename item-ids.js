var item = function(name) {
    this.name = name;
};

var items = [
    new item("Nothing"),
    new item("Master Ball"),
    new item("Ultra Ball"),
    new item("Great Ball"),
    new item("Poke Ball"),
    new item("Safari Ball"),
    new item("Net Ball"),
    new item("Dive Ball"),
    new item("Nest Ball"),
    new item("Repeat Ball"),
    new item("Timer Ball"),
    new item("Luxury Ball"),
    new item("Premier Ball"),
    new item("Potion"),
    new item("Antidote"),
    new item("Burn Heal"),
    new item("Ice Heal"),
    new item("Awakening"),
    new item("Parlyz Heal"),
    new item("Full Restore"),
    new item("Max Potion"),
    new item("Hyper Potion"),
    new item("Super Potion"),
    new item("Full Heal"),
    new item("Revive"),
    new item("Max Revive"),
    new item("Fresh Water"),
    new item("Soda Pop"),
    new item("Lemonade"),
    new item("Moomoo Milk"),
    new item("EnergyPowder"),
    new item("Energy Root"),
    new item("Heal Powder"),
    new item("Revival Herb"),
    new item("Ether"),
    new item("Max Ether"),
    new item("Elixir"),
    new item("Max Elixir"),
    new item("Lava Cookie"),
    new item("Blue Flute"),
    new item("Yellow Flute"),
    new item("Red Flute"),
    new item("Black Flute"),
    new item("White Flute"),
    new item("Berry Juice"),
    new item("Sacred Ash"),
    new item("Shoal Salt"),
    new item("Shoal Shell"),
    new item("Red Shard"),
    new item("Blue Shard"),
    new item("Yellow Shard"),
    new item("Green Shard"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("HP Up"),
    new item("Protein"),
    new item("Iron"),
    new item("Carbos"),
    new item("Calcium"),
    new item("Rare Candy"),
    new item("PP Up"),
    new item("Zinc"),
    new item("PP Max"),
    new item("glitch"),
    new item("Guard Spec."),
    new item("Dire Hit"),
    new item("X Attack"),
    new item("X Defend"),
    new item("X Speed"),
    new item("X Accuracy"),
    new item("X Special"),
    new item("Poke Doll"),
    new item("Fluffy Tail"),
    new item("glitch"),
    new item("Super Repel"),
    new item("Max Repel"),
    new item("Escape Rope"),
    new item("Repel"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("Sun Stone"),
    new item("Moon Stone"),
    new item("Fire Stone"),
    new item("Thunderstone"),
    new item("Water Stone"),
    new item("Leaf Stone"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("TinyMushroom"),
    new item("Big Mushroom"),
    new item("glitch"),
    new item("Pearl"),
    new item("Big Pearl"),
    new item("Stardust"),
    new item("Star Piece"),
    new item("Nugget"),
    new item("Heart Scale"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("Orange Mail"),
    new item("Harbor Mail"),
    new item("Glitter Mail"),
    new item("Mech Mail"),
    new item("Wood Mail"),
    new item("Wave Mail"),
    new item("Bead Mail"),
    new item("Shadow Mail"),
    new item("Tropic Mail"),
    new item("Dream Mail"),
    new item("Fab Mail"),
    new item("Retro Mail"),
    new item("Cheri Berry"),
    new item("Chesto Berry"),
    new item("Pecha Berry"),
    new item("Rawst Berry"),
    new item("Aspear Berry"),
    new item("Leppa Berry"),
    new item("Oran Berry"),
    new item("Persim Berry"),
    new item("Lum Berry"),
    new item("Sitrus Berry"),
    new item("Figy Berry"),
    new item("Wiki Berry"),
    new item("Mago Berry"),
    new item("Aguav Berry"),
    new item("Iapapa Berry"),
    new item("Razz Berry"),
    new item("Bluk Berry"),
    new item("Nanab Berry"),
    new item("Wepear Berry"),
    new item("Pinap Berry"),
    new item("Pomeg Berry"),
    new item("Kelpsy Berry"),
    new item("Qualot Berry"),
    new item("Hondew Berry"),
    new item("Grepa Berry"),
    new item("Tamato Berry"),
    new item("Cornn Berry"),
    new item("Magost Berry"),
    new item("Rabuta Berry"),
    new item("Nomel Berry"),
    new item("Spelon Berry"),
    new item("Pamtre Berry"),
    new item("Watmel Berry"),
    new item("Durin Berry"),
    new item("Belue Berry"),
    new item("Liechi Berry"),
    new item("Ganlon Berry"),
    new item("Salac Berry"),
    new item("Petaya Berry"),
    new item("Apicot Berry"),
    new item("Lansat Berry"),
    new item("Starf Berry"),
    new item("Enigma Berry"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("BrightPowder"),
    new item("White Herb"),
    new item("Macho Brace"),
    new item("Exp. Share"),
    new item("Quick Claw"),
    new item("Soothe Bell"),
    new item("Mental Herb"),
    new item("Choice Band"),
    new item("King's Rock"),
    new item("SilverPowder"),
    new item("Amulet Coin"),
    new item("Cleanse Tag"),
    new item("Soul Dew"),
    new item("DeepSeaTooth"),
    new item("DeepSeaScale"),
    new item("Smoke Ball"),
    new item("Everstone"),
    new item("Focus Band"),
    new item("Lucky Egg"),
    new item("Scope Lens"),
    new item("Metal Coat"),
    new item("Leftovers"),
    new item("Dragon Scale"),
    new item("Light Ball"),
    new item("Soft Sand"),
    new item("Hard Stone"),
    new item("Miracle Seed"),
    new item("BlackGlasses"),
    new item("Black Belt"),
    new item("Magnet"),
    new item("Mystic Water"),
    new item("Sharp Beak"),
    new item("Poison Barb"),
    new item("NeverMeltIce"),
    new item("Spell Tag"),
    new item("TwistedSpoon"),
    new item("Charcoal"),
    new item("Dragon Fang"),
    new item("Silk Scarf"),
    new item("Up-Grade"),
    new item("Shell Bell"),
    new item("Sea Incense"),
    new item("Lax Incense"),
    new item("Lucky Punch"),
    new item("Metal Powder"),
    new item("Thick Club"),
    new item("Stick"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("glitch"),
    new item("Red Scarf"),
    new item("Blue Scarf"),
    new item("Pink Scarf"),
    new item("Green Scarf"),
    new item("Yellow Scarf"),
    new item("Mach Bike"),
    new item("Coin Case"),
    new item("Itemfinder"),
    new item("Old Rod"),
    new item("Good Rod"),
    new item("Super Rod"),
    new item("S.S. Ticket"),
    new item("Contest Pass"),
    new item("glitch"),
    new item("Wailmer Pail"),
    new item("Devon Goods"),
    new item("Soot Sack"),
    new item("Basement Key"),
    new item("Acro Bike"),
    new item("Pokeblock Case"),
    new item("Letter"),
    new item("Eon Ticket"),
    new item("Red Orb"),
    new item("Blue Orb"),
    new item("Scanner"),
    new item("Go-Goggles"),
    new item("Meteorite"),
    new item("Rm. 1 Key"),
    new item("Rm. 2 Key"),
    new item("Rm. 4 Key"),
    new item("Rm. 6 Key"),
    new item("Storage Key"),
    new item("Root Fossil"),
    new item("Claw Fossil"),
    new item("Devon Scope"),
    new item("TM01"),
    new item("TM02"),
    new item("TM03"),
    new item("TM04"),
    new item("TM05"),
    new item("TM06"),
    new item("TM07"),
    new item("TM08"),
    new item("TM09"),
    new item("TM10"),
    new item("TM11"),
    new item("TM12"),
    new item("TM13"),
    new item("TM14"),
    new item("TM15"),
    new item("TM16"),
    new item("TM17"),
    new item("TM18"),
    new item("TM19"),
    new item("TM20"),
    new item("TM21"),
    new item("TM22"),
    new item("TM23"),
    new item("TM24"),
    new item("TM25"),
    new item("TM26"),
    new item("TM27"),
    new item("TM28"),
    new item("TM29"),
    new item("TM30"),
    new item("TM31"),
    new item("TM32"),
    new item("TM33"),
    new item("TM34"),
    new item("TM35"),
    new item("TM36"),
    new item("TM37"),
    new item("TM38"),
    new item("TM39"),
    new item("TM40"),
    new item("TM41"),
    new item("TM42"),
    new item("TM43"),
    new item("TM44"),
    new item("TM45"),
    new item("TM46"),
    new item("TM47"),
    new item("TM48"),
    new item("TM49"),
    new item("TM50"),
    new item("HM01"),
    new item("HM02"),
    new item("HM03"),
    new item("HM04"),
    new item("HM05"),
    new item("HM06"),
    new item("HM07"),
    new item("HM08"),
    new item("glitch"),
    new item("glitch"),
    new item("Oak's Parcel"),
    new item("Poke Flute"),
    new item("Secret Key"),
    new item("Bike Voucher"),
    new item("Gold Teeth"),
    new item("Old Amber"),
    new item("Card Key"),
    new item("Lift Key"),
    new item("Helix Fossil"),
    new item("Dome Fossil"),
    new item("Silph Scope"),
    new item("Bicycle"),
    new item("Town Map"),
    new item("Vs. Seeker"),
    new item("Fame Checker"),
    new item("TM Case"),
    new item("Berry Pouch"),
    new item("Teachy TV"),
    new item("Tri-Pass"),
    new item("Rainbow Pass"),
    new item("Tea"),
    new item("MysticTicket"),
    new item("AuroraTicket"),
    new item("Powder Jar"),
    new item("Ruby"),
    new item("Sapphire"),
    new item("Magma Emblem"),
    new item("Old Sea Map")
];


var getItem = {
    byId: function(value, col) {
        document.getElementById("itemNote-"+col).innerText = "";
        if (value >= items.length) { return "glitch"; }
        else { return items[value].name; }
    },
    
    byName: function(name, col) {
        var value = "?";
        if (name === "") { value = 0; }
        else {
            for (var a = 0; a < items.length; a++) {
                if (name.toLowerCase() === items[a].name.toLowerCase()) {
                    value = a;
                    break;
                }
            }
        }
        
        if (value === "?") {
            document.getElementById("itemNote-"+col).innerText = " Item not found";
            return "abort";
        }
        else {
            document.getElementById("itemNote-"+col).innerText = "";
            return value;
        }
    }
};


