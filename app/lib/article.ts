import User from "./user";

export default class Article {
    constructor(public title: string, public description: string, public category: string, public illustration: string, public publishedAt: Date, public author: User) { }
}