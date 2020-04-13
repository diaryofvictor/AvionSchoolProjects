// Author object that has a name, email (all these are string)
// Author can have many articles
// Article object has a title, body, footer (all these are string)
// Each article has a property likes (an integer)
// Each article can have many comments
// A Comment has a body and a from (a these are string)

// Given name, email
// Return author with empty list of articles
function createAuthor(name, email){
   let author = {
       name: name,
       email: email,
       articles: [],
   };
   return author;
}

// Given title, body, footer
// Return article with empty list of comments
function createArticle(title, body, footer){
    let article = {
        title: title,
        body: body,
        footer: footer,
        comments: [],
    };
    return article;
}

// Given body, from
// Return a comment
function createComment(body, from){
    let comments = {
        body: body,
        from: from,
    };
    return comments;
}

// Given article, add this to the author
// Return author
function addArticleToAuthor(author, article){
    author.article.push(article);
    return author;
}

// Given comment, add this to the article
// Return article
function addCommentToArticle(article, comment){
    article.comments.push(comment);
    return article;
}

// Given author,
// return the authors total likes in all his articles
// Hint: add a method in Author to return total likes called totalLikes
function likesOfAnAuthor(author){
    author.totalLikes = function() {
        let likesCount = 0;
        for (let i = 0; i < this.articles.length; i++) {
            likesCount += this.articles[i].likes;
        }
        return likesCount;
    }
    return author.totalLikes();
}

// Given author,
// return the number of total comments in all his articles
// Hint: add a method in Article to return number of comments called totalComments
function commentsOfAnAuthor(author){
    author.totalComments = function() {
        let commentsCount = 0;
        for (let i = 0; i < this.articles.length; i++) {
            commentsCount += this.articles[i].comments;
        }
        return commentsCount;
    }
    return author.totalComments();
}