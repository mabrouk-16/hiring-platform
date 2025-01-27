export interface UserProfile {
  userId?: string;
  email?: string;
  emailVerified?: boolean;
  userName?: string;
  picture?: string;
  cover?: string;
  bio?: string;
  title?: string;
  posts?: Post[];
  birthDate?: string;
  phone?: string;
  address?: string;
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
    picture?: string;
    title?: string;
  };
}
