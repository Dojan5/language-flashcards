export interface ICharacter {
    character: string;
    romanisation: string;
    svg: string;
}

export interface IJapaneseData {
    vowels: ICharacter[],
    syllables: ICharacter[]
}

export interface IKoreanData {
    vowels: ICharacter[],
    doubles: ICharacter[]
}