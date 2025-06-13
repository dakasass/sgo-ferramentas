document.getElementById("ocorrencia").addEventListener("input", function () {
    const value = this.value;
    if (value.includes('.') || value.includes(',')) {
        this.value = value.replace(/[.,]/g, '');
    }
});

document.getElementById("canalManobra").addEventListener("input", function () {
    const value = this.value;
    if (value.includes('.') || value.includes(',')) {
        this.value = value.replace(/[.,]/g, '');
    }
});