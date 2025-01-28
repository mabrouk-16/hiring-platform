export interface UserProfile {
  userId?: string;
  email?: string;
  emailVerified?: boolean;
  userName?: string;
  picture?: string | null;
  cover?: string | null;
  bio?: string | null;
  title?: string | null;
  posts?: Post[];
  birthDate?: string | null;
  phone?: string | null;
  address?: string | null;
  links?: string[];
}
export interface Post {
  postId?: string;
  body?: string;
  thumbUrl?: string;
  timeStamp?: Date | string;
  likes?: number;
  comments?: [];
  author?: {
    userId?: string;
    userName?: string;
    picture?: string | null;
    title?: string | null;
  };
}
