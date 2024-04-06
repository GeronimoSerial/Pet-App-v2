export interface PetsInterface{
    id: number,
    name: string,
    description: string,
    type: string,
    imageUrl: FormData,
    birthday: Date
    breed: string,
    userId: number
}


export interface AddPetInterface {
    name: string,
    description: string,
    type: string,
    birthday: Date,
    breed: string,
    image: string 
}