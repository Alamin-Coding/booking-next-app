
const Button = ({type, text, outline}) => {
 const isOutlet = outline

  return (
    <button type={type} className={`text-sm font-normal py-4 px-7 rounded-md border border-theme hover:bg-theme hover:text-white transition-all ${isOutlet? "bg-white text-theme": "text-white bg-theme"}`}>
      {text}
    </button>
  )
}

export default Button
