import { clients } from "../constants"
import styles from "../style"

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client)=>(
          <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`} key={client.id}>
            <img src={client.logo} alt="client" className="w-[100px] sm:w-[192px] h-[42px] object-contain mr-5 cursor-pointer" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients