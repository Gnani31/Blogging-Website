const main = document.querySelector("main");

let posts = JSON.parse(localStorage.getItem("posts"));

if(posts != null) {
    document.getElementById("posts_overlay").style.visibility = "hidden";
    document.getElementById("posts_overlay").style.display = "none";

    for(let i = 0;i < posts.length;i++) {
        let blog = document.createElement("div");
        let blog_title = document.createElement("h1");
        let blog_para = document.createElement("p");
        let button_container = document.createElement("div");
        let blog_edit = document.createElement("button");
        let blog_delete = document.createElement("button");

        blog.id = `${i}`;
        blog.className = "blog";
        blog_edit.className = "edit";
        blog_delete.className = "delete";
        blog_title.innerHTML = posts[i].title;
        blog_para.innerHTML = posts[i].para;
        blog_edit.innerHTML = "Edit";
        blog_delete.innerHTML = "Delete";

        button_container.appendChild(blog_edit);
        button_container.appendChild(blog_delete);
        blog.appendChild(blog_title);
        blog.appendChild(blog_para);
        blog.appendChild(button_container);

        main.appendChild(blog);
    }
}

const delete_buttons = Array.from(document.getElementsByClassName("delete"));
main.addEventListener("click",(event) => {

    if(event.target.className == "delete") {
        const ind = event.target.parentElement.parentElement.id;
        posts.splice(ind,1);
        localStorage.setItem("posts",JSON.stringify(posts));
        window.location.reload();
    }
    if(event.target.className == "edit") {
        const ind = event.target.parentElement.parentElement.id;
        const edit_title = posts[ind].title;
        const edit_para = posts[ind].para;
        posts.splice(ind,1);
        localStorage.setItem("posts",JSON.stringify(posts));
        localStorage.setItem("edit_title",edit_title);
        localStorage.setItem("edit_para",edit_para);
        window.location.href = './write.html';
    }
})
if(posts.length == 0) {
    document.getElementById("posts_overlay").style.visibility = "visible";
    document.getElementById("posts_overlay").style.display = "flex";
}


document.getElementById('nav_close').addEventListener('click',() => {
    document.getElementById('side_nav').style.visibility = 'hidden';
});
document.getElementById('nav_button').addEventListener('click',() => {
    document.getElementById('side_nav').style.visibility = 'visible';
    document.getElementById('side_nav').style.display = 'flex';
});
