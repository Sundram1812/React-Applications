/* eslint-disable react/prop-types */
function Footer({items}) {

  const numItem=items.length;
  const numPackedItem=items.filter((item)=>item.isPacked).length;
  const percent=numItem? Math.round((numPackedItem/numItem)*100) : 0 ;

  return percent !==100 ?
  (
  <div className="bg-blue-400 fixed bottom-0 w-full text-center py-4">
      <i className="text-[1.2em] font-semibold text-white">💼You have {numItem} item in your list and you already packed {numPackedItem} ({percent}%)</i>
  </div>
  ):
  (
    <div className="bg-blue-400 fixed bottom-0 w-full text-center py-4">
      <i className="text-[1.2em] font-semibold text-white">You got everything! Ready To Go ✈️</i>
    </div>
  )
}

export default Footer;
