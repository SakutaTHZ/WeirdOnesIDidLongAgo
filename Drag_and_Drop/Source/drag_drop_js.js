var b = 0;
        b++;
        let first = "",second = "",dragging = "",imgpath = "",conpos = 0,result = "",resimgpath = "";

        function reloadpage(){
            location.reload();
        }

        function reward_pos_setter(){
            resultcheck();
            switch(conpos){
                case 0:
                    document.getElementById("place003").src = resimgpath;
                    document.getElementById("con1img").src = resimgpath;
                    document.getElementById("con1img").style.visibility = "initial";
                    compos++;
                break;
            }
        }

        function return_to_orig(){
            document.getElementById("fire").style.position = "initial";
        }

        function itemCheck(){

            if((first == "sand" && second == "fire") ||(first == "fire" && second == "sand")){
                alert("Congrats You have created a new element");
                result = "glass";
                setter();
            }
            else if((first == "wood" && second == "fire") ||(first == "fire" && second == "wood")){
                alert("Congrats You have created a new element");
                result = "coal";
                setter();
            }
            else if((first == "water" && second == "fire") ||(first == "fire" && second == "water")){
                alert("Congrats You have created a new element");
                result = "steam";
                setter();
            }
            else if((first == "water" && second == "sand") ||(first == "sand" && second == "water")){
                alert("Congrats You have created a new element");
                result = "mud";
                setter();
            }
            else if(second != ""){
                alert("No Element Found");
                location.reload();
            }
            else{
                result = "no";
            }
            //location.reload();
        }

        function setter(){
            reward_pos_setter();
                return_to_orig();
        }

        function dataSetter(){
            draggingcheck();
            if(first == null || first == ""){
                first = dragging;
                document.getElementById("place001").src = imgpath;
            }else if(second == null || second == ""){
                second = dragging;
                document.getElementById("place002").src = imgpath;
            }else{
                first = "";
                second = "";
            }
        }

        function draggingcheck(){
            switch (dragging){
                case "sand":
                    imgpath = "../img/sand.svg";
                break;
                case "fire":
                    imgpath = "../img/fire.svg";
                break;
                case "wood":
                    imgpath = "../img/wood.svg";
                break;
                case "water":
                    imgpath = "../img/water.svg";
                break;
            }
        }

        function resultcheck(){
            switch (result){
                case "glass":
                    resimgpath = "../img/glass.svg";
                break;
                case "mud":
                    resimgpath = "../img/mud.svg";
                break;
                case "coal":
                    resimgpath = "../img/coal.svg";
                break;
                case "steam":
                    resimgpath = "../img/steam.svg";
                break;
            }   
        }

        function drag(event) {
            event.dataTransfer.setData("choice001", event.target.id);
            dragging = "" + event.target.id;
        }

        function allowDrop(event) {
            event.preventDefault();
        }

        function dropcheck(event) {
            dataSetter();
            var data = event.dataTransfer.getData("choice001");
            event.target.appendChild(document.getElementById(data));
            score001.innerHTML = b++;
            itemCheck();
            //place001.innerHTML = "Jerusalem";
        }

        function drop(event) {
            event.preventDefault();
        }

        function submit001() {
        if (b > 5) {
        message001.innerHTML = "Congratulations.";
        }
        }