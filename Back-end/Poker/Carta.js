
class Carta{
    constructor(denom, naipe){
        this.num = denom;
        this.naipe = naipe;
    }

    val(){
        return this.num + this.naipe;
    }

    toString(){
        nomeNaipe = "copas";
        switch(this.naipe){
            case "o": nomeNaipe = "ouros"; break;
            case "p": nomeNaipe = "paus"; break;
            case "e": nomeNaipe = "espadas"; break;
        }
        return this.num + " de " + nomeNaipe;
    }
}