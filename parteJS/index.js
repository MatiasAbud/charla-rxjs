console.log('mi charla de RxJS')

function imprimir(valor) {
    console.log(valor);
}

function llamadaConCallback(parametro, mi_callback) {
    let miLLamada = parametro
    mi_callback(miLLamada)
    
    setTimeout(()=> { 
        miLLamada = 'Respuesta'
        mi_callback(miLLamada)
    }, 1000)
}

function onCallbackButtonClick(info) {
    llamadaConCallback(info, imprimir)
}

// ------------------------------

const miPromesa = new Promise((resolve, reject) => {

    resolve('Dispara Resolve')
    
    reject('Dispara Reject')
})

function onPromiseButtonClick() {  
    miPromesa
        .then(resp => imprimir(resp))
        .catch(resp => imprimir(resp))
        .finally(()=> imprimir('finally()'))
}

function onFetchButtonClick() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((body)=> {
            body.json()
                .then(imprimir)
        })
        .finally(() => imprimir('finally Fetch'))
}

// -----------------------------

//const Http = new XMLHttpRequest();
//const url='https://jsonplaceholder.typicode.com/posts';
//Http.open("GET", url);
//Http.send();

//Http.onreadystatechange = (e) => {
//  console.log(Http.responseText)
//}

// -----------------------------
// Patron observer minima expresion
// -----------------------------

let subscriptos = []

function atar(inputId) {
    // verifico que no este repetido antes de hacer push
    if (subscriptos.some((subscipto)=> subscipto === inputId)) return

    subscriptos.push(inputId) 
}

function desatar(inputId) {
    // verifico que exista el elemnto en el array para que no borre otro
    const index = subscriptos.indexOf(inputId)
    if (index == -1) return
    
    subscriptos.splice(index, 1)
}

function notificar() {
    const miDatoParaEmitir = document.getElementById('miObservable').value
    
    // notify llama al update de cada elemento 
    
    //update() de cada elemento
    for (let i = 0; i < subscriptos.length; i++) {
      document.getElementById(subscriptos[i]).value = miDatoParaEmitir
    }
}