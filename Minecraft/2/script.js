let items = [];

fetch("items.json")
    .then(response => response.json())
    .then(data => {
        items = data.items;
        populateItems();
    })
    .catch(error => console.error(error));

function populateItems() {
    let itemSelect = document.getElementById("item");
    itemSelect.innerHTML = '<option value="">-- Select Item --</option>';

    items.forEach(item => {
        let option = document.createElement("option");
        option.text = item;
        option.value = item;
        itemSelect.add(option);
    });
}

function searchItem() {
    let input, filter, option, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    option = document.getElementsByTagName("option");

    for (i = 0; i < option.length; i++) {
        if (option[i].text.toUpperCase().indexOf(filter) > -1) {
            option[i].style.display = "";
        } else {
            option[i].style.display = "none";
        }
    }
}

function updateCommand() {
    let command = "/give @p ";
    let selectedItem = document.getElementById("item").value;

    if (selectedItem !== "") {
        command += selectedItem + "{";

        // Enchantments
        let enchantments = document.querySelectorAll('input[name="enchantment"]:checked');
        enchantments.forEach(enchantment => {
            let level = document.getElementById(`enchantment${enchantment.value}`).value;
            command += `${enchantment.value}:${level},`;
        });

        // Custom Name
        let customName = document.getElementById("customName").value.trim();
        if (customName !== "") {
            command += 'display:{Name:"{\\"text\\":\\"' + customName + '\\"}"},';
        }

        // Lores
        command += 'display:{Lore:[';
        let lores = document.querySelectorAll('input[name="lore"]');
        lores.forEach((lore, index) => {
            if (lore.value.trim() !== "") {
                command += `"${lore.value}"`;
                if (index !== lores.length - 1) command += ",";
            }
        });
        command += "]}";

        command += "} 1";
    }

    document.getElementById("command").value = command;
}

function addLore() {
    let loreContainer = document.getElementById("lores");
    let loreCount = loreContainer.childElementCount;
    if (loreCount < 15) {
        let input = document.createElement("input");
        input.type = "text";
        input.id = `lore${loreCount}`;
        input.placeholder = "Enter lore";
        input.name = "lore";
        input.oninput = updateCommand;
        loreContainer.insertBefore(input, loreContainer.lastChild);
    } else {
        alert("Maximum 15 lores allowed.");
    }
}

function applyCommand() {
    let command = document.getElementById("command").value;
    // Here you can apply the command as you wish
    console.log(command);
}
