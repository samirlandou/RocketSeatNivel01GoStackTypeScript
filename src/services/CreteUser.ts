/**
 * O service deve exportar só uma única funcionalidade.
 * 
 * Para criar: name, e-mail. senha, password
 * 
 * podemos definir uma string como ex: name='' ou como name: string
 */


//Forma clássica definir variáveis
/*export default function createUser(name= '', email: string, password: string){
    const user = {
        name,
        email,
        password
    }
    return user;
}*/




//Podemos desestruturar as variável dado dentro da função para identificá-lo mais fácil
//mas par isso é preciso declarar as variáveis conforme modelo abaixo.

/**
 * Típagem: string, number, boolean, object, Array, vector
 * Interfaces
 */

interface TechObject {
    title: string;
    experience: number;
}



interface CreateUserData{
    name?: String; //o ponto de interrogação "?" quer dizer que é opcional
    email: string;
    password: string;
    techs: Array<string | TechObject>; //ou techs: string[]; (caso for só string)

    //tem duas formas de definir um vector como: techs: Array<string | outro Interface>
    // ou string[] caso for só string.
}


export default function createUserDes({name, email, password}: CreateUserData){
    const user = {
        name,
        email,
        password
    }
    return user;
}