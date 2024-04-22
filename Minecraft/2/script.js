function generateCommand() {
    var item = document.getElementById("item").value;
    var amount = document.getElementById("amount").value;
    var enchantment = document.getElementById("enchantment").value;
    var enchantmentLevel = document.getElementById("enchantmentLevel").value;
    var lore = document.getElementById("lore").value;
    var command = "/give @p " + item + " " + amount + " 0 ";
    if (enchantment !== "") {
        command += "{Enchantments:[{id:\"" + enchantment + "\",lvl:" + enchantmentLevel + "}]}";
    }
    if (lore !== "") {
        command += "{display:{Name:\"" + lore + "\"}}";
    }
    document.getElementById("output").innerHTML = "<strong>Dein Befehl lautet:</strong><br>" + command;
}
