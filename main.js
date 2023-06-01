let skills=[{
    skil:'Html',
    classname:"fa-brands fa-html5",  
    color:'#e34f26'
},
    {skil:'Css',
    classname:"fa-brands fa-css3-alt",   
    color:'#0099e5'
},
    {skil:'JavaScript',
    classname:"fa-brands fa-js",  
    color:'#f7df1e'
},
    {skil:'Sass',
    classname:"fa-brands fa-sass",   
    color:'#fd5c63'
},
    {skil:'Bootstrap',
    classname:"fa-brands fa-bootstrap",
    color:'#009fe3'

},
    {skil:'React',
    classname:"fa-brands fa-react",
    color:'#00d8ff'
},
    {skil:'NodeJs',
    classname:"fa-brands fa-node",
    color:'#215732'
},
    {skil:'MongoDB',
    classname:"fa-brands fa-mdb",    
    color:'#589636'
},
{skil:'Python',
classname:"fa-brands fa-python",    
color:'#4584b6'
}
]
let skillsDiv=document.querySelector('.skills .container .row');
let skillscontainer=document.querySelector('.skills .container ');

let Skillsui=skills.map(e=>{ 
    
    return `
    
    <div class="col-lg-4 col-md-4 col-sm-12 skill mb-4">
        <h5>${e.skil}</h5>
        <i class="${e.classname}" 
            onmouseover="changeColor(this)" 
            onmouseout="restoreColor(this)"  
            data-color="${e.color}">
        </i>
    </div>  
    `
}
)
skillsDiv.innerHTML=Skillsui.join('');
//create button to download cv
let cvLink=document.createElement('a');
let footer=document.querySelector('.footer')
cvLink.href='cv (2).pdf';
cvLink.target='_blank';
cvLink.classList='btn btn-outline-success';
cvLink.innerHTML='Check my CV';
cvLink.setAttribute('download','download');
skillscontainer.appendChild(cvLink);

//functions
function changeColor(icon) {
    const color = icon.getAttribute('data-color');
    icon.style.color = color;
}

function restoreColor(icon) {
    icon.style.color = '';
}
//Making section of projects
let project=[
        {
            name:'Bondi',
            img:'photos/bondi.png',
            langs:['Html','Css','JavaScript','Bootstrap'], 
            codeLink:'https://github.com/shawkielkady/bondi',
            projectLink:'https://shawkielkady.github.io/bondi/'
        },
        {
            name:'Bookstore',
            img:'photos/bookstore.png',
            langs:['Html','Css','JavaScript','Bootstrap','React','Redux'], 
            codeLink:'https://github.com/shawkielkady/bookstore',
        },
        {
            name:'Crud-Native',
            img:'photos/crud-native.png',
            langs:['Html','Css','JavaScript'], 
            codeLink:'https://github.com/shawkielkady/Crud_kady.git',
            projectLink:'https://shawkielkady.github.io/Crud_kady/'
        },
        {
            name:'Crud-React-Redux',
            img:'photos/crud-react.png',
            langs:['Html','Css','JavaScript','Bootstrap','React','Redux'],  
            codeLink:'https://github.com/shawkielkady/Crud-react-redux.git',
            projectLink:''
        },
        {
            name:'Dashboard',
            img:'photos/dashboard.png',
            langs:['Html','Css'],  
            codeLink:'https://github.com/shawkielkady/Dashboard_kady.git',
            projectLink:'https://shawkielkady.github.io/Dashboard_kady/'
        },
        {
            name:'E-commerce',
            img:'photos/Ecommerce.png',
            langs:['Html','Css','JavaScript'],  
            codeLink:'https://github.com/shawkielkady/Ecommerce_store.git',
            projectLink:'https://shawkielkady.github.io/Ecommerce_store/'
        }]
let projectsDiv=document.querySelector('.projects .container .row ');   
let projectui=project.map(ele=>{
    return `
            <div class="col-lg-6 col-sm-12 text-start project">
            <img src="${ele.img}" alt="" class="project-img">
            <p class="project-add">${ele.name}</p>
            <div class="d-flex specifcs">
            ${ele.langs ? ele.langs.map(e=>`<span>${e}</span>`).join(''):''} 
            </div>
            <div class="btns">
            ${ele.codeLink ? `<button><a href=${ele.codeLink} target="_blank">View Code</a></button>`:''}
            ${ele.projectLink ? `<button><a href=${ele.projectLink} target="_blank">View Project</a></button>`:''}
                
            </div>
        </div>
    `
})
projectsDiv.innerHTML=projectui.join('');