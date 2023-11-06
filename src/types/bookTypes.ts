export type AuthorType = {
  id: number;
  name: string;
};

type CommentType = {
  id: number;
  userName: string;
  createdAt: string;
  text: string;
};

export type GenreType = {
  id: number;
  genreName: string;
  slug: string;
};

export type BookType = {
  id: number;
  slug: string;
  title: string;
  annotation: string;
  paperbackQuantity: number;
  hardcoverQuantity: number;
  paperbackPrice: number;
  hardcoverPrice: number;
  coverImage: string;
  createdAt: string;
  rating: number;
  salesCount: 2;
  authors: AuthorType[];
  comments: CommentType[];
};
