/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


function FoodCard(props) {
 
  

  let {image, name } = props.data;
  
 
  return (
    <div className="w-full h-screen flex justify-center items-center bg-red-100">

        <div className=" w-4/12  bg-red-200 p-4 shadow-orange-50 rounded">
        <img src={image} alt="" />
        <h2 className="mt-4 p-5 text-2xl">{name}</h2>
        <div className="flex justify-between items-center">
          {props.dataIndex == 9 ? null : <button className="bg-emerald-400 ms-6 p-2 px-3 rounded-md tcxt-white" onClick={() =>  props.onClick ()}>Next</button>}
            {props.dataIndex == 0 ? null : <button className="bg-emerald-400 me-6 p-2 px-3 rounded-md tcxt-white" onClick={() =>  props.test ()}>previous</button>}

        </div>
        </div>
    </div>
  )
}

export default FoodCard