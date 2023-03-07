import React from 'react';

function CoffeeCard({name, region, notes }) {
  return (


      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div>
              <img class="rounded-t-lg" src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg" alt="coffee bean" />
          </div>
          <div class="p-5">
              <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
              </div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{region}</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{notes}</p>
          
          </div>
      </div>


  );
}

export default CoffeeCard;