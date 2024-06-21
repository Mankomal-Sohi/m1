const About=()=>{
    return <div>
    <div className="my-20 mx-12">
    <h2 className="bg-magenta w-fit p-2 text-3xl my-3">About</h2>
    <p className="text-2">As a Computer Science graduate, I bring a dynamic skill set in software development,
        emphasizing proficiency in full-stack development and data analysis Through rigorous
        coursework and hands-on projects, I have gained proficiency in languages such as Java,
        Python, SQL, and JavaScript, along with frameworks like Express. My academic journey has
        equipped me with the skills to design, develop, and deploy robust applications, while also
        extracting insights from data to drive informed decision-making. With a passion for problem-
        solving and a dedication to continuous learning, I am eager to leverage my expertise to
        contribute to your team's success in delivering innovative solutions.</p>
    </div>
    <div className="h-[3px] bg-gradient-to-r from-[#e310cb] to-[#86fbfb]  w-screen "></div>

    <div className="bg-plum py-3">
    <div className="flex flex-col justify-center items-center ">
    <h2 className="bg-magenta w-fit p-2 text-3xl my-2">Education</h2>
    <img className="float-left" src="https://www.uwinnipeg.ca/foundation/images/UofW_Foundation_Crest_Updated.png" alt="u of w" height="250" width="250" />
    
            <p>Bachelors of Applied Computer Science </p>
            <p>The University of Winnipeg</p>
            <p>Graduated in April 2024</p>
            <p><strong>GPA: </strong> 4.26/4.5</p>
            
            <ul>
                <li>Minor in Mathematics</li>
                <li>Dean's Honour list- Student of Highest Distinction</li>
                <li>Academic Proficiency Scholarship</li>
            </ul>
    </div>
    </div>
    <div className="h-[3px] bg-gradient-to-r from-[#e310cb] to-[#86fbfb]  w-screen "></div>

    <div className="my-10 mx-12">
    <h2 className="bg-magenta w-fit p-2 text-3xl my-5">Work Experience</h2>
    <ol>
        <div>
            <p><li>Tutor
            <ul>
                <li className="style-list">Provide tutoring to students, which includes explaining and demonstrating concept areas.</li>
                <li className="style-list">Provide consultation and feedback to students on coursework, quality of materials
            submitted for grading and other similar matters</li>
            </ul>
        
        </li>
        </p>
        </div>
       
        
        <div>
        <p><li>Warehouse Coordinator
        <ul>
            <li className="style-list">Coordinates and schedules the movement of products using SAP.</li>
            <li className="style-list">Update and maintain storage database using Excel and SQL.</li>
        </ul>
        </li>
        </p>
        </div>
    </ol>   
</div>


    </div>

}
export default About;