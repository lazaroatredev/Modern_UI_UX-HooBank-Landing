import styles from "../style"
import { feedback } from "../constants"
import FeedbackCard from './FeedbackCard'

const Testimonials = () =>  (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    
    <div className="absolute -right-[40%] w-[60%] h-[60%] blue__gradient rounded-full z-[0]"/>
    
    <div className="w-full md:flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={`${styles.heading2}`}>What people are <br className="sm:block hidden"/>saying about us</h1>
      <div className="w-full md:mt-0 mt-10">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything yoy need to accept card payment and grow your business anywhere on the planet.</p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card, index) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)


export default Testimonials