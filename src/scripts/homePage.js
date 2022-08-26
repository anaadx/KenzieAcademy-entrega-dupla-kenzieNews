import { ApiRequests } from "./requests.js";
import { RenderDesktop, RenderMobile} from "./render.js"

class homePage{

    static renderHomeMobile (posts) {
        const token = localStorage.getItem("S5-10: token")
        const postsList = document.querySelector(".container__posts1")

        postsList.innerHTML = ''

        if(!token) {
            window.location.assign("../../index.html")
        }

        RenderMobile.renderPostsListMobile(posts)
    }

    static renderHomeDesktop (posts) {
        const token = localStorage.getItem("S5-10: token")
        const postsList = document.querySelector(".container__posts2")

        postsList.innerHTML = ''

        if(!token) {
            window.location.assign("../../index.html")
        }

        RenderDesktop.renderPostsListDesktop(posts)
    }

    static logout (){
        const btnLogout = document.getElementById("btnLogout")
        btnLogout.addEventListener("click", (event) =>{
            event.preventDefault()
            localStorage.clear()
            window.location.assign("../../index.html")
        })
    }

    static async userInfo (){
        const userImg = document.getElementById("userImg")
        const userName = document.getElementById("userName")
        const user = await ApiRequests.getUser()

        userImg.src = user.avatarUrl
        userName.innerText = user.username
    }
}

const posts = await ApiRequests.getPosts()

homePage.renderHomeDesktop(posts.data)
homePage.renderHomeMobile(posts.data)

 


homePage.userInfo()
homePage.logout()
