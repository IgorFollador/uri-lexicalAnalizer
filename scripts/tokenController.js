class TokenController{
    
    constructor(){};

    init(){
        document.addEventListener('DOMContentLoaded', () => {
            let elems = document.querySelectorAll('.chips');
            let options = {
                placeholder: 'Write and enter',
                secondaryPlaceholder: 'Write more...'
            }

            M.Chips.init(elems, options);
        });
    }

    clear() {
        const tokens = document.querySelectorAll('.chips');
        const instance = tokens[0].M_Chips;

        let tokensLenght =  instance.chipsData.length;

        for(let index = 0; index <= tokensLenght; index++){
            instance.deleteChip(0);
        }
    }

    getElementChipByTag(tagName){
        var indexTag = undefined;

        for(let i = 0; i < this.tokens.length; i++){
            let name = this.tokens[i].tag;
            
            console.log(tagName, '=', name);
            console.log(tagName == name);
            if(tagName == name){
                console.log(this.tokens[i].tag);
                indexTag = i;
            }
        }
        console.log(indexTag);
        console.log(this.instance.$tokens);

        return this.instance.$tokens[indexTag];
    }

    get instance(){
        const tokens = document.querySelectorAll('#chips');
        let instance = tokens[0].M_Chips;

        return instance;
    }

    get tokens(){
        let tokens = this.instance.chipsData;
        return tokens;
    }
}