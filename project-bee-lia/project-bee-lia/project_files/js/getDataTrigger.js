let obj={};
    function GetData() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET','project_files/json/trigger.json');
        xhr.responseType = 'json';
            xhr.onload = () =>{
            const data=xhr.response;
            console.log(data);
            obj=data;
        }
        xhr.send();
    }
