var check = document.getElementsByClassName("fa fa-check-square");
var returnBook = document.getElementsByClassName("fa-home");
var trash = document.getElementsByClassName("fa-trash");

Array.from(check).forEach(function(element) {
      element.addEventListener('click', function(){
        const title = this.parentNode.parentNode.childNodes[1].innerText
        const author = this.parentNode.parentNode.childNodes[3].innerText
        fetch('check', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'title': title,
            'author': author
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(returnBook).forEach(function(element) {
      element.addEventListener('click', function(){
        const title = this.parentNode.parentNode.childNodes[1].innerText
        const author = this.parentNode.parentNode.childNodes[3].innerText
        fetch('returnBook', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'title': title,
            'author': author
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const title = this.parentNode.parentNode.childNodes[1].innerText
        const author = this.parentNode.parentNode.childNodes[3].innerText
        fetch('library', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'title': title,
            'author': author,
            'trash': 'trash'
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
