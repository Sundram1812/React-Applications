// eslint-disable-next-line react/prop-types
function Skill({name,color }) {
  return (
    <div>
        <span className={`py-1 px-2 ${color} rounded-lg text-white`}>
            {name}🤍
        </span>
        
    </div>
  )
}

export default Skill