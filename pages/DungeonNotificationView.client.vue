<script setup lang="ts">
import { consola } from 'consola'
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  validatePassword ,
} from 'firebase/auth'
import { 
  getFirestore, 
  collection, 
  query, 
  where, 
  doc,
  getDocs, 
  addDoc,
  deleteDoc,
  serverTimestamp,
  orderBy,
  updateDoc,
  Timestamp,
} from 'firebase/firestore'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)


enum DungeonName {
  ConstellationTower = 'constellation_tower',
  OldGlastHeimChallenge = 'old_glast_heim_challenge',
  SunkenTower = 'sunken_tower',
  GeffenNightArena = 'geffen_night_arena',
}

type Character = {
  docId?: string;
  uid: string;
  name: string;
  created_at?: Timestamp;
  checkin_constellation_tower_at?: Timestamp;
  checkin_old_glast_heim_challenge_at?: Timestamp;
  checkin_sunken_tower_at?: Timestamp;
  checkin_geffen_night_arena_at?: Timestamp;
}


// #region data
const isApiWorking = ref(true)
const isSignedIn = ref(false)
const formEmail = ref('')
const formPassword = ref('')
const formErrorMessage = ref('')

const formCharacterName = ref('')

const characters = ref<Character[]>([])
// #endregion data

// #region hooks
onMounted(() => {
  const auth = getAuth(useNuxtApp().$firebaseApp())
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      consola.log('User is signed in:', user)
      isSignedIn.value = true
      isApiWorking.value = false

      const uid = user.uid
      // ...

      // fetch all characters for the user
      await fetchAllCharactersForUser()
    } else {
      // User is signed out
      // ...
      consola.log('User is signed out')
      isSignedIn.value = false
      isApiWorking.value = false
    }
  })
})
// #endregion hooks

// #region methods
async function signInOrCreateUser() {
  isApiWorking.value = true
  const signInResult = await signInWithEmailAndPasswordLocal()
  if (formEmail.value === '' || formPassword.value === '') {
    formErrorMessage.value = 'Please fill in all fields'
    isApiWorking.value = false
    return
  }

  if (signInResult) {
    isApiWorking.value = false
    return
  } else {
    await createUserWithEmailAndPasswordLocal()
  }
}

async function createUserWithEmailAndPasswordLocal() {
  const auth = getAuth(useNuxtApp().$firebaseApp())

  const status = await validatePassword(auth, formPassword.value)
  if (!status.isValid) {
    consola.error('Password validation failed:', status)
    formErrorMessage.value = 'Invalid password.'
    return false
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, formEmail.value, formPassword.value)
    // Signed in
    const user = userCredential.user
    consola.log('User created:', user)
    return true
  } catch (error) {
    consola.error('Error creating user:', error)
    return false
  }
}

async function signInWithEmailAndPasswordLocal() {
  const auth = getAuth(useNuxtApp().$firebaseApp())
  try {
    const userCredential = await signInWithEmailAndPassword(auth, formEmail.value, formPassword.value)
    // Signed in
    const user = userCredential.user
    consola.log('User signed in:', user)
    return true
  } catch (error) {
    consola.error('Error signing in:', error)
    return false
  }
}

async function signOut() {
  const auth = getAuth(useNuxtApp().$firebaseApp())
  try {
    await auth.signOut()
    consola.log('User signed out')
  } catch (error) {
    consola.error('Error signing out:', error)
  }
}

async function fetchAllCharactersForUser() {
  const auth = getAuth(useNuxtApp().$firebaseApp())
  const user = auth.currentUser
  if (!user) {
    consola.error('No user is signed in')
    return
  }

  const db = getFirestore(useNuxtApp().$firebaseApp(), 'ro-dungeon-notification')
  const charactersRef = collection(db, '/characters')
  const q = query(charactersRef, where('uid', '==', user.uid), orderBy('created_at', 'desc'))

  isApiWorking.value = true

  const querySnapshot = await getDocs(q)
  console.log('fetchAllCharactersForUser querySnapshot.size', querySnapshot.size)

  characters.value = []

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data())
    characters.value.push({
      docId: doc.id,
      uid: doc.data().uid,
      name: doc.data().name,
      created_at: doc.data().created_at,
      checkin_constellation_tower_at: doc.data().checkin_constellation_tower_at,
      checkin_old_glast_heim_challenge_at: doc.data().checkin_old_glast_heim_challenge_at,
      checkin_sunken_tower_at: doc.data().checkin_sunken_tower_at,
      checkin_geffen_night_arena_at: doc.data().checkin_geffen_night_arena_at,
    } as Character)
  })
  isApiWorking.value = false
}

async function addCharacter() {
  const auth = getAuth(useNuxtApp().$firebaseApp())
  const user = auth.currentUser
  if (!user) {
    consola.error('No user is signed in')
    return
  }

  if (formCharacterName.value === '') {
    return
  }

  const db = getFirestore(useNuxtApp().$firebaseApp(), 'ro-dungeon-notification')
  const charactersRef = collection(db, '/characters')

  isApiWorking.value = true

  // Add a new document with a generated ID
  const docRef = await addDoc(charactersRef, {
    name: formCharacterName.value,
    uid: user.uid,
    created_at: serverTimestamp(),
  })
  console.log("Document written with ID: ", docRef.id)

  formCharacterName.value = ''
  await fetchAllCharactersForUser()

  isApiWorking.value = false
}

async function deleteCharacter(RefId: string | undefined) {
  if (!RefId) {
    consola.error('No RefId provided')
    return
  }

  const confirm = window.confirm('Are you sure you want to delete this character?')
  if (!confirm) {
    return
  }

  const auth = getAuth(useNuxtApp().$firebaseApp())
  const user = auth.currentUser
  if (!user) {
    consola.error('No user is signed in')
    return
  }

  const db = getFirestore(useNuxtApp().$firebaseApp(), 'ro-dungeon-notification')

  isApiWorking.value = true
  const docRef = doc(db, '/characters', RefId)
  await deleteDoc(docRef)

  await fetchAllCharactersForUser()

  isApiWorking.value = false
}

async function checkinDungeon(dungeonName: DungeonName, characterId: string | undefined) {
  if (!characterId) {
    consola.error('No characterId provided')
    return
  }
  const auth = getAuth(useNuxtApp().$firebaseApp())
  const user = auth.currentUser
  if (!user) {
    consola.error('No user is signed in')
    return
  }

  const db = getFirestore(useNuxtApp().$firebaseApp(), 'ro-dungeon-notification')

  isApiWorking.value = true

  const docRef = doc(db, '/characters', characterId)
  const docData: any = {}
  docData[`checkin_${dungeonName}_at`] = serverTimestamp()

  await updateDoc(docRef, docData)

  await fetchAllCharactersForUser()
  isApiWorking.value = false
}

function formatDateWithTimestamp(date: Timestamp | undefined) {
  if (!date) {
    return ''
  }
  return dayjs(date.toDate()).format('YYYY-MM-DD HH:mm:ss')
}

