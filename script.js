
//LISTENERS

var fname_input = document.getElementById('fname');
var lname_input = document.getElementById('lname');

var fname_p = document.getElementById('fname_p');
var lname_p = document.getElementById('lname_p');

//Set the listened value to the textfield

fname.addEventListener('input', function () {
    fname_cv.textContent = fname.value;
});

lname.addEventListener('input', function () {
    lname_p.textContent = lname.value;
});

job_title.addEventListener('input', function () {
    job_title_cv.textContent = job_title.value;
});

email.addEventListener('input', function () {
    email_cv.textContent = email.value;
});

phone.addEventListener('input', function () {
    phone_cv.textContent = phone.value;
});

country.addEventListener('input', function () {
    country_cv.textContent = country.value;
});

city.addEventListener('input', function () {
    city_cv.textContent = city.value;
});

driving_license.addEventListener('input', function () {
    driving_license_cv.textContent = driving_license.value;
});

nationality.addEventListener('input', function () {
    nationality_cv.textContent = nationality.value;
});

dob.addEventListener('input', function () {
    dob_cv.textContent = dob.value;
});

job_title1.addEventListener('input', function () {
    job_title1_cv.textContent = job_title1.value;
});

employer1.addEventListener('input', function () {
    employer1_cv.textContent = employer1.value;
});

start_date1.addEventListener('input', function () {
    start_date1_cv.textContent = start_date1.value;
});

end_date1.addEventListener('input', function () {
    end_date1_cv.textContent = end_date1.value;
});

city1.addEventListener('input', function () {
    city1_cv.textContent = city1.value;
});

job_desc1.addEventListener('input', function () {
    job_desc1_cv.textContent = job_desc1.value;
});

professional_summary.addEventListener('input', function () {
    professional_summary_cv.textContent = professional_summary.value;
});

school_name1.addEventListener('input', function () {
    edu_desc1_cv.textContent = school_name1.value;
});


degree_name1.addEventListener('input', function () {
    degree_name1_cv.textContent = degree_name1.value;
});


edu_start_date1.addEventListener('input', function () {
    edu_start_date1_cv.textContent = edu_start_date1.value;
});

edu_end_date1.addEventListener('input', function () {
    edu_end_date1_cv.textContent = edu_end_date1.value;
});

edu_city1.addEventListener('input', function () {
    edu_city1_cv.textContent = edu_city1.value;
});



linkedin_link.addEventListener('input', function () {
    linkedin_link_cv.textContent = linkedin_link.value;
});

portfolio_link.addEventListener('input', function () {
    portfolio_link_cv.textContent = portfolio_link.value;
});

skills.addEventListener('input', function () {
    skills_cv.textContent = skills.value;
});

hobbies.addEventListener('input', function () {
    skills_cv.textContent = hobbies_cv.value;
});

// SAVE AS PDF

var doc = new jsPDF();

function saveDiv(divId, title) {
    // Load the external CSS file
    var link = document.createElement('link');
    link.href = './style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  
    // Get the HTML content of the div
    var divContent = document.getElementById(divId).innerHTML;
  
    // Create a new jsPDF instance
    var doc = new jsPDF();
  
    // Convert the HTML content to a PDF
    doc.fromHTML(divContent, 10, 10, {
      'width': 180
    });
  
    // Save the PDF file
    doc.save(title + '.pdf');
  }
  
  



//CREATE NEW EXPERIENCE



