let comparaComThis = function (param) {
    console.log(this === param);
};

comparaComThis(global);

const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisARROW = param => console.log(this === param);
comparaComThisARROW(global);
comparaComThisARROW(module.exports);

comparaComThisARROW = comparaComThisARROW.bind(obj);
comparaComThisARROW(obj);
comparaComThisARROW(module.exports);