function formatDateWithDayjs(date: dayjs.Dayjs | undefined) {
  if (!date) {
    return ''
  }
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

function getNextTime(dungeonName: DungeonName, lastDate: Timestamp | undefined) {
  if (!lastDate) {
    return undefined
  }
  
  switch (dungeonName) {
    case DungeonName.ConstellationTower:
      return dayjs(lastDate.toDate()).add(3, 'day').set('hour', 4).set('minute', 0).set('second', 0)
    case DungeonName.OldGlastHeimChallenge:
      return dayjs(lastDate.toDate()).add(3, 'day').set('hour', 4).set('minute', 0).set('second', 0)
    case DungeonName.SunkenTower:
      return dayjs(lastDate.toDate()).add(3, 'day').set('hour', 4).set('minute', 0).set('second', 0)
    case DungeonName.GeffenNightArena:
      return dayjs(lastDate.toDate()).add(3, 'day').set('hour', 4).set('minute', 0).set('second', 0)
    default:
      return undefined
  }
}

function formatDateAsFromNowOrToNow(date: dayjs.Dayjs | undefined) {
  if (!date) {
    return ''
  }

  if (dayjs().isBefore(dayjs(date.toDate()))) {
    return dayjs(date.toDate()).fromNow()
  }
  return dayjs(date.toDate()).toNow()
}
// #endregion methods
</script>


<template>
  <div class="container mx-auto flex flex-col gap-4">
    <!-- #region header -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <h1 class="text-4xl">Dungeon Notification</h1>

      <div v-if="!isSignedIn">
        <div>Need signed in</div>

        <div class="">
          <form 
            class="flex flex-col gap-3"
            @submit.prevent="signInOrCreateUser"
          >
            <div class="">create user / sign in form</div>
            <div class="flex gap-3 ring rounded-md bg-gray-300 p-3">
              <label for="formEmail">Email</label>
              <input 
                id="formEmail" 
                name="email" 
                type="email" 
                autocomplete="email" 
                class="grow-1"
                :disabled="isApiWorking"
                v-model="formEmail"
              >
            </div>
            <div class="flex gap-3 ring rounded-md bg-gray-300 p-3">
              <label for="formPassword">Password</label>
              <input 
                id="formPassword" 
                name="password" 
                type="password" 
                autocomplete="password" 
                class="grow-1"
                :disabled="isApiWorking"
                v-model="formPassword"
              >
            </div>
            <div class="flex gap-3">
              <button 
                type="submit"
                class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                :disabled="isApiWorking"
              >
                Sign In / Create
              </button>
              <button 
                type="reset"
                class="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
                :disabled="isApiWorking"
                @click="formEmail = ''; formPassword = ''; formErrorMessage = ''"
              >
                Reset
              </button>
            </div>

            <div 
              v-if="formErrorMessage !== ''"
              class="bg-red-500 text-white px-4 py-2 rounded"
              role="alert"
              id="formErrorMessage"
            >
              {{ formErrorMessage }}
            </div>
          </form>
        </div>
      </div>
      <div v-else class="flex flex-row gap-3">
        <div>You are signed in!</div>
        <div>
          <button
            type="button"
            class="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
            :disabled="isApiWorking"
            @click="signOut"
          >
            Sign out
          </button>
        </div>
      </div>

    </div>
    <!-- #endregion header -->

    <!-- #region characters -->
    <div v-if="isSignedIn" class="flex flex-col gap-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <h2 class="text-2xl">Characters</h2>
        <div>
          <form @submit.prevent="addCharacter" class="flex flex-row items-center gap-3">
            <label for="formCharacterName">Character Name</label>
            <input
              id="formCharacterName"
              type="text"
              v-model="formCharacterName"
              placeholder="Character Name"
              class="ring rounded-md bg-sky-200 p-3 grow-1"
              :disabled="isApiWorking"
            >

            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
              :disabled="isApiWorking"
            >
              Add Character
            </button>
          </form>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- #region character cards -->
        <template v-for="character in characters" :key="character.uid">
          <!-- #region character card -->
          <div class="ring rounded-md p-3 shadow-md">
            <!-- #region card header -->
            <div class="flex flex-row justify-between gap-3">
              <h3 class="text-xl">{{ character.name }}</h3>
              <button 
                type="button"
                class="bg-red-500 text-white p-3 rounded cursor-pointer float-right"
                :disabled="isApiWorking"
                @click="deleteCharacter(character.docId)"
              >
                Remove this character
              </button>
            </div>
            <!-- #region card header -->

            <!-- #region card body -->
            <div class="flex flex-col gap-3">
              <div>Dungeon Logs</div>

              <!-- #region ConstellationTower -->
              <div class="bg-gray-200 p-3 rounded-md">
                <div class="flex flex-row justify-between items-center">
                  <span class="font-bold">
                    Constellation Tower - Betelguese (cooldown 3 days)
                  </span>
                  <button 
                    type="button"
                    class="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
                    :disabled="isApiWorking"
                    @click="checkinDungeon(DungeonName.ConstellationTower, character.docId)"
                  >
                    Check In
                  </button>
                </div>
                <div v-if="character.checkin_constellation_tower_at">
                  Last time: {{ formatDateWithTimestamp(character.checkin_constellation_tower_at) }}
                </div>
                <div v-if="character.checkin_constellation_tower_at">
                  Next time: {{ formatDateWithDayjs(getNextTime(DungeonName.ConstellationTower, character.checkin_constellation_tower_at)) }}
                  ({{ formatDateAsFromNowOrToNow(getNextTime(DungeonName.ConstellationTower, character.checkin_constellation_tower_at)) }})
                </div>
              </div>
              <!-- #endregion ConstellationTower -->

              <!-- #region OldGlastHeimChallenge -->
              <div class="bg-gray-200 p-3 rounded-md">
                <div class="flex flex-row justify-between items-center">
                  <span class="font-bold">
                    Old Glast Heim Challenge - OGHC (cooldown 3 days)
                  </span>
                  <button 
                    type="button"
                    class="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
                    :disabled="isApiWorking"
                    @click="checkinDungeon(DungeonName.OldGlastHeimChallenge, character.docId)"
                  >
                    Check In
                  </button>
                </div>
                <div v-if="character.checkin_old_glast_heim_challenge_at">
                  Last time: {{ formatDateWithTimestamp(character.checkin_old_glast_heim_challenge_at) }}
                </div>
                <div v-if="character.checkin_old_glast_heim_challenge_at">
                  Next time: {{ formatDateWithDayjs(getNextTime(DungeonName.OldGlastHeimChallenge, character.checkin_old_glast_heim_challenge_at)) }}
                  ({{ formatDateAsFromNowOrToNow(getNextTime(DungeonName.OldGlastHeimChallenge, character.checkin_old_glast_heim_challenge_at)) }})
                </div>
              </div>
              <!-- #endregion OldGlastHeimChallenge -->

              <!-- #region SunkenTower -->
              <div class="bg-gray-200 p-3 rounded-md">
                <div class="flex flex-row justify-between items-center">
                  <span class="font-bold">
                    Sunken Tower - น้ำแตก (cooldown 3 days)
                  </span>
                  <button 
                    type="button"
                    class="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
                    :disabled="isApiWorking"
                    @click="checkinDungeon(DungeonName.SunkenTower, character.docId)"
                  >
                    Check In
                  </button>
                </div>
                <div v-if="character.checkin_sunken_tower_at">
                  Last time: {{ formatDateWithTimestamp(character.checkin_sunken_tower_at) }}
                </div>
                <div v-if="character.checkin_sunken_tower_at">
                  Next time: {{ formatDateWithDayjs(getNextTime(DungeonName.SunkenTower, character.checkin_sunken_tower_at)) }}
                  ({{ formatDateAsFromNowOrToNow(getNextTime(DungeonName.SunkenTower, character.checkin_sunken_tower_at)) }})
                </div>
              </div>
              <!-- #endregion SunkenTower -->

              <!-- #region GeffenNightArena -->
              <div class="bg-gray-200 p-3 rounded-md">
                <div class="flex flex-row justify-between items-center">
                  <span class="font-bold">
                    Geffen Night Arena (cooldown 3 days)
                  </span>
                  <button 
                    type="button"
                    class="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
                    :disabled="isApiWorking"
                    @click="checkinDungeon(DungeonName.GeffenNightArena, character.docId)"
                  >
                    Check In
                  </button>
                </div>
                <div v-if="character.checkin_geffen_night_arena_at">
                  Last time: {{ formatDateWithTimestamp(character.checkin_geffen_night_arena_at) }}
                </div>
                <div v-if="character.checkin_geffen_night_arena_at">
                  Next time: {{ formatDateWithDayjs(getNextTime(DungeonName.GeffenNightArena, character.checkin_geffen_night_arena_at)) }}
                  ({{ formatDateAsFromNowOrToNow(getNextTime(DungeonName.GeffenNightArena, character.checkin_geffen_night_arena_at)) }})
                </div>
              </div>
              <!-- #endregion GeffenNightArena -->
            </div>
            <!-- #endregion card body -->
          </div>
          <!-- #endregion character card -->
        </template>
        <!-- #endregion character cards -->
      </div>
    </div>
    <!-- #endregion characters -->
  </div>
</template>


<style scoped>
</style>