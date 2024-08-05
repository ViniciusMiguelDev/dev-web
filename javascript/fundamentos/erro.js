function tratarErroLancar(erro) {
    throw new Error('...');
}
function imprimirNomeGritado(obj) {
try{
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErroLancar(e);
    } finally {
        console.log('Sucesso!');
    }
}

const obj = {name: 'Vinicius'}
imprimirNomeGritado(obj);