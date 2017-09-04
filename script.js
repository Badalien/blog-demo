    window.onload = function(){
        
        document.getElementById('add-button').onclick = startKomm;
    }

       function startKomm(){
        
        var text = document.getElementById('text').value;
        var komm = document.createElement('p');
        var newText = document.createTextNode(text);
        
        komm.appendChild(newText);
        
        document.getElementById('read-comments').appendChild(komm);
        return true;
       }