
export class RenderMobile {
    static renderPostsListMobile(array)  {
        const section = document.querySelector(".posts")
        const ul = document.querySelector(".container__posts1")
        section.append(ul)

        array.forEach((post) => {
            const card = RenderMobile.renderCardMobile(post)
            
            ul.appendChild(card)
          })
    }

    static renderCardMobile (post) {

        const li = document.createElement("li")

        const figure = document.createElement("figure")
        const img = document.createElement("img")

        const autor = document.createElement("h2")
        const postText = document.createElement("p")
        const postData = document.createElement("p")

        const divBtn = document.createElement("div")
        divBtn.classList.add("botoesPost")

        const btnEdit = document.createElement("button")
        const imgEdit =document.createElement("img")

        const btnDelete = document.createElement("button")
        const imgDelete =document.createElement("img")

        const user = localStorage.getItem("S5-10: userId")
        

        li.key = post.user.id
        li.id = post.user.id

        img.src = post.user.avatarUrl
        img.alt = "Foto de  Perfil do dono do post"

        autor.innerText = post.user.username

        postText.innerText = post.content

        let data = post.createdAt.slice(0, 10)
        postData.innerText = data

        imgEdit.src = "../assets/lapis.jpg"
        imgEdit.alt = "Lapis"

        imgDelete.src = "../assets/lixeira.jpg"
        imgDelete.alt = "Lixo"

        btnEdit.appendChild(imgEdit)
        btnDelete.appendChild(imgDelete)

        divBtn.append(btnEdit, btnDelete)

        figure.appendChild(img)

        li.append(figure, autor, postText, postData )

        if (post.user.id == user){
            li.appendChild(divBtn)
        }
        return li
    }
    
}


export class RenderDesktop {
    static renderPostsListDesktop(array)  {

        const section = document.querySelector(".posts")
        const ul = document.querySelector(".container__posts2")
        section.appendChild(ul)
        
        
        array.forEach((post) => {
            const card = RenderDesktop.renderCardDesktop(post)
            
            ul.appendChild(card)
          })
    }

    static renderCardDesktop (post) {

        const li = document.createElement("li")

        const div = document.createElement("div")
        div.classList.add ("container__posts2__imagemEBotoes")

        const figure = document.createElement("figure")
        const img = document.createElement("img")

        const divBtn = document.createElement("div")
        divBtn.classList.add("botoesPost") 

        const btnEdit = document.createElement("button")
        const imgEdit =document.createElement("img")

        const btnDelete = document.createElement("button")
        const imgDelete =document.createElement("img")
        
        const divText = document.createElement("div")
        divText.classList.add("container__posts2__parteEscrita")

        const autor = document.createElement("h2")
        const postText = document.createElement("p")
        const postData = document.createElement("p")
        
        const user = localStorage.getItem("S5-10: userId")

        li.key = post.user.id
        li.id = post.user.id

        img.src = post.user.avatarUrl
        img.alt = "Foto de  Perfil do dono do post"

        autor.innerText = post.user.username

        postText.innerText = post.content

        let data = post.createdAt.slice(0, 10)
        postData.innerText = data
        
        imgEdit.src = "../assets/lapis.jpg"
        imgEdit.alt = "Lapis"

        imgDelete.src = "../assets/lixeira.jpg"
        imgDelete.alt = "Lixo"

        btnEdit.appendChild(imgEdit)
        btnDelete.appendChild(imgDelete)

        divBtn.append(btnEdit, btnDelete)

        figure.appendChild(img)

        div.appendChild(figure)

        if (post.user.id == user){
            div.appendChild(divBtn)
        }

        divText.append(autor, postText, postData)

        li.append(div, divText)

        return li
    }
}
