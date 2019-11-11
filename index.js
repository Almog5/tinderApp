
const UsersAr = [
    {
        id: 0,
        name: "Almog Levi",
        gender: "male",
        age: 26,
        height: 172,
        location: "ISRAEL",
        image: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/10407082_992483000764366_6123077456618366708_n.jpg?_nc_cat=110&_nc_oc=AQn__KeGMBjncW3CqduBl4wSrSmdnef539S_EGgdo4BIQvTiJXjKIrDHnGqP4-gAo50&_nc_ht=scontent.fsdv3-1.fna&oh=d1a32a8c6d59662f0d935be6fb7fe0a5&oe=5E6534C2",
        hobbies: ["SPORT", "study"],
        premium: true,        
    },
    {
        id: 1,
        name: "Hadar Shiftan",
        gender: "male",
        age: 27,
        height: 173,
        location: "Israel",
        image: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/67640111_10211047514862773_1478559740236660736_n.jpg?_nc_cat=102&_nc_oc=AQlxkHiv2_fST-jCKCNhOTJQsE-dkd_ae0kFoZ8hLOuLbcfm9tbFIObjuTj7SS27c1U&_nc_ht=scontent.fsdv3-1.fna&oh=3b3eb166bb621d197b0e9b813b512560&oe=5E55B307",
        hobbies: ["Sleep", "Cray"],
        premium: true
    },
    {
        id: 2,
        name: "Yossi benayoun",
        gender: "male",
        age: 40,
        height: 170,
        location: "London",
        image: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/16996042_918777551558840_5036489986867228315_n.png?_nc_cat=104&_nc_oc=AQnXiOt_InvgNES7Cuqg_UJ2mO1ivUdd7GLlhFX12gq2V-ReCk0wVNJ8cVBv-4iwxX0&_nc_ht=scontent.fsdv3-1.fna&oh=293619a51a2e1518c77d00e119d322e3&oe=5E20B1B6",
        premium: false
    },
    {
        id: 3,
        name: "Beyonce knowles",
        gender: "female",
        age: 37,
        height: 167,
        location: "Los Angeles",
        image: "https://external.fsdv3-1.fna.fbcdn.net/safe_image.php?d=AQAVCNMXEzg74jda&url=https%3A%2F%2Fcdn.fbsbx.com%2Fv%2Ft65.23080-21%2F60647512_2020841078043970_5268585439668448179_n.jpg%3F_nc_cat%3D100%26_nc_oc%3DAQlYwhX4xjjjFrsWxu-YW-IyTyByeyDIsuOg3JBnb50Aj1Rl5uJyoOO_oGgu98UfwNM%26_nc_ht%3Dcdn.fbsbx.com%26oh%3De3098f13f5e34ae0b18d3b5780acfc04%26oe%3D5DBCC28E&_nc_hash=AQAjcV6RwlAf4m6g",
        hobbies: ["Sing", "Dance"],
        premium: true
    },
    {
        id: 4,
        name: "Odeta Odeta",
        gender: "female",
        age: 56,
        height: 160,
        location: "Israel",
        image: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/53884395_1952248174884434_1505455121796956160_n.jpg?_nc_cat=110&_nc_oc=AQnOm_v9ngfvCBCIHRV1hKNbP60c7AcLQIuD2uSX3McoQZggr97DdSyDYubpmvGnBIM&_nc_ht=scontent.fsdv3-1.fna&oh=03b6e8ee7f60cd81d24e4d5afba7686f&oe=5E1BAE6D",
        hobbies: ["cooking", "eating"],
        premium: true
    },
    {
        id: 5,
        name: "Eden Ben zaken",
        gender: "female",
        age: 25,
        height: 160,
        location: "Israel",
        image: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-1/36620557_114790696100325_7291823152470949888_n.jpg?_nc_cat=107&_nc_oc=AQlcWWx8wXxfrirdOMrwdNpcTn6-54q3U8uz2NpXG4fMiEQ-s2Mkrmh2KfzppEtERMM&_nc_ht=scontent.fsdv3-1.fna&oh=ca836b11467c4cc8f17f33136bcd1641&oe=5E56F4BC",
        premium: false
    }
]
/*
{
    id: 6,
    name: "Beyonce knowles",
    gender: "female",
    age: 37,
    height: 167,
    location: "Los Angeles",
    hobbies: ["Sing", "Dance"],
    image: "https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
    premium: true
},
{
    id: 7,
    name: "Beyonce knowles",
    gender: "female",
    age: 37,
    height: 167,
    location: "Los Angeles",
    hobbies: ["Sing", "Dance"],
    image: "https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
    premium: true
},
{
    id: 8,
    name: "Beyonce knowles",
    gender: "female",
    age: 37,
    height: 167,
    location: "Los Angeles",
    hobbies: ["Sing", "Dance"],
    image: "https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
    premium: true
},
{
    id: 9,
    name: "Beyonce knowles",
    gender: "female",
    age: 37,
    height: 167,
    location: "Los Angeles",
    hobbies: ["Sing", "Dance"],
    image: "https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
    premium: true
},
    
]
*/


