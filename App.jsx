import React from 'react'
import CARD from './components/card'
import USER from './components/User'

const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$85/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "Cloud Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "7 days ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    payPerHour: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "1 day ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$90/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta (Facebook)",
    datePosted: "4 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$55/hr",
    location: "New Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "2 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$80/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "AI Research Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "8 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$100/hr",
    location: "Bangalore, India"
  }
];

  // const arr = [{Naam:"Harshit", age:21},{Naam:"Aayush", age:21},{Naam:"Abhinav", age:21}]
1
  return (
    <>
      <div className='parentdiv'>
        {jobOpenings.map(function (x,index) {
          console.log(index);

      return  <CARD key={index}  
      // card div ke andar krke div ko key de dena achi practice hai
  brandLogo={x.brandLogo}  
  companyName={x.companyName}  
  datePosted={x.datePosted}  
  post={x.post}  
  tag1={x.tag1}  
  tag2={x.tag2}  
  payPerHour={x.payPerHour}  
  location={x.location}
/>


     
      
      
        
        })}
      </div>

      {/* 
      <div className='parentdiv'>
        <USER name={arr[0]} />
        <USER name={arr[1]} />
        <USER name={arr[2]} />
      </div> 
      */}
    </>
  )
}

export default App
