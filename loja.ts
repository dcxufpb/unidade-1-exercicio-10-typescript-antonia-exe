function isEmpty(str: string): boolean {
    let spaceCount = str.length - str.replace(" ", "").length;
    return str == null || spaceCount == str.length;
  }

export class Loja {

    constructor(public nome_loja: string, public logradouro: string, public numero: number, public complemento: string,
        public bairro: string, public municipio: string, public estado: string, public cep: string,
        public telefone: string, public observacao: string, public cnpj: string, public inscricao_estadual: string) { }

    public dados_loja(): string {
        if (isEmpty(this.nome_loja)) {
            throw new Error(`O campo nome da loja é obrigatório`);
          } 
        if (isEmpty(this.logradouro)) {
            throw new Error(`O campo logradouro do endereço é obrigatório`);
        }

        if (isEmpty(this.municipio)) {
            throw new Error(`O campo município do endereço é obrigatório`);
        }

        if (isEmpty(this.estado)) {
            throw new Error(`O campo estado do endereço é obrigatório`);
        }

        if (isEmpty(this.cnpj)) {
            throw new Error(`O campo CNPJ da loja é obrigatório`);
        }

        if (isEmpty(this.inscricao_estadual)) {
            throw new Error(`O campo inscrição estadual da loja é obrigatório`);
        }

        var numero1 : string = this.numero + "";
        if(this.numero == 0){
            numero1 = "s/n";
        }

        var linha2 = `${this.logradouro}, ${numero1}`;
        if (! isEmpty(this.complemento)){
            linha2 += ` ${this.complemento}`;
        }
  
        var linha3 = "";
        if (! isEmpty(this.bairro)){
            linha3 += `${this.bairro} - `;
        }
        linha3 += `${this.municipio} - ${this.estado}`;

        var linha4 = "";
        if (! isEmpty(this.cep)){
            linha4 = `CEP:${this.cep}`;
        }
        if (! isEmpty(this.telefone)){
            if (! isEmpty(linha4)){
                linha4 += ` `;
            }
        linha4 += `Tel ${this.telefone}`;
        }
        if (! isEmpty(linha4)){
            linha4 += `\n`;
        }

        var linha5 = "";
        if (! isEmpty(this.observacao)){
            linha5 += `${this.observacao}`;
        }

        let output = `${this.nome_loja}\n`
        output += `${linha2}\n`
        output += `${linha3}\n`
        output += `${linha4}`
        output += `${linha5}\n`
        output += `CNPJ: ${this.cnpj}\n`
        output += `IE: ${this.inscricao_estadual}\n`

        return output;
    }
}