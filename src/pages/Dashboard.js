import React from 'react'

export default function Dashboard() {
  return (
    <div className="bg-white p-2 mx-3 overflow-y-scroll custom-scrollbar shadow-md rounded-2xl h-[50.6rem]">
    <div className="container grid  gap-3 md:grid-cols-2 lg:grid-cols-4 mx-auto ">
      <div className="md:col-span-1 lg:col-span-3 p-1 rounded-2xl bg-white ">
        <div className="grid-rows-3 rounded-lg">
          <div className="  p-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptas iste iusto nobis alias facere cum, tempore optio veniam
            aperiam id quos, repellendus quibusdam illum excepturi atque
            consequatur earum provident porro?
          </div>
          <div className="  p-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            pariatur ut architecto, dolores est odit non, fugit, inventore
            accusantium iste ab quo illo aut exercitationem culpa.
            Distinctio fuga facere ab?
          </div>
          <div className=" p-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            pariatur necessitatibus, quam error eligendi voluptates esse
            omnis nemo eaque quasi? Cum facilis earum, iusto tempora
            excepturi at aliquam voluptatum doloribus.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 py-6">
          <div className=" p-8 rounded-2xl">Accusantium omnis beatae fugiat hic aperiam
            saepe?</div>
          <div className="p-8 rounded-2xl">Accusantium omnis beatae fugiat hic aperiam
            saepe?</div>
          <div className=" p-8 rounded-2xl">Accusantium omnis beatae fugiat hic aperiam
            saepe?</div>
          <div className="p-8 rounded-2xl">Accusantium omnis beatae fugiat hic aperiam
            saepe?</div>
        </div>

        <div className="grid-rows-4 mt-3">
          <div className=" p-6  m-1">Accusantium omnis beatae fugiat hic aperiam
            saepe?</div>
          <div className=" p-6 m-1">Accusantium omnis beatae fugiat hic aperiam
            saepe?</div>
          <div className=" p-6 m-1 ">Accusantium omnis beatae fugiat hic aperiam
            saepe?</div>
          <div className=" p-6 m-1">Accusantium omnis beatae fugiat hic aperiam
            saepe?</div>
        </div>
      </div>

      {/* col */}

      <div className="md:col-span-1 lg:col-span-1 rounded-2xl md:space-y-32">
        <div className="grid lg:grid-rows-2 gap-4 h-full">
          <div className=" p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum, sed ut! Accusantium omnis beatae fugiat hic aperiam
            saepe?? Saepe quam fuga id beatae cupiditate, repudiandae amet ad
            enim nam delectus.
          </div>
          <div className=" py-20 p-2 flex justify-center  h-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum, sed ut! Accusantium omnis beatae fugiat hic aperiam
            saepe? Saepe quam fuga id beatae cupiditate, repudiandae amet ad
            enim nam delectus.
          </div>
        </div>
      </div>
    </div>




    
  </div>
  )
}
