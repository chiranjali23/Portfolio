import conferenceDay from '../Image/conferenceday.png';
import japaneseFood from '../Image/japanes food.png';
import bmiCalculator from '../Image/BMI calculater.png';
import freshFlower from '../Image/Fresh flower.png';
import Academy from '../Image/Academy.png'; 

const my_project = {
    project1: {
        id: 1,
        name: "Conference Day",
        img: conferenceDay,
        discription:"A web-based application developed using HTML, CSS, and JavaScript for the front-end interface, and PHP for server-side processing, designed to manage conference schedules, speaker details, and participant registrations. The system includes both user and admin interfaces for efficient event management.",
        github:"https://github.com/chiranjali23/Conference-Day.git"

    },
    project2: {
        id: 2,
        name: "Japanese Restaurant",
        img: japaneseFood,
        discription:'A visually appealing, responsive web-based frontend for a Japanese restaurant. Designed using HTML for structure and CSS for layout and styling, the website features a clean homepage, menu section, about us page, and contact form. The layout reflects traditional Japanese aesthetics with modern web design techniques, providing users with a smooth and engaging browsing experience.',
        github:"https://github.com/chiranjali23/japanees-resturant.git"
    },
    project3: {
        id: 3,
        name: "BMI Calculator",
        img: bmiCalculator,
        discription:"A simple web-based BMI (Body Mass Index) Calculator built using React. The application allows users to input their height and weight, and instantly calculates their BMI. Based on the result, it displays a health category such as Underweight, Normal, Overweight, or Obese. This project demonstrates basic React concepts like state management, input handling, conditional rendering, and simple calculations.",
        github:"https://github.com/chiranjali23/BMI-calculater.git"
    },
    project4: {
        id: 4,
        name: "Fresh Flowers",
        img: freshFlower,
        discription:"A web-based application designed to showcase and sell fresh flowers. The project features a user-friendly interface built with HTML, CSS, and JavaScript, allowing users to browse through various flower categories, view detailed product information, and make purchases. The design emphasizes aesthetics and usability, providing an engaging shopping experience for flower enthusiasts.",
        github:"https://github.com/chiranjali23/flower-web-page.git"
    },
    project5: {
        id: 5,
        name: "Education ",
        discription:"A web-based application designed to provide educational resources and information. The project features a user-friendly interface built with HTML, CSS, and JavaScript, allowing users to access various educational materials, courses, and resources. The design emphasizes clarity and usability, providing an engaging learning experience for users.",
        img: Academy // Placeholder image
    },
};

export default my_project;
