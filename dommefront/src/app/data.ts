export interface User{
    first_name: String,
    last_name: String,
    last_login: Date,
    email: String 
}

export interface Forum{
    id: number;
    comments_count: number;
    author: User;
    title: String;
    description: String;
    created: Date;
    views: number;
    category: String;
    likes: Array<User>
    comments: Array<Comment>;
    saved_count: number;
    likes_count: number;
}

export interface Comment{
    id: number;
    comment: Text;
    created: Date;
    updated: Date;
    author: User;
    replyparent: Comment;
    likes: Array<User>;
    forumpost: number;
}