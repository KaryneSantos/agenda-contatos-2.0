const prompt = require('prompt-sync')({sigint:false});

class Contato{
    constructor(nome, telefone, email){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}
class Cliente extends Contato{
    constructor(nome, telefone, email, empresa){
        super(nome, telefone, email);
        this.empresa = empresa;
    }
    toString(){
        return(`Nome: ${this.nome}, Telefone: ${this.telefone}, Email: ${this.email}, Empresa: ${this.empresa}`);
    }
}

class Amigo extends Contato{
    constructor(nome, telefone, email, dataDeNascimento){
        super(nome, telefone, email);
        this.dataDeNascimento = dataDeNascimento;
    }
    toString(){
        return(`Nome: ${this.nome}, Telefone: ${this.telefone}, Email: ${this.email}, Data Nascimento: ${this.dataDeNascimento}`);
    }
}

class ColegaTrabalho extends Contato {
    constructor(nome, telefone, email, departamento){
        super(nome, telefone, email);
        this.departamento = departamento;
    }

    toString(){
        return(`Nome: ${this.nome}, Telefone: ${this.telefone}, Email: ${this.email}, Departamento: ${this.departamento}`);
    }
}

class Agenda{
    constructor(){
        this.contatos = [];
    }

    
    adicionarContato(){
        console.log(" *** Adicionando Contato *** ");
        console.log("");

        console.log("Escolha o tipo de contato:");
        console.log(" 1. Cliente ");
        console.log(" 2. Amigo ");
        console.log(" 3. Colega de Trabalho ");

        let tipo = Number(prompt(""));

        let novoContato;

        // Obtendo informações do usúarios
        let nome = prompt("Digite o nome do contato: ");
        let telefone = parseInt(prompt("Digite o número de telefone do contato: "));
        let email = prompt("Digite o e-mail do contato: ");

        switch(tipo){
            case 1:
                let empresa = prompt("Digite o nome do empresa do colega:");
                novoContato = new Cliente(nome, telefone, email, empresa);
                break;

            case 2 :
                 let dataDeNascimento = prompt("Digite sua Data De Nascimento:");
                 novoContato = new Amigo(nome, telefone, email, dataDeNascimento);
                 break;

            case 3:
                let departamento = prompt("Digite o nome do departamento do colega:");
                novoContato = new ColegaTrabalho(nome, telefone, email, departamento);
                break;

            default:
                    console.log("Essa opção não existe! Tente novamente");
        }
        
        this.contatos.push(novoContato);
        console.log("Contato salvo com sucesso.");
        console.log("");

    }

    listarContato(){
        console.log(" *** Lista de Contatos *** ");
        console.log("");

        // Intera com os contatos e exibi na lista
        for(let i = 0; i < this.contatos.length; i++){
            let contato = this.contatos[i].toString();
            console.log(contato);
        }
        console.log("");
    }

    editarContato(){
        console.log(" *** Editar Contatos *** ");
        console.log("");

        // Solicita o nome do contato que será editado
        let nome = prompt("Digite o nome do contato que deseja editar: ");

        // Busca o indice do contato a ser editado
        let editar = (contato) => contato.nome.toLowerCase() === nome.toLowerCase();
        let index = this.contatos.findIndex(editar);

        // Verifica se o contato foi encontrado
        if(index !== -1){
            // Solicita as informações que serão editadas
            let novoNome = prompt("Digite o novo nome (ou clique enter para continuar com o mesmo): ");
            let novoTelefone = parseInt(prompt("Digite o novo telefone (ou clique enter para continuar com o mesmo): "));
            let novoEmail = prompt("Digite o novo e-mail (ou clique enter para continuar com o mesmo): ");

            // Aplica as edições, se fornecidas
            if(novoNome){
                this.contatos[index].nome = novoNome;
            }
            if(!isNaN(novoTelefone)){
                this.contatos[index].telefone = novoTelefone;
            }
            if(novoEmail){
                this.contatos[index].email = novoEmail;
            }
            console.log(`Contato ${nome}, foi editado com sucesso.`);
        } else {
            console.log(`Contato ${nome}, não foi encontrado.`);
        }

    }

    excluirContato(){
        console.log(" *** Excluir Contatos *** ");
        console.log("");

        // Solicita o nome do contato que será excluido
        let nome = prompt("Digite o nome do contato que deseja excluir:  ");
        // Busca o indice do contato a ser excluido
        let excluir = (contato) => contato.nome.toLowerCase() === nome.toLowerCase();
        let index = this.contatos.findIndex(excluir);

        // Verifica se o contato foi encontrado
        if(index !== -1){
            // Remove o contato da lista
            this.contatos.splice(index,1);
            console.log(`Contato ${nome}, excluido com sucesso.`);
        } else {
            console.log(`Contato ${nome}, não foi encontrado.`);
        }

        console.log("");
    }

    pesquisarContato(){
        console.log(" *** Pesquisar Contato *** ");
        console.log("");

        // Solicita o nome do contato a ser pesquisado
        let nome = prompt("Digite o nome do contato que deseja pesquisar: ");
        // Realiza a pesquisa de contato por nome
        let index = this.contatos.filter(contato => contato.nome.toLowerCase() === nome.toLowerCase());

        // Verifica se a  pesquisa houve resultado
        if(index.length > 0){
            console.log("Contato encontrado: ");
            // Exibi o contato encontrado
            index.forEach(contato => {
                // console.log(`Nome: ${contato.nome}, Telefone ${contato.telefone}, E-mail: ${contato.email}`);
                for(var i = 0; i < this.contatos.length; i++){
                    let contato = this.contatos.toString();
                    console.log(contato);
                }
            })
        } else {
            console.log("Nenhum contato encontrado com esse nome.");
        }
    }
}

var agenda = new Agenda;
var parar = false;

while(!parar){
console.log(" *** Agenda de Contatos *** ");
console.log(" 1. Adicionar Contatos ");
console.log(" 2. Lista de Contatos ");
console.log(" 3. Editar Contato ");
console.log(" 4. Excluir Contato ");
console.log(" 5. Pesquisar por Contato ");
console.log(" 6. Sair da Agenda ");
console.log("-----------------------------------------------")

var opcao = Number(prompt("Escolha uma opção:"));   
console.log("");
    

switch(opcao){
case 1: 
    agenda.adicionarContato();
    break;
case 2:
    agenda.listarContato();
    break;
 case 3:
    agenda.editarContato();
    break;
case 4:
    agenda.excluirContato();
    break;
case 5:
    agenda.pesquisarContato();
    break;
case 6:
    parar = true;
    console.log("Sua sessão na agenda foi finalizada.");
    break;
default:
    console.log("Essa opção não existe! Tente novamente");
} 
}