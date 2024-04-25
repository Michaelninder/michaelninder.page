document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('canvas');
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const elementSettings = document.getElementById('elementSettings');
    let selectedElement = null;

    // Drag-and-drop Funktionalität für Seitenleisten-Elemente
    sidebarItems.forEach(item => {
        item.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', item.dataset.itemType);
        });
    });

    canvas.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    canvas.addEventListener('drop', function(e) {
        e.preventDefault();
        const itemType = e.dataTransfer.getData('text/plain');
        const element = createNewElement(itemType);
        canvas.appendChild(element);
    });

    // Elementauswahl und Einstellungen aktualisieren
    canvas.addEventListener('click', function(e) {
        if (e.target !== canvas) {
            // Wenn ein Element im Canvas ausgewählt wird
            selectElement(e.target);
        } else {
            // Wenn außerhalb des Elements geklickt wird, Auswahl aufheben
            selectedElement = null;
            elementSettings.innerHTML = ''; // Einstellungen leeren
        }
    });

    // Einstellungen für ausgewähltes Element aktualisieren
    function updateElementSettings() {
        elementSettings.innerHTML = ''; // Einstellungen leeren

        if (!selectedElement) return;

        const elementType = selectedElement.dataset.elementType;
        if (elementType === 'heading') {
            // Beispiel: Einstellungen für Überschrift
            elementSettings.innerHTML = `
                <h3>Element Settings</h3>
                <div>
                    <label for="backgroundColor">Background Color:</label>
                    <input type="color" id="backgroundColor">
                </div>
                <div>
                    <label for="textColor">Text Color:</label>
                    <input type="color" id="textColor">
                </div>
                <!-- Weitere Einstellungen für Überschrift hier -->
            `;
        } else if (elementType === 'textfield') {
            // Beispiel: Einstellungen für Textfeld
            // Implementiere ähnlich wie für Überschrift
        }
        // Implementiere weitere Elementtypen hier
    }

    // Funktion zum Erstellen eines neuen Elements basierend auf dem Typ
    function createNewElement(type) {
        const element = document.createElement('div');
        element.setAttribute('draggable', true);
        element.classList.add('draggable');
        element.dataset.elementType = type;

        // Setze das Standard-Inhalt basierend auf dem Typ
        if (type === 'heading') {
            element.textContent = 'Heading';
        } else if (type === 'textfield') {
            element.textContent = 'Text Field';
        }
        // Füge weitere Elementtypen hinzu

        return element;
    }

    // Funktion zum Auswählen eines Elements
    function selectElement(element) {
        selectedElement = element;
        updateElementSettings();
    }

    // Generate-Button Eventlistener
    document.getElementById('generateBtn').addEventListener('click', function() {
        generateCode();
    });

    // Funktion zur Generierung des HTML-Codes
    function generateCode() {
        const html = canvas.innerHTML;
        // Generiere HTML-Code basierend auf dem Inhalt des Canvas
        console.log(html);
    }
});
