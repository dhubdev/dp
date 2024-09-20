import admin, { type ServiceAccount } from "firebase-admin"
import { getFirestore } from "firebase-admin/firestore"
import { type TStatus, type iOrderBy, type iQuery, type iWhere } from "../index"
import { initializeApp, cert, getApps } from "firebase-admin/app";

const serviceAccount = JSON.parse(import.meta.env.SERVICE_ACCOUNT) as ServiceAccount

const getQuery = (wheres: iWhere[], collectionRef: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData, FirebaseFirestore.DocumentData>) => {
  
  let query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData> = collectionRef

  // Apply multiple where filters if provided
  if (wheres && wheres.length > 0) {
    wheres.forEach(where => {
      query = query.where(where.key, where.op, where.value)
    })
  }
  return query
}
const getOrderBy = (orderBys: iOrderBy[] | undefined, query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData>) => {
  // Apply multiple where filters if provided
  if (orderBys && orderBys.length > 0) {
    orderBys.forEach(orderBy => {
      query = query.orderBy(orderBy.key, orderBy.direction)
    })
  }
  // query = query.orderBy("updatedAt", "desc")
  return query
}

const activeApps = getApps()
const app = activeApps.length === 0 ? initializeApp({
  credential: cert(serviceAccount)
}) : activeApps[0]

const db = getFirestore(app)

export const handleResponse = (message: string, status: TStatus, data?: any, code?: number) => {
  return { message, status, data, code }
}

export function getFirebaseAdmin() {
  if (!import.meta.env.SERVICE_ACCOUNT) {
    throw new Error('Invalid/Missing Environment variable: SERVICE_ACCOUNT')
  }
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    })
  }
  return admin
}

export const addDocument = async (document: iQuery) => {
  const { collectionId, data } = document

  const collectionRef = db.collection(collectionId)

  try {
    const id = await db.runTransaction(async (transaction) => {
      // Auto-generate a document ID by calling collectionRef.doc() without arguments
      const newDocRef = collectionRef.doc()

      // Add the generated docId to the data object
      const newData = {
        ...data,
        id: newDocRef.id,
        createdAt: Date.now(),
        updatedAt: Date.now()
      }

      // Set the document in the transaction
      transaction.set(newDocRef, newData)
      return newDocRef.id
    })

    return handleResponse("Successfully added document", "success", { id }, 200)
  } catch (error: any) {
    return handleResponse(error.message, "error", null, 400)
  }
}

export const getOrCreateDocument = async (document: iQuery) => {
  const { collectionId, wheres, data } = document

  const collectionRef = db.collection(collectionId)

  try {
    let documentData;
    await db.runTransaction(async (transaction) => {
      let query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData> = getQuery(wheres, collectionRef)

      query = query.limit(1)
      // Execute the query to find the document
      const snapshot = await transaction.get(query)


      if (!snapshot.empty) { 
        // If the document exists, get the first matching document
        const doc = snapshot.docs[0]
        documentData = { id: doc.id, ...doc.data() }
      } else { 
        // If no document exists, create one
        const newDocRef = collectionRef.doc()
        const newData = {
          id: newDocRef.id,
          ...data,
          createdAt: Date.now(),
          updatedAt: Date.now()
        }

        // Create the new document in the transaction
        transaction.set(newDocRef, newData)
        documentData = { ...newData }
      }
    })
    return handleResponse("Successfully retrieved or created document", "success", documentData, 200)
  } catch (error: any) {
    return handleResponse(error.message, "error", null, 400)
  }
}

export const setDocumentWithMerge = async (document: iQuery) => {
  const { collectionId, data, docId } = document
  const docRef = db.collection(collectionId).doc(docId as string)

  // Add a timestamp to the data
  if (data) {
    data.updatedAt = Date.now().toString()
  }

  try {
    await db.runTransaction(async (transaction) => {
      // Perform the set operation with merge inside the transaction
      transaction.set(docRef, data, { merge: true })
    })

    return handleResponse("Successfully added/updated document", "success", { id: docId }, 200)
  } catch (error: any) {
    return handleResponse(error.message, "error", null, 400)
  }
}

export const setDocumentWithoutMerge = async (document: iQuery) => {
  const { collectionId, data, docId } = document
  const docRef = db.collection(collectionId).doc(docId as string)

  // Add a timestamp to the data
  if (data) {
    data.updatedAt = Date.now().toString()
  }

  try {
    await db.runTransaction(async (transaction) => {
      // Perform the set operation with merge inside the transaction
      transaction.set(docRef, data)
    })

    return handleResponse("Successfully added/updated document", "success", null, 200)
  } catch (error: any) {
    return handleResponse(error.message, "error", null, 400)
  }
}

export const getDocumentInCollection = async (document: iQuery) => {
  const { collectionId, wheres } = document

  const collectionRef = db.collection(collectionId)

  try {
    let documentData
    await db.runTransaction(async (transaction) => {
      // Start query as a generic Query, not collectionReference
      let query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData> = getQuery(wheres, collectionRef)

      // Add a limit of 1 to get a single document
      query = query.limit(1)

      // Execute the query inside the transaction
      const snapshot = await transaction.get(query)

      if (snapshot.empty) {
        throw new Error("No documents found in collection")
      }

      // Get the first matching document
      const doc = snapshot.docs[0]
      documentData = { id: doc.id, ...doc.data() }
      
    })
    return handleResponse("Successfully obtained document", "success", documentData, 200)
  } catch (error: any) {
    return handleResponse(error.message, "error", null, 400)
  }
}

export const getDocumentsInCollection = async (document: iQuery) => {
  const { collectionId, wheres, orderBys } = document
  
  const collectionRef = db.collection(collectionId)

  let documents: Record<string, any>[] = []

  try {
    await db.runTransaction(async (transaction) => {
      let query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData> = getQuery(wheres, collectionRef)
      // This causes the precondition error
      query = getOrderBy(orderBys, query)

      // Execute the query and get snapshot
      const snapshot = await transaction.get(query)

      if (snapshot.empty) {
        throw new Error("No documents found in collection")
      }

      // Collect the documents
      snapshot.forEach(doc => documents.push({ id: doc.id, ...doc.data() }))
    })

    return handleResponse("Successfully obtained documents", "success", documents, 200)
  } catch (error: any) {
    return handleResponse(error.message, "error", [], 400)
  }
}

export const deleteDocumentsInCollection = async (document: iQuery) => {
  const { collectionId } = document

  const collectionRef = db.collection(collectionId)

  try {
    await db.runTransaction(async (transaction) => {
      const snapshot = await transaction.get(collectionRef)

      if (snapshot.empty) {
        throw new Error("No documents found in collection")
      }

      snapshot.docs.forEach(doc => transaction.delete(doc.ref))
    })

    return handleResponse("Successfully deleted documents", "success", null, 200)
  } catch (error: any) {
    return handleResponse(error.message, "error", null, 400)
  }
}

export const deleteDocumentInCollection = async (document: iQuery) => {
  const { collectionId, docId } = document
  const docRef = db.collection(collectionId).doc(docId as string)

  try {
    await db.runTransaction(async (transaction) => {
      // Check if the document exists before deleting
      const snapshot = await transaction.get(docRef)

      if (!snapshot.exists) {
        throw new Error("Document does not exist")
      }

      // Delete the document inside the transaction
      transaction.delete(docRef)
    })

    return handleResponse("Successfully deleted document", "success", null, 200)
  } catch (error: any) {
    return handleResponse(error.message, "error", null, 400)
  }
}