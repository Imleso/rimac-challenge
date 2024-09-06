export interface Plans {
    list: List[]
}

export interface List {
    name:        string;
    price:       number;
    description: string[];
    age:         number;
}