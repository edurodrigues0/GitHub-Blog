import Effect from "../assets/Effect.svg"
import Logo from "../assets/Logo.png"

export function Header() {
  return (
    <header className="w-full h-[18.5rem] bg-profile p-16 relative overflow-hidden">
      <img className="m-auto" src={Logo} alt="Logo" />

      <img 
        src={Effect} 
        className="absolute right-0 top-[1.875rem]"
      />

      <img 
        src={Effect} 
        className="absolute left-0 top-[1.875rem] rotate-180"
      />

      {/*Blur's effect*/}
      <div className="bg-blue w-[14.75rem] h-[14.75rem] blur-[184px] rounded-full absolute -left-32 -top-24"/>
      <div className="bg-blue w-[14.75rem] h-[14.75rem] blur-[184px] rounded-full absolute -right-4 -top-14 rotate-[15deg]"/>
      <div className="bg-blue w-[55rem] h-[3.25rem] blur-[184px] absolute left-1/4 top-60"/>
    </header>
  )
}