import React, { use } from 'react';
import glass from '../assets/images/glass.jpg';
import pattern from '../assets/images/pattern.jpg';
import clay from '../assets/images/clay.jpg';
import { Herotext } from '../assets/data/svgObj';
import Boxap from './ThreeD/boxmodel';
import { NavLink } from "react-router-dom";
import Model from './ThreeD/models';
import Button from './Button';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Preload, Stage,  } from '@react-three/drei';
import Building from '../../public/Building';
import { Html, useProgress } from '@react-three/drei'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef , useEffect} from 'react';
import { Board } from '../../public/Board';
import ClientCard from './clientCard';

function Clientlogic(e){
    e.preventDefault();
    const target = document.getElementById('uclient');
    if(target){
        const offset = window.innerHeight * 0.75;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }
    return target;
    

}


function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}


export default function Hero() {
    gsap.registerPlugin(useGSAP);
    const inforef = useRef();
    const listref = useRef();
    useGSAP(()=>{
        gsap.fromTo("ul.ulheadersect li a",
            {x:150,y:-200, opacity:0,delay:1, duration:10,stagger:1, ease:"power2.out",},
            {x:0, y:0 ,opacity:2, color:"black", duration:2, ease:"power2.out",stagger:1, }
        );
     
    })
  

   
    return (
        <div>
            <section className='relative flex  '>
                   <div className='absolute  top-2 left-0.5 w-1/2 h-186  z-5  '>
                    <img
                        src={clay}
                        alt='glass'
                        className=' w-full h-full object-cover brightness-50 opacity-2 absolute top-15 left-0 z-70 '
                    />
                    </div>  
                <div className='text-black text-2xl z-50 font-medium w-1/2 text-center mt-20 justify-center items-center '>
                        <p>Hi my name is Ajileye George I am a web developer and designer <br></br>with a passion for creating visually stunning and user-friendly websites.</p>
                    </div>
                <div className=' absolute flex flex-col justify-center items-center h-[500px] left-170  '>
                    <div className='text-red-600 text-3xl z-50 font-bold'>
                        <div className='container'>
                            <h3 className=' responsivetext'>
                                 We deal with
                            </h3>
                              
                            <div className=' text-4xl font-bold  z-50  m-5 animate  '>
                             <span className='flex-center gap-10 spantext mt-27'>
                              <div >
                                {Herotext.map((Htext)=>(
                                <div key={Htext.text}>
                                    <span  className=' flex flex-col mt-5 mintext '>{Htext.text}</span>
                                </div>
                                 ))}
                                </div>
                       
                             </span>
                            </div > 
                            

                        </div>
                        
                     
                    </div>
                    

                    
                </div>
              
                
               


       
                   
            </section>

            <section className=' w-full h-full'>
                <div> 
                    
                        <Canvas camera={{position: [190,180,150], fov: 50}}>
                            
                                <Suspense fallback={<Loader />}>
                                <ambientLight intensity={0.3} />
                                <directionalLight position={[10, 10, 5]} intensity={1} />
                                <Stage environment="city" intensity={0.6} >
                                    <Building/>
                                </Stage>
                                <OrbitControls  />
                                <Preload all />
                            </Suspense>
                        
                           
                        </Canvas>

                </div>
                <div className='absolute left-600  w-1/4 h-186  z-5  text-7xl font-bold text-black opacity-27  '>
                    <ul className='ulheadersect cursor-pointer' id='ulheadersect' ref={inforef}>
                        <li><a onClick={Clientlogic} >about</a></li>
                        <li><a href="">services</a></li>
                        <li><a href="">work</a></li>
                        <li><a href="">technologies</a></li>
                        <li><a href="">contact</a></li>
                    </ul>

                </div>
                <div className='absolute top-20 left-150'>
                    <Canvas camera={{position: [0,180,150], fov: 50}}>
                        <Suspense fallback={<Loader />}>
                            <ambientLight intensity={0.3} />
                            <directionalLight position={[10, 10, 5]} intensity={1} />
                            <Stage environment="city" intensity={0.6} >
                                <Board/>
                            </Stage>
                            <OrbitControls  />
                            <Preload all />
                        </Suspense>
                    </Canvas>
                </div>
                  <div className='absolute top-555 left-150 w-1/2 h-186   text-7xl font-bold text-black '>
                    <ClientCard/>
                </div>
           
              
                
            </section>
        </div>
    );
}