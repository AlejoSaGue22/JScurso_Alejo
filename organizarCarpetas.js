const fs = require('fs');
const path = require('path');

const directoryPath = 'C:/xampp/htdocs/Genesis/php/financiera/dompdf/php/pdf/01_cmov'; // Cambia esta ruta a la ruta de tu carpeta

function extractPattern(fileName) {
    const parts = fileName.split('_');

        return `${parts[1]}`;
}

function getDirectorySize(dirPath) {
    let totalSize = 0;
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isFile()) {
            totalSize += stats.size;
        } else if (stats.isDirectory()) {
            totalSize += getDirectorySize(filePath); // Recursivamente sumar tamaños de subdirectorios
        }
    });
    return totalSize;
}

function createDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
}

function moveFile(filePath, destDir) {
    const destPath = path.join(destDir, path.basename(filePath));
        fs.copyFile(filePath, destPath, function (err) {
            if (err) throw err
            // console.log('Exitoso el archivo fue movido')
            });
    }

 // Leer la carpeta
 let iterador = 0;
 fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('No se puede escanear el directorio: ' + err);
    }

    const pdfFiles = files.filter(file => path.extname(file).toLowerCase() === '.pdf');
    // iterador = iterador + 1;
    // let ruta =`C:/Users/SVEPSLOCAL/Pictures/pruebaArchivos/Cargue_CAC_${iterador}`
    // createDirectory(ruta);

    pdfFiles.forEach((file, index) => {
        let pattern =  extractPattern(file);
        // const sizeBytes = getDirectorySize(ruta);
        // let final = (sizeBytes / (1024 * 1024));
        iterador++;
        if (iterador >= 704) {
            // if (Math.floor(final) >= 400) {
                console.log("file: "+ file, ", index: "+ index+ ", pattern: "+ pattern, "Conteo: ", iterador);
            //     iterador = iterador + 1;
            //     ruta =`C:/Users/SVEPSLOCAL/Pictures/pruebaArchivos/Cargue_CAC_${iterador}`;
            //     createDirectory(ruta);
            // }
            // const sourcePath = path.join(directoryPath, file);
            // const destDir = path.join(ruta, pattern);
            // createDirectory(destDir);
            // moveFile(sourcePath, destDir);
        }

        if (pdfFiles.length -1 == index) {
            console.log("FINALIZADO LA DEPURACION DE ARCHIVOS");
        }
    });
});
