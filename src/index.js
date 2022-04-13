// Date and Time formatting
const date = new Date()
const year = date.getFullYear()
const day = date.getDate()
const time = date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
console.log(time)
const monthIdx = date.getMonth()
const months = ['January',  'February',  'March',  'April',  'May',  'June',  'July',  'August',  'September',  'October',  'November','December']
const month = months[monthIdx]
const currentDate = `${month} ${day}, ${year}`



// Post Modal Features

// Toggle post modal
const postModal = document.querySelector('.content__post')
const openPostModal = document.querySelector('.footer__nav--post')
const postBtn = document.querySelector('#submitPostBtn')
const cancelPostBtn = document.querySelector('.cancel-post')

const toggleModal = () => {
  postModal.classList.toggle('hidden')
}
openPostModal.addEventListener('click', toggleModal)
postBtn.addEventListener('click', (e) => {
  postModal.classList.add('hidden')
  
})
// Cancel button inside post modal
cancelPostBtn.addEventListener('click', (e) => {
  postModal.classList.add('hidden')
  const mainContent = document.querySelector('.content')

  postText.value = ''
  str = ''
  postBtn.disabled = true
  cancelUpload.classList.add('hidden')
  
  uploadSuccessMsg.classList.add('hidden')
  cancelUpload.classList.add('hidden')
  mainContent.scrollTo(0, 0)
})






// Post input check: making sure input is filled before post sumbmission
postBtn.disabled = true
document.querySelector('#post-text').addEventListener('input', (e) => {
  if(e.target.value.length > 0 || uploadedImageInput.value !== '') {
    postBtn.disabled = false
  } else {
    postBtn.disabled = true
  }
})
document.querySelector('#post-form').addEventListener('change', (e) => {
  postBtn.disabled = false
})




// Image file upload
const uploadedImageInput = document.querySelector('#image-file')
const postForm = document.querySelector('#post-form')
const postText = document.querySelector('#post-text')
const previewContainer = document.querySelector('.preview-container')
const uploadSuccessMsg = document.querySelector('.upload-success')
const cancelUpload = document.querySelector('.upload-cancel')

uploadedImageInput.addEventListener('change', (e) => {
  // const file = e.target.files[0]
  
  uploadSuccessMsg.classList.remove('hidden')
  cancelUpload.classList.remove('hidden')
  if(!uploadedImageInput.value.length) {
    uploadSuccessMsg.classList.add('hidden')
    return
  }

  let reader = new FileReader()

  reader.onload = logFile

  reader.readAsDataURL(uploadedImageInput.files[0])
  
})
// Canceling upload and removing uploaded file
cancelUpload.addEventListener('click', (e) => {
  
  str = ''
  cancelUpload.classList.add('hidden')

  uploadedImageInput.value = ''
  if(uploadedImageInput.value === '' && postText.value === '') {
    postBtn.disabled = true
  }
  
  uploadSuccessMsg.classList.add('hidden')
  cancelUpload.classList.add('hidden')
})


let str
function logFile(event) {
  str = event.target.result
  return str
}



// Post Class
class Post {
  constructor(id = 1, user = 'emiljoseph', text = 'default text', imageFile = '', postDate = currentDate, postTime = time) {
    this.id = id,
    this.user = user,
    this.text = text,
    this.imageFile = imageFile,
    this.postDate = postDate,
    this.postTime = postTime
  }
}





// UI Class
class UI {
  static displayPosts() {
    const StoredPosts = [
      {
        id: 1,
        user: 'user1',
        text: 'The creation of something new is not accomplished by the intellect but by the play instinct acting from inner necessity. The creative mind plays with the objects it loves. - Carl Jung',
        imageFile: '',
        postDate: 'April 1, 2021',
        postTime: '12:30 PM'
      },
      {
        id: 2,
        user: 'user2',
        text: "It is not enough that we build products that function, that are understandable and usable, we also need to build products that bring joy and excitement, pleasure and fun, and, yes, beauty to people's lives. - Don Norman",
        imageFile: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        postDate: 'April 3, 2021',
        postTime: '9:45 AM'
      },
      {
        id: 3,
        user: 'user2',
        text: "",
        imageFile: 'https://images.unsplash.com/photo-1549147133-8450b6fe7ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        postDate: 'April 7, 2021',
        postTime: '11:15 PM'
      },
      {
        id: 4,
        user: 'emiljoseph',
        text: 'Almost done with the challenge!',
        imageFile:'',
        postDate: 'April 12, 2021',
        postTime: '5:25 PM'
      },
      {
        id: 4,
        user: 'emiljoseph',
        text: 'Challenge finished! Thank you Helcim for this amazing opportunity!',
        imageFile:'',
        postDate: 'April 13, 2021',
        postTime: '1:48 PM'
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
          <span class="post__date" >posted on ${post.postDate} at ${post.postTime}</span> 
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
    uploadSuccessMsg.classList.add('hidden')
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
  const post = new Post(id = 1, user = 'emiljoseph', text, imageFile=str, postDate = currentDate, postTime = time)



  // Add post to post list
  if(text.length === 0 && post.imageFile === '') {
    postBtn.disabled = true
  } else {
    UI.addPostToList(post)
    postInput.value = ''
    str = ''
    postBtn.disabled = true
    cancelUpload.classList.add('hidden')
    const mainContent = document.querySelector('.content')
    mainContent.scrollTo(0, 0)
  }
})











