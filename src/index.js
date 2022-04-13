// Date formatting
const date = new Date()
const year = date.getFullYear()
const day = date.getDate()
const monthIdx = date.getMonth()
const months = ['January',  'February',  'March',  'April',  'May',  'June',  'July',  'August',  'September',  'October',  'November','December']
const month = months[monthIdx]
const currentDate = `${month} ${day}, ${year}`



// Post Modal Features
// Toggle post modal
const postModal = document.querySelector('.content__post')
const openPostModal = document.querySelector('.footer__nav--post')
const postBtn = document.querySelector('#submitPostBtn')


const toggleModal = () => {
  postModal.classList.toggle('hidden')
}
openPostModal.addEventListener('click', toggleModal)
postBtn.addEventListener('click', (e) => {
  postModal.classList.add('hidden')
  
})

// Post input check: making sure input is filled before post sumbmission
postBtn.disabled = true
document.querySelector('#post-text').addEventListener('keypress', (e) => {
  postBtn.disabled = false
})




// File upload
// const imageForm = document.querySelector('#image-upload')
// const uploadedImage = document.querySelector('#image-file')

// const handleImageSubmit = (e) => {
//   e.preventDefault()
//   console.log(uploadedImage.value)
//   if(!uploadedImage.value) {
//     return
//   }
// }
// imageForm.addEventListener('submit', handleImageSubmit)



// Post Class
class Post {
  constructor(id = 1, user = 'emiljoseph', text = 'default text', imageFile = '', postDate = currentDate) {
    this.id = id,
    this.user = user,
    this.text = text,
    this.imageFile = imageFile,
    this.postDate = postDate
  }
}





// UI Class
class UI {
  static displayPosts() {
    const StoredPosts = [
      {
        id: 1,
        user: 'user1',
        text: 'Post One. Hello World. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        imageFile: '',
        postDate: 'April 1, 2021'
      },
      {
        id: 2,
        user: 'user2',
        text: '',
        imageFile: 'https://images.unsplash.com/photo-1649700024661-d652b78f1bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        postDate: 'April 3, 2021'
      },
      {
        id: 3,
        user: 'user2',
        text: 'Holy shit!!!!!',
        imageFile: 'https://images.unsplash.com/photo-1649716729285-689bee1d47de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
        postDate: 'April 7, 2021'
      },
      {
        id: 4,
        user: 'emiljoseph',
        text: 'Almost done with the challenge!',
        imageFile:'',
        postDate: 'April 7, 2021'
      },
    ]

    const posts = StoredPosts

    posts.forEach((post) => UI.addPostToList(post))
  }



  static addPostToList(post) {
    const postList = document.querySelector('.content__post--list')

    const postItem = document.createElement('article')
    postItem.innerHTML = `
      <div class="postHeader">
        <div class="postHeader__details">
          <div class="postHeader__details--user">
            <button>
              <i class="fa-solid fa-user"></i>
            </button>
            <span> <p class="post__username">${post.user}</p> </span> 
          </div>
          <span class="post__date" >posted on ${post.postDate}</span>
        </div>
        <button class="postEdit">
          <i class="fa-solid fa-ellipsis"></i>
        </button>
      </div>
      <div class="postContent"> 
        <p>${post.text}</p>
        ${post.imageFile && `<img src=${post.imageFile} >`}
      </div>
      <div class="postFooter">
        <button class="post__like">
          <i class="fa-solid fa-heart"></i>
        </button>
        <button class="post__comment">
          <i class="fa-solid fa-comment-dots"></i>
        </button>
        <button  class="post__share">
          <i class="fa-solid fa-share-nodes"></i>
        </button>
      </div>
    `
    postList.prepend(postItem)
  }
}




// EVENTS
// Display Posts
document.addEventListener('DOMContentLoaded', UI.displayPosts())


// Add a post
document.querySelector('#post-form').addEventListener('submit', (e) => {
  e.preventDefault()

  // get form values
  const text = document.querySelector('#post-text').value
  const postInput = document.querySelector('#post-text')


  // New post object
  const post = new Post(id = 1, user = 'emiljoseph', text, imageFile='', postDate = currentDate)



  // Add post to post list
  // if(text.length === 0 && post.imageFile === '') {
    // alert('Please make a post')
  // } else {
    UI.addPostToList(post)
    postInput.value = ''
    postBtn.disabled = true
  // }
})