class Profile {
    constructor(id, name, gender, age, height, location, image,) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.location = location;
        this.image = image;
    }

    Render() {
        //let str = " <div class='container'>";
        //str += "<h1>" + this.name + "</h1>";
        //str += "<img src='" + this.image + "'/>";
        //str += "<h1>Gender: " + this.gender + "</h1>";
        ////str += "<h1>Age: " + this.age + "</h1>";
        //str += "<h1>Height: " + this.height + "</h1>";
        //str += "<h1>Country: " + this.location + "</h1>";
        ////str += "<span><input type='button' id='like' value='like' onclick='moove()'/>";
        ////str += "<input type='button' id='Next' value='Next' onclick='moove()'/></span>";
        ////str += "</div>";
       // return str;
       let str=`<div class="container-fluid">
          <div class="row">
            <div class"col-12" id="start"><h1> click like if you like!</h1></div>
            <div class="col-12"> <h1> ${this.name} </h1></div>
            <div class="col-12"> <img src="${this.image}"/> </div>
            <div class="col-12"><h1>Age: ${this.age}</h1></div>
            <div class="col-12"><h1>Height: ${this.height}</h1></div>
            <div class="col-12"><h1>Location: ${this.location} </h1></div></div>`
            return str;
        
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////
class Premium extends Profile {
    constructor(id, name, gender, age, height, location, image, hobbies) {
        super(id, name, gender, age, height, location, image)
        this.hobbies = hobbies;
    }
    Render() {
        var str2 = "<div class='row'><div class='col-12'><span><h1> Hobbies: ";
        for (var i = 0; i < this.hobbies.length; i++) {
            str2 += this.hobbies[i]+", "
        }
        str2+="</h1></span></div></div>"
        return super.Render() + str2;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////
class MainApp {
    constructor(Users) {
        this.Users = [];
        this.counter = 0;
        for (var i = 0; i < Users.length; i++) {
            if (Users[i].premium == true)
                this.Users[i] = new Premium(...Object.values(Users[i]))
            //this.Users[i] = new Premium(Users[i].id, Users[i].name, Users[i].gender, Users[i].age, Users[i].height, Users[i].location, Users[i].image, Users[i].premium, Users[i].hobbies);
            else this.Users[i] = new Profile(...Object.values(Users[i]))
                //this.Users[i] = new Profile(Users[i].id, Users[i].name, Users[i].gender, Users[i].age, Users[i].height, Users[i].location, Users[i].image, Users[i].premium);
        }
        console.log(this.Users)
        this.filterby = {
            "gender": 'male',
            "min": 0,
            "max": 99
        }
        this.filtered = [];
    }

    Filter(gender, min, max) {
        this.counter = 0;
        this.filtered = this.Users.filter(user => 
                     (user.gender == gender && user.age >= min && user.age <= max)
        );
        console.log('filterde: '+this.filtered)
    }

    Render() {
        var str3 = ""; 
        if (this.counter == this.filtered.length) {
            
            alert("no more matches for you");
            init();
        }
        else {
            str3 = this.filtered[this.counter].Render()
            str3 += "<div class='row'><div class='col-12'><span><input type='button' id='like' value='like' onclick='moove()'/>";
            str3 += "<input type='button' id='Next' value='Next' onclick='moove()'/></span>";
            str3 += `</div></div> </div>
            <div class="col-12 display-flex" id="footer" >Mobile 2020 !</div>
            </div>`;
            str3+="</div>";
            return str3;
        }
    }

    Next() {
        this.counter++;
    }
    
}
function init() {

    document.getElementById("Main").innerHTML= `
    <div class="container-fluid">
    <div class="row" id="start">
        <div class="col-12 "><h1>Welcom to tinder App <br> let's start!!!</h1></div>
    </div>
    <div class="row" id="base">
            <div class="col-12">
                    <h1>Choose partner gender:</h1>
            </div>       
            <div class="col-12">
                    <input type="radio" id="male" name="gender" value="male"> Male<br>
            </div>      
            <div class="col-12">
                    <input type="radio" id="female" name="gender" value="female"> Female<br>
            </div>      
    <hr />
             <div class="col-12">
                    <h1>Choose partner age:</h1>
             </div>
             <div class="col-12">
                    <h2>between</h2>
             </div> 
            <div class="col-12">
                    <input type="text" id="min" />
            </div> 
        <div class="col-12">
                <h2>and</h2>
        </div>
            <div class="col-12">
                    <input type="text" id="max" />
             </div>
   <hr /> 
    <div class="col-12">
                <input type="button" id="find" onclick="find()" value="find" />          
</div>
</div>
<div class="col-12 display-flex" id="footer" >Mobile 2020 !</div>
</div>
    `
}