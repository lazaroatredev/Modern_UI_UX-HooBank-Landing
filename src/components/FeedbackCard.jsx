import { quotes } from "../assets"

const FeedbackCard = ({content , name , title , img}) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="quote" className="w-[40px] h-[27px] object-contain" />
      <p className="font-poppins font-normal text-white text-[18px] leading-[32px] my-10">{content}</p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] roundef-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32px]">{name}</h4>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard