$scope.FormatSoloNumero = function (NID) {
    if (NID) {
        const input = document.getElementById('' + NID + '');
        var valor = input.value;
        valor = valor.replace(/\-/g, '');
        valor = valor.replace(/[a-zA-Z]/g, '');
        valor = valor.replace(/[^0-9]/g, '');
        valor = valor.replace(/\./g, '');
        input.value = valor;
    }
}

$scope.FormatPesoNumero = function (num) {
    if (num) {
        var regex2 = new RegExp("\\.");
        if (regex2.test(num)) {
            num = num.toString().replace('.', ',');
            num = num.split(',');
            num[0] = num[0].toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            num[0] = num[0].split('').reverse().join('').replace(/^[\.]/, '');
            if (num[1].length > 1 && num[1].length > 2) {
                num[1] = num[1].toString().substr(0, 2);
            }
            if (num[1].length == 1) {
                num[1] = num[1] + '0';
            }
            return num[0] + ',' + num[1];
        } else {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            num = num.split('').reverse().join('').replace(/^[\.]/, '');
            return num + ',00';
        }
    } else {
        return "0"
    }
}

$scope.FormatTextoObs = function (NID) {
    const input = document.getElementById('' + NID + '');
    var valor = input.value;
    valor = valor.replace(/[|!¡¿?°"#%{}*&''`´¨<>]/g, '');
    valor = valor.replace(/(\r\n|\n|\r)/g, ' ');
    input.value = valor;
}

$scope.FormatPesoID = function (NID) {
    const input = document.getElementById('' + NID + '');
    var valor = input.value;
    valor = valor.replace(/\-/g, '');
    valor = valor.replace(/[a-zA-Z]/g, '');
    valor = valor.replace(/[^0-9-,]/g, '');
    valor = valor.replace(/\./g, '');
    var array = null;
    var regex = new RegExp("\\,");
    
    if (!regex.test(valor)) {
        valor = valor.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        valor = valor.split('').reverse().join('').replace(/^[\.]/, '');
    } else {
        array = valor.toString().split(',');
        if (array.length > 2) {
            input.value = 0;
        } else {
            array[0] = array[0].toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            array[0] = array[0].split('').reverse().join('').replace(/^[\.]/, '');
            if (array[1].length > 2) {
                array[1] = array[1].substr(0, 2);
            }
        }
    }
    if (!regex.test(valor)) {
        input.value = valor;
    } else {
        if (valor == ',') {
            input.value = 0;
        } else {
            if (valor.substr(0, 1) == ',') {
                input.value = 0 + ',' + array[1];
            } else {
                input.value = array[0] + ',' + array[1];
            }
        }
    }
}