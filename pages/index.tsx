import { useEffect, useState } from "react"
import Container from '@mui/material/Container'
import type { NextPage } from 'next'
import { Item } from "../components"
import { db } from "../services/api"
import { collection, onSnapshot, query } from "firebase/firestore";

const Home: NextPage = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "videos")), (snapshot) => {
      console.log(snapshot.docChanges())
      snapshot.docChanges().forEach((change) => {
        setList((prev) => [change.doc.data(), ...prev])
      });
    });

    return () => {
      unsub()
    }
  }, [])

  return (
    <Container>
      {list.map((eq, key) => <Item key={key} item={eq} />)}
    </Container>
  )
}

export default Home
