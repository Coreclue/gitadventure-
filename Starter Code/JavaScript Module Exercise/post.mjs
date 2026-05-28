//default export class. create instance of ttile and content. add static method. 
export default class Post {
    constructor(title, content, publish) {
        this.title = title;
        this.content = content;
    }

    publish() {
        console.log(`Title: ${this.title}`);
        console.log(`Content: ${this.content}`);
    }

}


