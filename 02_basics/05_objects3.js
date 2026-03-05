// Destructuring of Objects

const course = {
    coursename: "Js in hindi",
    price: "1000",
    courseInstructor: "Hitesh"
}

course.courseInstructor

const {courseInstructor: mentor} = course
console.log(mentor);
