export interface IPokemon {
  id: string;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type: {
    text: string;
    color: string;
  }[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
  };
  image: {
    image: string;
    sprit: string;
    thumbnail: string;
  };
}
