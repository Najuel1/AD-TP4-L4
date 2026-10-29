
let miBlob;
    
function newBlob() {
    const contenido = ["Hola este es un contenido"];
    miBlob = new Blob(contenido, { type: "text/plain" });

    alert(`Blob creado exitosamente en memoria. \nTamaño: ${miBlob.size} bytes.`);
}

function downloadBlob() {
    if (blobCreado() === false) {
        return;
    }

    const url = URL.createObjectURL(miBlob);

    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "archivo.txt";
    
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    URL.revokeObjectURL(url);
}

function blobCreado(){
    if (!miBlob) {
        alert("No hay un Blob creado. Por favor, crea uno primero.");
        return false;
    }
    return true;
}

function sliceBlob() {
    if (blobCreado() === false) {
        return;
    }

    const slicedBlob = miBlob.slice(0, 35, 'text/plain');

    const url = URL.createObjectURL(slicedBlob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "archivo_slice.txt";

    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    URL.revokeObjectURL(url);

    alert(`Blob creado exitosamente en memoria. \nTamaño: ${slicedBlob.size} bytes.`);
}

function IniciarVariables() {
    const newBlobBtn = document.getElementById("newBlobBtn").addEventListener("click", newBlob);
    const downloadBlobBtn = document.getElementById("downloadBlobBtn").addEventListener("click", downloadBlob);
    const sliceBlobBtn = document.getElementById("sliceBlobBtn").addEventListener("click", sliceBlob);
}

document.addEventListener("DOMContentLoaded", IniciarVariables);