let nueva = []
exports.leerTareas = function () {
    for (let i=0;i< nueva.lenght; i++){
        let nuev= nueva.push(nueva[i]);
    }
    return nueva
}
exports.agregarTarea = function (tarea) {
    
    let count = nueva.push(tarea);
    return nueva
}
exports.filtrarTareasPorEstado = function (estado) {
    let filtro= nueva.filter(function(el){
        return el.status == estado;
    })
    return filtro
}
