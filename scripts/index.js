            function handleActiveUser(user){
                var userComment = document.getElementById('user-comment');
                var yana = document.getElementById('yana');
                var nosiul = document.getElementById('nosiul');
                var nafisa = document.getElementById('nafisa');
            
                yana.classList.remove('user-button-active');
                nosiul.classList.remove('user-button-active');
                nafisa.classList.remove('user-button-active');
                // yana.className.replace("user-button-active","");
                // nosiul.className.replace("user-button-active","");
                // nafisa.className.replace("user-button-active","");
                if(user === 'nafisa'){
                    userComment.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
                    nafisa.className += " user-button-active";
                    
                }
                else if(user === 'nosiul'){
                    userComment.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nemo et voluptas vero eveniet officiis, unde saepe delectus amet tempora fugiat soluta. Eveniet nesciunt quos mollitia fuga accusantium adipisci aspernatur.";
                    nosiul.className +=  " user-button-active";
                }
                else if(user === 'yana'){
                    userComment.innerText= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat modi porro omnis ipsa officiis earum officia molestias voluptas, tenetur quibusdam cupiditate eveniet enim, architecto dignissimos reiciendis eligendi natus, aperiam quaerat.";
                    yana.className += " user-button-active";
                   
                }

            }
