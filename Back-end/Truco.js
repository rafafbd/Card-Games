
class Truco extends JogoDeBaralho{
    constructor(){
        super();
        this.formarBaralho();
        this.tirarCarta("joker");
        this.tirarCarta(8);
        this.tirarCarta(9);
        this.tirarCarta(10);

        this.ordem = [4, 5, 6, 7, "dama", "valete", "rei", "as", 2, 3];
        this.naipes = ["o", "e", "c", "p"];

        this.manilha;
    }

    getOrdem(indice){
        for (let i=0; i<this.ordem.length; i++){
            if (this.ordem[i] == indice){
                return i;
            }
        }
    }

    getOrdemNaipe(){
        for (let i=0; i<this.naipes.length; i++){
            if (this.naipes[i] == indice){
                return i;
            }
        }
    }

    niapeMelhor(naipe1, naipe2){
        if (this.getOrdem(naipe1) > this.getOrdemNaipe(naipe2)){
            return naipe1;
        }
        return naipe2;
    }

    manilha(vira){
        ind = this.getOrdem(vira);
        if (ind == 9){
            return 4;
        }
        this.manilha = this.ordem[ind+1];
    }

    quemGanha(cartasJogadas){
        
    }
    
}
