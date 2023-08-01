import { InfoCharacter } from "./infoCharacter.model";

export interface Character {
    id: number;
    images: string[];
    info: InfoCharacter;
    name: string;
    page: string;
    about: string[]
}

export class CharacterDTO {
    static mapperDTO(character: Character): Character {
        return {
            id: character.id,
            images: character.images,
            info: character.info,
            name: character.name,
            page: character.page,
            about: character.about
        };
    }
}
