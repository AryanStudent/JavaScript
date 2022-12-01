//call backs are important 
const posts = [
    {
        title: 'Post1', body: 'This is the body of post1'},
    {
        title: 'Post2', body: 'This is the body of post2'}
];

function getposts()
{
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post,callback)
{
    
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000);  //Here in this case as we can see while printing we cannot see post3 because it takes longer than get posts to execute
    //This is where we use callbacks
}

/*getposts();*/

createPost({title: 'Post3', body: 'This is the body of post three'}, getposts);