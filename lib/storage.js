const STORAGE_KEY = "NOTES";

export function loadNotes(){
  if (typeof window==="undefined") return[];

  const savedNotes=localStorage.getItem(STORAGE_KEY)
  if(savedNotes){
    try{
      return JSON.parse(savedNotes)}
      catch (error ){
        console.error("Failed to parse notes from the localStorage ", error)
        return []

      }
      return []
    }
  }


export function saveNoteTostorage(notes) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));

}

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}