class Contador{
    constructor(elementoPai){
        this.valor = 0;
        this.elemento = document.createElement('div');
        this.elemento.classList.add('contador');
        this.elemento.innerHTML = this.valor;

        this.elemento.onclick = () => {
            this.valor++;
            this.elemento.innerHTML = this.valor;
        }

        elementoPai.appendChild(this.elemento);
    }

    zerar(){
        this.valor = 0;
        this.elemento.innerHTML = this.valor;
    }
}