// Post Class
class Post {
  constructor(id, user, text, imageFile) {
    this.id = id,
    this.user = user,
    this.text = text,
    this.imageFile = imageFile
  }
}



// UI Class
class UI {
  static displayPosts() {
    const StoredPosts = [
      {
        id: 1,
        user: 'user1',
        text: 'Post One. Hello World.',
        imageFile: ''
      },
      {
        id: 2,
        user: 'user2',
        text: '',
        imageFile: 'https://images.unsplash.com/photo-1649700024661-d652b78f1bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: 3,
        user: 'user2',
        text: 'Coffee!!!!!',
        imageFile: 'https://images.unsplash.com/photo-1649716729285-689bee1d47de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
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
          <button>
            <i class="fa-solid fa-user"></i>
          </button>
          <span>${post.user} </span> posted on Date
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
        <button>
          <i class="fa-solid fa-heart"></i>
        </button>
        <button>
          <i class="fa-solid fa-comment-dots"></i>
        </button>
        <button>
          <i class="fa-solid fa-share-nodes"></i>
        </button>
      </div>
    `
    postList.appendChild(postItem)
  }
}




// EVENTS
// Display Posts
document.addEventListener('DOMContentLoaded', UI.displayPosts())












// Toggle post modal
const postModal = document.querySelector('.content__post')
const openPostModal = document.querySelector('.footer__nav--post')

const toggleModal = () => {
  postModal.classList.toggle('hidden')
}
openPostModal.addEventListener('click', toggleModal)

