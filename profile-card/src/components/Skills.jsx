import Skill from "./Skill"

function Skills() {
  return (
    <div className="w-full flex flex-wrap gap-3">
        <Skill name={'HTML+CSS'} color={"bg-blue-600"}/>
        <Skill name={'JavaScript'} color={"bg-yellow-600"}/>
        <Skill name={'Web Design'} color={"bg-green-300"}/>
        <Skill name={'Git and GitHub'} color={"bg-red-600"}/>
        <Skill name={'React'} color={"bg-cyan-600"}/>
        <Skill name={'Svelt'} color={"bg-red-600"}/>
    </div>
  )
}

export default Skills