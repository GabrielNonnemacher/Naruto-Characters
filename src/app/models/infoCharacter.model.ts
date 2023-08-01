export interface InfoCharacter {
    Afiliação?: string;
    Altura?: string;
    Aniversário?: string;
    Clã?: string;
    Estado?: string;
    Idade?: string;
    Kekkei_Genkai?: string;
    Patente_Ninja?: string;
    Peso?: string;
    Registro_Ninja?: string;
    Sexo?: string;
    Tipo_Sanguíneo?: string;
}

export class InfoCharacterDTO {
    static mapperDTO(infoCharacter: InfoCharacter): InfoCharacter {
        return {
            Afiliação: infoCharacter.Afiliação,
            Altura: infoCharacter.Altura,
            Aniversário: infoCharacter.Aniversário,
            Clã: infoCharacter.Clã,
            Estado: infoCharacter.Estado,
            Idade: infoCharacter.Idade,
            Kekkei_Genkai: infoCharacter.Kekkei_Genkai,
            Patente_Ninja: infoCharacter.Patente_Ninja,
            Peso: infoCharacter.Peso,
            Registro_Ninja: infoCharacter.Registro_Ninja,
            Sexo: infoCharacter.Sexo,
            Tipo_Sanguíneo: infoCharacter.Tipo_Sanguíneo
        };
    }
}
