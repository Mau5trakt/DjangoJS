function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie("csrftoken")


document.addEventListener("DOMContentLoaded", ()=>{
    const url = "/aumentar-like"


    let buttons = document.querySelectorAll("#likeBtn");

    buttons.forEach(button =>{
        button.addEventListener("click", ()=>{

            const padre = button.parentNode
            
            let idPublication = padre.querySelector("#idPublicacion").value
            let cantidadLikes = padre.querySelector("#likes")

            fetch(url, {
                method: "POST",
                credentials: "same-origin",
                headers:{
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify({publication: idPublication})
            })
            .then(response => response.json())
            .then(data =>{
            
                if (data.status){
                    cantidadLikes.innerText = `${data.likes} likes`

                }
            })

        })
    })

})