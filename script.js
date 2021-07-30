const avatarImg = document.querySelector(".avatar");
const fullnameText = document.querySelector(".fullname");
const emilText = document.querySelector(".email");

const url ="https://reqres.in/api/users/5";
axios
    .get(url)
    .then((res)=>{
        const user = res.data.data;
        avatarImg.src = user.avatar;
        fullnameText.innerHTML = user.fist_name + " " + user.last_name;
        emilText.innerHTML = user.email;

    })
    .catch((e) =>{
        console.log(`e`, e);
    });

const getUser = async () => {
    try{
        const reponse = await axios.get(url);
        const user = reponse.data.data;
        avatarImg.src = user.avatar;
        fullnameText.innerHTML = user.fist_name + " " + user.last_name;
        emilText.innerHTML = user.email;
    } catch (e){
      console.log(`e`, e);   
    }
};
getUser();