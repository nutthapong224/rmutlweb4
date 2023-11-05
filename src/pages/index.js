"use client";
import Image from 'next/image'
import React,{useEffect,useState} from 'react' 
import { getDocs,collection } from 'firebase/firestore'
import { db } from '@/firebaseconfig'  
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
async function fetchDataFromFirestores(){
   const querySnapshot = await getDocs(collection(db,"students")); 
   const data = []
   querySnapshot.forEach((doc)=>{
    data.push({id:doc.id,...doc.data()})
   })
   return data;
}


export default function Home() {
  const [userData, setUserData] = useState([]);
  useEffect(()=>{
    async function FetchData() {
      const data = await fetchDataFromFirestores(); 
      setUserData(data );
    }
    FetchData();
  },[])
  return (
    <main className={styles.container}>
     <div>
           {userData.map((students)=>(  
            
            <div key={students['id']}>  
              <Link href ={'/product/'+students.id}> 
              <h1 className={styles.title}> {students['code']}</h1>
              <Image src={students['image']} width={300} height={300} alt={students.code}/> 
               <h2> Sawadee</h2>
              </Link>
            
            </div>
           )
           )

           } 
          
     </div>
    </main>
  )
}
