export type AuthorType = {
    firstName: string;
    lastName: string;
    biography: string;
  }
  
  export type BookType = {
    title: string;
    annotation: string;
    inStockQuantity: number;
    genre: string;
    price: number;
    coverImage: string;
    authors: AuthorType[];
  }
