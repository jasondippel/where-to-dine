import { string } from 'prop-types'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState, firestore } from 'helpers/firebase'

const Place = ({ name }) => <div>{name}</div>
Place.propTypes = {
  name: string,
}

const PlacesList = () => {
  const [user] = useAuthState()
  const { uid } = user || {}
  const userPlacesRef = firestore.collection(`user-data/${uid}/places`)
  const query = userPlacesRef.orderBy('created-at', 'desc')
  const [places] = useCollectionData(query, { idField: 'id' })

  if (!user) return null

  return <> {places && places.map((p) => <Place {...p} key={p.id} />)} </>
}

export default PlacesList
