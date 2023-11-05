"use client";

import React,{useEffect,useState} from 'react' 
import { getDocs,collection, getDoc,doc } from 'firebase/firestore'
import { db } from '@/firebaseconfig';

const reference = collection(db, "students");
export const getStaticPaths= async () => {
    const umuntu = await getDocs(reference);

    const paths = umuntu.docs.map(doc => {
        return {
            params: { id: doc.id }
        }
    })
    return {
        paths,
        fallback: false
    }

}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const docRef = doc(db,"students",id);
    const data = await getDoc(docRef);
    const umuntuData = data.data()
    const un = JSON.parse(JSON.stringify(umuntuData));
   
    return {
        props: {
             students2:un 
        }
    }
}

export default function ProductDetail({students2}){ 
   
    return(
        <>
           
            <div > 
                  <h1> {students2.code}</h1>
            </div>
        </>
    )
}