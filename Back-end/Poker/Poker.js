
class Poker extends JogoDeBaralho{
    constructor(){
        super();
        this.formarBaralho();
        this.tirarCarta("joker");
        this.tirarCarta(8);
        this.tirarCarta(9);
        this.tirarCarta(10);

        this.ordem = [4, 5, 6, 7, "dama", "valete", "rei", "as", 2, 3];
    }

    getOrdem(indice){
        for (let i=0; i<this.ordem.length; i++){
            if (this.ordem[i] == indice){
                return i;
            }
        }
    }

    quemGanha(cartasJogadas){
        
    }
    
}
