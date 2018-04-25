class Cronometro{
    constructor(elementoPai){
        this.segundos = 0;
        this.minutos = 0;

        setInterval(() => {
            this.avancarSegundo();
        }, 1000);

        this.elemento = document.createElement('div');

        this.atualizarTempo();

        elementoPai.appendChild(this.elemento);
    }

    avancarSegundo(){
        this.segundos++;

        if(this.segundos == 60){
            this.segundos = 0;
            this.minutos++;
        }

        this.atualizarTempo();
    }

    atualizarTempo(){
        let minutos = String(this.minutos);
        let segundos = String(this.segundos);

        if(minutos < 10){
            minutos = 0 + minutos;
        }

        if(segundos < 10){
            segundos = 0 + segundos;
        }

        this.elemento.innerHTML = `${minutos}:${segundos}`;
    }
}