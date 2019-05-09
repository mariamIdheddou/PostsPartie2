export class Post {
  loveIts: number;
  createdAt: number;
  id: number;
  constructor(public titre: string , public contents: string ) {
    this.loveIts = 0;
    this.createdAt = new Date().getTime();

  }
}
