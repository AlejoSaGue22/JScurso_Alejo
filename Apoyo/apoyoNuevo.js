function setProgressBarWidth(percentage) {
    const progressBar = document.getElementById('progressBar');
    if (percentage >= 0 && percentage <= 100) {
        progressBar.style.width = percentage + '%';
    } else {
        console.error('Percentage must be between 0 and 100');
    }
}

// Example usage:
// Set progress bar to 50%
setProgressBarWidth(50);

// Set progress bar to 75% after 2 seconds
setTimeout(() => {
    setProgressBarWidth(75);
}, 2000);



// NODE JS....   SE INSTALA LAS DEPENDENCIAS (ESTE ES PARA LEER NOMBRES DE PDF Y SEPARARLOS)
//  npm init -y
//  npm install fs path
const fs = require('fs');
const path = require('path');
const { duplexPair } = require('stream');

const directoryPath = './pdfs'; // Cambia esta ruta a la ruta de tu carpeta con PDFs

// Función para extraer el patrón de los nombres
function extractPattern(fileName) {
    const parts = fileName.split('_');
    if (parts.length > 2) {
        return `${parts[0]}_${parts[1]}`;
    }
    return null;
}

// Crear directorio si no existe
function createDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
}

// Mover archivo a su nueva carpeta
function moveFile(filePath, destDir) {
    const destPath = path.join(destDir, path.basename(filePath));
    fs.rename(filePath, destPath, err => {
        if (err) {
            console.log('Error moving file:', err);
        } else { 
            console.log(`Moved file ${filePath} to ${destDir}`);
        }
    });
}

// Leer la carpeta
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    const pdfFiles = files.filter(file => path.extname(file) === '.pdf');
    
    // Agrupar archivos por patrón
    pdfFiles.forEach(file => {
        const pattern = extractPattern(file);
        if (pattern) {
            const sourcePath = path.join(directoryPath, file);
            const destDir = path.join(directoryPath, pattern);
            createDirectory(destDir);
            moveFile(sourcePath, destDir);
        }
    });
});