function addInput() {

    const container = document.getElementById('employment_history_section');
    const add_another_experience_btn = document.getElementById('add_another_experience_btn');
    
    let div_container_parent = document.createElement('div');
    let another_emp_title = document.createElement('label');
    another_emp_title.innerHTML='Another Employment';
    div_container_parent.appendChild(another_emp_title);

    let div_container = document.createElement('div');
    div_container_parent.appendChild(div_container);

    let para = document.createElement('p');
    para.innerHTML='Another Employment'
    //xdiv_container.appendChild(para);
 
  
    
    //job title
    let div_container_jobtitle = document.createElement('div');
    let job_title_input = document.createElement('input');
    let job_title_label = document.createElement('label');

    job_title_label.classList.add('input_label');
    job_title_input.classList.add('input');

    job_title_label.innerHTML='Job Title';

    div_container_jobtitle.appendChild(job_title_label);
    
    div_container_jobtitle.appendChild(job_title_input);

    
    div_container.appendChild(div_container_jobtitle);

    //Employer
    let div_container_employer = document.createElement('div');
    let employer_input = document.createElement('input');
    let employer_label = document.createElement('label');

    employer_input.classList.add('input');
    employer_label.classList.add('input_label');

    employer_label.innerHTML='Employer'

    div_container_employer.appendChild(employer_label);
    div_container_employer.appendChild(employer_input);

    div_container.appendChild(div_container_employer);
    

    //Start date
    let div_container_startdate = document.createElement('div');
    let startdate_input = document.createElement('input');
    let startdate_label = document.createElement('label');

    startdate_input.classList.add('input');
    startdate_label.classList.add('input_label');

    startdate_label.innerHTML='Start Date'
        
    div_container_startdate.appendChild(startdate_label);

    div_container_startdate.appendChild(startdate_input);

    div_container.appendChild(div_container_startdate);

    

     //End date
     let div_container_enddate = document.createElement('div');
    let enddate_input = document.createElement('input');
    let enddate_label = document.createElement('label');

    enddate_input.classList.add('input');
    enddate_label.classList.add('input_label');

    enddate_label.innerHTML='End Date'

    div_container_enddate.appendChild(enddate_label);
    div_container_enddate.appendChild(enddate_input);

    div_container.appendChild(div_container_enddate);
    

     //City
     let div_container_city = document.createElement('div');
     let city_input = document.createElement('input');
     let city_label = document.createElement('label');

     city_input.classList.add('input');
     city_label.classList.add('input_label');

    city_label.innerHTML='City'
     
    div_container_city.appendChild(city_label);
    div_container_city.appendChild(city_input);

    div_container.appendChild(div_container_city);

    
     

     //Desc
     let div_container_Desc = document.createElement('div');
     let desc_input = document.createElement('input');
     let desc_label = document.createElement('label');

     desc_input.classList.add('input');
     desc_label.classList.add('input_label');

     desc_label.innerHTML='Description' 

     div_container_Desc.appendChild(desc_label);
     div_container_Desc.appendChild(desc_input);

     div_container.appendChild(div_container_Desc);
    
  

    div_container.classList.add()  
    div_container.classList.add("main_grid"); 
    

    //the new div is added before the'add another button' - the button should be last element of parent div
    container.insertBefore(div_container_parent,container.lastElementChild)
    //container.appendChild(div_container);

    //input.placeholder = 'Type something';


    //----------------------------------------ADD EXPERIENCE IN CV --------------------------------------

    //start-end date
     let start_end_date_div = document.createElement('div');
     let start_date_cv = document.createElement('h5');
     let end_date_cv = document.createElement('h5');
     start_end_date_div.appendChild(start_date_cv);
     start_end_date_div.appendChild(end_date_cv);
     start_end_date_div.classList.add('start-end-date');

     //position title     
     let position_title_cv = document.createElement('h4');

    //employer name
     let employer_name_cv = document.createElement('h5');

     //job responsibilities
     let job_respon_cv = document.createElement('p');


     desc_input.classList.add('input');
     desc_label.classList.add('input_label');

     desc_label.innerHTML='Description' 

     div_container_Desc.appendChild(desc_label);
     div_container_Desc.appendChild(desc_input);

     div_container.appendChild(div_container_Desc);
    
  

    div_container.classList.add()  
    div_container.classList.add("main_grid");


}



    




