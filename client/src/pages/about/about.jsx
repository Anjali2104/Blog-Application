import './about.css'
import { Link } from 'react-router-dom';
export default function about() {
  return (
  <div className="aboutContainer">
     <div className="aboutContent">
        <h1>About Us</h1>
        <p className='aboutDesc'>Welcome to our Blog Application! We are passionate about sharing interesting and informative articles with our readers. Our team of dedicated writers works hard to bring you high-quality content on a variety of topics.</p>
        <p className='aboutDesc'>At The Blogsmiths, we are passionate about sharing knowledge, sparking creativity, and fostering meaningful connections through the power of words. Our mission is to provide a platform where ideas thrive and stories come to life. Whether you're a seasoned enthusiast or a curious mind, we have something special in store for you.
Founded with love and dedication,The Blogsmiths has evolved into a vibrant community of writers, thinkers, and readers from diverse backgrounds and interests. Our team of dedicated contributors brings a wealth of expertise and a shared commitment to delivering thought-provoking and valuable content.
Our blog covers a wide array of captivating topics, ranging from technology trends and self-development to travel adventures and mouth-watering recipes. We believe in the power of storytelling, and each article on our platform is crafted to inspire, inform, and entertain.
What sets us apart is our dedication to engaging with our readers. We value your feedback, opinions, and experiences, as they fuel our passion for creating content that truly resonates with you. Together, we foster a supportive and open community that encourages meaningful discussions and shared growth.
The Blogsmiths is more than just a blog; it's a space for personal growth, learning, and finding inspiration in the little things that make life extraordinary. Join us on this journey, and let's explore the world of ideas together.
</p>
        <h2>Our Mission</h2>
        <p className='missionPara'>Our mission is to provide a platform where people can engage with engaging and enlightening content. We aim to foster a community of readers who are eager to learn, discuss, and share their thoughts.</p>
        <h2 className='contactUs'>Contact Us</h2>
         <div className='contactDiv'>
           <div className="contactDivLeft">
             <p>If you have any questions, suggestions, or would like to contribute an article to our blog, please feel free to contact us.</p>
            
           </div>
          
          <div className='contactDivRight'>
             <ul className="contactList">
            <li> <i class="fa-solid fa-envelope"></i> : anjaliu949@gmail.com</li> 
                 <li> <i class="fa-solid fa-phone"></i>: (+91) 6392081801 </li>
             </ul>
             <div className="socialLinks">
                <a href="https://www.facebook.com/blogapplication" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.twitter.com/blogapplication" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com/blogapplication" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
            
       </div>
       <Link className='link' to="/"><button className="btn" >Back to Home</button></Link>
     
      </div>
 </div>
  )
}
