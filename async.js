//call backs are important 
//calling one function in other is called Callbacks
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
    return promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error)
            {
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }
        })
    },2000)
    //Here in this case as we can see while printing we cannot see post3 because it takes longer than get posts to execute
    //This is where we use callbacks
}

/*getposts();*/

createPost({title: 'Post3', body: 'This is the body of post three'},)
    .then(getposts);
    try {
        
    } catch (error) {
        
    }(err => console.log(err));
