
class JogoDeBaralho{

    constructor(){
        this.baralho = [];
        this.configBaralho = [];
    }
    
    formarBaralho(){ // naipes paus: p, copas: c, espadilha: e, 
        for (let i=2; i<11; i++){
            this.configBaralho.push(new Carta(i, "p"));
            this.configBaralho.push(new Carta(i, "c"));
            this.configBaralho.push(new Carta(i, "e"));
            this.configBaralho.push(new Carta(i, "o"));
        }
        this.configBaralho.push(new Carta("rei", "p"));
        this.configBaralho.push(new Carta("rei", "c"));
        this.configBaralho.push(new Carta("rei", "e"));
        this.configBaralho.push(new Carta("rei", "o"));
        this.configBaralho.push(new Carta("valete", "p"));
        this.configBaralho.push(new Carta("valete", "c"));
        this.configBaralho.push(new Carta("valete", "e"));
        this.configBaralho.push(new Carta("valete", "o"));
        this.configBaralho.push(new Carta("dama", "p"));
        this.configBaralho.push(new Carta("dama", "c"));
        this.configBaralho.push(new Carta("dama", "e"));
        this.configBaralho.push(new Carta("dama", "o"));
        this.configBaralho.push(new Carta("as", "p"));
        this.configBaralho.push(new Carta("as", "c"));
        this.configBaralho.push(new Carta("as", "e"));
        this.configBaralho.push(new Carta("as", "o"));
        this.configBaralho.push("joker", "");
        this.configBaralho.push("joker", "");
    }

    tirarCarta(carta){
        for (let i=0; i<this.configBaralho.length; i++){
            if (this.configBaralho[i].numero == carta){
                this.configBaralho.pop(i);
            }
        }
    }

    restaurarBaralho(){
        this.baralho = this.configBaralho.copy();
    }

    cartaAleatoria(){
        return Math.floor(Math.random() * this.baralho.length - 1); 
    }

    distribuirCartas(qtsJogadores, qtsCartas){
        maos = [];
        for (let i=0; i<qtsJogadores; i++){
            let mao = [];
            for (let j=0; j<qtsCartas; j++){
                ctAleatoria = this.cartaAleatoria;
                mao.push(this.baralho[ctAleatoria]);
                this.baralho.pop(ctAleatoria);
            }
        }
    }
}
