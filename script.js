document.addEventListener("DOMContentLoaded", function() {
    // Función para actualizar el valor del color en el párrafo
    function updateColorValue(inputId, outputId) {
        var input = document.getElementById(inputId);
        var output = document.getElementById(outputId);
        input.addEventListener('input', function() {
            output.textContent = input.value;
            updateCssCode(); // Actualizar el código CSS cuando se cambia el valor
        });
    }

    // Aplicar la función a cada conjunto de input y párrafo
    updateColorValue('color-primary', 'color-primary-value');
    updateColorValue('color-secondary', 'color-secondary-value');
    updateColorValue('color-dark', 'color-dark-value');
    updateColorValue('color-light', 'color-light-value');

    // Función para actualizar los valores de color en el código CSS y variables CSS
    function updateCssCode() {
        const primaryColor = document.getElementById('color-primary').value;
        const secondaryColor = document.getElementById('color-secondary').value;
        const darkColor = document.getElementById('color-dark').value;
        const lightColor = document.getElementById('color-light').value;
        
        document.getElementById('css-code').textContent = 
            `background-color: ${darkColor}; //choose between light or dark color\n` +
            `color: ${lightColor}; //choose between light or dark color\n` +
            `/* color: ${primaryColor}; // Primary color */\n` +
            `/* color: ${secondaryColor}; // Secondary color */`;
        
        document.getElementById('css-variables-code').textContent = 
            `:root {\n` +
            `    --dark-color: ${darkColor};\n` +
            `    --light-color: ${lightColor};\n` +
            `    --primary-color: ${primaryColor};\n` +
            `    --secondary-color: ${secondaryColor};\n` +
            `}\n\n` +
            `/* Example */\n` +
            `.element {\n` +
            `   background-color: var(--dark-color);\n` +
            `   color: var(--light-color);\n` +
            `   border: 2px doted var(--primary-color);\n` +
            `   box-shadow: 2px doted var(--secondary-color);\n` +
            `}\n`;

        document.getElementById('sass-code').textContent = 
            `$dark-color: ${darkColor};\n` +
            `$light-color: ${lightColor};\n` +
            `$primary-color: ${primaryColor};\n` +
            `$secondary-color: ${secondaryColor};\n\n` +
            `/* Example */\n` +
            `.element {\n` +
            `   background-color: $dark-color;\n` +
            `   color: $light-color;\n` +
            `   border: 2px doted $primary-color;\n` +
            `   box-shadow: 2px doted $secondary-color;\n` +
            `}\n`;
    }

    // Función para copiar el contenido al portapapeles
    function copyToClipboard() {
        const cssCode = document.getElementById('css-code').textContent; // Asegúrate de usar textContent en lugar de innerText
        navigator.clipboard.writeText(cssCode)
            .then(() => alert('CSS code copied to clipboard!'))
            .catch(err => console.error('Failed to copy text: ', err));
    }
    // Función para copiar código CSS con variables
    function copyCssVariablesCode() {
        const cssVariablesCode = document.getElementById('css-variables-code').textContent;
        navigator.clipboard.writeText(cssVariablesCode)
            .then(() => alert('CSS Variables code copied to clipboard!'))
            .catch(err => console.error('Failed to copy text: ', err));
    }
    // Función para copiar código SASS
    function copySassCode() {
        const sassCode = document.getElementById('sass-code').textContent;
        navigator.clipboard.writeText(sassCode)
            .then(() => alert('SASS code copied to clipboard!'))
            .catch(err => console.error('Failed to copy text: ', err));
    }

    // Exponer copyToClipboard a nivel global
    window.copyToClipboard = copyToClipboard;
    window.copyCssVariablesCode = copyCssVariablesCode;
    window.copySassCode = copySassCode;

    // Llamar inicialmente para establecer valores por defecto
    updateCssCode();
});