import React, { useState } from 'react';
import { useEffect } from 'react';
import CoffeeCard from './ReactComponent';

function CoffeeList() {
    const [coffeeData, setCoffeeData] = useState([]);
    const [showBeans, setShowBeans] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://localhost:5001/api/beanvariety')
            const jsonData = await data.json();
            setCoffeeData(jsonData)
        }
        fetchData();
    }, [showBeans])


    return (
      <>
      <div className="mb-4">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                    onClick={(e) => setShowBeans(!showBeans)}>Show Beans!
          </button>
      </div>
            <div className="flex justify-start gap-y-5 flex-wrap p-2 gap-x-6 mx-auto max-w-xl md: md: max-w-screen-xl" >
                {showBeans ? 

                    coffeeData.map(bean => <CoffeeCard name={bean.name} region={bean.region} notes={bean.notes } />)
                    : ""}
      </div>
      </>

  );
}

export default CoffeeList;