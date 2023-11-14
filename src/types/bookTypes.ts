export type AuthorType = {
  id: number;
  name: string;
};

export type CommentType = {
  id: number;
  userName: string;
  userAvatar: string;
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
  title: string;
  slug: string;
  annotation: string;
  paperbackQuantity: number;
  hardcoverQuantity: number;
  paperbackPrice: number;
  hardcoverPrice: number;
  coverImage: string;
  createdAt: string;
  rating: number;
  salesCount: number;
  authors: AuthorType[];
  comments: CommentType[];
};

export type BookTypeLiked = {
  id: number;
  title: string;
  slug: string;
  paperbackPrice: number;
  hardcoverPrice: number;
  coverImage: string;
  authors: AuthorType[];
}

