            function handleActiveUser(user){
                var userComment = document.getElementById('user-comment');
                var userHeading = document.getElementById('user-heading');
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
                    userHeading.innerText="Saves so much time!";
                    userComment.innerText="Chatout is a life saver! It used to take me hours every night typing order details from chat to spreadsheet and then to my delivery company’s website. Now with Chatout, placing orders for delivery literally takes seconds! It’s insane.";
                    nafisa.className += " user-button-active";
                    
                }
                else if(user === 'nosiul'){
                    userHeading.innerText="Helps me stay organized!";
                    userComment.innerText = "I loved chatting with my customers but as the business got bigger, it got harder to organize everything. I tried webshops, but missed interacting with my customers. Then Chatout happened - now it helps me focus on my customers while automating the boring work!";
                    nosiul.className +=  " user-button-active";
                }
                else if(user === 'yana'){
                    userHeading.innerText="Amazing customer support!";
                    userComment.innerText= "We’ve become so dependant on Chatout’s efficiency, I don’t think we can function without it anymore! Also, we can’t appreciate more of that “always on” customer support. Kudos to the team!";
                    yana.className += " user-button-active";
                   
                }

            }
