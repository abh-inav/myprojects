    let obj={};
    function GetData(method,path) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET','/project_files/json/abhinav.json');
        xhr.responseType = 'json';
            xhr.onload = () =>{
            const data=xhr.response;
            console.log(data);
            obj=data;
        }
        xhr.send();
    